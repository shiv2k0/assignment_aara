import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Assignment</title>
      </Helmet>
      <div className="flex justify-center items-center flex-col m-10">
        <div>
          Welcome to{" "}
          <span className="text-2xl text-blue-700 cursor-pointer">
            myBlog.com
          </span>{" "}
          <br />
          <div className="py-4">
            Navigate to{" "}
            <Link to={"/blogs"} className="text-xl text-blue-700 ">
              {" "}
              Blogs{" "}
            </Link>{" "}
            to read our blogs
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
