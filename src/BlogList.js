const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="blogList">
            <h1>{title}</h1>
            {blogs.map((connectArray) => (
            <div className="blogPreview" key={connectArray.id}>
                <h2>{ connectArray.title }</h2>
                <p>Written by {connectArray.author}</p>
            </div>
           ))}
        </div>
     );
}
 
export default BlogList;