import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AnnouncementPage = () => {
    const user = useSelector((state) => state.auth);

    const [announcement, setAnnouncement] = useState('');
    const [announcementDesc, setAnnouncementDesc] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onCreateAnnouncement = async (e) => {
        e.preventDefault();
        if (announcement !== '' && announcementDesc !== '') {
            setIsLoading(true);
            try {
                await axios
                    .post('https://localhost:7061/api/subject/', {
                        user_id: user.user.id,
                        username: user.user.username,
                        title: announcement,
                        desc: announcementDesc,
                    })
                    .then(async (res) => {
                        await axios.put(`https://localhost:7061/api/subject/anouncement/${res.data.id}`, {
                            headers: { 'Content-Type': 'application/json' },
                        });
                    });

                setAnnouncement('');
                setAnnouncementDesc('');
                alert('Announcement created successfully');
            } catch (error) {
                alert(error.message);
            }
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <h2 className="mb-4">Create new announcement</h2>
            <form onSubmit={onCreateAnnouncement}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="An announcement"
                        required
                        value={announcement}
                        onChange={(e) => setAnnouncement(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Write some description..."
                        required
                        value={announcementDesc}
                        onChange={(e) => setAnnouncementDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className="btn btn-primary float-end mt-3"  disabled={isLoading}>
                    Create
                </button>
            </form>
        </div>
    );
};

export default AnnouncementPage;
