module.exports = function (grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            chromeInjected: {
                options: {
                    stripBanners: true,
                    banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n (function () {\n "use strict";\n',
                    process: function (src) {
                        return src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                    },
                    footer: '\n}());'
                },
                src: ['src/wickedizer.js', 'src/wickedizer.data.js', 'src/wickedizer.textReplacer.js', 'src/wickedizer.htmlTextNodeWalker.js', 'src/wickedizer.showActiveSplash.js', 'src/chrome/chrome-injected-functionality.js'],
                dest: 'extensions/chrome/js/injected.js'
            },
            safariInjected: {
                options: {
                    stripBanners: true,
                    banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n (function () {\n "use strict";\n',
                    process: function (src) {
                        return src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                    },
                    footer: '\n}());'
                },
                src: ['src/wickedizer.js', 'src/wickedizer.data.js', 'src/wickedizer.textReplacer.js', 'src/wickedizer.htmlTextNodeWalker.js', 'src/wickedizer.showActiveSplash.js', 'src/safari/safari-injected-functionality.js'],
                dest: 'extensions/safari/js/injected.js'
            },
            chromeBackground: {
                options: {
                    stripBanners: true,
                    banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                src: ['src/chrome/chrome-background-functionality.js'],
                dest: 'extensions/chrome/js/background.js'
            },
            safariBackground: {
                options: {
                    stripBanners: true,
                    banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                src: ['src/safari/safari-background-functionality.js'],
                dest: 'extensions/safari/wikedizer.safariextension/js/background.js'
            },
            test: {
                options: {
                    stripBanners: true,
                    banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    footer: 'module.exports = wickedizer;'
                },
                src: ['src/wickedizer.js', 'src/wickedizer.data.js', 'src/wickedizer.textReplacer.js', 'src/wickedizer.htmlTextNodeWalker.js', 'src/wickedizer.showActiveSplash.js'],
                dest: 'tests/wickedizer.js'
            }
        },
        nodeunit: {
            all: ['tests/*_test.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.registerTask('default', ['concat:test', 'nodeunit', 'concat']);
};