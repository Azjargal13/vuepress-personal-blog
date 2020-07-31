
module.exports = {
    title: 'Azaa blog', // Title for the site. This will be displayed in the navbar.
    base: "/",
    evergreen: true,
    themeConfig: {
        // Please keep looking down to see the available options.
        navbar: [
            { name: 'Tech blog', link: '/blog1/' },
            { name: 'Personal blog', link: '/blog2/' },
            { name: 'Projects', link: '/project/' },
            { name: 'About', link: '/about/' }
        ]
    },
    plugins: [
        ['blog-multidir', {
            postsDir: {
                posts: 'posts/:year/:month/:day/:slug'
            }
        }],
        [
            'img-lazy'
        ]
    ],
    postcss: {
        plugins: [
            require("tailwindcss")("../tailwind.config.js"),
            require("autoprefixer"),
        ],
    }
}