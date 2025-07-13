import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/UI/card";
import Layout from "../components/Layout";

const Posts = () => {
    
  const [tasks, setTasks] = useState([]);   // Store fetched tasks
  const [loading, setLoading] = useState(true); // Loading indicator
  const [error, setError] = useState(null);     // Error handler
  const [search, setSearch] = useState("");      // Search input
  const [page, setPage] = useState(1);          // Current page
  const tasksPerPage = 10;                      // Tasks per page

  // Fetch tasks from JSONPlaceholder when component loads= Fetch tasks on page load
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTasks(res.data);      // Store response data
        setLoading(false);       // Done loading
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setError("Failed to load tasks");
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // While loading
  if (loading) return <p className="text-center p-4">Loading tasks...</p>;

  // If there was an error
  if (error) return <p className="text-center text-red-500">{error}</p>;

    // Filter tasks by search input
  const filteredTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 20); // Limit to first 20 results

    // 📄 2. Paginate the filtered results
    const paginatedTasks = filteredTasks.slice(
    (page - 1) * tasksPerPage,
    page * tasksPerPage
    );


  // Display the tasks
  return (
    <Layout>
    <div className="max-w-4xl mx-auto p-6 bg-teal-800">
      <h1 className="text-3xl font-bold mb-4 text-center">Fetched Tasks</h1>
      {/* Search Box */}
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 mb-6 border rounded font-semibold"
        />

        {/* Loading or error messages */}
        {loading && <p className="text-center p-4">Loading tasks...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

          {/* 🔄 Pagination Controls */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="bg-gray-700 text-white px-4 py-1 rounded cursor-pointer"
          >
            Prev
          </button>
          <button
            onClick={() =>
              setPage((prev) =>
                prev * tasksPerPage < filteredTasks.length ? prev + 1 : prev
              )
            }
            className="bg-gray-700 text-white px-4 py-1 rounded cursor-pointer"
          >
            Next
          </button>
        </div>

          {/* NEW: Show current page info */}
        <p className="text-white text-center mt-2">
          Page {page} of {Math.ceil(filteredTasks.length / tasksPerPage)}
        </p>

        {/* List of Tasks */}


      {/* <ul className="space-y-2 grid gap-4">
        {tasks.slice(0, 20).map((task) => (  // Only show first 20 tasks
          <li
            key={task.id}
            className={`p-3 rounded shadow-md flex justify-between items-center ${
              task.completed ? "bg-green-600" : "bg-white"
            }`}
          >
            <span className="font-medium">{task.title}</span>
            <span
              className={`text-sm px-2 py-1 rounded ${
                task.completed ? "bg-green-500 text-white" : "bg-yellow-400"
              }`}
            >
              {task.completed ? "Done" : "Pending"}
            </span>
          </li>
        ))}
      </ul> */}



      {/* List of Tasks */}
              <ul className="grid gap-4 mt-6">
          {paginatedTasks.map((task) => (
            <Card key={task.id}>
              <div className="flex justify-between items-center">
                <span className="font-medium">{task.title}</span>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    task.completed ? "bg-green-500 text-white" : "bg-yellow-400"
                  }`}
                >
                  {task.completed ? "Done" : "Pending"}
                </span>
              </div>
            </Card>
          ))}
        </ul>
    </div>
    </Layout>
  );
};

export default Posts;
