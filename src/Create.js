import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const[isPending, setIsPending] = useState(false);
    const history = useHistory(); //this is the history hook for going back the the specific page

    const handleSubmit = (e) => {
        e.preventDefault(); //stoping page refresing

        const blog = { title, body, author };

        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
           method: "POST",
           headers: { "content-type": "application/json"},
           body: JSON.stringify(blog) 
        }).then (() =>{
            setIsPending(false);
            history.push("/"); //this history will readirect to the home page
        });
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input type="text" 
                    required 
                    value={title}
                    onChange={ (e) => setTitle(e.target.value)}
                >

                </input>

                <label>Blog Body</label>
                <textarea 
                    required
                    value={body}
                    onChange={ (e) => setBody(e.target.value)}
                >

                </textarea>

                <label>Author:</label>
                <input 
                    required
                    value={author}
                    onChange={ (e) => setAuthor(e.target.value)}
                >
                </input>

                {!isPending && <button type="">Add Blog</button>}
                {isPending && <button type="" disabled>Adding Blog...</button>}

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;