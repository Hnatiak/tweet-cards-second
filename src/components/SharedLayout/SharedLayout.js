import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./SharedLayout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SharedLayout() {
  return (
    <LayoutWrapper>
      <Header/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer/>
    </LayoutWrapper>
  );
}

export default SharedLayout;