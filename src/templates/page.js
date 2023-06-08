import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

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
      <Layout>
        <div className="mt-16 prose md:prose-lg lg:prose-xl prose-img:rounded-xl prose-img:shadow-xl mx-auto p-4">

          <h1>{page.title}</h1>

          {/* The main page content */}
          <section
            dangerouslySetInnerHTML={{ __html: page.html }}
          />

        </div>

      </Layout>
    </>
  );
};

export default Page;

export const Head = ({ location, data }) => (
  <>
    <MetaData data={data} location={location} type="website" />
  </>
)

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

export const postQuery = graphql`
  query ($slug: String!) {
    ghostPage(slug: { eq: $slug }) {
      ...GhostPageFields
    }
  }
`;
