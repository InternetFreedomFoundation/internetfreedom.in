import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout, PostCard, Pagination } from "../components/common";
import { MetaData } from "../components/common/meta";

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
  console.log(posts)
  return (
    <>
      <MetaData location={location} />
      <Layout isHome={true}>
        <div id="container" className="mt-20 my-0 ml-48 mx-auto max-w-4xl">
          <h1 className="text-3xl mb-6">Blogposts</h1>
          <section className="post-feed">
            {posts.map(({ node }, index) => (
              // The tag below includes the markup for each post - components/common/PostCard.js
              <PostCard key={node.id} post={node} number={index+1}/>
            ))}
          </section>

          {/* <Pagination pageContext={pageContext} /> */}
          <p className="ml-14 text-body-grey">Read more blogs on numerous other topics</p>
          <button class="ml-14 mt-6 bg-iff-orange hover:bg-iff-orange-700 text-white font-normal text-xl leading-6 not-italic py-2 px-4 rounded w-36 h-14">Read more</button>

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
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
