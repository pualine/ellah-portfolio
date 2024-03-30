import { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import DbNavbar from "../../../components/dashboardcomponents/db_navbar";



export default function AllSKills(){
    const [skills, setSkills] = useState([]);

    const getSkills = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASE_URI}/skills`);
        const data = await response.json();
        console.log("data: ", data)
        setSkills(data);
    }


    const deleteSkill = async (_id) => {
        console.log(_id)
        const response = await fetch(`${process.env.REACT_APP_BASE_URI}/skills/${_id}`, {
            method: 'DELETE'
        });
        const data = await response.json();

        console.log(data)
    }

    useEffect(() => {
        getSkills();
    }, []);


    return(
        <section>
            <DbNavbar/>

            <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">ALL SKILLS</h2>
            <Link to='/addskill' ><FaPlus className="text-black-500 cursor-pointer" /></Link>

        </div>
        {skills.map(skill => (
            <div key={skill._id} className="flex justify-between items-center mb-5 hover:shadow-lg">
                <h3>{skill.name}</h3>
                <h4>{skill.proficiency}</h4>
                <div className="flex space-x-4">
                <Link to={`/skills/${skill._id}`}><FaEdit className="text-black-500 cursor-pointer" /></Link>
                    <FaTrash onClick={() => deleteSkill(skill._id)} className="text-black-500 cursor-pointer" />
                </div>
            </div>
        ))
        }
       <Link to='/dashboard'><div className="text-center text-sky-500 bg-gray-800 font-semibold">Back to Dashboard</div></Link> 
    </div>
        </section>
       
    );
}