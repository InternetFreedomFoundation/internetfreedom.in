import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { Navigation } from ".";
import { Footer } from ".";
import config from "../../utils/siteConfig";

// Styles
//import "../../styles/app.css";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
  const site = data.allGhostSettings.edges[0].node;
  const localData = data.site.siteMetadata;
  const twitterUrl = site.twitter
    ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
    : null;
  const facebookUrl = site.facebook
    ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
    : null;

  return (
    <>
      <Helmet>
        <html lang={site.lang} />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body className={bodyClass} />
      </Helmet>

      <div className="flex flex-col justify-between">
        <div className="viewport-top">
          {/* The main header section on top of the screen */}
          <header
            className="bg-black bg-center bg-cover py-5 text-white bg-bg-black"
            
          >
            <div id="container" className="my-0 mx-auto px-3.5">
              <div className="flex items-center justify-between" id="site-mast">
                <div id="site-mast-left">
                  <Link to="/">
                    {isHome ? (
                      null
                    ) : (
                      <img
                        id="site-logo"
                        className="h-12"
                        src="/images/logo.svg"
                        alt={site.title}
                      />
                    )}
                  </Link>
                </div>
                <div id="site-mast-right" className="flex items-center last:pr-0">
                  <nav id="site-nav" className="flex items-center justify-between mx-0 mb-0 mt-4 pr-48">
                    <div className="site-nav-left">
                      {/* The navigation items as setup in Ghost */}
                      <Navigation data={localData.navigation} navClass="inline-block py-1 px-8 text-body-grey hover:opacity-100 hover:no-underline" />
                    </div>
                  </nav>
                </div>
              </div>
              {isHome ? (
                <div id="site-banner" className="my-0 ml-5 md:ml-48 mx-auto">
                  <img src="/images/logo.svg" className="h-28 mt-28"/>
                  <h1 id=" site-banner-title" className="mt-12 font-bold text-2xl leading-7 not-italic max-w-lg">{localData.description}</h1>
                  <p id="site-banner-desc" className="my-4 max-w-lg text-body-grey text-xl leading-6 not-italic">{localData.subDescription}</p>
                  <p id="site-banner-desc" className="my-4 max-w-lg text-body-grey text-xl leading-6 not-italic mb-14">{localData.cta}</p>
                  <div id="action" className="mb-40">
                    <button class="bg-iff-orange hover:bg-iff-orange-700 text-white font-normal text-xl leading-6 not-italic py-2 px-4 rounded w-36 h-14">Donate</button>
                    <button class="border border-iff-orange hover:bg-iff-orange hover:text-white text-iff-orange font-normal text-xl leading-6 not-italic py-2 ml-8 rounded w-36 h-14">Subscribe</button>
                  </div>

                </div>
              ) : null}
            </div>
          </header>

          <main className="site-main">
            {/* All the main content gets inserted here, index.js, post.js */}
            {children} 
          </main>
        </div>
        <Footer />

        
      </div>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
};

const DefaultLayoutSettingsQuery = (props) => (
  <StaticQuery
    query={graphql`
      query GhostSettings {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
        site {
          ...LocalSettingsFields                                                          
        }
        file(relativePath: { eq: "ghost-icon.png" }) {
          childImageSharp {
            gatsbyImageData(width: 30, height: 30, layout: FIXED)
          }
        }
      }
    `}
    render={(data) => <DefaultLayout data={data} {...props} />}
  />
);

export default DefaultLayoutSettingsQuery;
