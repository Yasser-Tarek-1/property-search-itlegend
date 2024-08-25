import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.ahstatic.com", "s7g10.scene7.com", "i.ibb.co"],
  },
};

export default withNextIntl(nextConfig);
