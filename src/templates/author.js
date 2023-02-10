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
const Author = ({ data, location, pageContext }) => {
  const author = data.ghostAuthor;
  const posts = data.allGhostPost.edges;
  // const twitterUrl = author.twitter
  //   ? `https://twitter.com/${author.twitter.replace(/^@/, ``)}`
  //   : null;
  // const facebookUrl = author.facebook
  //   ? `https://www.facebook.com/${author.facebook.replace(/^\//, ``)}`
  //   : null;

  return (
    <>
      <MetaData data={data} location={location} type="profile" />
      <Layout>
        <div>
          <div className="bg-bg-black py-8 text-white mx-auto">
            <div className="prose ml-4 md:mx-auto max-w-3xl">
              <h3 className="prose-sm text-white font-light">All Articles by:</h3>
              <h1 className="prose-4xl text-white capitalize underline underline-offset-8">{author.name}</h1> 
            </div>
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

Author.propTypes = {
  data: PropTypes.shape({
    ghostAuthor: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cover_image: PropTypes.string,
      profile_image: PropTypes.string,
      website: PropTypes.string,
      bio: PropTypes.string,
      location: PropTypes.string,
      facebook: PropTypes.string,
      twitter: PropTypes.string,
    }),
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
};

export default Author;

export const pageQuery = graphql`
  query GhostAuthorQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostAuthor(slug: { eq: $slug }) {
      ...GhostAuthorFields
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { authors: { elemMatch: { slug: { eq: $slug } } } }
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
