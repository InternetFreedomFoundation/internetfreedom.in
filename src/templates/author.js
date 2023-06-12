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
            <div className="ml-4 md:mx-auto max-w-3xl">
              <h3 className="text-xl text-white font-light mb-5">
                All Posts by:
              </h3>
              <div className="flex items-center space-x-2">
                <img
                  src={author.profile_image || "/images/icons/avatar.svg"}
                  className="object-cover w-16 h-16 ring-2 ring-gray-400 rounded-full p-1"
                  alt={author.name}
                  loading="lazy"
                />
                <p className="text-4xl font-extrabold leading-none tracking-tight text-white capitalize underline underline-offset-8">
                  {author.name}
                </p>
              </div>
            </div>
          </div>
          <div className="post-container">
            <section className="post-feed max-w-4xl mx-auto">
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
      sort: { published_at: DESC }
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
