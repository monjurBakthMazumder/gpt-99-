import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Create = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
      axios.post('http://localhost:5000/category', data)
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
        <div>
                        <section className='border-2 border-primary rounded-lg p-10 mx-2 sm:mx-20 md:mx-32 lg:mx-40  xl:mx-60 my-10'>
                <h1 className='font-bold text-3xl mb-3'>Create</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                      <label className='text-gray-600 text-sm'>Enter your name</label>
                      <input className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'{...register("name", { required: true })}/>
                      <p className='mb-3'>  {errors.name && <span className='text-rose-700'>Please Enter your Name</span>}</p>
                    </div>
                    <div>
                      <label className='text-gray-600 text-sm'>Enter your email</label>
                      <input className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'{...register("email", { required: true })}/>
                      <p className='mb-3'>  {errors.email && <span className='text-rose-700'>Please Enter your email</span>}</p>
                    </div>
                    <div>
                      <label className='text-gray-600 text-sm'>Enter title</label>
                      <input className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'{...register("title", { required: true })}/>
                      <p className='mb-3'>  {errors.title && <span className='text-rose-700'>Please enter title</span>}</p>
                    </div>
                    <div>
                      <label className='text-gray-600 text-sm'>Enter keywords</label>
                      <input className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'{...register("keywords", { required: true })}/>
                      <p className='mb-3'>  {errors.keywords && <span className='text-rose-700'>Please Enter keywords</span>}</p>
                    </div>
                    <div>
                      <label className='text-gray-600 text-sm'>White the blog</label>
                      <textarea  className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base 	resize-none' rows="10" cols="33"{...register("blog", { required: true })}/>
                      <p className='mb-3'>  {errors.blog && <span className='text-rose-700'>Please white the blog</span>}</p>
                    </div>
                    
                    <input className='btn btn-primary sm:btn-md btn-sm font-bold' type='Submit' value='Submit' />
                </form>
            </section>
        </div>
    );
};

export default Create;