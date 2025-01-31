import { NextResponse } from "next/server";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "marbledbeeffr.myshopify.com",
  storefrontAccessToken: "17e4a868a5e8bf2abb094eca5ea0f29f",
  apiVersion: "2025-01",
});

export async function POST(req: Request) {
  try {
    const { customerAccessToken, lineItems } = await req.json();

    if (!lineItems || lineItems.length === 0) {
      return NextResponse.json(
        { success: false, error: "No items in cart" },
        { status: 400 }
      );
    }

    // 🛒 Create a new checkout
    const checkout = await client.checkout.create();
    console.log("Created Checkout:", checkout);

    // 🛍️ Add items to checkout
    const updatedCheckout = await client.checkout.addLineItems(
      checkout.id,
      lineItems
    );
    console.log("Updated Checkout:", updatedCheckout);

    return NextResponse.json({
      success: true,
      checkoutUrl: updatedCheckout.webUrl, // Redirect user to checkout
    });
  } catch (error: any) {
    console.error("Error creating checkout:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
