import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { AnnounceCard } from '../../../components';
const AnnounceDetail = () => {
    const [allAnnounce, setAllAnnounce] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllAnnounce = async () => {
            try {
                const res = await axios.get('https://localhost:7061/api/subject/getanoucement');
                setAllAnnounce(res.data);
                setIsLoading(false);
            } catch (error) {
                alert(error.message);
                setIsLoading(false);
            }
        };
        fetchAllAnnounce();
    }, []);
    
    return <div className="container addsubject-form">
        <h1 style={{textAlign:"center"}}>Announcement</h1>
        <div className='container'>
            <div class="row">
                {!isLoading && allAnnounce.map((data) =>
                    <AnnounceCard data={data} />
                )}
            </div>
        </div>
    </div>
}

export default AnnounceDetail;