import React from "react"

import { graphql } from "gatsby"

import Layout from "../../components/layout"

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const ghostPost = ({ data }) => {
  const post = data.ghostPost

  return (
    <Layout>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
          {post.published_at}
        </p>
        <div className="mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
          <div className="divide-y divide-black-300">
            <div className="">
              <a
                href="/"
                aria-label="Article"
                className="py-4 inline-block font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
              >
                {post.title}
              </a>
            </div>
            <p className="text-base text-gray-700 md:text-lg">{post.excerpt}</p>
          </div>
        </div>

        <div className="mb-10 sm:text-center">
          <a href="/" aria-label="Author" className="inline-block mb-1">
            <img
              alt="avatar"
              src={post.authors[0].profile_image}
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
          <div>
            <a
              href="/"
              aria-label="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {post.authors[0].name}
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600">
              Author
            </p>
          </div>
        </div>
        <article
          className="prose mx-auto"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      html
      feature_image
      published_at(formatString: "dddd, MM, YYYY")
      excerpt
      authors {
        id
        name
        profile_image
      }
    }
  }
`
export default ghostPost
