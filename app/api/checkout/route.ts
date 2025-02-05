import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { lineItems, customerAccessToken } = await req.json();

    if (!lineItems || lineItems.length === 0) {
      return NextResponse.json(
        { success: false, error: "No items in cart" },
        { status: 400 }
      );
    }

    const storefrontApiUrl =
      "https://marbredbeeffr.myshopify.com/api/2025-01/graphql.json";
    const storefrontAccessToken = "17e4a868a5e8bf2abb094eca5ea0f29f";

    // Dynamic checkout behavior (with or without customer access token)
    const query = `
      mutation CreateCart($lineItems: [CartLineInput!]!${customerAccessToken ? ", $customerAccessToken: String!" : ""}) {
        cartCreate(input: { 
          lines: $lineItems
          ${customerAccessToken ? "buyerIdentity: { customerAccessToken: $customerAccessToken }" : ""}
        }) {
          cart {
            id
            checkoutUrl
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const variables: any = {
      lineItems: lineItems.map((item: any) => ({
        merchandiseId: item.selectedVariant,
        quantity: item.quantity || 1,
      })),
    };

    if (customerAccessToken) {
      variables.customerAccessToken = customerAccessToken; // Attach token only if user is logged in
    }

    const fetchOptions = {
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    };

    const response = await fetch(storefrontApiUrl, fetchOptions);
    const data = await response.json();

    if (data.errors || data.data?.cartCreate?.userErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: data.errors || data.data.cartCreate.userErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, checkoutUrl: data.data.cartCreate.cart.checkoutUrl },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error creating cart:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
