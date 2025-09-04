// src/App.js

import React from 'react';
import Header from './components/Header';
import PropertyListPage from './pages/PropertyListPage';
import PostPropertyPage from './pages/PostPropertyPage';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Render the Property List Page */}
        <PropertyListPage />

        {/* Uncomment the line below and comment out the line above to see the Post Property Page */}
        {/* <PostPropertyPage /> */}
      </main>
    </div>
  );
}

export default App;