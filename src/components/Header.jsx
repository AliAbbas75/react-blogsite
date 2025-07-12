import { Link } from "react-router-dom"

function Header() {

    return (
        <nav className="bg-slate-800 px-6 py-4 flex justify-between sticky top-0 z-50 items-center">
            <div>
                <h1 className="text-slate-100 text-2xl font-bold">Ali's Blog</h1>
            </div>

            <div className="flex gap-6">
                <Link to={"/"} className="text-slate-200 hover:underline">Home</Link>
                <Link to={"/blogs"} className="text-slate-200 hover:underline">Blogs</Link>
                <Link className="text-slate-200 hover:underline">Login</Link>
                <Link className="text-slate-200 hover:underline">Register</Link>
            </div>

            <div>
                <img src="" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            </div>
        </nav>



    )
}
export default Header