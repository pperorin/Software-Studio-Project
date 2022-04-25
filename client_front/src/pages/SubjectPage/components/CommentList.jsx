import { CommentCard } from "./../../../components";

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const CommentList = () => {
    const [allCommnets, setallCommnets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        const fetchAllComment = async () => {
            try {
                const response = await axios.get(`https://localhost:7061/api/comment/getcommentsubject/${id}`);
                console.log(response);
                setallCommnets(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchAllComment();
    }, []);
    console.log(allCommnets);
    if (allCommnets == "ไม่มีคอมเม้นอยู่เลย")
        return <div></div>
    return <div className="container addsubject-form">
            {allCommnets.map((comment) =>
                <CommentCard data={comment} />
            )}
        </div>
}
export default CommentList;