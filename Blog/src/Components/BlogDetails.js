import React, { useEffect, useState } from 'react';
import Advertisement from './/Shared/Advertisement';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const BlogDetails = () => {
    const[blog,setBlog]=useState({});
    console.log(blog)
    const[errorMessage,setErrorMessage]=useState("");
    const {id}=useParams();
    const loadBlog=async()=>{
      try {
        const response=await axios.get(`http://localhost:5000/category/${id}`);
        console.log(response.data);
        setBlog(response.data.readData);
      } catch (error) {
        setErrorMessage("Something is wrong. please try again")
        console.log(error)
      }
    }
    useEffect(()=>{
        loadBlog()
    },[])
    
    return (
        <div className='mx-3 mt-10 '>
            <div className='text-center mx-2 sm:mx-20 md:mx-32 lg:mx-40  xl:mx-60'>
                <h1 className='text-2xl sm:text-4xl font-bold text-primary'>{blog.title}{errorMessage}</h1>
                <h2 className='text-xl sm:text-2xl font-bold  my-3'>{blog.name}</h2>
                <h2 className='text-sm sm:text-xl font-bold  my-3'>{blog.email}</h2>
                <h2 className='text-xs sm:text-sm italic my-3 text-primary'>{blog.keywords}</h2>
                <p className='text-justify'>{blog.blog}</p>
                </div>
 
            <Advertisement/>     
            </div>
    );
};

export default BlogDetails;