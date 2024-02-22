
import React, {useState, useEffect} from 'react';
export default function JsonDemo(){
    const[posts, setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data => setPosts(data))
        .catch(error=> console.error('Kunde inte läsa data',error));    
    }, []);

    return(
        <div>
            <h1>Posts</h1>
            <ul>
              {
               posts.map(post=>(
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
               ))}
            </ul>
        </div>
    );
}