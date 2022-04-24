import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddComment from './AddComment';
import CommentList from './CommentList';
const SubjectDetail = ({data}) => {
    const datas={
        "id": "6262959f487d7f639d6696c7",
        "user_ID": "626161d0ab22607b298bc916",
        "username": "mook",
        "title": "ddddddddddddddddddddddddddd",
        "desc": "คุคิ",
        "isHide": false,
        "created_At": "2022-04-22T11:46:39.95Z",
        "updated_At": "0001-01-01T00:00:00Z",
        "countLikes": [
            "6261625eab22607b298bc917"
        ],
        "isAnouncement": false
    }
    return <div className="container addsubject-form">
        <h1 style={{textAlign:"left"}}>{datas.title}</h1>
        <p className="create-time">{datas.created_At}</p>
        <p style={{textAlign:'left'}}>
            {datas.desc}
        </p>
        <AddComment/>
        <CommentList/>
    </div>
}

export default SubjectDetail;