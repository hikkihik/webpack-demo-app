module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            esModule: false,
          },
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images',
          },
        },
      },
    ],
  },
};
