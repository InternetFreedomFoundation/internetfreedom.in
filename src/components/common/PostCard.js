import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Tags } from "@tryghost/helpers-gatsby";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

const PostCard = ({ post, number }) => {
  const url = `/${post.slug}/`;
  const readingTime = readingTimeHelper(post);

  return (
    <>
      <Link to={url} id="post-card" className="mb-16 flex items-start">
        <h1 id="number" className="text-6xl text-number-grey">{number}</h1>
        <div id="post-features" className="ml-6">
          <header className="post-card-header">
            {post.featured && <span>Featured</span>}
            <h2 id="post-card-title" className="text-xl mb-3 text-heading-black font-bold">
              {post.title}
            </h2>
          </header>
          <div id="post-card-excerpt" className="mb-3 text-body-grey">{post.excerpt}</div>
          <footer id="post-card-footer" className="flex mb-3">
            <div id="post-card-footer-left" className="mr-3 text-iff-orange">
              <span>{post.published_at_pretty}</span>
            </div>
            <div id="post-card-footer-left" className="ml-3 text-iff-orange flex-1">
              <div>{readingTime}</div>
            </div>
            <div id="post-card-footer-right" className="ml-3 mr-3 text-iff-orange underline ">
              <div>Read Now</div>
            </div>
          </footer>
        </div>
      </Link>
    </>
  );
};

PostCard.propTypes = {
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

export default PostCard;

