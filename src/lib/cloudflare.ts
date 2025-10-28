export const CLOUDFLARE_D1_URL = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_DATABASE_ID}/query`;
export const CLOUDFLARE_HEADER = {
  Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
  "Content-Type": "application/json",
};
// export const CLOUDFLARE_R2_WEBSITE_ASSETS_URL = 'https://pub-61ce2a798f304449b474f2fef180a9a5.r2.dev';
export const CLOUDFLARE_R2_WEBSITE_ASSETS_URL = '/website-assets';
export const CLOUDFLARE_R2_PRODUCTS_MAIN_STORAGE_URL = 'https://pub-098c9d7bf3d5466b86f0f0725eb42439.r2.dev';