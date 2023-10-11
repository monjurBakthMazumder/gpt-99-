import React from 'react';
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Shared/Navbar';
import Blogs from './Components/Blogs';
import Footer from './Components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Category from './Components/dashboard/Category';
import BlogDetails from './Components/BlogDetails';
import UpdateCategory from './Components/dashboard/UpdateCategory';
import Create from './Components/dashboard/Create';
import About from './Components/About';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Blogs/> } />
        <Route path='/blog-details/:id' element={ <BlogDetails/> } />
        <Route path='/category-update/:id' element={<UpdateCategory/>}/>
        <Route path='/category' element={ <Category/> } />
        <Route path='/create' element={ <Create/> } />
        <Route path='/about' element={ <About/> } />
      </Routes>
      <ToastContainer />
      <Footer/>
    </div>
  );
};

export default App;