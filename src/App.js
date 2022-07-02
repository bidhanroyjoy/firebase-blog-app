import React from 'react';
import { Home,Detail,About,AddEditBlog,Auth,NotFound } from './pages';
import { Header,BlogSection,MostPopular,Spinner,Tags,Trending } from './components';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="App"> 
     <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/detail/:id' element={<Detail />} />
      <Route exact path='/create' element={<AddEditBlog />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='*' element={<NotFound  />} />
     </Routes>
    </div>
  );
}

export default App;
