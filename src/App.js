import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import Navbar from "./conponants/Navbar";
import NotFound from "./pages/NotFound"


function App() {
  return (

    <Router>
      <Navbar />
      <div className='p-20 mx-auto'>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/article-list' element={<ArticleList />} />
          <Route path='/article/:name' element={<Article />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>



  );

}

export default App;
