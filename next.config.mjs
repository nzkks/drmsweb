/** @type {import('next').NextConfig} */
const nextConfig = {
  // Since the site is having a proper domain name instead of GitHub's one, the below lines are not needed.
  // basePath: process.env.NODE_ENV === 'production' ? '/drmsweb' : '',
  // assetPrefix:
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://nzkks.github.io/drmsweb'
  //     : '',
  output: process.env.NODE_ENV === 'production' ? 'export' : 'standalone',
  reactStrictMode: true,
};

export default nextConfig;
