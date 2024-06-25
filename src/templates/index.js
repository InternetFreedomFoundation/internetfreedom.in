import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { useRef } from "react";
import {
  Layout,
  ProjectCarousel,
  PostCardBlog,
  Search
} from "../components/common";
import { MetaData } from "../components/common/meta";
import NewsletterWidget from "../components/NewsletterWidget";
import projectData from "../../content/projects.json";
import { navigate } from "gatsby";

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
          className="responsive-container px-4 mt-4 text-left"
        >
          <h1 className="text-subheading-1 mb-4 mt-24 font-bold">Updates</h1>
          <div className="py-4">
            <Search/>
          </div>
          <section id="post-feed">
            {posts.map(({ node }, index) => (
              // The tag below includes the markup for each post - components/common/PostCard.js
              <PostCardBlog key={node.id} post={node} number={index + 1} />
            ))}
          </section>
          <button
            onClick={() => {
              navigate("/posts");
            }}
            className="mt-6 mb-16 bg-iff-orange hover:bg-iff-orange-700 text-white font-light text-xl leading-6 not-italic py-2 px-4 rounded w-36 h-14"
          >
            Read more
          </button>
          <NewsletterWidget />
          <h1 className="text-subheading-1 mb-4 mt-24 font-bold">
            Campaigns & Projects
          </h1>
          <section
            id="post-feed"
            className="flex flex-col lg:flex-row overflow-x-hidden py-8"
          >
            {projectData.content.map((data) => {
              return (
                <ProjectCarousel
                  url={data.url}
                  img={data.img}
                  desc={data.desc}
                />
              );
            })}
          </section>
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

export function Head() {
  return (
    <div>
      <link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
      <script data-cfasync="false" src="/pagefind/pagefind-ui.js" ></script>
    </div>
  )
}
// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(sort: { published_at: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;