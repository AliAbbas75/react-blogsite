import { useEffect, useState } from "react";
import BlogList from "./BlogList";

function Paginate() {

    const [blogsdata, setdata] = useState([]);
    const [paginatedBlogs, setPaginatedBlogs] = useState([]);
    const [currentPage, setPage] = useState(1);
    const [currentBlogs, setBlogs] = useState([]);


    useEffect(() => {
        //split blogs 
        const paginateBlogs = () => {
            let blogsPerPage = 5;
            let dividedArray = [];

            //get total length of array and divide into parts by 5 gap
            for (let i = 0; i < blogsdata.length; i += blogsPerPage) {
                //create new subarray to slice arrays
                const subArray = blogsdata.slice(i, blogsPerPage + i);
                //store sliced subbarrays in multidimensional array
                dividedArray.push(subArray);
            }
            return dividedArray;

        };
        const dividedBlogs = paginateBlogs();
        setPaginatedBlogs(dividedBlogs);



        setBlogs(
            dividedBlogs[currentPage - 1] || []
        )

        window.scrollTo({top:0,behavior:"smooth"})

    }, [currentPage, blogsdata]);

    useEffect(() => {
        //get all blogs from API
        async function fetchBlogs() {
            const response = await fetch("https://6870982b7ca4d06b34b7461b.mockapi.io/article");
            if (!response) {
                console.error("Failed to get blogs fro URL !!!!");
            }
            const allBlogs = await response.json();
            //update state to store Blogs
            setdata(allBlogs);
        }
        fetchBlogs();
    }, []);




    return (
        <>
            <BlogList blogs={currentBlogs} />
            {/*Pagination buttons....... */}
            {/* <div>
                {
                    paginatedBlogs.map(
                        (blogArray, index) => (
                            <button className="ring-1 p-3 m-4" onClick={() => {
                                setPage(index + 1)
                            }
                            }>{index + 1}
                            </button>

                        )
                    )
                }
            </div> */}
            <div className="flex items-center bg-stone-200 p-3 justify-center space-x-3">
                {paginatedBlogs.map((blogArray, index) => (
                    <button
                        key={index}
                        className={`
                w-10 h-10 rounded-lg font-medium text-sm
                transition-all duration-200
                ${currentPage === index + 1
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                            }
            `}
                        onClick={() => setPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>

    )

}
export default Paginate