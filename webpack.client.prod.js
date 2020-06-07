const path = require('path')
const webpack = require('webpack')

/* PLUGINS */


// A. ANALYSIS
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// B. COMPRESSION
const TerserPlugin = require('terser-webpack-plugin')
//const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

// C. PREPARE AND LIST FILES
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon')
const LoadablePlugin = require('@loadable/webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// D. SECURITY
//const Dotenv = require('dotenv-webpack')

/* E. EXTRA
   const NullPlugin = require('webpack-null-plugin') */
const HtmlWebpackPlugin = require('html-webpack-plugin')
// https://momentjs.com/docs/

module.exports = {
  resolve:{
    alias:{
      'react'           :path.resolve('./node_modules/react'),
      'react-dom'       :path.resolve('./node_modules/react-dom'),
      'react-intl'      :path.resolve('./node_modules/react-intl'),
      'react-router-dom':path.resolve('./node_modules/react-router-dom')
    }
  },

  entry:[
    './src/client.gql.js'
    //'./src/client.js'
  ],

  output:{
    path         :path.resolve(__dirname, 'public/'),
    publicPath   :'/',
    filename     :( process.env.COMPILE ? '[id].js?[hash:8]' : 'main.js'),
    libraryTarget:'umd'
  },

  /* devtool: 'cheap-module-eval-source-map',
     watch:true, */
  devServer:{
    contentBase:[
      path.resolve(__dirname, './public'),
      path.resolve(__dirname, './src/assets/fonts'),
      path.resolve(__dirname, './src/assets/images')
    ],
    watchContentBase  :true,
    historyApiFallback:true,
    port              :3333,
    host              :'0.0.0.0',
    hot               :true,
    liveReload        :false,
    clientLogLevel    :'debug',
    disableHostCheck  :true //rdp
  },

  mode:'production',

  optimization:{
    nodeEnv  :'production',
    minimize :true,
    minimizer:[
      new TerserPlugin({})
    ]
  },

  watchOptions:{
    ignored:'/src/translations/'
  },

  plugins:[

    new HtmlWebpackPlugin({
      template:'./src/assets/html/index.prod.html'
    }),

    new CopyPlugin({
      patterns:[
        { from: './src/assets/fonts', to: './' }, //Where the root is the output dir
        { from: './src/assets/images', to: './' },
        { from: './src/assets/favicon', to: './public' }, //https://www.favicon-generator.org/
        { from: './node_modules/@fwrlines/ds/src/assets/fonts', to: './public' },
        { from: './node_modules/@fwrlines/ds/src/assets/images', to: './public' }
      ]
    }),

    new LoadablePlugin(),

	 new MiniCssExtractPlugin({
      filename     :'[contenthash:5].css',
      chunkFilename:'[contenthash:5].css'
    }),

    /*new LodashModuleReplacementPlugin({
      shorthands: true,
      currying: true,
      placeholders:true
		}),*/

    new BundleAnalyzerPlugin({
      analyzerMode  :'static',
      reportFilename:(process.env.COMPILE ? 'report.html' : 'report.dev.html'),
      openAnalyzer  :false
    }),

	  new ReactLoadableSSRAddon({
      filename:'assets-manifest.json'
    }),

    new webpack.HotModuleReplacementPlugin()

  ],
  module:{
    rules:[
      {
        test   :/\.(js|jsx)$/,
        exclude:/node_modules/,
        use    :{
          loader :'babel-loader',
          options:{
            presets:[
              [ '@babel/preset-env', { modules: false }]
            ]
          }
        }
      },
      {
        test:/\.(scss|css)$/,
        use :[
          {
            loader:MiniCssExtractPlugin.loader
          }, {
            loader:'css-loader'
          }, {
            loader:'postcss-loader'
          }, {
            loader:'sass-loader'
          }
        ]
      }

    ]

  }
  //  watch: true,
}


