import React from "react";

function HeroSection({ home }) {
    return (
        // <div className="-mt-24 relative w-full py-12 px-12 bg-yellow-900">
        //   {/* Background image */}
        //   <img
        //     src={home.image}
        //     alt="Background"
        //     className="w-full h-full absolute inset-0 object-cover opacity-70"
        //   />

        //   {/* Main content */}
        //   <div className="relative z-10 text-center py-24 md:py-48">
        //     <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">
        //       {home.title}
        //     </h1>
        //     <a
        //       href={home.button_link}
        //       className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
        //     >
        //       {home.button_text}
        //     </a>
        //   </div>

        //   {/* Bottom links */}
        //   <div className="relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm">
        //     <a href={home.link_one} className="border-b border-white">
        //       {home.link_one_text}
        //     </a>
        //     <a href={home.link_two} className="border-b border-white">
        //       {home.link_two_text}
        //     </a>
        //   </div>
        // </div>

        <div className="relative w-full bg-slate-900 overflow-hidden">
            {/* Background image overlay */}
            <img
                src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-thatguycraig000-1563356.jpg&fm=jpg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black-900/95" />

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 md:py-48 max-w-4xl mx-auto">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold font-display leading-tight drop-shadow-md">
                    {home.title}
                </h1>
                <a
                    className="mt-8 inline-block bg-white text-stone-800 font-semibold font-heading uppercase tracking-wide px-6 py-3 rounded-lg shadow-md hover:bg-slate-200 transition duration-200"
                >
                    {home.button_text}
                </a>
            </div>

        </div>

    );
};

export default HeroSection;
