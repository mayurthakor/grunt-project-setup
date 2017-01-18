var fs = require('fs');

module.exports = function(grunt){
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		jshint:{
			files:{
				src:['js/**/*.js']
			}	
		},
		
		sass:{
			dist:{
				files:{
					'dist/css/styles.css': 'sass/**/*.scss'
				}
			}
		},
		uglify:{
			dist:{
				files:{
					'dist/js/package.min.js':'js/**/*.js'
				}
			}
		},
		cssmin:{
			dist:{
				files:{
					'dist/css/style.min.js':'dist/css/**/*.css'
				}
			}
		}

	});

	// grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-sass');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');

	//Either add all the tasks one by one or 
	//use "load-grunt-tasks" only once.


	grunt.registerTask('default',['jshint','sass','uglify','cssmin']);

}