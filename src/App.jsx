import "@styles/main.scss";
import MainLayout from "@components/Layout/MainLayout";
import { publicRoutes, privateRoutes } from "@/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SlideBarProvider } from "@/contexts/";
import SlideBar from "@/components/SlideBar";

function App() {
  return (
    <SlideBarProvider>
      <Router>
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
  );
}
export default App;
