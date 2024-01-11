/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
        typedRoutes: true,
    },
    images: {
		domains: ['nirulas-s2f.s3.ap-south-1.amazonaws.com', 'api2.nirulas.com']
	}
};

module.exports = nextConfig;