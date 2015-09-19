var gulp         = require( "gulp" ),
	sass         = require( "gulp-sass" ),
	autoprefixer = require( "gulp-autoprefixer" ),

	config = require( "../configuration" );

function build_framework7_platform( input_path, output_path ){

	gulp.src( input_path  )
		.pipe(
			sass( config.sass_build_options )
				.on( "error", sass.logError )
		)
		.pipe( autoprefixer( ) )
		.pipe( gulp.dest( config.output_for.generated_css ) );

}

gulp.task( "build-sass:ios", build_framework7_platform.bind(
	null,
	[
		config.src.sass + "/ios/framework7.ios.colors.scss",
		config.src.sass + "/ios/framework7.ios.rtl.scss",
		config.src.sass + "/ios/framework7.ios.scss"
	],
	config.output_for.generated_css
));

gulp.task( "build-sass:android", build_framework7_platform.bind(
	null,
	[
		config.src.sass + "/material/framework7.material.colors.scss",
		config.src.sass + "/material/framework7.material.rtl.scss",
		config.src.sass + "/material/framework7.material.scss"
	],
	config.output_for.generated_css
));

gulp.task( "build-sass", [ "build-sass:ios", "build-sass:android" ] );
