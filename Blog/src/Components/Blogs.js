import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import Advertisement from './Shared/Advertisement';
import axios from 'axios';

const Blogs = () => {

    const[categories,setCategories]=useState([]);
    console.log(categories)
    const[errorMessage,setErrorMessage]=useState("");
    const loadCategories=async()=>{
      try {
        const response=await axios.get("http://localhost:5000/category");
        console.log(response.data);
        setCategories(response.data.readData);
      } catch (error) {
        setErrorMessage("Something is wrong. please try again")
        console.log(error)
      }
    }
    useEffect(()=>{
      loadCategories()
    },[])
    return (
        <div>
        <div className='mx-2'>
            <h1 className='text-center text-2xl lg:text-5xl m-5 font-bold '>For Blogger</h1>
            <div className='text-center'>
            <Link to={'/create'}><input type="text" placeholder="Create a Blog...." className="input input-bordered input-info w-full max-w-xs mb-10" /></Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-2 sm:mx-20 md:mx-32 lg:mx-40  xl:mx-60 gap-4'>
            {categories.map(category=>
            <div className="bg-secondary shadow-xl p-5">
                <div className="px-2 pb-5">
                    <Link to={`/blog-details/${category._id}`} className="text-2xl font-bold hover:text-primary cursor-pointer my-2">{category?.title?.slice(0,20)}</Link><br/>
                    <Link to={`/blog-details/${category._id}`} className="text-sm font-bold text-primary cursor-pointer my-2">{category?.name}</Link><br/>
                    <p className='text-xl mt-1'>{category?.blog?.slice(0,200)}..</p>
                    <Link to={`/blog-details/${category._id}`} className='flex items-end text-xl hover:font-bold text-primary mt-3 hover:ease-in duration-300'>Continue Reading <FiArrowRight className='font-extrabold text-xl'/> </Link>
                </div>
            </div>
       )}
            </div>
        </div>
           <Advertisement/>
        </div>
    );
};

export default Blogs;