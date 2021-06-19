import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlog] = useState(null);
  const [isPending, setIsPending]= useState(true);
  const [error, setError]= useState(null);

useEffect( ()=> {
    fetch(" http://localhost:7000/blogs")
    .then( res => {
        if(!res.ok) {
            throw Error("Could not get data")
        } 
        return res.json()
        .then(data => {
            setBlog(data);
            setIsPending(false);
        })
        .catch(err => {
            setError(err.message);
        })
    })
}, []);
    return (
        <div className="Home">
            { error && <div> {error} </div>  }
            { isPending && <div>Loading...</div> }
{ blogs && <BlogList blogs={blogs} title='ALL BOLGS!' />
}        
</div>
    );
}
 
export default Home;