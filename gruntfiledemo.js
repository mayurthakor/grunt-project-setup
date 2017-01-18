 fs = require('fs');
var
module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		prop:'some propety',
		running:{
			taskOwner:'Mayur',	
			src:'js/somefile.js',
			dest:'somefile.js',
			options:{
				comment:'/*<%=prop%>*/'
			}
		},
		multi:{
			config1:{
				message:'This is config1',
				files:{
					'someotherfile.js':'js/somefile.js'	
				}
			},
			config2:{
				message:'This is config2',
				files:[
					{
						src:'js/somefile.js',
						dest:'someotherfile.js'
					}
				]
			}
		}
	});

	grunt.registerTask('running','This is the default task',function(arg1){
		var done= this.async(),
			comment = this.options().comment;

			
		grunt.config.requires('running.taskOwner');
		grunt.log.writeln('Grunt running...' + this.name, grunt.config.get('running.taskOwner'));
		grunt.log.writeln(grunt.config.get('running.src'));	
		
		fs.readFile(grunt.config.get('running.src'),function(error,data){
			fs.writeFile(grunt.config.get('running.dest'),data);
		})
		done();
	});

	grunt.registerMultiTask('multi','An example of multitask method',function(){
		grunt.log.writeln(this.data.message);
	});

	grunt.registerTask('run','Run all the tasks',['running']);

}

