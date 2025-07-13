//Reusable component 
//({task,onToggle,onDelete})=PROPS Ingredients passed to the component 
const TaskItem =({task,onToggle,onDelete})=>{
    return(
        <li className="flex justify-between items-center rounded-sm bg-fuchsia-300 mb-2 shadow-xl p-1 ">
            {/*onToggle=function that toggles the task as complete or incomplete */}
            {/*When clicked it should run function onToggle(uses task id*/}
            <span
                onClick={()=> onToggle(task.id)}
                className={`font-semibold cursor-pointer ${task.completed ? "line-through text-gray-400":""}`}>
                {task.text}{/*show actual text*/}
            </span>
            <button 
            onClick={()=>onDelete(task.id)}
            className="text-red-400  cursor-pointer font-bold">Remove🗑️</button>

        </li>
    );
};
export default TaskItem;