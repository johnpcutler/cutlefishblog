module.exports = {
  siteMetadata: {
    title: `@johncutlefish's blog`,
    description: `Writing on all things product by John Cutler (@johncutlefish).`,
	author: `John Cutler`,
	image: `${__dirname}/src/images/ff.jpeg` 
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
	{
	  resolve: `gatsby-source-filesystem`,
	  options: {
	    name: `markdown-pages`,
	    path: `${__dirname}/src/markdown-pages`,
	  },
	},
	`gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
	{
	  resolve: `gatsby-transformer-remark`,
	  options: {
	    plugins: [
		  {
		    resolve: `gatsby-remark-relative-images`,
	      },
	      {
	        resolve: `gatsby-remark-images`,
	        options: {
	            // It's important to specify the maxWidth (in pixels) of
	            // the content container as this plugin uses this as the
	            // base for generating different widths of each image.
	            maxWidth: 1200,
	        },
	      },
	    ],
	  },
	},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}