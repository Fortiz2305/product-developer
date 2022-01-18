import React, { useEffect } from "react";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import { trackEvent } from "../utils/TrackEvent";

const NotFound: React.FunctionComponent = () => {
  useEffect(() => {
    trackEvent({ name: `404`, data: { path: document.location.pathname } });
  });

  return (
    <Layout>
      <h1>404 - Page Not Found</h1>
      <p>Unfortunately we couldn't find what you were looking for :(</p>
    </Layout>
  );
};

export default NotFound;
