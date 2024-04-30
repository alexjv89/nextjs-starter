/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		instrumentationHook: true,
		serverComponentsExternalPackages: ['sequelize'],
	},
};

export default nextConfig;
