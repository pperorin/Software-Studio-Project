import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const AddSubject = () => {
    const user = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [subjectTiltle, setSubjectTitle] = useState('');
    const [subjectDesc, setSubjectDesc] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitSubjectHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios
                .post('https://localhost:7061/api/subject/', {
                    user_id: user.user.id,
                    username: user.user.username,
                    title: subjectTiltle,
                    desc: subjectDesc,
                })
                .then((res) => {
                    setSubjectTitle('');
                    setSubjectDesc('');
                    alert('Create subject successfully');
                    navigate(`/subject/${res.data.id}`);
                });
        } catch (error) {
            alert(error.message);
        }
        setIsLoading(false);
    };
    return (
        <div className="container addsubject-form">
            <h1 style={{ textAlign: 'left' }}>Create Your Subject</h1>
            <form onSubmit={onSubmitSubjectHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter your title"
                        onChange={(e) => setSubjectTitle(e.target.value)}
                        value={subjectTiltle}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="desc"
                        placeholder="Enter your Description"
                        onChange={(e) => setSubjectDesc(e.target.value)}
                        value={subjectDesc}
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

export default AddSubject;
