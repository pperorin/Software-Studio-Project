import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import axios from 'axios';

const AddComment = () => {
    const { id } = useParams();
    const user = useSelector((state) => state.auth);
    const [comment, setComment] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitCommentHandler = async () => {
        setIsLoading(true);
        try {
            await axios.post('https://localhost:7061/api/comment', {
                user_id: user.user.id,
                username: user.user.username,
                subject_id: id,
                desc: comment,
            });
            setComment('');
        } catch (error) {
            alert(error.message);
        }
        setIsLoading(false);
    };

    return (
        <div className="container addsubject-form">
            <form onSubmit={onSubmitCommentHandler}>
                <div className="mb-3">
                    <label htmlFor="comment" className="form-label">
                        Commnet
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="comment"
                        placeholder="Enter your comment"
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddComment;
