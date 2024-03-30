import { FaEdit, FaTrash } from "react-icons/fa";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function DbNavbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
                <Link to='/dashboard'><div className="text-sky-500 text-xl font-semibold">Admin Dashboard</div></Link>
                <div className="flex items-center">
                    {/* <div className="bg-gray-200 w-10 h-10 rounded-full cursor-pointer"
                        onMouseEnter={() => setSidebarOpen(true)}
                    >
                    </div> */}
                    {/* sidebar */}
                    {sidebarOpen && (
                        <div className="absolute top-16 right-0 bg-white text-black p-4 rounded-lg shadow-lg"
                            onMouseLeave={() => setSidebarOpen(false)}>
                            <ul className="space-y-2">
                                <li className="border-b border-gray-600 py-4  hover:text-gray hover:shadow-lg">Homepage</li>
                                <li className="border-b border-gray-600 py-4 hover:text-gray hover:shadow-lg">Skills</li>
                                <li className="border-b border-gray-600 py-4 hover:text-gray hover:shadow-lg">Awards</li>
                                <li className="border-b border-gray-600 py-4 hover:text-gray hover:shadow-lg">Achievements</li>
                                <li className="border-b border-gray-600 py-4 hover:text-gray hover:shadow-lg">Projects</li>
                                <li className="py-4 hover:text-gray hover:shadow-lg">Blog</li>
                            </ul>
                        </div>

                    )}

                </div>
            </nav>
        </div>
    )
}