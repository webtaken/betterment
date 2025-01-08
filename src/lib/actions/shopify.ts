"use server";
import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const domain = process.env.SHOPIFY_STORE_DOMAIN as string;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const client = createStorefrontApiClient({
  storeDomain: `https://${domain}`,
  apiVersion: "2024-04",
  publicAccessToken: key,
});

export async function fetchGorritoInformation() {
  // Log the endpoint for debugging
  const productQuery = `
  query ProductQuery($handle: String) {
    product(handle: $handle) {
      id
      title
      variants(first: 10) {
        nodes {
          id
          price {
            amount
            currencyCode
          }
        }
      }
      handle
    }
  }
`;

  const { data, errors, extensions } = await client.request(productQuery, {
    variables: {
      handle: "gorro-anti-migrana",
    },
  });

  return { data, errors, extensions };
}
