import React from "react";

export default function PageMetaData({
  title = "Fresh cart",
  description = "Fresh cart - your one-stop shop for all things fresh and organic.",
  author = "Fresh cart team",
  keywords = "Fresh, groceries, organic, and fresh produce",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
    </>
  );
}
