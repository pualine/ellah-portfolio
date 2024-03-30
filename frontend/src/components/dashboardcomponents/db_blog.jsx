import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function DBblogs() {
    const [blogs, setBlogs] = useState([]);

    const getBlogs = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASE_URI}/blogs`);
        const data = await response.json();
        console.log("data: ", data.data)
        setBlogs(data.data);
    }

    useEffect(() => {
        getBlogs();
    }, []);


    console.log('blogs'+blogs)
    return (
        <div className="md:w-1/4 bg-white text-black md:rounded-xl p-4 shadow-lg ml-2 mr-4 mt-8 mb-5">
            <h2 className="text-xl font-semibold mb-4 text-center hover:shadow-lg">BLOGS</h2>
            {blogs.slice(0,4).map(blog => (
                <div key={blog._id} className="max-w-sm rounded overflow-hidden mb-4 shadow-lg">
                <img className="w-full" src={blog.image} alt={blog.title} />
                <div className="px-6 mt-1 py-4">
                    <div className="font-bold text-xl mb-2">{blog.title}</div>
                    <p className="text-gray-700 text-base">
                        By {blog.author}
                    </p>
                </div>
            </div>
            ))
            }
           
        </div>
    );
}