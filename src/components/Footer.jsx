import { Link } from "react-router-dom";

function Footer() {
    return (
        // <div>
        //     <Link>
        //         About
        //     </Link>
        //     <Link>
        //         Contact
        //     </Link>
        //     <Link>
        //         Blogs
        //     </Link>
        //     <Link>
        //         About
        //     </Link>
        // </div>

        // <footer className="bg-white py-6">
        //     <div className="container mx-auto text-center space-y-4">


        //         <p className="text-center text-sm text-gray-600">
        //             © Lucie Loves. All rights reserved.
        //         </p>


        //         <div className="flex justify-center space-x-4 text-black text-xl">


        //             <a href="mailto:info@luciekerley.co.uk" aria-label="Email" target="_blank" className="hover:text-gray-500 transition-colors">
        //                 <svg className="w-5 h-5" viewBox="0 0 64 64" fill="currentColor">
        //                     <use xlink:href="#email-icon"></use>
        //                 </svg>
        //             </a>


        //             <a href="https://www.facebook.com/lucielovesuk" aria-label="Facebook" target="_blank" className="hover:text-gray-500 transition-colors">
        //                 <svg className="w-5 h-5" viewBox="0 0 64 64" fill="currentColor">
        //                     <use xlink:href="#facebook-icon"></use>
        //                 </svg>
        //             </a>


        //             <a href="https://www.youtube.com/channel/UCxnpj1EoAZBmGiqD0JOepBA" aria-label="YouTube" target="_blank" className="hover:text-gray-500 transition-colors">
        //                 <svg className="w-5 h-5" viewBox="0 0 64 64" fill="currentColor">
        //                     <use xlink:href="#youtube-icon"></use>
        //                 </svg>
        //             </a>


        //             <a href="https://www.pinterest.com/luciekerley/" aria-label="Pinterest" target="_blank" className="hover:text-gray-500 transition-colors">
        //                 <svg className="w-5 h-5" viewBox="0 0 64 64" fill="currentColor">
        //                     <use xlink:href="#pinterest-icon"></use>
        //                 </svg>
        //             </a>


        //             <Link>

        //             </Link>

        //         </div>
        //     </div>
        // </footer>

        <footer className="w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="" className="hover:underline">React</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link to={"/blogs"} className="hover:underline me-4 md:me-6">All Blogs</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </footer>

    )
}
export default Footer