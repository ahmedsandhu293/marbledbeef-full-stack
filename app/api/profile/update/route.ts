import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { customerAccessToken, firstName, lastName, phone } =
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
              phone
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
          phone,
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

// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const {
//       customerAccessToken,
//       addressId,
//       firstName,
//       lastName,
//       phone,
//       address,
//     } = await req.json();

//     if (!customerAccessToken) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Customer access token and address ID are required",
//         },
//         { status: 400 }
//       );
//     }
//     const storefrontApiUrl =
//       "https://marbredbeeffr.myshopify.com/api/2025-01/graphql.json";
//     const storefrontAccessToken = "17e4a868a5e8bf2abb094eca5ea0f29f";

//     const getCustomerAddressQuery = {
//       query: `
//         query getCustomerAddresses($customerAccessToken: String!) {
//           customer(customerAccessToken: $customerAccessToken) {
//             addresses(first: 10) {
//               edges {
//                 node {
//                   id
//                   address1
//                   address2
//                   city
//                   province
//                   country
//                   zip
//                 }
//               }
//             }
//           }
//         }
//       `,
//       variables: {
//         customerAccessToken: customerAccessToken,
//       },
//     };

//     const response1 = await fetch(storefrontApiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
//       },
//       body: JSON.stringify(getCustomerAddressQuery),
//     });

//     const id = await response1.json();
//     const www = id?.data.customer.addresses?.edges[0].node.id.split("?")[0];

//     console.log("Correct Address ID:", www);
//     const addressMutation = {
//       query: `
//         mutation customerAddressUpdate($customerAccessToken: String!, $addressId: ID!, $address: MailingAddressInput!) {
//           customerAddressUpdate(customerAccessToken: $customerAccessToken, id: $addressId, address: $address) {
//             customerAddress {
//               id
//               address1
//               address2
//               city
//               province
//               country
//               zip
//             }
//             customerUserErrors {
//               field
//               message
//             }
//           }
//         }
//       `,
//       variables: {
//         customerAccessToken,
//         addressId: www,
//         address: {
//           address1: address.address1,
//           address2: address.address2 || "",
//           city: address.city,
//           province: address.province || "",
//           country: address.country,
//           zip: address.zip,
//         },
//       },
//     };

//     const response = await fetch(storefrontApiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
//       },
//       body: JSON.stringify(addressMutation),
//     });

//     const data = await response.json();
//     console.log("🚀 ~ POST ~ data:", data);

//     if (
//       data.errors ||
//       data.data.customerAddressUpdate.customerUserErrors.length > 0
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           errors: data.data.customerAddressUpdate.customerUserErrors,
//         },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       address: data.data.customerAddressUpdate.customerAddress,
//     });
//   } catch (error) {
//     console.error("Error updating customer address:", error);
//     return NextResponse.json({ success: false, error: error }, { status: 500 });
//   }
// }
