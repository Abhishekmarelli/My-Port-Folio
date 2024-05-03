import React from "react";
import taskmanager from '../Assets/TaskManager.png'
import Moviedb from '../Assets/MovieDb.png'
import EbookShop from '../Assets/Ebookshop.png'


const portfolioList = [
    {
        image: Moviedb,
        title: "Moviedb",
        description:""
    },
    {
        image:taskmanager ,
        title: "TaskManager",
        description:""
    },
    {
        image: EbookShop,
        title: "EbookShop",
        description:""
    },
];


const Projects = () => {
    return (
        <section className="ezy__portfolio7 light py-4 md:py-4 bg-white dark:bg-[#0b1727] text-slate-800 dark:text-white">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-12 justify-center mb-6 md:mb-12">
                    <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
                        <p className="mb-2">MY PROJECTS</p>
                        <h2 className="text-3xl md:text-[45px] font-bold mb-6">
                            My Latest Works
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-6 gap-y-8 lg:gap-y-0 max-w-7xl mx-auto">
                    {portfolioList.map((portfolio, i) => (
                        <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
                            <div className="relative bg-white shadow-xl dark:bg-slate-800 hover:-translate-y-1 mt-6 duration-300 rounded-xl">
                                <div className="p-6 lg:p-12 mb-20">
                                    <h4 className="text-2xl font-medium mb-4">
                                        {portfolio.title}
                                    </h4>
                                    <p className="opacity-50 mb-0">{portfolio.description}</p>
                                    <button className="px-5 py-2 rounded border border-blue-600 hover:text-white hover:bg-blue-600 duration-300 mt-6">
                                        Link
                                    </button>
                                </div>
                                <div className="bg-green-100 flex rounded-xl p-6 lg:p-12 pb-0 lg:pb-0 relative">
                                    <img
                                        src={portfolio.image}
                                        alt={portfolio.title}
                                        className="w-90% h-auto -mt-24 mb-12 rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
        

export default Projects