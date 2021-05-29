import React, { useEffect, useState } from 'react';
import HomeDtl from './HomeDtl';
import './Home.css';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div className="container">
            <h1 className='text-center mb-5'>Welcome to my task</h1>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <div className="postDtl_container">
                        {
                            posts.map(post => <HomeDtl key={post.key} post={post}></HomeDtl>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;