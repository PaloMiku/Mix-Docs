import { createMDX } from 'fumadocs-mdx/next';
import { redirects as redirectMap } from './redirects.config.mjs';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  redirects: async () =>
    Object.entries(redirectMap).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    })),
};

export default withMDX(config);
