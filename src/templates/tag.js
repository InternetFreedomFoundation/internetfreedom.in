import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout, PostCardBlog, Pagination } from "../components/common";
import { MetaData } from "../components/common/meta";

/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag incl. pagination.
 *
 */
const Tag = ({ data, location, pageContext }) => {
  const tag = data.ghostTag;
  const posts = data.allGhostPost.edges;

  return (
    <>
      <MetaData data={data} location={location} type="series" />
      <Layout>
      <div>
          <div className=" bg-bg-black py-8 text-white mx-auto">
            <div className="prose ml-4 md:mx-auto max-w-3xl">
              <h3 className="prose-sm text-white font-light">Catergory</h3>
              <h1 className="prose-4xl text-white">{tag.name}</h1> 
            </div>
          </div>

          <div>
            {/* <div className="relative blog-feature_image">
              <div className="mx-auto bg-bg-dark-grey max-w-4xl">
                {posts && <PostCardBlog key={posts[0].node.id} post={posts[0].node} />}
              </div>
            </div> */}
          </div>

          <div className="post-container">
            <section className="post-feed max-w-3xl mx-auto">
              {posts.map(({ node }) => (
                // The tag below includes the markup for each post - components/common/PostCard.js
                <PostCardBlog key={node.id} post={node} />
              ))}
            </section>
            <Pagination pageContext={pageContext} />
          </div>
        </div>
      </Layout>
    </>
  );
};

Tag.propTypes = {
  data: PropTypes.shape({
    ghostTag: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
};

export default Tag;

export const pageQuery = graphql`
  query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostTag(slug: { eq: $slug }) {
      ...GhostTagFields
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
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
