import sanityClient from "@sanity/client";

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_PROJECT_TOKEN = process.env.NEXT_PUBLIC_SANITY_PROJECT_TOKEN;

export const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-05-09",
  token: SANITY_PROJECT_TOKEN,
  useCdn: false,
});
