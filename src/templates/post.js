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
        <div className="">

          <div className="bg-bg-black text-white">
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16">

              <div className="md:mx-auto text-left lg:max-w-4xl">

                <div>
                  {post.tags.map(tag => <p className="uppercase text-iff-orange font-bold mr-4">{tag.name}</p>)}
                </div>

                <div className="max-w-2xl">
                  <div
                    className="my-4 block text-4xl text-left font-extrabold text-white"
                  >
                    {post.title}
                  </div>
                  <p className="text-left text-gray-400">{post.excerpt}</p>
                </div>

                <div className="mb-4 mt-8 flex items-center -translate-x-1">
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
                      className="font-medium text-iff-orange ml-3"
                    >
                      {post.authors[0].name}
                    </Link>
                  </div>
                  <p className="ml-auto font-light text-iff-orange">
                    - {post.published_at_pretty}
                  </p>

                </div>

              </div>
            </div>
          </div>

          <div className="relative blog-feature_image">
            <div className={"w-full p-4 md:p-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"}>
              <img src={post.feature_image} className=" rounded-md w-full lg:max-w-4xl mx-auto" alt="" />
            </div>
          </div>

          <article
            className="mt-16 prose md:prose-lg lg:prose-lg prose-img:rounded-xl prose-img:shadow-xl mx-auto p-4"
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
