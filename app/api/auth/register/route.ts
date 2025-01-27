import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password, firstName, lastName } = await req.json();

    const storefrontApiUrl =
      "https://marbredbeeffr.myshopify.com/api/2025-01/graphql.json";
    const storefrontAccessToken = "17e4a868a5e8bf2abb094eca5ea0f29f";

    const graphqlQuery = {
      query: `
        mutation customerCreate($input: CustomerCreateInput!) {
          customerCreate(input: $input) {
            customer {
              id
              firstName
              lastName
              email
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
        input: {
          email,
          password,
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
      body: JSON.stringify(graphqlQuery),
    });

    const data = await response.json();

    if (data.data.customerCreate.userErrors.length > 0) {
      return NextResponse.json(
        { success: false, errors: data.data.customerCreate.userErrors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, customer: data.data.customerCreate.customer },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error as Error },
      { status: 500 }
    );
  }
}
