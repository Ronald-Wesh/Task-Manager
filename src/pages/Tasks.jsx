import { useState } from "react";
import TaskItem from "../components/TaskItem";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../components/UI/button";
import Layout from "../components/Layout";
import Card from "../components/UI/card";
//import { getTasks, updateTask, deleteTask, createTask } from "../services/api";

const Tasks=()=>{
    const[text,setText]=useState("");// Creates a piece of state to hold the input text
    const[tasks,setTasks]=useLocalStorage("tasks",[]);//"tasks" is the key in localStorage.
    const[filter,setFilter]=useState("all")    //// all | active | completed                                            //[] is the starting value (empty list).



    // useEffect(()=>{
    //     loadTasks();
    // },[]);//[] =Only run this code once when the page first loads."
    
    // const loadTasks=async()=>{
    //     const res=await getTasks();
    //     setTasks(res.data);//Takes the list of tasks from the server response (res.data)=Updates the React state using setTasks(...)
    // };

    const handleAdd=async()=>{
        const trimmed=text.trim();
        if(!trimmed) return;//If the input is empty (after trimming), the function stops.

        const isDuplicate=tasks.some(task=>task.text.toLowerCase()===trimmed.toLowerCase());//.some(...)=Does at least one item in this list meet a condition
        //         task => ... — this is the arrow function that checks each task
        // For every task in tasks, run the function:
        // task.text.toLowerCase() === trimmed.toLowerCase()
        // If any of them match, return true.
        //.some() checks: "Is there any task in the list where
        if(isDuplicate){
            alert("Thsi text alreday exists");
            return;
        }
        //const res=await createTask({text,completed:false});
        const newTask={
            id:Date.now(),// Use Date as a simple unique ID
            text:trimmed,
            completed:false,
        };
        setTasks((prev)=>[...prev,newTask]);
        setText("");
    }

    const handleToggle=async(id)=>{
        //const task=tasks.find((t)=>t._id===_id);
        //const res=await updateTask(_id,{...task,completed:!task.completed});
        setTasks((prev)=>//.map((t) => ...) - Goes through each task one by one
        prev.map((task)=>(task.id===id ?{...task,completed:!task.completed}:task))//(prev) => prev.map(...)You get the previous list of tasks and use .map() to go through each one.
        //Copy the task { ...task }
    );//.map() goes through all tasks
    };
    const handleDelete=async(id)=>{//.filter(...)This goes through every task one by one and builds a new list.
        //await deleteTask(id);
        setTasks((prev)=>prev.filter((t)=>t.id !== id))//Only keeps the tasks where the ID is NOT equal to the one you just deleted.
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true; // default: show all
        });

    return(
        <Layout>
        <div className="min-h-screen p-10 bg-emerald-400 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Task Manager</h1>
            <div className="flex gap-2 mb-4">
                <input type="text"
                value={text}
                
                onChange={(e)=>setText(e.target.value)} 
                className="border rounded  w-full p-2 font-semibold bg-emerald-100"
                placeholder="Enter new Task..." />
                {/* When user types, update the text variable */}
                {/* e - The event (information about what happened) = Here's what happened */}
                {/* target - The element that triggered the event (the input box) = This is where it happened */}
                {/* value - The current text inside that element = This is what's currently there */}


                <Button 
                onClick={handleAdd}
                // className=" cursor-pointer bg-zinc-700 text-zinc-100 px-4 rounded"
                variant="secondary"
                >Add</Button>

            </div>
            <div className="flex gap-2 justify-center mb-6 font-semibold">
                <button 
                onClick={()=>setFilter("all")}
                className={`cursor-pointer  px-3 py-1 rounded ${filter==="all" ? "bg-white text-black":"bg-gray-700 text-white"}` }>All</button>
                <button
                onClick={()=>setFilter("active")}
                className={`cursor-pointer px-3 py-1 rounded 
                     ${filter==="active" ? "bg-white text-black" : "bg-gray-700 text-white" }`}>Active</button>
                <button 
                onClick={()=>setFilter("completed")}
                className={`cursor-pointer px-3 py-1 rounded ${filter==="completed" ? "bg-white text-black":"bg-gray-700 text-white"}`}>Completed</button>
            </div>
            <ul >
                
                {/* .map(...) goes through each task and returns a React component: <TaskItem />
                Each one displays the task and its buttons (checkbox + delete). */}

                {filteredTasks.map((task)=>(
                    <TaskItem 
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
                    onToggle={handleToggle}/>
                ))}
                {/* key={task._id}: React needs a unique key for performance.
                task={task}: You send the entire task object to TaskItem */}
            </ul>
        </div>
        </Layout>
    
    );

};
export default Tasks;