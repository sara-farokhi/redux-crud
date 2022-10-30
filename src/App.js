import Header from "./components/ui/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home";
import Page404 from "./components/Pages/Page404"
import About from "./components/about/About"
import PostRouter from "./components/posts/PostRouter"
import store from "./redux/store";
import { Provider } from "react-redux"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="container py-5">
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about-us" element={<About />}></Route>
              <Route path="/posts/*" element={<PostRouter />}></Route>
              <Route path="/*" element={<Page404 />}></Route>
            </Routes>
          </Provider>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
