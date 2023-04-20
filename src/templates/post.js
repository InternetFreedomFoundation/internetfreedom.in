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
              <div className="md:mx-auto  text-left">
                {post.primary_tag &&
                  <div className="pb-4">
                    <Link
                      to={`/tag/${post.primary_tag?.slug}`}
                      aria-label="Author"
                      className="p-2 px-4 text-sm bg-bg-light-grey rounded-full tracking-tight text-gray-300 mr-2 capitalize hover:text-iff-orange">
                      {post.primary_tag.name}
                    </Link>
                  </div>
                }

                <div>
                  <h1 className="mb-1 font-sans block tracking-tight md:tracking-normal break-normal text-xl md:text-2xl text-left font-extrabold text-white">
                    {post.title}
                  </h1>
                  <p className="text-left text text-body-grey text-big-body">{post.excerpt}</p>
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
                            className="font-medium text-iff-orange ml-2 mr-8"
                          >
                            {author.name}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="ml-auto">
                    <p className="ml-auto mt-2 text-sm text-iff-orange border-l-2 pl-2 border-iff-orange">
                      {post.published_at_pretty} <br /> {readingTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <article
            className="mt-16 mx-auto prose md:prose-xl prose-img:rounded-xl prose-img:shadow-xl prose-img:border hover:prose-headings:underline underline-offset-4 hover:prose-a:text-iff-orange px-4 select-none"
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

