import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
});

const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default withSerwist(nextConfig);