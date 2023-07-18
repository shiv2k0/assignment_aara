import { BsFillShareFill } from "react-icons/bs";
const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col mx-10">
      <article className="max-w-3xl flex justify-center flex-col items-center">
        <h2 className="text-3xl font-bold my-4 ">
          Twitter tweaks its new revenue-sharing policy for creators to expand
          access, increase rate limits
        </h2>
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/11/elon-musk-twitter-dollar-signs-1.jpg?w=1390&crop=1"
          alt="twitter"
          className="w-96 object-cover my-5"
        />
        <div>
          <p>
            Twitter last week began paying creators a share of the ad revenue
            served in the replies of their posts in an effort to retain the
            platform’s most important tweeters, in the face of increased
            competition from Instagram Threads and others. But despite the
            program’s significant payouts, some creators weren’t happy — and
            took their complaints to Twitter owner Elon Musk over the weekend.
            In a series of tweets, Musk addressed creators’ concerns over things
            like the types of accounts that were eligible for monetization, rate
            limits and other issues.
          </p>
        </div>
      </article>
      <button className="bg-blue-600 text-white rounded-sm px-4 h-10 w-fit my-10 flex justify-center items-center gap-4">
        <BsFillShareFill />
        Share
      </button>
    </div>
  );
};
export default Home;
