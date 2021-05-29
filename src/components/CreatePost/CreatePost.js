import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const CreatePost = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-type': 'application/json; charset=UTF-8',},
        })
        .then((response) => response.json())
        .then(success => {
            if(success){
                alert('Post added successfully.');
            }
            console.log(success)
        })
    }


    return (
        <div className="container">
            <h1 className='text-center mb-5'>Welcome to my task</h1>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <form className="p-5 shadow-sm p-3 mb-5 bg-body rounded" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" {...register("title")} name="title" placeholder="Title" className="form-control" />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" {...register("body")} name="body" placeholder="Body" className="form-control" />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="number" {...register("userId")} name="userId" placeholder="User Id" className="form-control" />
                        </div>
                        <br />    
                        <div className="form-group text-right">
                            <button type="submit" className="createBtn">Create Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;