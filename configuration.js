var path   = require( "path" ),
	extend = Object.assign || require( "object.assign" );

var c = module.exports = {

	f7: {
		toString: function( ){ return path.resolve( __dirname + "/Framework7/" ); },
		valueOf: function( ){ return path.resolve( __dirname + "/Framework7/" ); }
	},

	src: {
		toString: function( ){ return path.resolve( __dirname + "/src/" ); },
		valueOf: function( ){ return path.resolve( __dirname + "/src/" ); }
	},

	output_for: { }

};

extend( c.f7, { less: c.f7 + "/src/less/**/*.less" });

extend( c.output_for, { generated_sass: c.src + "/sass/f7" })
