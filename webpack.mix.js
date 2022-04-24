const mix = require('laravel-mix')
const path = require('path')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

mix
  .js('resources/ts/app.ts', 'public/js/app.js')
  .vue({
    version: 3,
    extractStyles: true,
    globalStyles: false,
  })
  .postCss('resources/css/app.css', 'public/css/app.css')
  .options({
    postCss: [
      autoprefixer(),
      tailwindcss('tailwind.config.js'),
      ...(mix.inProduction()
        ? [
            purgecss({
              content: ['./resources/views/**/*.edge', './resources/ts/**/*.vue'],
              defaultExtractor: (content) => content.match(/[\w-/:.]+(?<!:)/g) || [],
              whitelistPatternsChildren: [/nprogress/],
            }),
          ]
        : []),
    ],
  })
  .webpackConfig({
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/] },
          exclude: /node_modules/,
          include: /resources\/ts/,
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
      alias: {
        '@': path.resolve('resources/ts'),
      },
    },
  })
  .sourceMaps()
