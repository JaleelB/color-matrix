import MillionLint from "@million/lint";
import withPWAInit from "@ducanh2912/next-pwa";
/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {};
export default withPWA({
  rsc: true,
})(nextConfig);
