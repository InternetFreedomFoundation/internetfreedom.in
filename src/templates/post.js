import * as React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";

import { Layout } from "../components/common";
import { MetaData } from "../components/common/meta";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";


/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
  const post = data.ghostPost;
  const readingTime = readingTimeHelper(post);

  const addDefaultSrc = (e) => {
    e.target.src = "/images/icons/avatar.svg";
  };

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      <Helmet>
        <style type="text/css">{`${post.codeinjection_styles}`}</style>
      </Helmet>
      <Layout>
        <div className="">
          <div className="bg-bg-black text-white">
            <div className="px-4 py-4 mx-auto md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg lg:pt-16">
              <div className="md:mx-auto text-left">
                {post.primary_tag &&
                  <div>
                    <Link
                      to={`/tag/${post.primary_tag?.slug}`}
                      aria-label="Author"
                      className="text-sm p-2 font-mono bg-zinc-800 rounded-lg tracking-tight text-zinc-400 mr-2 mb-2 capitalize hover:underline hover:underline hover:underline-offset-4">
                      {post.primary_tag.name}
                    </Link>
                  </div>
                }

                <div className="max-w-2xl">
                  <h1 className="my-4 font-sans block tracking-tight md:tracking-normal break-normal text-2xl md:text-4xl text-left font-extrabold text-white">
                    {post.title}
                  </h1>
                  <p className="text-left text text-zinc-500">{post.excerpt}</p>
                </div>

                <div className="mb-4 mt-8 flex relative -translate-x-1">
                  <div className="flex flex-col md:flex-row">
                    {post.authors.map((author, index) => (
                      <div className="flex items-center">
                        <Link
                          to={`/author/${author.slug}`}
                          aria-label="Author"
                          className="inline-block mb-1"
                        >
                          <img
                            src={
                              author.profile_image || "/images/icons/avatar.svg"
                            }
                            className="object-cover w-8x h-8 rounded-full z-10  border-none outline-none"
                          />
                        </Link>
                        <div className="text-center mb-[0.2rem]">
                          <Link
                            to={`/author/${author.slug}`}
                            aria-label="Author"
                            className="font-medium text-sm text-iff-orange hover:underline ml-2 mr-8"
                          >
                            {author.name}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="ml-auto">
                    <p className="ml-auto font-light mt-2 text-sm text-iff-orange border-l-2 pl-2 border-iff-orange">
                      {post.published_at_pretty} <br /> {readingTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative blog-feature_image">
            <div
              className={
                "w-full p-4 md:p-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
              }
            >
              <img
                src={post.feature_image}
                className=" rounded-md w-full lg:max-w-4xl mx-auto"
                alt=""
              />
            </div>
          </div>

          <article
            className="mt-16 mx-auto prose md:prose-lg prose-img:rounded-xl prose-img:shadow-xl hover:prose-headings:underline underline-offset-4 hover:prose-a:text-iff-orange px-4 select-none"
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

