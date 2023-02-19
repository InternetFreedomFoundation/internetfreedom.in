import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const ProjectCarousel = ({ post, number }) => {
  const url = `/${post.slug}/`;

  return (
    <>
      <Link to={url} id="post-card" className="mb-16 flex  basis-0 grow items-start min-h-[414px] min-w-[300px] bg-project-bg mx-2">
        <div id="post-features" className="">
          <header className="post-card-header">
            <img src="/images/project_sample.png"/>
            {post.featured && <span>Featured</span>}
          </header>
          <section id="post-card-excerpt" className="mb-3 mt-12 mx-8 text-heading-black mb-2">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </section>
          <footer id="post-card-footer" className="flex mb-3 ml-8">
            <div id="post-card-footer-left" className="mr-3 text-iff-orange">
              <span>Know more</span>
            </div>
          </footer>
        </div>
      </Link>
    </>
  );
};

ProjectCarousel.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
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

export default ProjectCarousel;

