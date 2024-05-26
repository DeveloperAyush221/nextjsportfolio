const nextConfig = {
  images: {
    output: 'export',
    loader: "custom",
    loaderFile: './my-loader.ts',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
