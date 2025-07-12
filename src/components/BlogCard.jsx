import sampleText from "../assets/text";
function BlogCard({ blog }) {
    //These ar blogs displayed in carousel
    console.log(blog);

    return (
        <div className="bg-white min-h-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 group">
                        {/* Header with avatar and date */}
                        <div className="flex items-center gap-4 p-6 pb-4">
                            <img
                                src={blog.avatar}
                                alt="Author avatar"
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-gray-900">Author</span>
                                <span className="text-xs text-gray-500">{blog.createdAt}</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-6 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                                {blog.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                {sampleText}
                                
                            </p>
                        </div>
                    </div>
    )
}
export default BlogCard