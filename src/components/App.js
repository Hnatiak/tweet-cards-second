import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('../pages/HomePage/HomePage'))
const Tweets = lazy(() => import("../pages/TweetsPage/TweetsPage"));

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
