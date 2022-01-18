import React, { useEffect } from "react";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";

const NotFound: React.FunctionComponent = () => {
  useEffect(() => {
    window.plausible(`404`, { props: { path: document.location.pathname } });
  });

  return (
    <Layout>
      <h1>404 - Page Not Found</h1>
      <p>Unfortunately we couldn't find what you were looking for :(</p>
    </Layout>
  );
};

export default NotFound;
