import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

const AddSubject = (props) => {
    const user = useSelector(state => state.auth);
    console.log(user.user.id);
    const [subjectTiltle, setSubjectTitle] = useState('');
    const [subjectDesc, setSubjectDesc] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmitSubjectHandler = async () => {
        try {
            await axios.post('https://localhost:7061/api/subject/', {
                user_id:user.user.id,
                username:user.user.username,
                title: subjectTiltle,
                desc: subjectDesc,
            });
            console.log(subjectTiltle);
            console.log(subjectDesc);
            setSubjectTitle('');
            setSubjectDesc('');
        } catch (error) {
            alert(error.message);
        }
    };
    return <div className="container addsubject-form">
        <h1 style={{textAlign:"left"}}>Create Your Subject</h1>
        <form >
            <div className="mb-3">
                <label for="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Enter your title" onChange={e => setSubjectTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="desc" className="form-label">Description</label>
                <input type="text" className="form-control" id="desc" placeholder="Enter your Description" onChange={e => setSubjectDesc(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={onSubmitSubjectHandler}>Submit</button>
        </form>
    </div>
}

export default AddSubject;