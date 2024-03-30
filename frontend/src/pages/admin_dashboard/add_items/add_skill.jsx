import { useNavigate } from "react-router-dom";
import DbNavbar from "../../../components/dashboardcomponents/db_navbar";
import { useState } from "react";

export default function AddSkill() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const addSkill = async (event) => {
        setLoading(true);
        event.preventDefault();
        const skillData = new FormData(event.target);

        const response = await fetch(`${process.env.REACT_APP_BASE_URI}/skills`, {
            method: "POST",
            body: JSON.stringify({
                name: skillData.get('name'),
                proficiency: skillData.get('proficiency'),
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        
        });
        console.log(response);
        setLoading(false);

        navigate("/skills")

    }



    return (
        <section>
            <DbNavbar />
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg h-2/4">
                <h2 className="text-xl font-semibold mb-4">Add Skill</h2>
                <form onSubmit={addSkill}>
                    <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">Name of Skill</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
                            placeholder="Enter skill name"
                        
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="proficiency" className="block text-black font-semibold mb-2">Proficiency</label>
                        <select name="proficiency"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
                        >
                           
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-gray-800 text-white font-semibold py-2 rounded-md hover:bg-sky-500 transition duration-300">Add Skill</button>
                </form>
            </div>
        </section>
    );
}