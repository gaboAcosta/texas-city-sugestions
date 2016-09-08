module.exports = function(grunt){

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
    watch: {
      scripts: {
        files: ['**/*.js'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('server', [ 'express:dev', 'watch' ])
  grunt.registerTask('default', ['server']);
}