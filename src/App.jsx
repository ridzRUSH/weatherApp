import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import Search from "./components/Search";
import About from "./components/About";
import Error from "./components/error";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout>
                <Search />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <Error>
                  {
                    <>
                      <h1>OOps something went Wrong!!!</h1>
                    </>
                  }
                </Error>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
