import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  basePath: '/drmsweb', // <=== this is specific to hosting in GitHub Pages. Because the site is deployed as https://nzkks.github.io/drmsweb/.So there is a subpath in the URL. This line will make the static assets works in GitHub Pages.
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
