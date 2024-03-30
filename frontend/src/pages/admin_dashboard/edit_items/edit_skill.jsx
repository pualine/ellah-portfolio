import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import DbNavbar from '../../../components/dashboardcomponents/db_navbar';

const EditSkill = () => {
    const [skill, setSkill] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()


    const params = useParams()

    useEffect(() => {
        const getSkill = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URI}/skills/${params.id}`);
                const data = await response.json();
                console.log(data);
                setSkill(data);
            } catch (error) {
                console.error('An error occurred while fetching skill:', error);
            }
        };

        getSkill();
    }, []);

    if (!skill) {
        return <div>Loading...</div>;
    }
    const saveSkill = async (event) => {
        setLoading(true);
        event.preventDefault();
        const skillData = new FormData(event.target);

        const response = await fetch(`${process.env.REACT_APP_BASE_URI}/skills/${params.id}`, {
            method: "PATCH",
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
<DbNavbar/>
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg h-2/4">
            <h2 className="text-xl font-semibold mb-4">Update SKill</h2>
            <form onSubmit={saveSkill}>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Name of SKill</label>
                    <input
                        type="text"
                        name="name"
                        value={skill? skill.name: ""}
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
                
                <button type="submit" className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-600 transition duration-300">Save SKill</button>
            </form>
        </div>
        </section>
        
    );
};

export default EditSkill;