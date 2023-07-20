import React from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import './App.css';
import SearchForm from "./components/SearchForm/SearchForm";

const App = () => {

  return (
      <>
          <Layout>
              <Routes>
                  <Route path="/" element={(<SearchForm />)}/>
              </Routes>
          </Layout>
      </>
  );
};

export default App;
