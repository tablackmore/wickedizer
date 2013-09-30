module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            output: {
                options: {
                    stripBanners: true,
                    banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                src: ['src/hatchet.js', 'src/hatchet.data.js', 'src/hatchet.data.wickedizer.js', 'src/hatchet.wickedizer.js', 'src/hatchet.htmlTextNodeWalker.js', 'src/hatchet.showActiveSplash.js'],
                dest: 'output/hatchet.js'
            },
            chromeInjected: {
                options: {
                    stripBanners: true,
                    banner: '\n (function () {\n "use strict";\n',
                    process: function (src) {
                        return src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                    },
                    footer: '\n}());'
                },
                src: ['output/hatchet.js', 'src/chrome/chrome-injected-functionality.js'],
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
                src: ['output/hatchet.js', 'src/safari/safari-injected-functionality.js'],
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
                    footer: '\n module.exports = hatchet;'
                },
                src: ['output/hatchet.js'],
                dest: 'tests/hatchet.js'
            }
        },
        nodeunit: {
            all: ['tests/*_test.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.registerTask('default', ['concat:output', 'concat:test', 'nodeunit', 'concat']);
};