import "react-toastify/dist/ReactToastify.css";
import "@styles/main.scss";

import MainLayout from "@components/Layout/MainLayout";
import { publicRoutes } from "@/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchProvider, SlideBarProvider, ToastProvider } from "@/contexts/";
import SlideBar from "@/components/SlideBar";
import { Fragment } from "react";
import Search from "@/components/Search";

function App() {
  return (
    <SearchProvider>
      <ToastProvider>
        <SlideBarProvider>
          <Router>
            <Search />
            <SlideBar />
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = MainLayout;
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </Router>
        </SlideBarProvider>
      </ToastProvider>
    </SearchProvider>
  );
}
export default App;
