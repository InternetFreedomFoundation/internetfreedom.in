import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout, PostCardBlog, Pagination } from "../components/common";
import { MetaData } from "../components/common/meta";

/**
 * Author page (/author/:slug)
 *
 * Loads all posts for the requested author incl. pagination.
 *
 */
const Blogs = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges;

  return (
    <>
      <MetaData data={data} location={location} type="blogs" />
      <Layout>
        <div>
          <div className="bg-bg-black py-8 text-white mx-auto">
            <h1 className="text-4xl md:text-5xl ml-4 font-semibold md:mx-auto max-w-4xl 2xl:max-w-screen-lg p-4">
              Blogposts
            </h1>
          </div>

          <div>
            {/* <div className="relative blog-feature_image">
              <div className="mx-auto bg-bg-dark-grey max-w-4xl">
                {posts && <PostCardBlog key={posts[0].node.id} post={posts[0].node} />}
              </div>
            </div> */}
          </div>

          <div className="m-4 my-16">
            <section className="post-feed max-w-4xl p-4 2xl:max-w-screen-lg mx-auto">
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

Blogs.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
};

export default Blogs;

export const pageQuery = graphql`
  query GhostBlogsQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
      sort: { order: DESC, fields: published_at }
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
