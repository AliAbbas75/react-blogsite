import { useState, useEffect } from "react";

function BlogList({blogs}) {
    const [blogData, setblogData] = useState([]);
    useEffect(() => {

        setblogData(blogs);
        // async function getBlogs() {
        //     try {
        //         const response = await fetch("http://localhost:3000/");
        //         if (!response.status) {
        //             throw console.error("Response", response.status);
        //         }
        //         const blog = await response.json();
        //     }
        //     catch (err) {
        //         console.error("Could not fetch data")
        //     }
        // }

        // getBlogs();
    }, [blogs]);




    return (
        // <div className="in-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black px-4 md:px-8 lg:px-16 xl:px-24 py-8">
        //     {/* Header */}
        //     <div className="mb-12 text-center pt-12 px-6">
        //         <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
        //             Latest Articles
        //         </h1>
        //         <p className="text-gray-300 text-lg">Discover insights and stories from our community</p>
        //     </div>

        //     {/* Blog Grid */}
        //     <div className="container mx-auto px-6">
        //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        //             {blogData.map((blog, index) => (
        //                 <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        //                     {/* Blog Image */}
        //                     <div className="relative">
        //                         <img
        //                             src={blog.imageUrl}
        //                             alt={blog.title}
        //                             className="w-full h-48 md:h-56 object-cover"
        //                         />
        //                     </div>

        //                     {/* Blog Content */}
        //                     <div className="p-6">
        //                         <div className="text-xs text-gray-600 uppercase font-semibold mb-2">
        //                             {blog.category || "Article"}
        //                         </div>

        //                         <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
        //                             {blog.title}
        //                         </h2>

        //                         <p className="text-gray-600 mb-4 line-clamp-3">
        //                             {blog.description || blog.content}
        //                         </p>

        //                         <div className="flex items-center justify-between">
        //                             <button className="flex items-center text-sm text-blue-600 font-semibold hover:text-blue-800 transition-colors">
        //                                 Read article
        //                                 <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        //                                 </svg>
        //                             </button>

        //                             {blog.date && (
        //                                 <span className="text-xs text-gray-500">
        //                                     {new Date(blog.date).toLocaleDateString()}
        //                                 </span>
        //                             )}
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>

        //     {/* Load more button */}
        //     <div className="text-center mt-16 pb-12">
        //         <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-full hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 border border-cyan-500/20">
        //             Load More Articles
        //         </button>
        //     </div>
        // </div>

        // <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 md:px-8 lg:px-16 xl:px-24 py-8">
        //     {/* Header */}
        //     <div className="mb-12 text-center pt-12 px-6">
        //         <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
        //             Latest Articles
        //         </h1>
        //         <p className="text-amber-800 text-lg">Discover insights and stories from our community</p>
        //     </div>

        //     {/* Blog Grid */}
        //     <div className="container mx-auto px-6">
        //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        //             {blogData.map((blog, index) => (
        //                 <div key={blog.id} className="bg-orange-50 border border-amber-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        //                     {/* Blog Image */}
        //                     <div className="relative">
        //                         <img
        //                             src={blog.imageUrl}
        //                             alt={blog.title}
        //                             className="w-full h-48 md:h-56 object-cover"
        //                         />
        //                     </div>

        //                     {/* Blog Content */}
        //                     <div className="p-6">
        //                         <div className="text-xs text-amber-700 uppercase font-semibold mb-2">
        //                             {blog.category || "Article"}
        //                         </div>

        //                         <h2 className="text-2xl font-bold text-amber-900 mb-3 leading-tight">
        //                             {blog.title}
        //                         </h2>

        //                         <p className="text-amber-800 mb-4 line-clamp-3">
        //                             {blog.description || blog.content}
        //                         </p>

        //                         <div className="flex items-center justify-between">
        //                             <button className="flex items-center text-sm text-orange-600 font-semibold hover:text-orange-800 transition-colors">
        //                                 Read article
        //                                 <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        //                                 </svg>
        //                             </button>

        //                             {blog.date && (
        //                                 <span className="text-xs text-amber-600">
        //                                     {new Date(blog.date).toLocaleDateString()}
        //                                 </span>
        //                             )}
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>

        //     {/* Load more button */}
        //     <div className="text-center mt-16 pb-12">
        //         <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 border border-amber-500/20">
        //             Load More Articles
        //         </button>
        //     </div>
        // </div>

        <div className="min-h-screen bg-stone-200 px-4 md:px-8 lg:px-16 xl:px-24 py-4">
            {/* Header */}
            <div className="mb-12 text-center pt-12 px-6">
                <h1 className="text-4xl font-bold mb-3 text-stone-800">
                    Latest Articles
                </h1>
                <p className="text-gray-700 text-lg">Discover insights and stories from our community</p>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {blogData.map((blog, index) => (
                        <div key={blog.id} className="bg-stone-600 border border-gray-900 rounded-lg overflow-hidden hover:shadow-xl shadow-gray-900 transition-all duration-300">
                            {/* Blog Image */}
                            <div className="relative">
                                <img
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    className="w-full h-48 md:h-56 object-cover"
                                />
                            </div>

                            {/* Blog Content */}
                            <div className="p-6">
                                <div className="text-xs uppercase font-semibold mb-2 text-cyan-500">
                                    {blog.category || "Article"}
                                </div>

                                <h2 className="text-2xl font-bold mb-3 leading-tight" style={{ color: '#FFFFFF' }}>
                                    {blog.title}
                                </h2>

                                <p className="mb-4 line-clamp-3 text-gray-300">
                                    {blog.description || blog.content}
                                </p>

                                <div className="flex items-center justify-between">
                                    <button className="flex items-center text-sm text-cyan-500 font-semibold transition-colors hover:opacity-80">
                                        Read article
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>

                                    {blog.date && (
                                        <span className="text-xs text-gray-500">
                                            {new Date(blog.date).toLocaleDateString()}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Load more button */}
            {/* <div className="text-center mt-16 pb-12">
                <button className="px-8 py-3 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 border border-opacity-20" style={{ backgroundColor: '#284B63', borderColor: '#284B63' }}>
                    Load More Articles
                </button>
            </div> */}
        </div>
    )
}

export default BlogList






