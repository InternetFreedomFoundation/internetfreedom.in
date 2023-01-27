import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

/**
 * Navigation component
 *
 * The Navigation component takes an array of your Ghost
 * navigation property that is fetched from the settings.
 * It differentiates between absolute (external) and relative link (internal).
 * You can pass it a custom class for your own styles, but it will always fallback
 * to a `site-nav-item` class.
 *
 */
const Navigation = ({ data, navClass }) => (
  <>
    {data.map((navItem, i) => {
      if (navItem.url.match(/^\s?http(s?)/gi)) {
        return (
          <a
            className={navClass}
            href={navItem.url}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            {navItem.label}
          </a>
        );
      } else {
        return (
          <Link className={navClass} to={navItem.url} key={i}>
            {navItem.label}
          </Link>
        );
      }
    })}
    {/* <div className={navClass}>
      <div class="relative flex items-center h-8 rounded-full focus-within:shadow-lg bg-bg-dark-grey overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
          </div>

          <input
          class="peer h-full w-24 bg-bg-dark-grey outline-none text-sm text-white pr-2"
          type="text"
          id="search"
          placeholder="Search" /> 
      </div>
    </div> */}
  </>
);

Navigation.defaultProps = {
  navClass: `site-nav-item`,
};

Navigation.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  navClass: PropTypes.string,
};

export default Navigation;
