var path   = require( "path" ),
	extend = Object.assign || require( "object.assign" );

var c = module.exports = {

	//
	// Where we are going to find and output our source code
	//
	f7: {
		toString: function( ){ return path.resolve( __dirname + "/Framework7/" ); },
		valueOf: function( ){ return path.resolve( __dirname + "/Framework7/" ); }
	},

	src: {
		toString: function( ){ return path.resolve( __dirname + "/src/" ); },
		valueOf: function( ){ return path.resolve( __dirname + "/src/" ); }
	},

	output_for: { },

	//
	// Options for tools we use when building the application
	//
	sass_build_options: {
		errLogToConsole: true,
		outputStyle: "expanded"
	}

};

extend( c.f7, { less: c.f7 + "/src/less/**/*.less" });
extend( c.src, { sass: c.src + "/sass" });

extend( c.output_for, {
	generated_sass: c.src + "/sass/f7",
	generated_css: path.resolve( __dirname + "/build/css" )
});
