// fetchGraphQLData.ts

export const fetchGraphQLData = async <T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> => {
  try {
    const res = await fetch(process.env.GRAPHQL_API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN!,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) {
      const text = await res.text();

      throw new Error(
        `Failed to fetch data\nStatus: ${res.status}\nResponse: ${text}`
      );
    }

    return res.json();
  } catch (error) {
    throw new Error(
      `Error fetching data: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
};
