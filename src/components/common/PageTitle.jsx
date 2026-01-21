import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {" "}
        {title
          ? `${title} | SHAAHI FURNITURE Admin Dashboard`
          : "SHAAHI FURNITURE | Admin Dashboard"}
      </title>
      <meta
        name="description"
        content={
          description
            ? ` ${description} `
            : "SHAAHI FURNITURE : Premium Furniture & Home Decor Store Admin Dashboard"
        }
      />
    </Helmet>
  );
};

export default PageTitle;
