import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

const PostCardBlog = ({ post, number }) => {
  const url = `/${post.slug}/`;
  const readingTime = readingTimeHelper(post);

  return (
    <>
      <Link
        to={url}
        id="post-card"
        className="mb-4 w-full flex hover:text-iff-orange flex-col md:flex-row items-center pb-5"
      >
        <div className=" md:w-1/3 md:mr-10">
          <img
            src={
              post.feature_image ||
              post.og_image ||
              "/images/blog_placeholder_image.png"
            }
            className={
              "aspect-video w-full rounded object-cover max-w-xl shadow-xl border"
            }
            loading="lazy"
            alt=""
          />
        </div>
        <div className=" md:w-2/3">
          <header className="post-card-header mt-4">
            {post.primary_tag && (
              <div className="line-clamp-1 overflow-clip">
                <Link
                  to={`/tag/${post.primary_tag.slug}`}
                  className={`bg-number-grey capitalize text-bg-black hover:text-iff-orange mr-2 py-1 px-3 rounded-full text-sm`}
                >
                  {post.primary_tag.name}
                </Link>
              </div>
            )}
            {post.featured && <span>Featured</span>}
            <h2 className="text-lg mt-2 md:text-xl mb-1 text-heading-black font-bold hover:text-iff-orange">
              {post.title}
            </h2>
          </header>
          <section className=" text-body-grey line-clamp-6 my-2 md:line-clamp-2">
            {post.excerpt}
          </section>
          <div className="flex text-sm pb-2">
            <div className="mr-3 text-gray-900 text-mono font-light">
              <span>{post.published_at_pretty}</span>
            </div>
            <div className="ml-3 text-gray-900 text-mono font-light">
              <div>{readingTime}</div>
            </div>
          </div>
          <hr />
          <div className="mt-1 pb-2 flex flex-wrap">
            {post.authors.map((author, index) => (
              <Link
                to={`/author/${author.slug}`}
                key={index}
                className=" text-sm text-gray-900 hover:text-iff-orange hover:underline flex items-center space-x-2 mb-2 mr-2"
              >
                <img
                  className="object-cover inline-block h-6 w-6 rounded-full"
                  src={author.profile_image || "/images/icons/avatar.svg"}
                  loading="lazy"
                  alt={author.name}
                  width={40}
                  height={40}
                ></img>
                <span className="inline-block">{author.name}</span>
                {index !== post.authors.length - 1 &&
                  (index === post.authors.length - 2 ? " & " : ", ")}
              </Link>
            ))}
          </div>


        </div>
      </Link>
    </>
  );
};

PostCardBlog.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default PostCardBlog;
