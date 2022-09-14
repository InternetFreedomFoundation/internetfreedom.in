import * as React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";

import { Layout } from "../components/common";
import { MetaData } from "../components/common/meta";

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
  const post = data.ghostPost;

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      <Helmet>
        <style type="text/css">{`${post.codeinjection_styles}`}</style>
      </Helmet>
      <Layout>
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <p className="mx-auto text-center prose prose-sm">
            {post.published_at_pretty}
          </p>
          <div className="md:mx-auto text-center lg:max-w-2xl">

            <div
              className="m-4 block text-4xl text-center font-extrabold text-gray-900"
            >
              {post.title}

            </div>
            <p className="mx-auto prose prose-slate">{post.excerpt}</p>
          </div>
          <div className="p-4 flex justify-center flex-col items-center">
            <Link
              to={`/author/${post.primary_author.slug}`}
              aria-label="Author" className="inline-block mb-1">
              <img
                alt="avatar"
                src={post.authors[0].profile_image}
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </Link>
            <div className="text-center">
              <Link
                to={`/author/${post.primary_author.slug}`}
                aria-label="Author"
                className="font-semibold text-gray-800"
              >
                {post.authors[0].name}
              </Link>
              <p className="text-sm font-medium leading-4 text-gray-400">
                Primary Author
              </p>
            </div>
          </div>
          <hr className="my-8" />
          <article
            className="mt-4 prose prose-img:rounded-xl prose-img:shadow-xl mx-auto"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></article>
        </div>
      </Layout>
    </>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default Post;

export const postQuery = graphql`
  query ($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
