import React from 'react';
import './Home.css'

const HomeDtl = (props) => {
    const {id, title, body} = props.post;

    const DeletePost= (id) => {
        console.log(id)
        
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            })
            .then(res => {
                alert('Post deleted successfully.')
            })
            .catch(error => {
                console.log(error)
              })
        
    }
    return (
        <div className="container">
                <div className="postsContainer">
                    <h4>{id}</h4>
                    <h5>{title}</h5>
                    <p>{body}</p>
                    <div>
                        <button onClick={()=> DeletePost(id)} id="deleteBtn">Delete</button>
                    </div>
                </div>
                
        </div>
    );
};

export default HomeDtl;