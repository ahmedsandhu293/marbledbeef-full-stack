import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // const storefrontApiUrl = process.env.GRAPHQL_API_URL || "";
    // const storefrontAccessToken =
    //   process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN || "";

    const storefrontApiUrl =
      "https://marbredbeeffr.myshopify.com/api/2025-01/graphql.json";
    const storefrontAccessToken = "17e4a868a5e8bf2abb094eca5ea0f29f";

    const response = await fetch(storefrontApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({
        query: `
          mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
            customerAccessTokenCreate(input: $input) {
              customerAccessToken {
                accessToken
                expiresAt
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
          },
        },
      }),
    });

    const data = await response.json();

    if (data.data.customerAccessTokenCreate.userErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors: data.data.customerAccessTokenCreate.userErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      token: data.data.customerAccessTokenCreate.customerAccessToken,
    });
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json(
      { success: false, error: error as Error },
      { status: 500 }
    );
  }
}
