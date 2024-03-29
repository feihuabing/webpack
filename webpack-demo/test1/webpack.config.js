const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  /**
   * 第一阶段测试
   * 文件在test1
  module: {
     rules: [
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
	    },
	    {
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'file-loader'
			]
		},
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [
				'file-loader'
			]
		},
		{
			test: /\.(csv|tsv)$/,
			use: [
				'csv-loader'
			]
		},
		{
			test: /\.xml$/,
			use: [
				'xml-loader'
			]
		},
     ],
   }*/
};