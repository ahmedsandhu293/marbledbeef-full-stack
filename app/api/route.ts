import { NextResponse } from "next/server";

export interface CustomerCreateResponse {
  customerCreate: {
    customer: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
    } | null;
    errors: { field: string[]; message: string }[];
  };
}

export async function POST(req: Request) {
  const { email, password, firstName, lastName } = await req.json();
  console.log({ email, password, firstName, lastName });

  const query = `
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          id
          email
          firstName
          lastName
        }
        errors {  // Corrected field name for errors
          field
          message
        }
      }
    }
  `;

  const variables = {
    input: { email, password, firstName, lastName },
  };

  try {
    console.log("Making request to Shopify...");
    const response = await fetch(
      "https://marbredbeeffr.myshopify.com/admin/api/2025-01/graphql.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": "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",
        },
        body: JSON.stringify({ query, variables }),
      }
    );
    console.log("🚀 ~ POST ~ response:", response);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch data\nStatus: ${response.status}\nResponse: ${errorText}`
      );
    }

    const data = await response.json();
    console.log("🚀 ~ POST ~ data:", data);

    const { customer, errors } = data.customerCreate;

    if (errors && errors.length > 0) {
      return NextResponse.json({
        success: false,
        errors: errors,
      });
    }

    return NextResponse.json({
      success: true,
      customer: customer,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error,
    });
  }
}
