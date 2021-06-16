import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlog] = useState( [
      {title: 'MY First BLOG', body: ' lorem jjdjbuhjvuvuviuvuivd...', author: 'Isaac', id:1},
      {title: 'T-THE BLOG', body: 'T-THE is about know you know and what you know', author: 'James', id:2},
      {title: 'MY First BLOG', body: ' The is a story about THe new james Bond we know.....', author: 'IMark', id:3}

  ]);
    return (
        <div className="Home">
        <BlogList blogs={blogs} title='ALL BOLGS!' />
        </div>
    );
}
 
export default Home;