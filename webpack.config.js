// webpack.config.js 는 웹팩 설정 파일입니다!

const path = require('path'); 

module.exports = {
  mode: 'development',
  entry: { // entry가 여러개일수도 있다
    main: './src/app.js' // 상대경로
  },
  output: {
    path: path.resolve('./dist'), // path는 절대경로로
    filename: '[name].js'
  },
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
        test: /\.png$/, // .png 확장자로 마치는 모든 파일
        loader: "file-loader",
        options: {
          publicPath: "./dist/", // file-loader가 처리하는 파일을, 모듈로 사용했을때, 경로앞에 추가되는 문자열
          // 그러면 파일을 호출하는 입장에서는 앞에 ./dist를 붙히고 호출한다!
          name: "[name].[ext]?[hash]", // 파일명 형식. 쿼리 스트링 사용.
        },
      },
    ]
  }
}