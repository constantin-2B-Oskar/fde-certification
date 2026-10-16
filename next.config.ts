import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The PDF route and the Open Graph image read fonts and logos from disk at runtime.
  outputFileTracingIncludes: {
    // The preview image route gets a hashed name at build time, so match every route (the files are small).
    '/**': ['./assets/fonts/**', './public/logos/*.png'],
  },
  poweredByHeader: false,
  // The directory is called Community on the site; its pages stay at /humans so shared links keep working.
  async redirects() {
    return [{ source: '/community', destination: '/humans', permanent: false }];
  },
};

export default nextConfig;
