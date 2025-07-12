import { useEffect, useState } from "react";
// import BlogList from "../components/BlogList";
import Carousel from "../components/Carousel";
import DoublePane from "../components/DoublePane";
import HeroSection from "../components/HeroSection";
import BlogCard from "../components/BlogCard";
// import Footer from "../components/Footer";



function Home() {

    const [newBlogs, setNewBlog] = useState([]);
    useEffect(() => {
        async function getRecentBlogs() {
            const response = await fetch("http://localhost:3000/recent");
            const blogs = await response.json();
            // console.log(blogs);
            setNewBlog(blogs);
        }
        getRecentBlogs();
    }, [])


    const home = {
        title: "Welcome to My Blog",
        button_link: "/get-started",
        button_text: "Get Started",
        link_one: "/about",
        link_one_text: "About",
        link_two: "/contact",
        link_two_text: "Contact",
        image: ""
    };
    const sampleImg = "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"
    const sampleText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci porro rem consequuntur odit, voluptas numquam? Voluptatem, corrupti dolor. Eligendi nobis cupiditate laudantium, facilis sunt itaque eum aperiam voluptas corrupti beatae!"


    return (
        <div>
            <HeroSection home={home} />
            <DoublePane left={<div className="text-sky-100">{sampleText}</div>} right={<img src={sampleImg} />} />
            {
                newBlogs.length > 0 && (
                    <Carousel>
                        <BlogCard blog={newBlogs[0]} />
                        <BlogCard blog={newBlogs[1]}/>
                        <BlogCard blog={newBlogs[2]}/>
                    </Carousel>
                )
            }
        </div>
    )
}
export default Home