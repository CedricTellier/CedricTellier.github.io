/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',         // forcé à root
  assetPrefix: './',    // chemins relatifs
};

module.exports = nextConfig;
