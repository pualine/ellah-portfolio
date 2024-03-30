import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export default function DbProjects() {
    return (
        <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
            <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">PROJECTS</h2>
            <FaPlus className="text-black-500 cursor-pointer" />
            </div>
            <div className="flex justify-between items-center mb-5 hover:shadow-lg">
                <h3>TAAP FLix</h3>
                <h4>Designed a creative website</h4>
                <div className="flex space-x-4">
 
                    <FaEdit className="text-black-500 cursor-pointer" />
                    <FaTrash className="text-black-500 cursor-pointer" />
                </div>
            </div>
            <div className="flex justify-between items-center mb-5 hover:shadow-lg">
                <h3>AgroBix</h3>
                <h4>enhanced efficiency of web app for agronomic companies</h4>
                <div className="flex space-x-4">
                    <FaEdit className="text-black-500 cursor-pointer" />
                    <FaTrash className="text-black-500 cursor-pointer" />
                </div>
            </div>
            <div className="text-center font-semibold">See all Projetcs</div>
        </div>

    );
}