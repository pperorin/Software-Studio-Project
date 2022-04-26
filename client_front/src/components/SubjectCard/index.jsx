import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const SubjectCard = ({ data }) => {
    const user = useSelector((state) => state.auth);
    const [like, setLike] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const fetchLike = async () => {
            try {
                const response = await axios.get(`https://localhost:7061/api/subject/getuserlike/${data.id}`, {
                    headers: { 'Content-Type': 'application/json' },
                });
                setLike(response.data);
                setIsLoading(false);
            } catch (error) {
                alert(error.message);
                setIsLoading(false);
            }
        };
        fetchLike();
        setReload(false);
    }, [reload, data.id]);

    const navigate = useNavigate();
    if (data.desc.length > 80) {
        data.desc = data.desc.substring(0, 80) + '...';
    }
    if(data.title.length > 80){
        data.title = data.title.substring(0, 80) + '...';
    }

    function onClickButton() {
        navigate(`/subject/${data.id}`);
    }

    const onClickLike = async () => {
        try {
            await axios.put(`https://localhost:7061/api/subject/like/${data.id}`, {
                user_id: user.user.id,
            });
        } catch (error) {
            alert(error.message);
        }
        setReload(true);
    };

    return (
        <div className="col-sm-4">
            <div className="card" style={{ height: '230px' }}>
                <div className="card-body">
                    <a><img src='https://cdn-icons-png.flaticon.com/512/847/847969.png' style={{ width: '40px', height: '40px' }} />{data.username}</a>
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.desc}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ justifyContent: 'start' }}>
                            <img
                                src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png"
                                style={{ display: 'inline-block', marginRight: '10px', height: '40px' }}
                                onClick={onClickLike}
                                alt="Like"
                                role="button"
                            />
                            {!isLoading && <p style={{ display: 'inline-block' }}>{like.length}</p>}
                        </div>
                        <button
                            onClick={onClickButton}
                            className="btn btn-primary"
                            style={{ height: '40px', justifyContent: 'end' }}
                        >
                            อ่านต่อ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubjectCard;
