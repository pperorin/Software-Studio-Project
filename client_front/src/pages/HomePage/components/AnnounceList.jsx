import { useState, useEffect } from 'react';
import axios from 'axios';

import { AnnounceCard } from '../../../components';
const AnnounceList = () => {
    const [allAnnouncement, setAllAnnouncement] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllAnnounce = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get('https://localhost:7061/api/subject/getanoucement');
                setAllAnnouncement(res.data);
                setIsLoading(false);
            } catch (error) {
                alert(error.message);
                setIsLoading(false);
            }
        };
        fetchAllAnnounce();
        setIsLoading(false);
    }, []);
    return (
        <div className="container">
            <h1 style={{ margin: '30px 0' }}>All Announcements</h1>
            <div className="row">
                {!isLoading && allAnnouncement.map((data, index) => <AnnounceCard data={data} key={index} />)}
            </div>
        </div>
    );
};

export default AnnounceList;
