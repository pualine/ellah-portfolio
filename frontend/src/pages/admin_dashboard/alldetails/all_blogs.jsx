import { useState } from "react";
import DbNavbar from "../../../components/dashboardcomponents/db_navbar";

export default function AddBlog(){

const [loading,setLoading] = useState(false);



const addBlog = async (event) => {
    setLoading(true);
    event.preventDefault();
    const blogData = new FormData(event.target);
    

    const response = await fetch(`${process.env.REACT_APP_BASE_URI}/blogs`, {
        method: "POST",
        body: blogData,
    });
    console.log(response);
    setLoading(false);

    console.log('blo', blogData)
}

    return(
        <section>
        <DbNavbar />
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg h-2/4">
            <h2 className="text-xl font-semibold mb-4">Add a new Blog</h2>
            <form onSubmit={addBlog}>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Title of blog</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
                        placeholder="Title of blog"
                    />
                </div>
                <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">Description</label>
                        <textarea
                            type="text"
                            name="content"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black resize-none h-40"
                            placeholder="Blog content"
                        />
                    </div>
                    <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Author's name</label>
                    <input
                        type="text"
                        name="author"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
                        placeholder="Name of author"
                    />
                </div>
                <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">Select a date</label>
                        <input
                            type="date"
                            name="dateCreated"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">Select time</label>
                        <input
                            type="time"
                            name="timeCreated"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">Choose a file</label>
                        <input
                            type="file"
                            name="image"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"  
                            placeholder="Choose a file"
                        />
                    </div>
                <button type="submit" className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300">Post blog</button>
            </form>
        </div>
    </section>
    );
}