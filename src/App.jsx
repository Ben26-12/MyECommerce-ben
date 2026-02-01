import { useState } from "react";

import "@styles/main.scss";
import MainLayout from "@components/Layout";
import Header from "@components/Header/";
import Footer from "@components/Footer/";
function App() {
  return (
    <>
      <h1>Welcome Ben</h1>
      <MainLayout>
        <Header />
        My content
        <Footer />
      </MainLayout>
    </>
  );
}
export default App;
