import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Please Wait...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
    </div>
  );
};

export default Home;

















































// {/* handleDelete={handleDelete}  */}
//         {/* <button type="" onClick={() => setName('Lucy')}>Change Name</button>
//         <p>{ name }</p> */}


//   [
  //     {
  //       title: "This is my Website",
  //       body: "This is body...",
  //       author: "Mario",
  //       id: 1,
  //     },
  //     { title: "Website", body: "This is body...", author: "Lucy", id: 2 },
  //     { title: "My Book", body: "This is body...", author: "Mario", id: 3 },
  //   ]

  //   const [name, setName] = useState('Mario');


  // console.log("use effect is running");
  // console.log(blogs);
  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };