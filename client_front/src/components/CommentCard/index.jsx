import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const CommentCard = ({ data }) => {
    const user = useSelector((state) => state.auth);
    const [like, setLike] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const fetchLike = async () => {
            try {
                const response = await axios.get(`https://localhost:7061/api/comment/getuserlike/${data.id}`, {
                    headers: { 'Content-Type': 'application/json' },
                });
                setLike(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchLike();
        setReload(false);
    }, [reload, data.id]);

    const onClickLike = async () => {
        try {
            await axios.put(`https://localhost:7061/api/comment/like/${data.id}`, {
                user_id: user.user.id,
            });
        } catch (error) {
            alert(error.message);
        }
        setReload(true);
    };

    const onAdminHideComment = async () => {
        try {
            await axios.put(`https://localhost:7061/api/comment/hide/${data.id}`, {
                headers: { 'Content-Type': 'application/json' },
            });
            data.isHide = true;
        } catch (error) {
            alert(error.message);
        }
        setReload(true);
    };

    const onAdminUnhideComment = async () => {
        try {
            await axios.put(`https://localhost:7061/api/comment/appear/${data.id}`, {
                headers: { 'Content-Type': 'application/json' },
            });
        } catch (error) {
            alert(error.message);
        }
        data.isHide = false;
        setReload(true);
    };

    const onAdminDeleteComment = async () => {
        try {
            await axios.delete(`https://localhost:7061/api/comment/${data.id}`, {
                headers: { 'Content-Type': 'application/json' },
            });
        } catch (error) {
            alert(error.message);
        }
        setReload(true);
    };


    return (
        <div className="col" style={{ margin: '10px 0' }}>
            <div className="card">
                <div className="card-body" style={{ margin: '0 10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h5 className="card-title">{data.username}</h5>&nbsp;
                        <p className="create-time" style={{ fontSize: '70%', marginLeft: '1%', marginTop: '2%' }}>
                            {data.created_At}
                        </p>
                    </div>

                    <hr style={{ margin: '0 0 1% 0' }} />
                    <p className="card-text">{data.desc}</p>
                    <div style={{ display: 'flex' }}>
                        <img
                            src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png"
                            style={{ width: 30, flexBasis: 49.5 }}
                            onClick={onClickLike}
                            alt="Like Button"
                        />
                        {!isLoading && <p style={{ margin: 10, flexBasis: 49.5 }}>{like.length}</p>}
                    </div>

                    {user.user?.isAdmin && (
                        <div className="mx-auto d-flex flex-row bd-highlight float-end">
                            Admin : 
                            {data.isHide ? (
                                <button className="btn btn-outline-success mx-2" onClick={onAdminUnhideComment}>
                                    Unhide
                                </button>
                            ) : (
                                <button className="btn btn-outline-warning mx-2" onClick={onAdminHideComment}>Hide</button>
                            )}

                            <button className="btn btn-outline-danger" onClick={onAdminDeleteComment}>Delete</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default CommentCard;
