import React, { useEffect } from 'react';

const Search = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.PagefindUI) {
      new window.PagefindUI({ 
        element: "#search", 
        showSubResults: true,
        showImages: false
      });
    } else {
      console.error('Search Could not be loaded');
    }
  }, []);

  return <div id="search"></div>;
};

export default Search;
