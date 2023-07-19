import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";
import articles from "../database/data";
import { BsFillShareFill } from "react-icons/bs";
import { Helmet } from "react-helmet";

const BlogPage = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

  const copyUrl = () => {
    window.alert("Link copied to clipboard");
  };
  return (
    <>
      <Helmet>
        <head>
          <title className="capitalize">{article.id}</title>
          <meta name="title" content={article.title} />
          <meta name="description" content={article.content} />

          {/* fb */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:title" content={article.title} />
          <meta property="og:description" content={article.content} />
          <meta property="og:image" content={article.imgUrl} />

          {/* tw */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={window.location.href} />
          <meta property="twitter:title" content={article.id} />
          <meta property="twitter:description" content={article.content} />
          <meta property="twitter:image" content={article.imgUrl} />
          {/* img */}
          <meta property="og:type" content="website" />
          <meta property="og:image:type" content="image/jpeg"></meta>
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
        </head>
        <body>
          <link itemprop="thumbnailUrl" href={article.imgUrl} />
          <span
            itemprop="thumbnail"
            itemscope
            itemtype="http://schema.org/ImageObject"
          >
            <link itemprop="url" href={window.location.href} />
          </span>
        </body>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-4">
        <div className="py-8 text-3xl font-bold px-10">{article.title}</div>
        <img src={article.imgUrl} alt={article.id} className="w-96 pb-10" />
        <p className="px-10">{article.content}</p>
        <CopyToClipboard text={window.location.href}>
          <button
            onClick={copyUrl}
            className="my-5 bg-blue-600 px-5 py-1 text-white flex items-center gap-3 rounded-sm"
          >
            <BsFillShareFill />
            Share
          </button>
        </CopyToClipboard>
      </div>
    </>
  );
};
export default BlogPage;
