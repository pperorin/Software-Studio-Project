import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios';

const SubjectCard = ({ data }) => {
    const user = useSelector(state => state.auth);
    const [like, setLike] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLike = async () => {
            try {
                const response = await axios.get(`https://localhost:7061/api/subject/getuserlike/${data.id}`, {
                    headers: { 'Content-Type': 'application/json' },
                });
                console.log(response);
                setLike(response.data);
                console.log(like);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchLike();
    }, [like]);

    const navigate = useNavigate();
    if (data.desc.length > 80) {
        data.desc = data.desc.substring(0, 100) + '...';
    }

    function onClickButton() {
        navigate(`/subject/${data.id}`)
    }
    const onClickLike = async () => {
        try {
            await axios.put(`https://localhost:7061/api/subject/like/${data.id}`, {
                user_id: user.user.id,
            });
        }
        catch (error) {
            alert(error.message);
        }
    };


    return <div className="col-sm-4" >
        <div className="card" style={{ height: "190px" }}>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ justifyContent: "start" }}>
                        <img src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png" style={{ display: "inline-block", marginRight: "10px", height: "40px" }} onClick={onClickLike} />
                        <p style={{ display: "inline-block" }}>{like.length}</p>
                    </div>
                    <button onClick={onClickButton} className="btn btn-primary" style={{ height: "40px", justifyContent: "end" }}>อ่านต่อ</button>
                </div>

            </div>
        </div>
    </div>

}

export default SubjectCard;