import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { Layout } from "../components/common";
import { MetaData } from "../components/common/meta";

/**
 * Single page (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */
const Page = ({ data, location }) => {
  const page = data.ghostPage;

  return (
    <>
      <MetaData data={data} location={location} type="website" />
      <Helmet>
        <style type="text/css">{`${page.codeinjection_styles}`}</style>
      </Helmet>
      <Layout>
        <div className="mt-16 prose md:prose-lg lg:prose-xl prose-img:rounded-xl prose-img:shadow-xl mx-auto p-4">

          <h1 data-pagefind-meta="title">{page.title}</h1>

          {/* The main page content */}
          <section
            data-pagefind-body
            dangerouslySetInnerHTML={{ __html: page.html }}
          />

        </div>

      </Layout>
    </>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default Page;

export const postQuery = graphql`
  query ($slug: String!) {
    ghostPage(slug: { eq: $slug }) {
      ...GhostPageFields
    }
  }
`;
