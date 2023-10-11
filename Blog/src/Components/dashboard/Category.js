import React, { useEffect, useState } from 'react';
import { BiCalendarEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const Category = () => {
  
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
  const handleCategoryDelete=async(id)=>{
    const proceed=window.confirm("Are you sure? you want to delete? ");
    if (proceed){
      await axios.delete(`http://localhost:5000/category/${id}`)
      .then(response=>{
        if(response.data.blog.deletedCount>0)
        {
          const remaining=categories.filter(item=>item._id !==id);
          setCategories(remaining)
        }
      })
      console.log(id)
    }
  }
    return (
      <div className='mx-2 sm:mx-20 md:mx-32 lg:mx-40  xl:mx-60 mt-10' >
            <div className='text-center m-10'>
            <span className='text-white text-xl md:text-2xl lg:text-3xl font-bold bg-primary rounder p-2 rounded'>Total Story: {categories.length}</span><br/><p className='my-2'>{errorMessage}</p>
            </div>
            <section className='overflow-auto'>
            <table className="table w-full my-5">
{/* head */}
<thead>
  <tr>
    <th>No</th>
    <th className='text-center'>Title</th>
    <th className='text-center'>Blogger name</th>
    <th className='text-end'>Action</th>
  </tr>
</thead>
<tbody>
  {/* row 1 */}
  {categories.map((category,index)=>
       <tr>
         <th>{index+1}</th>
 <td className='text-center text-primary'><Link to={`/blog-details/${category._id}`}>{category.title?.slice(0,20)}</Link></td>
 <td className='text-center text-primary'><Link to={`/blog-details/${category._id}`}>{category.name?.slice(0,20)}</Link></td>
 <td><div className='flex gap-3 text-2xl justify-end'>
  <Link to={`/category-update/${category._id}`}><BiCalendarEdit/></Link>
  <button onClick={()=>handleCategoryDelete(category._id)}><AiOutlineDelete/></button>

 
 </div></td>
       </tr>
       
       )}

</tbody>
</table>
            </section>
        </div>
    );
};

export default Category;