import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { customerAccessToken } = await req.json();

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

    const graphqlQuery = {
      query: `
        query getCustomerDetails($customerAccessToken: String!) {
          customer(customerAccessToken: $customerAccessToken) {
            id
            firstName
            lastName
            email
            phone
            createdAt
            defaultAddress {
              id
              firstName
              lastName
              address1
              city
              province
              country
              zip
              phone
            }
            metafield(namespace: "custom", key: "profile_image") {
              value
            }
          }
        }
      `,
      variables: {
        customerAccessToken,
      },
    };

    const response = await fetch(storefrontApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify(graphqlQuery),
    });

    const data = await response.json();

    if (data.errors) {
      return NextResponse.json(
        { success: false, errors: data.errors },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, customer: data.data.customer });
  } catch (error) {
    console.error("Error fetching customer details:", error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
