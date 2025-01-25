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

    // GraphQL query to fetch order history
    const graphqlQuery = {
      query: `
        query getCustomerOrders($customerAccessToken: String!) {
          customer(customerAccessToken: $customerAccessToken) {
            orders(first: 10) {
              edges {
                node {
                  id
                  name
                  orderNumber
                  totalPrice {
                    amount
                    currencyCode
                  }
                  processedAt
                  fulfillmentStatus
                  lineItems(first: 10) {
                    edges {
                      node {
                        title
                        quantity
                        variant {
                          price {
                            amount
                            currencyCode
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: { customerAccessToken },
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

    if (!data.data.customer || !data.data.customer.orders) {
      return NextResponse.json(
        { success: false, error: "No orders found for this customer" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      orders: data.data.customer.orders.edges.map((edge: any) => edge.node),
    });
  } catch (error) {
    console.error("Error fetching order history:", error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
