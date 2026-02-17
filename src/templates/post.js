import * as React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";

import { Layout } from "../components/common";
import { MetaData } from "../components/common/meta";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";
import NewsletterWidget from "../components/NewsletterWidget";

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
  const post = data.ghostPost;
  const readingTime = readingTimeHelper(post);
  const relatedArticles = data.allGhostPost.nodes;

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
        <div data-pagefind-body className="min-h-screen bg-white">
          <header className="border-b border-gray-200">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
              <div className="mb-6">
                {post.tags.slice(0, 1).map((tag) => (
                  <Link
                    key={tag.slug}
                    to={`/tag/${tag.slug}`}
                    className="inline-block text-sm font-medium tracking-wider uppercase text-iff-orange hover:underline"
                    data-pagefind-filter="tag"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight tracking-tight mb-6"
                data-pagefind-meta="title"
              >
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-lg sm:text-xl text-gray-600 font-serif leading-relaxed mb-8">
                  {post.excerpt}
                </p>
              )}

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  {post.authors.map((author) => (
                    <div
                      key={author.slug}
                      className="flex items-center space-x-3"
                    >
                      <Link to={`/author/${author.slug}`}>
                        <img
                          src={
                            author.profile_image || "/images/icons/avatar.svg"
                          }
                          loading="lazy"
                          alt={author.name}
                          className="w-12 h-12 rounded-full object-cover border border-gray-200"
                        />
                      </Link>
                      <div>
                        <Link
                          to={`/author/${author.slug}`}
                          className="block text-sm font-semibold text-gray-900 hover:text-iff-orange hover:underline"
                          data-pagefind-filter="author"
                        >
                          {author.name}
                        </Link>
                        <p className="text-xs text-gray-500 mt-0.5">
                          <span data-pagefind-meta="date">
                            {post.published_at_pretty}
                          </span>
                          <span className="mx-2">·</span>
                          <span>{readingTime}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {post.feature_image && (
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <figure className="relative">
                <img
                  src={post.feature_image}
                  alt={post.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </figure>
            </div>
          )}

          <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div
              className="prose prose-lg prose-slate max-w-none 
                         prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900
                         prose-p:font-serif prose-p:text-gray-700 prose-p:leading-relaxed
                         prose-a:text-iff-orange prose-a:no-underline hover:prose-a:underline
                         prose-strong:text-gray-900 prose-strong:font-semibold
                         prose-blockquote:border-l-4 prose-blockquote:border-iff-orange prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:font-serif
                         prose-img:rounded-lg prose-img:shadow-md
                         prose-figure:my-8
                         prose-hr:border-gray-200
                         first:prose-p:text-xl first:prose-p:font-serif first:prose-p:leading-relaxed first:prose-p:text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag.slug}
                    to={`/tag/${tag.slug}`}
                    className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    data-pagefind-filter="tag"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <NewsletterWidget />
          </div>

          {relatedArticles.length > 0 && (
            <section className="bg-gray-50 py-16">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
                    More to Read
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedArticles.map((relatedArticle, index) => (
                      <article key={relatedArticle.slug} className="group">
                        <Link to={`/${relatedArticle.slug}`} className="block">
                          <div className="flex items-start space-x-4">
                            <span className="text-4xl font-serif font-bold text-gray-200 group-hover:text-iff-orange transition-colors">
                              {index + 1}
                            </span>
                            <div>
                              <h3 className="text-lg font-serif font-semibold text-gray-900 group-hover:text-iff-orange transition-colors leading-tight mb-2">
                                {relatedArticle.title}
                              </h3>
                              <p className="text-sm text-gray-600 line-clamp-3 font-serif leading-relaxed mb-3">
                                {relatedArticle.excerpt}
                              </p>
                              <p className="text-xs text-gray-400">
                                {relatedArticle.published_at_pretty} ·{" "}
                                {relatedArticle.reading_time} min read
                              </p>
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
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
      excerpt: PropTypes.string,
      published_at_pretty: PropTypes.string,
      tags: PropTypes.array,
      authors: PropTypes.array,
    }).isRequired,
    allGhostPost: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default Post;

export const postQuery = graphql`
  query ($slug: String!, $tags: [String]) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
    allGhostPost(
      filter: {
        tags: { elemMatch: { slug: { in: $tags } } }
        slug: { ne: $slug }
      }
      limit: 3
      sort: { published_at: DESC }
    ) {
      nodes {
        excerpt
        slug
        title
        published_at
        reading_time
        published_at_pretty: published_at(formatString: "MMM DD, YYYY")
      }
    }
  }
`;
