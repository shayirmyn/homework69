import React from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import SearchForm from "./components/SearchForm/SearchForm";
import GetOneShow from "./components/GetOneShow/GetOneShow";
import "./App.css";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<SearchForm />}>
            <Route path="shows/:id" element={<GetOneShow />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
