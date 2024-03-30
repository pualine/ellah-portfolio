import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DbAchievements() {
    const [achievements, setAchievements] = useState([]);


    const getachievements = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASE_URI}/achievements`);
        const data = await response.json();
        setAchievements(data);
    }
    useEffect(() => {
        getachievements();
    }, []);

    return (
        <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold mb-4">ACHIEVEMENTS</h2>
                <Link to='/addachievement' ><FaPlus className="text-black-500 cursor-pointer" /></Link>
            </div>
            {achievements.slice(0, 2).map(achievement => (
                <div key={achievement._id} className="flex justify-between items-center mb-5 hover:shadow-lg">
                    <h3>{achievement.title}</h3>
                    <h4>{achievement.dateAwarded}</h4>
                    <div className="flex space-x-4">
                        <Link to={`/achievements/${achievement._id}`}><FaEdit className="text-black-500 cursor-pointer" /></Link>
                        <FaTrash className="text-black-500 cursor-pointer" />
                    </div>
                </div>
            ))
            }
            <div className="text-center font-semibold">See all Awards</div>
        </div>
    );
}