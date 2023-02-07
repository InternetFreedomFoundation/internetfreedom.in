import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } =
    pageContext;

  return (
    <nav className="flex justify-center">
      <ul class="flex">
        <div>
          {previousPagePath && (

            <Link
              className="underline relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              to={previousPagePath} rel="prev">
              Previous
            </Link>

          )}
        </div>
        {numberOfPages > 1 && (
          <div className="relative block mx-2 py-1.5 px-3 rounded border-2 transition-all duration-300 rounded">
            Page {humanPageNumber} of {numberOfPages}
          </div>
        )}
        <div>
          {nextPagePath && (
            <Link
              className="underline relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              to={nextPagePath} rel="next">
              Next
            </Link>
          )}
        </div>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Pagination;
