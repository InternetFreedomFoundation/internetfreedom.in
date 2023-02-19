import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { useRef } from "react";
import {
  Layout,
  PostCard,
  Pagination,
  PostCarousel,
  ProjectCarousel,
} from "../components/common";
import { MetaData } from "../components/common/meta";
import DonateCard from "../components/common/DonateCard";

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges;
  const scrollElement = useRef();
  const scroll = (scrollOffset) => {
    scrollElement.current.scrollLeft += scrollOffset;
  };
  return (
    <>
      <MetaData location={location} />
      <Layout isHome={true}>
        <div
          id="container"
          className="mt-20 my-0 ml-5 md:mx-auto text-left lg:max-w-4xl"
        >
          <h1 className="text-3xl mb-6 font-bold">Blogposts</h1>
          <section id="post-feed">
            {posts.map(({ node }, index) => (
              // The tag below includes the markup for each post - components/common/PostCard.js
              <PostCard key={node.id} post={node} number={index + 1} />
            ))}
          </section>

          {/* <Pagination pageContext={pageContext} /> */}
          <p className="ml-14 text-body-grey">
            Read more blogs on numerous other topics
          </p>
          <button class="ml-14 mt-6 mb-20 bg-iff-orange hover:bg-iff-orange-700 text-white font-normal text-xl leading-6 not-italic py-2 px-4 rounded w-36 h-14">
            Read more
          </button>
          <hr></hr>
          <h1 className="text-3xl mt-20 mb-6 font-bold">Our latest work</h1>
          <section id="post-feed" className="flex flex-col lg:w-1/3 md:flex-row">
            {posts.map(({ node }, index) => (
              // The tag below includes the markup for each post - components/common/PostCard.js
              <PostCarousel key={node.id} post={node} number={index + 1} />
            ))}
          </section>
          <hr></hr>
          <h1 className="text-3xl mt-20 font-bold">Campaigns & Projects</h1>
          <p className="text-base text-body-grey mt-6 mb-6">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <section
            id="post-feed"
            ref={scrollElement}
            className="flex flex-col md:flex-row scrolling-touch overflow-x-hidden"
          >
            {posts.map(({ node }, index) => (
              // The tag below includes the markup for each post - components/common/ProjectCarousel.js
              <>
                <ProjectCarousel key={node.id} post={node} number={index + 1} />
                <ProjectCarousel key={node.id} post={node} number={index + 1} />
              </>
            ))}
          </section>

          <div className="flex items-center justify-center">
            <button id="leftScroll" className="px-3" onClick={() => scroll(-200)}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  transform="matrix(-1 0 0 1 32 0)"
                  fill="#F7F7F7"
                />
                <path
                  d="M17.6001 20.8L12.8001 16L17.6001 11.2"
                  stroke="#D2D2D2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button id="rightScroll" className="px-3" onClick={() => scroll(200)}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  transform="matrix(-1 0 0 1 32 0)"
                  fill="#FCECE8"
                />
                <path
                  d="M14.4 11.2L19.2 16L14.4 20.8"
                  stroke="#E76943"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          
        </div>
         
      </Layout>
    </>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
};

export default Index;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(sort: {published_at: DESC}, limit: $limit, skip: $skip) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
