import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateCategory = () => {
  const[categories,setCategories]=useState({});
  console.log(categories)
  const[errorMessage,setErrorMessage]=useState("");
  const {id}=useParams();
  const loadCategories=async()=>{
    try {
      const response=await axios.get(`http://localhost:5000/category/${id}`);
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
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    axios.put(`http://localhost:5000/category/${id}`, data)
    .then( (response)=> {
      if(response.status===201){
        toast.success('Successfully submitted!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      else{
        toast.error('Not submitted, try again.', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      
    })
    .catch( (error)=> {
      console.log(error);
    });
  }
    return (
        <div className='mx-2 sm:mx-20 md:mx-32 lg:mx-40  xl:mx-60'>
            <section className='border-2 border-primary p-10 rounded-lg m-10 '>
                <h1 className='font-bold text-3xl '>Update Category </h1>
                
                <div className='my-3'><label className='text-gray-600 text-sm text-rose-700'>You can only change story</label></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                      <label className='text-gray-600 text-sm'>Enter your name</label>
                      <input value={categories.name} className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'{...register("name", { required: true })}/>
                      <p className='mb-3'>  {errors.name && <span className='text-rose-700'>Please Enter your Name</span>}</p>
                    </div>
                    <div>
                      <label className='text-gray-600 text-sm'>Enter your email</label>
                      <input value={categories.email} className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'{...register("email", { required: true })}/>
                      <p className='mb-3'>  {errors.email && <span className='text-rose-700'>Please Enter your email</span>}</p>
                    </div>
                    <div>
                      <label className='text-gray-600 text-sm'>Enter title</label>
                      <input defaultValue={categories.title} className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'{...register("title", { required: true })}/>
                      <p className='mb-3'>  {errors.title && <span className='text-rose-700'>Please enter title</span>}</p>
                    </div>
                    <div>
                      <label className='text-gray-600 text-sm'>Enter keywords</label>
                      <input defaultValue={categories.keywords} className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'{...register("keywords", { required: true })}/>
                      <p className='mb-3'>  {errors.keywords && <span className='text-rose-700'>Please Enter keywords</span>}</p>
                    </div>
                    <div>
                      <label className='text-gray-600 text-sm'>White the blog</label>
                      <textarea defaultValue={categories.blog} className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base 	resize-none' rows="10" cols="33"{...register("blog", { required: true })}/>
                      <p className='mb-3'>  {errors.blog && <span className='text-rose-700'>Please white the blog</span>}</p>
                    </div>
                    
                    <input className='btn btn-primary sm:btn-md btn-sm font-bold' type='Submit' value='Submit' />
                </form>
            </section>
        </div>
    );
};

export default UpdateCategory;