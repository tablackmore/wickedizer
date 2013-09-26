module.exports = function (grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            chromeInjected: {
                src: ['src/wickedizer.js', 'src/wickedizer.data.js', 'src/wickedizer.textReplacer.js', 'src/wickedizer.htmlTextNodeWalker.js', 'src/wickedizer.showActiveSplash.js', 'src/chrome/chrome-injected-functionality.js'],
                dest: 'extensions/chrome/js/injected.js'
            },
            safariInjected: {
                src: ['src/wickedizer.js', 'src/wickedizer.data.js', 'src/wickedizer.textReplacer.js', 'src/wickedizer.htmlTextNodeWalker.js', 'src/wickedizer.showActiveSplash.js', 'src/safari/safari-injected-functionality.js'],
                dest: 'extensions/safari/js/injected.js'
            },
            chromeBackground: {
                src: ['src/chrome/chrome-background-functionality.js'],
                dest: 'extensions/chrome/js/background.js'
            },
            safariBackground: {
                src: ['src/safari/safari-background-functionality.js'],
                dest: 'extensions/safari/js/background.js'
            },
            test: {
                src: ['src/wickedizer.js', 'src/wickedizer.data.js', 'src/wickedizer.textReplacer.js', 'src/wickedizer.htmlTextNodeWalker.js', 'src/wickedizer.showActiveSplash.js'],
                dest: 'tests/wickedizer.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
};