import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddSubject = (props) => {
    
    return <div className="container addsubject-form">
        <h1 style={{textAlign:"left"}}>Create Your Subject</h1>
        <form>
            <div className="mb-3">
                <label for="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Enter your title"/>
            </div>
            <div className="mb-3">
                <label for="desc" className="form-label">Description</label>
                <input type="text" className="form-control" id="desc" placeholder="Enter your Description"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
}

export default AddSubject;