/** @type {import('next').NextConfig} */
const nextConfig = {
	// Generate a fully static site in the `out/` directory on build
	output: 'export',

	// Ensure next/image works when exporting (no image optimization server)
	images: {
		unoptimized: true,
	},

	// Helpful for many static hosts so routes map to /path/index.html
	trailingSlash: true,
}

module.exports = nextConfig
