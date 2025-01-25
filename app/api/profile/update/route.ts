import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { customerAccessToken, firstName, lastName, phone, address } =
      await req.json();

    if (!customerAccessToken) {
      return NextResponse.json(
        { success: false, error: "Customer access token is required" },
        { status: 400 }
      );
    }

    const storefrontApiUrl =
      "https://marbredbeeffr.myshopify.com/api/2025-01/graphql.json";
    const storefrontAccessToken = "17e4a868a5e8bf2abb094eca5ea0f29f";

    if (!storefrontApiUrl) {
      throw new Error("Storefront API URL is not defined");
    }

    const graphqlMutation = {
      query: `
        mutation customerUpdate($customerAccessToken: String!, $customer: CustomerUpdateInput!) {
          customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
            customer {
              id
              firstName
              lastName
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
        customerAccessToken,
        customer: {
          firstName,
          lastName,
        },
      },
    };

    const response = await fetch(storefrontApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify(graphqlMutation),
    });

    const data = await response.json();

    if (data.errors || data.data.customerUpdate.userErrors.length > 0) {
      return NextResponse.json(
        { success: false, errors: data.data.customerUpdate.userErrors },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      customer: data.data.customerUpdate.customer,
    });
  } catch (error) {
    console.error("Error updating customer details:", error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
