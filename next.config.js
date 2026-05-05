const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/theme-gavejo";
const githubPagesAppUrl = "https://luisrcpe-blip.github.io/theme-gavejo";

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_THEME_ASSET_BASE_URL: isGithubPages ? githubPagesAppUrl : ""
  },
  ...(isGithubPages
    ? {
        output: "export",
        trailingSlash: true,
        assetPrefix: `${githubPagesAppUrl}/`
      }
    : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maderasgavejo.com"
      },
      {
        protocol: "https",
        hostname: "www.maderasgavejo.com"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

module.exports = nextConfig;
