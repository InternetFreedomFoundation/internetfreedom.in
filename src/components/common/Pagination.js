import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import ReactPaginate from "react-paginate";
import { navigate } from "gatsby";

const Pagination = ({ pageContext }) => {
  const {
    previousPagePath,
    nextPagePath,
    pageNumber,
    numberOfPages,
    pathPrefix,
  } = pageContext;

  function handlePageClick(e) {
    if (e.selected !== pageNumber) {
      if (e.selected == 0) {
        navigate(`/${pathPrefix}`);
      } else {
        navigate(`/${pathPrefix}/${e.selected + 1}`);
      }
    }
  }

  return (
    <nav className="pagination" role="navigation">
      <ReactPaginate
        breakLabel="."
        containerClassName={"pagination"}
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={numberOfPages}
        previousLabel="<"
        marginPagesDisplayed={2}
        renderOnZeroPageCount={null}
        initialPage={pageNumber}
      />
    </nav>
  );
};

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Pagination;
