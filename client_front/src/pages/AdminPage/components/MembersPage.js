import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { LoadingAndError } from '../../../components';

const MembersPage = () => {
    const navigate = useNavigate();
    const [allMembers, setAllMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllMembers = async () => {
            try {
                const response = await axios.get('https://localhost:7061/api/users/');
                setAllMembers(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchAllMembers();
    }, []);

    return (
        <div className="container">
            <h2 className="mb-4">Member List</h2>
            <li className="list-group-item d-flex row">
                <p className="p-0 m-2 col-2" style={{ textAlign: 'left' }}>
                    Username
                </p>
                <p className="p-0 m-2 col-4" style={{ textAlign: 'left' }}>
                    ID
                </p>
                <p className="p-0 m-2 col" style={{ textAlign: 'left' }}>
                    Status
                </p>
                <p className="p-0 m-2 col-2">
                    Actions
                </p>
            </li>
            <LoadingAndError isLoading={isLoading} error={error} />
            <ul className="list-group">
                {!isLoading &&
                    error === null &&
                    allMembers.map((member, index) => (
                        <li className="list-group-item d-flex row" key={index}>
                            <p className="p-0 m-2 col-2" style={{ textAlign: 'left' }}>
                                {member.username}
                            </p>
                            <p className="p-0 m-2 col-4" style={{ textAlign: 'left' }}>
                                {member.id}
                            </p>
                            <p className="p-0 m-2 col" style={{ textAlign: 'left' }}>
                                {member.isBan ? 'Banned' : 'Active'}
                            </p>
                            <button className="btn-warning m-2 col-1">BAN</button>
                            <button className="btn-danger m-2 col-1">DELETE</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default MembersPage;
