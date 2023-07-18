import { Link } from "react-router-dom";
import articles from "../database/data";

const Blogs = () => {
  return (
    <div className="flex flex-col w-[70vw] min-w-md max-w-4xl">
      {articles.map((article) => (
        <article className="flex m-10 gap-5 " key={article.id}>
          <img
            src={article.imgUrl}
            alt={article.id}
            className="w-52 h-52 object-cover hidden md:block"
          />
          <div>
            <img
              src={article.imgUrl}
              alt={article.id}
              className="w-52 h-52 object-cover block md:hidden "
            />
            <Link to={article.id}>
              <div className="text-2xl font-bold">{article.title}</div>
            </Link>
            <div>
              {article.content.slice(0, 200)}...{" "}
              <Link to={article.id}>
                <span className="text-blue-700">more</span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
export default Blogs;
