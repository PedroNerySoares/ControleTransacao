/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost'],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '192.168.0.12',
          port: '8080', 
          pathname: '/upload/**',
        },
      ],
    },
 
};


export default nextConfig;
