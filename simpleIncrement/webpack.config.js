module.exports = {
 entry:{
    index_page : [
        "./public/app.js",
        "./public/css/main.less"
    ]
 },


 output : {
     path : __dirname + "/public/product/",
     filename: "[name].bundle.js"
 },

//  resolve:{
//     modulesDirectories: ['node_modules', './public'],
//     extensions: ['', '.js']
//  },
 
 module:{
		loaders:[
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
            	loader: 'babel-loader',
				query:{
					presets:['react','es2015','stage-0'],
					plugins: ['transform-decorators-legacy']
				}
			},

			//doing the less 
			{ 
        		test: /\.less$/,
        		loader: "style-loader!css-loader!autoprefixer-loader!less-loader",
      		},
      		{   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
            	loader: "url-loader?limit=10000&minetype=application/font-woff" 
        	},
        	{   test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
            	loader: "file-loader" 
        	},
        	// load jpg
        	{
                test: /\.jpg$/,
                loader: 'url-loader?limit=10000'
            }
		]
	},
    watch : true
}