import DbNavbar from "../../../components/dashboardcomponents/db_navbar";
import { useState } from "react";

export default function AddAchievement() {
    const [loading, setLoading] = useState(false);


    const addAchievement = async (event) => {
        setLoading(true);
        event.preventDefault();
        const achievementData = new FormData(event.target);

        const response = await fetch(`${process.env.REACT_APP_BASE_URI}/awards`, {
            method: "POST",
            body: JSON.stringify({
                title: achievementData.get('title'),
                description: achievementData.get('description'),
                dateAwarded: achievementData.get('dateAwarded'),
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        
        });
        console.log(response);
        setLoading(false);
    }



    return (
        <section>
            <DbNavbar />
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg h-2/4">
                <h2 className="text-xl font-semibold mb-4">Add Achievement</h2>
                <form onSubmit={addAchievement}>
                    <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">Title of Achievement</label>
                        <input
                            type="text"
                            name="title"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
                            placeholder="Enter achievement name"
                        
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">Description</label>
                        <textarea
                            type="text"
                            name="description"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black resize-none h-40"
                            placeholder="Describe the achievement"
                        
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">Select a date</label>
                        <input
                            type="date"
                            name="dateAwarded"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
                        />
                    </div>
                    <button type="submit" className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-600 transition duration-300">Add Achievement</button>
                </form>
            </div>
        </section>
    );
}