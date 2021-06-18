import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlog] = useState(null)
const handDelete =(id) =>{
    const newBlogs =blogs.filter(blogs => blogs.id !== id);
    setBlog(newBlogs);
}

useEffect( ()=> {
    fetch("http://localhost:8000/blogs")
    .then( res => {
        return res.json()
        .then(data => {
            setBlog(data);
        })
    })
} );
    return (
        <div className="Home">
{ blogs && <BlogList blogs={blogs} title='ALL BOLGS!' handDelete={handDelete}/>
}        </div>
    );
}
 
export default Home;