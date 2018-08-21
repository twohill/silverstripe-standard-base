const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

const ENV = process.env.NODE_ENV;
const PATHS = {
  MODULES: 'node_modules',
  FILES_PATH: '../',
  ROOT: Path.resolve(),
  SRC: Path.resolve('app/client/src'),
  DIST: Path.resolve('app/client/dist'),
};
const config = {
  mode: ENV,
  entry: {
    main: `${PATHS.SRC}/js/main.js`,
    bundle: `${PATHS.SRC}/styles/bundle.scss`,
    editor: `${PATHS.SRC}/styles/editor.scss`,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        bundleStyles: {
          name: 'bundle',
          test: (m, c, entry = 'bundle') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        editorStyles: {
          name: 'editor',
          test: (m, c, entry = 'editor') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  output: {
    path: PATHS.DIST,
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options:  {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader:  MiniCssExtractPlugin.loader,
            options:  {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },

          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },

        ],
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        exclude: /fonts[\/\\]([\w_-]+)\.svg$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]',
        },
      },
      {
        test: /fonts[\/\\]([\w_-]+)\.(woff2?|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.SRC}/images/`,
        to: `${PATHS.DIST}/images/`,
        flatten: true,
      },
    ]),
  ],
};

module.exports = config;
