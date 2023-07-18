import { Route, Routes } from "react-router-dom";
import { About, BlogPage, Blogs, Contact, Header, Home } from "./components";

function App() {
  return (
    <div className="App  min-h-[100vh] bg-blue-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
