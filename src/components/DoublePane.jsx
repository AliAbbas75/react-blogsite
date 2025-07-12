function DoublePane({ left, right }) {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 px-6 py-18 bg-stone-200 relative overflow-hidden">

            {/* Left Panel */}
            <div className="flex bg-slate-500 rounded flex-col justify-center space-y-6 relative z-10 group">
                {/* Content with hover transform */}
                <div className="p-5 transform group-hover:translate-x-2 transition-transform duration-300 ease-out relative z-10">
                    {left}
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex flex-col justify-center space-y-6 relative z-10 group">
                {/* Glass morphism effect */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content with hover transform */}
                <div className=" transform group-hover:-translate-x-2 transition-transform duration-300 ease-out relative z-10">
                    {right}
                </div>
            </div>

            {/* Separator Line */}
            <div className="hidden lg:block absolute left-1/2 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gray-300/50 to-transparent transform -translate-x-1/2"></div>

            {/* Center Floating Element */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 animate-spin"></div>
        </div>
    )
}
export default DoublePane