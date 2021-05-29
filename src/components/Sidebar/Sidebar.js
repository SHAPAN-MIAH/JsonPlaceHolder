import React from 'react';
import '../Home/Home.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="">
                    <div className="sidebar">
                        <ul className="list-unstyled ">
                            <li>
                                <Link to="/postLists">
                                    <FontAwesomeIcon className="icons" icon={faFileAlt} /> <span>All Post</span> 
                                </Link>
                            </li>
                            <li>
                                <Link to="/createPost" >
                                    <FontAwesomeIcon className="icons" icon={faEdit} /> <span>Create Post</span> 
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;