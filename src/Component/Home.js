import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlog] = useState(null)
  const [isPending, setIsPending]= useState(true)

useEffect( ()=> {
    fetch(" http://localhost:7000/blogs")
    .then( res => {
        return res.json()
        .then(data => {
            setBlog(data);
            setIsPending(false);
        })
    })
}, []);
    return (
        <div className="Home">
            { isPending && <div>Loading...</div> }
{ blogs && <BlogList blogs={blogs} title='ALL BOLGS!' />
}        
</div>
    );
}
 
export default Home;