import React from "react";
import {title} from "../data"
export default function Navbar() {
    return (
        <header className = "bg-blue-800">
            <div className = "container mx-auto p-5 flex flex-wrap items-center justify-center ">
            <a href = "https://uci.edu" className = 'mr-5'>
                <img src = {title} className = 'w-28 h-12' alt = "UCI"/>
            </a>
            <h1 className="text-white text-3xl font-medium ml-5 mr-5 font-saris ">
                Environmental Station
            </h1>
            
            </div>
        </header>
    )
}