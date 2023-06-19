import * as React from "react";
import { Link } from "gatsby";

const ProjectCarousel = ({ title, img, url, desc }) => {

  return (
    <>
      <Link to={url} id="post-card" className="p-2 mb-4 flex rounded basis-0 grow items-start h-xl w-lg bg-project-bg mx-1 cursor-pointer">
        <div id="post-features" className="">
          <header className="w-full">
            <img className="w-full rounded" src={img} loading="lazy"/>
          </header>
          <section id="post-card-excerpt" className="line-clamp-5 hover:line-clamp-none mt-7 mx-5 text-heading-black text-sm mb-2">
            <p>{desc}</p>
          </section>
          <footer id="post-card-footer" className="flex mb-3 mx-5">
            <div id="post-card-footer-left" className="mr-3 text-iff-orange text-sm">
              <span>Know more</span>
            </div>
          </footer>
        </div>
      </Link>
    </>
  );
};

export default ProjectCarousel;

