/** @type {import('next').NextConfig} */
const nextConfig = {
 // output: 'export',
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
