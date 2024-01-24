import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MCardHdl from "./muicard/MCardHdl";
import TodoHdl from "./todo/TodoHdl";
import InfiniteScroll from "./infiniteScroll/InfiniteScroll";
import PostHdl from "./post/PostHdl";
import HomeLayout from "./HomeLayout";

const PageNavigate = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/HomeLayout" element={<HomeLayout />} />

      <Route path="/InfiniteScroll" element={<InfiniteScroll />} />
      <Route path="/Todo" element={<TodoHdl />} />
      <Route path="/Mcard" element={<MCardHdl />} />
      <Route path="/Post" element={<PostHdl />} />
    </Routes>
  );
};

export default PageNavigate;
