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

    const graphqlQuery = {
      query: `
        mutation customerAccessTokenDelete($customerAccessToken: String!) {
          customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
            deletedAccessToken
            deletedCustomerAccessTokenId
            userErrors {
              field
              message
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

    if (data.data.customerAccessTokenDelete.userErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors: data.data.customerAccessTokenDelete.userErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Customer logged out successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during logout:", error);
    return NextResponse.json(
      { success: false, error: error as Error },
      { status: 500 }
    );
  }
}
