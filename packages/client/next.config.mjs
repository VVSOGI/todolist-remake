/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  transpilePackages: ['@todolist/ui-components']
}

export default nextConfig
