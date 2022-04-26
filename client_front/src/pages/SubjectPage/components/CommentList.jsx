import { CommentCard } from './../../../components';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CommentList = () => {
    const [allCommnets, setallCommnets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchAllComment = async () => {
            try {
                const response = await axios.get(`https://localhost:7061/api/comment/getcommentsubject/${id}`);
                setallCommnets(response.data);
                setIsLoading(false);
            } catch (error) {
                alert(error.message);
                setIsLoading(false);
            }
        };
        fetchAllComment();
    }, [id]);

    if (allCommnets === 'ไม่มีคอมเม้นอยู่เลย') return <div></div>;
    return (
        <div className="container addsubject-form">
            {!isLoading &&
                allCommnets.map((comment, index) => {
                    if (!comment.isHide) {
                        return <CommentCard data={comment} key={index} />;
                    }
                    return '';
                })}
        </div>
    );
};
export default CommentList;
