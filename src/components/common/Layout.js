import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { Footer } from ".";
import { CTA } from ".";
import config from "../../utils/siteConfig";
import { useState } from "react";
import { navigate } from "gatsby";

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
  const [isOpen, setIsOpen] = useState(false);
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

      {isOpen && (
        <div className="w-full h-full lg:hidden bg-bg-light-grey fixed top-0 z-50">
          <StaticImage
            src="/images/icons/close.png"
            onClick={() => setIsOpen(false)}
            className="h-10 mt-4 ml-4 cursor-pointer"
          />
          <nav id="site-nav" className="flex flex-col mt-8 items-center">
            {/* The navigation items as setup in Ghost */}

            {localData.navigation.map((navItem, i) => (
              <Link
                className={
                  "inline-block py-8 px-8 text-body-grey hover:text-iff-orange hover:no-underline"
                }
                to={navItem.url}
                key={i}
              >
                {navItem.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <div className="flex flex-col justify-between">
        <div className="viewport-top">
          {/* The main header section on top of the screen */}
          <header className="bg-center bg-cover py-5 text-white bg-bg-black">
            <div className="px-4">
              <div className="flex items-center justify-between max-w-6xl mx-auto" id="site-mast">
                <Link to="/">
                  {isHome ? null : (
                    <StaticImage
                      id="site-logo"
                      className="h-12"
                      src="/images/logo.svg"
                      alt={site.title}
                    />
                  )}
                </Link>

                <div className="lg:hidden">
                  <StaticImage
                    onClick={() => setIsOpen(true)}
                    src="/images/icons/menu.png"
                    className="h-10 cursor-pointer"
                  />
                </div>
                <div
                  id="site-mast-right"
                  className="lg:flex items-center hidden"
                >
                  <nav id="site-nav" className="flex items-center">
                    {/* The navigation items as setup in Ghost */}
                    {localData.navigation.map((navItem, i) => (
                      <Link
                        className={
                          "inline-block py-2 px-8 text-body-grey hover:text-iff-orange hover:no-underline"
                        }
                        to={navItem.url}
                        key={i}
                      >
                        {navItem.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              {isHome ? (
                <div id="site-banner" className="my-0 mx-auto responsive-container ">
                  <StaticImage src="/images/logo.svg" className=" w-72 mt-24" />
                  <h1
                    id=" site-banner-title"
                    className="mt-12 text-white text-superheading not-italic max-w-2xl"
                  >
                    {localData.description}
                  </h1>
                  <p
                    id="site-banner-desc"
                    className="mt-4 text-gray-400 text-big-body not-italic max-w-2xl"
                  >
                    {localData.subDescription}
                  </p>
                  <p
                    id="site-banner-desc"
                    className="mt-4 text-gray-400 text-big-body not-italic max-w-2xl"
                  >
                    {localData.cta}
                  </p>
                  <div id="action" className="mb-20 mt-8 flex">
                    <button
                      onClick={() => { navigate("/donate/") }}
                      className="btn w-full text-xl font-semibold md:w-36  h-14">
                      Donate
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </header>

          <main id="site-main">
            {/* All the main content gets inserted here, index.js, post.js */}
            {children}
          </main>
          <div className="m-4">
            <CTA />
          </div>
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

const DefaultLayoutSettingsQuery = (props) => {
  const data = useStaticQuery(graphql`
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
  `);

  return <DefaultLayout data={data} {...props} />;
};

export default DefaultLayoutSettingsQuery;