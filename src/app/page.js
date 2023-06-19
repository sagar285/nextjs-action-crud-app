import dbConnect from "./dbConnect"
import Task from "./modle/Task"
import {redirect} from "next/navigation"
export default function Home() {


  async function addtask(data){
    "use server";
    let title = data.get("title")?.valueOf();
    let task = data.get("task")?.valueOf();
    try {
      dbConnect();
      let newtask =new Task({title,task});
      await newtask.save();
      console.log(newtask);
    } catch (error) {
      console.log(error);
    }
    redirect("/showdata");
  }



  return (
  <>
  <main className='m-10 aspect-y-5'>
    <h1 className='text-xl font-bold'>Add task</h1>
    <form action={addtask}>
      <div>
        <label htmlFor='title' className='text-lg'>
          title
        </label>
        <br/>
      <input type='text' name='title' id='title' 
       className='w-[100%] bg-slate-200 h-10 p-3'/>
      </div>
      <div>
        <label htmlFor='task' className='text-lg'>
          task
        </label>
        <br/>
      <input type='text' name='task' id='task' className='w-[100%] bg-slate-200 h-10 p-3'/>
      </div>
      <button type='submit' 
       className='p-3 bg-yellow-500 hover:bg-orange-500 hover:text-white font-bold m-3'>Submit</button>
    </form>
  </main>
  </>
  )
}
