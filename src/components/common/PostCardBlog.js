import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Tags } from "@tryghost/helpers-gatsby";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

const PostCardBlog = ({ post, number }) => {
  const url = `/${post.slug}/`;
  const readingTime = readingTimeHelper(post);

  return (
    <>
      <Link to={url} id="post-card" className="mb-4 w-full flex flex-col md:flex-row items-center pb-5 border-b-2 md:border-0">
        <div className=" md:w-1/3 md:mr-4">
          <img
            src={post.og_image}
            className={
              "aspect-video w-full rounded object-cover max-w-xl"
            }
            alt=""
          />
        </div>
        <div className=" md:w-2/3">
          <header className="post-card-header mt-4">
            <div className="line-clamp-1 overflow-clip">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`bg-slate-100 ${
                    index > 0 ? "hidden md:inline" : ""
                  } text-slate-500 mr-2 py-1 px-2 rounded-lg text-sm`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
            {post.featured && <span>Featured</span>}
            <h2 className="text-lg mt-2 md:text-xl mb-1 text-heading-black font-bold hover:underline">
              {post.title}
            </h2>
          </header>
          <section className=" text-body-grey line-clamp-6 my-2 md:line-clamp-2">
            {post.excerpt}
          </section>
          <div>
          {post.authors.map((author, index) => 
            <span className=" text-sm font-semibold text-neutral-600 hover:underline">
              {author.name} { index !== post.authors.length - 1 && "& "}
            </span>
          )}
          </div>
          <footer className="flex text-sm font-light">
            <div className="mr-3 text-iff-orange">
              <span>{post.published_at_pretty}</span>
            </div>
            <div className="ml-3 text-iff-orange font-light">
              <div>{readingTime}</div>
            </div>
          </footer>
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

