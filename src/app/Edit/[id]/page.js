import React from 'react'
import dbConnect from '@/app/dbConnect'
import Task from "../../modle/Task"
import { redirect } from 'next/navigation';

const Edit = async({params}) => {
    dbConnect();
    const task= await Task.findOne({_id:params.id});
    async function Updatetask(data){
        "use server";
        let title = data.get("title")?.valueOf();
        let task = data.get("task")?.valueOf();
        let updatedtask = await Task.findByIdAndUpdate({_id:params.id},{title,task});
        redirect("/showdata");
    }

  return (
    <main className='m-10 aspect-y-5'>
    <h1 className='text-xl font-bold'>Edit task</h1>
    <form action={Updatetask} >
      <div>
        <label htmlFor='title' className='text-lg'>
          title
        </label>
        <br/>
      <input type='text' name='title' id='title' 
       className='w-[100%] bg-slate-200 h-10 p-3'
       defaultValue={task.title}/>
      </div>
      <div>
        <label htmlFor='task' className='text-lg'>
          task
        </label>
        <br/>
      <input type='text' name='task' id='task' className='w-[100%] bg-slate-200 h-10 p-3'
      defaultValue={task.task}/>
      </div>
      <button type='submit' 
       className='p-3 bg-yellow-500 hover:bg-orange-500 hover:text-white font-bold m-3'>Submit</button>
    </form>
  </main>
  )
}

export default Edit