// import axios from "axios";// carries messages between your website and your backend

// const API=axios.create({/// {} creates configuration object
//     baseURL:"http://localhost:5000/api",//baseURL = The address where your server lives
// });

// //helper functions that make it super easy to talk to your server
// export const getTasks=()=>API.get("/tasks");
// export const createTask=(task)=>API.post("/tasks",task);
// export const updateTask=(id,task)=>API.put(`/tasks/${id}`,task);//id, task) = Needs the task ID and new task data
// export const deleteTask=(id)=>API.delete(`/tasks/${id}`);// `/tasks/${id}` = Template literal - puts the ID in the URL

// const res=await axios.get("http:http://localhost:5000/api/tasks");
// console.log(res);