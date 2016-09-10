module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'server/app.js'
        }
      }
    },
    mochaTest: {
      options: {
        reporter: 'spec'
      },
      src: ['server/**/*.spec.js']
    },
    mocha_istanbul: {
      coverage: {
        src: [
          'server/**/*.js'
        ],
        options: {
          excludes: ['server/**/*.spec.js', 'server/**/*.fixture.js'],
          reportFormats: ['cobertura','lcovonly','lcov']
        }
      },
    },
    watch: {
      express: {
        files: ['server/**/*.js'],
        options: {
          spawn: false,
        },
      },
    },
  });




  grunt.registerTask('server', [ 'express:dev', 'watch' ])
  grunt.registerTask('default', ['server']);
  grunt.registerTask('test', 'mochaTest');
  grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
}