import React from 'react'
import dbConnect from '../dbConnect'
import Task from ".././modle/Task"
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Showdata = async() => {

   dbConnect();
   const tasks= await Task.find();
   async function deletetask(data){
    "use server";
    let id = JSON.parse(data.get("id")?.valueOf());
    await Task.deleteOne({_id:id});
    redirect("/showdata");
   }



  return (
    <div className='m-10 space-y-5'>
         <h1 className='text-xl font-bold'> All Task</h1>
         <div>
            <ul className='flex font-bold'>
                <li className='flex-1'>Title</li>
                <li className='flex-1'>Task</li>
                <li className='flex-1'>Operation</li>
            </ul>
            <hr/>
            {
                tasks.map((element)=>(
                    <ul key={element._id} className='flex font-bold'>
                <li className='flex-1'>{element.title}</li>
                <li className='flex-1'>{element.task}</li>
                <li className='flex-1'>
                    <form action={deletetask}>
                        <input type='hidden' id='id' name='id' value={JSON.stringify(element._id)}/>
                    <button type='submit' className='p-2 m-2 bg-red-600 text-white hover:cursor-pointer'>Delete</button>
                    </form>
                    <Link href={"/Edit/"+element._id}>
                    <button className='p-2 m-2 bg-blue-600 text-white hover:cursor-pointer'>Edit</button>
                    </Link>
                </li>
            </ul>
                ))
            }
         </div>
    </div>
  )
}

export default Showdata