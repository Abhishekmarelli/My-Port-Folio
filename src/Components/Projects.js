import React from "react";
import taskmanager from '../Assets/TaskManager.png'
import Moviedb from '../Assets/MovieDb.png'
import EbookShop from '../Assets/Ebookshop.png'
import Card from "./card";


const portfolioList = [

    {   image: Moviedb,
        title: "Moviedb",
        description:"Developed OTT website which gives the updates of upcoming and trending movies, fetched movie related data from TMDB API’s.",
        link:"https://github.com/Abhishekmarelli/Moviedb"
    },
    {
        image:taskmanager ,
        title: "TaskManager",
        description:"Gives information about tasks created. Can edit, delete those tasks and we can change background themes also.",
        link:"https://github.com/Abhishekmarelli/Taskmanager"
    },
    {
        image: EbookShop,
        title: "EbookShop",
        description:"E-Commerce web-application built with React, Tailwind CSS, JSON Server, JWTAuth, Context API.",
        link:"https://github.com/Abhishekmarelli/ebookshop"
    },
    
];


const Projects = () => {
    return (
        <section id="Projects" className="ezy__portfolio7 light py-4 md:py-4 bg-white dark:bg-[#0b1727] text-slate-800 dark:text-white">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-12 justify-center mb-6 md:mb-12">
                    <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
                        <p className="mb-2">MY PROJECTS</p>
                        <h2 className="text-3xl md:text-[45px] font-bold mb-6">
                            My Latest Works
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 gap-y-8 lg:gap-y-8  mx-auto max-md:grid-cols-1 max-md:justify-items-center">
                    {portfolioList.map((project)=> <Card key={project.title} Project={project}/>)}
                </div>
            </div>
        </section>
    );
};
        

export default Projects


