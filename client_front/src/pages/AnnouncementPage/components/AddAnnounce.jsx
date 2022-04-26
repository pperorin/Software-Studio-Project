import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddAnnounce = (props) => {
    
    return <div className="container addsubject-form">
        <h3 style={{textAlign:"left"}}>Create New Announcement</h3>
        <form>
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" placeholder="Enter your title"/>
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label">Description</label>
                <input type="text" class="form-control" id="desc" placeholder="Enter your Description"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
}

export default AddAnnounce;