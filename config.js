const path = require('path');

module.exports = {
  port: 3000,
  paths: {
    common: {
      dirnames: {
        public: path.resolve(__dirname, 'public'),
      },
      files: {

      },
    },
  },
  webpack: {
    output: {
      dist: path.resolve(__dirname, 'public'),
      images: 'images/[hash].[ext][query]',
      fonts: 'fonts/[hash].[ext][query]',
    },
    entries: {
      static: {
        js: path.resolve(__dirname, 'client/static.js'),
        html: {
          title: 'Static',
          filename: 'static.html',
          template: path.resolve(__dirname, 'client/html/static.html'),
          chunks: ['static'],
        },
      },
      slider: {
        js: path.resolve(__dirname, 'client/slider.js'),
        html: {
          title: 'Slider',
          filename: 'slider.html',
          template: path.resolve(__dirname, 'client/html/slider.html'),
          chunks: ['slider'],
        },
      },
      bundles: {
        js: 'js/[name].bundle.js',
        css: 'css/[name].bundle.css',
      },
    },
  },
};
