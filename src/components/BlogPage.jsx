import { useParams } from "react-router-dom";
import articles from "../database/data";
import { BsFillShareFill } from "react-icons/bs";

const BlogPage = () => {
  //   const [article, setArticle] = useState("");
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);
  console.log(article);
  console.log(id);
  return (
    <div className="flex flex-col justify-center items-center my-4">
      <div className="py-8 text-3xl font-bold px-10">{article.title}</div>
      <img src={article.imgUrl} alt={article.id} className="w-96 pb-10" />
      <p className="px-10">{article.content}</p>
      <button className="my-5 bg-blue-600 px-5 py-1 text-white flex items-center gap-3 rounded-sm">
        <BsFillShareFill />
        Share
      </button>
    </div>
  );
};
export default BlogPage;
