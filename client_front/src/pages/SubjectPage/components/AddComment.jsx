import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import axios from 'axios';


const AddComment = () => {
    const {id} = useParams();
    console.log(id);
    const user = useSelector(state => state.auth);
    console.log(user.user)
    const [comment, setComment] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmitCommentHandler = async () => {
        try {
            await axios.post('https://localhost:7061/api/comment', {
                user_id:user.user.id,
                username:user.user.username,
                subject_id:id,
                desc: comment,
            });
            setComment('');
        } catch (error) {
            alert(error.message);
        }
    };

    return <div className="container addsubject-form">
        <form>
            <div className="mb-3">
                <label for="title" className="form-label">Commnet</label>
                <input type="text" className="form-control" id="comment" placeholder="Enter your comment" onChange={e => setComment(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={onSubmitCommentHandler}>Submit</button>
        </form>
    </div>
}

export default AddComment;