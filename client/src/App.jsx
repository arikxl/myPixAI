import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


import { HomePage, CreatePostPage } from './pages'
import { Header } from './components';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <main className="sm:-8 px-4 py-2 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)">
          <Routes>
            <Route path="/" element={<HomePage/> }/>
            <Route path="/create-post" element={<CreatePostPage/> }/>
          </Routes> 
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App