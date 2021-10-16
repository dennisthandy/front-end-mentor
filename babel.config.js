module.exports = {
  env: {
    test: {
      presets: [
        '@babel/preset-typescript',
        '@babel/react',
        'next/babel',
      ],
    },
    development: {
      presets: [
        'next/babel',
      ],
    },
  },
};
