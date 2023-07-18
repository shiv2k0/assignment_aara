const Contact = () => {
  return (
    <div className="flex flex-col items-center  overflow-y-hidden py-10 ">
      <div className="flex justify-center py-8 text-3xl text-blue-700 font-bold">
        myBlog.com
      </div>
      <div className=" w-[80vw] max-w-xl mx-10  rounded-xl flex flex-col gap-3 ">
        <div className="flex justify-between items-center border p-5 bg-white ">
          <div className="flex gap-5">
            <div className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/220/220236.png"
                alt="whatsapp"
                className="h-10"
              />
            </div>
            <div className="flex justify-center  flex-col">
              <div className="text-xs font-sans font-bold uppercase">
                Chat Now
              </div>
              <div className="text-xs text-gray-500  ">Send me your query</div>
            </div>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=918957850188"
            className="flex justify-center items-center bg-green-400 text-white w-28 text-sm px-3 font-bold rounded-sm h-8"
          >
            Message me
          </a>
        </div>
        <div className="flex justify-between items-center border p-5 bg-white ">
          <div className="flex gap-5">
            <div className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                alt="LinkedIn"
                className="h-10"
              />
            </div>
            <div className="flex justify-center  flex-col">
              <div className="text-xs font-sans font-bold uppercase">
                Connect on LinkedIn
              </div>
              <div className="text-xs text-gray-500  ">Join me on LinkedIn</div>
            </div>
          </div>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/shivavns00/"
            className="flex justify-center items-center bg-blue-600 text-white w-28 text-sm px-3 font-bold rounded-sm h-8"
          >
            Connect
          </a>
        </div>
        <div className="flex justify-between items-center border p-5 bg-white ">
          <div className="flex gap-5">
            <div className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                alt="LinkedIn"
                className="h-10"
              />
            </div>
            <div className="flex justify-center  flex-col">
              <div className="text-xs font-sans font-bold uppercase">
                Email me
              </div>
              <div className="text-xs text-gray-500  ">Send me your query</div>
            </div>
          </div>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/shivavns00/"
            className="flex justify-center items-center bg-red-600 text-white w-28 text-sm px-3 font-bold rounded-sm h-8"
          >
            Email
          </a>
        </div>
        <div className="flex justify-between items-center border p-5 bg-white ">
          <div className="flex gap-5">
            <div className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/25/25657.png"
                alt="github"
                className="h-10"
              />
            </div>
            <div className="flex justify-center  flex-col">
              <div className="text-xs font-sans font-bold uppercase">
                github
              </div>
              <div className="text-xs text-gray-500  ">Check out github</div>
            </div>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/shiv2k0"
            className="flex justify-center items-center bg-black text-white w-28 text-sm px-3 font-bold rounded-sm h-8"
          >
            Check Out
          </a>
        </div>
        <div className="flex justify-between items-center border p-5 bg-white ">
          <div className="flex gap-5">
            <div className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3476/3476457.png"
                alt="portfolio"
                className="h-10"
              />
            </div>
            <div className="flex justify-center  flex-col">
              <div className="text-xs font-sans font-bold uppercase">
                Portfolio
              </div>
              <div className="text-xs text-gray-500  ">Check out Portfolio</div>
            </div>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://portfolio-cee12.web.app/"
            className="flex justify-center items-center border text-sm w-28 px-3 font-bold rounded-sm h-8"
          >
            Check Out
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
