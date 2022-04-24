import { useState, useEffect } from 'react';
import axios from 'axios';

import { LoadingAndError } from '../../../components';

const MembersPage = () => {
    const [allMembers, setAllMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reload, setReload] = useState(false);

    const onClickBanHandler = async (id) => {
        try {
            await axios.put(`https://localhost:7061/api/users/ban/${id}`, {
                headers: { 'Content-Type': 'application/json' },
            });
            setReload(true);
        } catch (error) {
            alert(error.message);
        }
    };

    const onClickUnbanHandler = async (id) => {
        try {
            await axios.put(`https://localhost:7061/api/users/unlockban/${id}`, {
                headers: { 'Content-Type': 'application/json' },
            });
            setReload(true);
        } catch (error) {
            alert(error.message);
        }
    };

    const onClickDeleteHandler = async (id) => {
        try {
            await axios.delete(`https://localhost:7061/api/users/${id}`, {
                headers: { 'Content-Type': 'application/json' },
            });
            setReload(true);
        } catch (error) {
            alert(error.message);
        }
    };

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
        setReload(false);
    }, [reload]);

    return (
        <div className="container">
            <h2 className="mb-4">Member List</h2>
            <li className="list-group-item d-flex row">
                <p className="p-0 m-2 col-2 fw-bold" style={{ textAlign: 'left' }}>
                    Username
                </p>
                <p className="p-0 m-2 col-4 fw-bold" style={{ textAlign: 'left' }}>
                    ID
                </p>
                <p className="p-0 m-2 col fw-bold" style={{ textAlign: 'left' }}>
                    Status
                </p>
                <p className="p-0 m-2 col-2 fw-bold">Actions</p>
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
                            {member.isBan ? (
                                <p className="p-0 m-2 col" style={{ textAlign: 'left' }}>
                                    <span className="badge rounded-pill bg-warning text-dark">Banned</span>
                                </p>
                            ) : (
                                <p className="p-0 m-2 col" style={{ textAlign: 'left' }}>
                                    <span className="badge rounded-pill bg-success">Active</span>
                                </p>
                            )}
                            {member.isBan ? (
                                <button
                                    className="btn-success m-2 col-1"
                                    onClick={onClickUnbanHandler.bind(this, member.id)}
                                >
                                    UNBAN
                                </button>
                            ) : (
                                <button
                                    className="btn-warning m-2 col-1"
                                    onClick={onClickBanHandler.bind(this, member.id)}
                                >
                                    BAN
                                </button>
                            )}
                            <button
                                className="btn-danger m-2 col-1"
                                onClick={onClickDeleteHandler.bind(this, member.id)}
                            >
                                DELETE
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default MembersPage;
