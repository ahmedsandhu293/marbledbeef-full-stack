import { NextApiRequest, NextApiResponse } from "next";

export interface CustomerCreateResponse {
  customerCreate: {
    customer: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
    } | null;
    customerUserErrors: { field: string[]; message: string }[];
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password, firstName, lastName } = req.body;
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
        customerUserErrors {
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
    console.log("hello");
    const response = await fetch(
      "https://marbredbeeffr.myshopify.com/admin/api/2024-10/graphql.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": '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',
        },
        body: JSON.stringify({ query, variables }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch data\nStatus: ${response.status}\nResponse: ${errorText}`
      );
    }

    const data: CustomerCreateResponse = await response.json();

    const { customer, customerUserErrors } = data.customerCreate;

    if (customerUserErrors.length > 0) {
      return res.status(400).json({ error: customerUserErrors[0].message });
    }

    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
}
