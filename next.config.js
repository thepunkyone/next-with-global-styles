const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent')

// style regexes
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/

const getStyleLoaders = (isDevelopment, isClient, cssOptions, preProcessor) => {
  // Using style-loader on client instead of MiniCssExtractPlugin in development mode enables hot module reloading to work
  const clientStyleLoader = isDevelopment
    ? require.resolve('style-loader')
    : MiniCssExtractPlugin.loader

  // Using MiniCssExtractPlugin loader on server side enables the correct css module class names to be appended to html on server
  const serverStyleLoader = MiniCssExtractPlugin.loader

  const styleLoaders = [
    isClient ? clientStyleLoader : serverStyleLoader,
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    }
  ]

  if (preProcessor) {
    styleLoaders.push(require.resolve(preProcessor))
  }

  return styleLoaders
}

module.exports = {
  webpack(config, { dev, isServer }) {
    const isDevelopment = dev
    const isClient = !isServer

    config.module.rules.push(
      // Support for CSS (using .css extension)
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoaders(isDevelopment, isClient, {
          importLoaders: 1,
        }),
        // Don't consider CSS imports dead code even if the
        // containing package claims to have no side effects.
        // Remove this when webpack adds a warning or an error for this.
        // See https://github.com/webpack/webpack/issues/6571
        sideEffects: true,
      }
    )

    config.module.rules.push(
      // Support for CSS modules (using .module.css extension)
      {
        test: cssModuleRegex,
        use: getStyleLoaders(isDevelopment, isClient, {
          importLoaders: 1,
          modules: {
            getLocalIdent: getCSSModuleLocalIdent,
          },
        }),
      }
    )

    config.module.rules.push(
      // Support for Sass (using .scss or .sass extensions)
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders(
          isDevelopment,
          isClient,
          {
            importLoaders: 1,
          },
          'sass-loader'
        ),
        // Don't consider CSS imports dead code even if the
        // containing package claims to have no side effects.
        // Remove this when webpack adds a warning or an error for this.
        // See https://github.com/webpack/webpack/issues/6571
        sideEffects: true,
      }
    )

    config.module.rules.push(
      // Support for Sass modules (using .module.scss or .module.sass extensions)
      {
        test: sassModuleRegex,
        use: getStyleLoaders(
          isDevelopment,
          isClient,
          {
            importLoaders: 1,
            modules: {
              getLocalIdent: getCSSModuleLocalIdent,
            },
          },
          'sass-loader'
        ),
      }
    )

    config.plugins.push(
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      })
    )

    return config
  },
}
