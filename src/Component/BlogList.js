const BlogList = ({blogs, title, }) => {
    return (  
       <div className="Blog-list">
           <h1> {title}</h1>
            {blogs.map( (blogs) => (
            <div className="blog-preview">
                <h1>{blogs.title}</h1>
                <p>by {blogs.author}</p>
            </div>
        ))}
       </div>
    );
}
 
export default BlogList;