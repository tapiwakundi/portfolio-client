import React from 'react';
import { client } from './graphql/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import { Project } from "./pages/Project"
import './App.css';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="project/:id" element={<Project />} />
          </Routes>
        </Router>
      </ApolloProvider>


    </div>
  );
}

export default App;
