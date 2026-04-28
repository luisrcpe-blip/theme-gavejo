const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = isGithubPages ? "/theme-gavejo" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_THEME_BASE_PATH: githubPagesBasePath
  },
  ...(isGithubPages
    ? {
        output: "export",
        trailingSlash: true,
        basePath: githubPagesBasePath,
        assetPrefix: `${githubPagesBasePath}/`
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
