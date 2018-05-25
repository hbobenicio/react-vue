const webpack = require('webpack')
const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = (env, options) => ({
  entry: './src/index.js',

  output: {
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },

      // Css Loader for React:
      // css-loader (with CSS Modules) + style-loader
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src/react')
        ],
        use: [
          'style-loader',
          {
            loader:'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[hash:base64]',
              minimize: options.mode === 'production',
              sourceMap: options.mode === 'development'
            }
          }
        ]
      },

      // CSS Loader for Vue:
      // css-loader + vue-style-loader
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src/vue')
        ],
        use: [
          'vue-style-loader',
          {
            loader:'css-loader',
            options: {
              minimize: options.mode === 'production',
              sourceMap: options.mode === 'development'
            }
          }
        ]
      }
    ]
  },
  
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new VueLoaderPlugin()
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.mjs', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@react': path.resolve(__dirname, 'src/react/'),
      '@vue': path.resolve(__dirname, 'src/vue/')
    }
  },

  devServer: {
    contentBase: path.join(__dirname, "dist/")
  }
})

module.exports = config