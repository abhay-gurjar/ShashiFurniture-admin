import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {" "}
        {title
          ? `${title} | Shashi Furniture Admin Dashboard`
          : "Shashi Furniture | Admin Dashboard"}
      </title>
      <meta
        name="description"
        content={
          description
            ? ` ${description} `
            : "Shashi Furniture : Premium Furniture & Home Decor Store Admin Dashboard"
        }
      />
    </Helmet>
  );
};

export default PageTitle;
