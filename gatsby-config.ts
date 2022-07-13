const path = require(`path`);
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Endao - Permanent funding using the power of DeFi`,
    siteUrl: `https://endao.finance`,
    description:
      "Endao allows you to direct the yield generated from DeFi/Staking to projects or people that you want to support.",
    ogImagePath: "https://endao.finance/endao-social-image.png",
    summaryLargeImagePath: "https://endao.finance/endao-social-image.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-P6M8W2WSM3"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: "/assets/svg/",
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};

export default config;
