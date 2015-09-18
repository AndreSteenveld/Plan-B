var gulp    = require( "gulp" ),
	replace = require( "gulp-replace" ),
	rename  = require( "gulp-rename" ),

	config  = require( "../configuration" );

gulp.task( "f7-to-sass", function( ){

	//
	// The following regular expressions were taken from this stack overflow thread:
	// http://stackoverflow.com/questions/14970224/how-can-i-convert-from-less-to-sass
	//
	return gulp.src( config.f7.less )

		//
		// Do some magic with the regexes and replace, we could take a look in to the less grammar
		// to catch the proper edge cases.
		//
		.pipe( replace( (/@{\s*(\S+)\s*}/gi),                                   "#{@$1}" ) )
		.pipe( replace( (/@(?!font-face|import|media|keyframes|-)/gi),          "$" ) )
		.pipe( replace( (/\.([\w\-]*)\s*\((.*)\)\s*\{/gi),                      "@mixin $1\($2\)\n{" ) )
		.pipe( replace( (/\.([\w\-]*\(.*\)\s*;)/gi),                            "@include $1)" ) )
		.pipe( replace( (/~"(.*)"/gi),                                          '#{"$1"}' ) )
		.pipe( replace( (/spin/gi),                                             "adjust-hue" ) )

		// Now rename everything to a scss file and write it out in to our src directory
		.pipe( rename({ extname: ".scss" }) )
		.pipe( gulp.dest( config.output_for.generated_sass ) );

});
