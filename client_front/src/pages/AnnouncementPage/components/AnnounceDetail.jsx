import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddAnnounce from './AddAnnounce';
    
import AnnounceList from '../../HomePage/components/AnnounceList';
const AnnounceDetail = ({data}) => {
    const datas={
        "title": "Announcement",
        "isHide": false,
        "created_At": "2022-04-22T11:46:39.95Z",
        "updated_At": "0001-01-01T00:00:00Z",
        "countLikes": [ 
            "6261625eab22607b298bc917"
        ],
        "isAnouncement": false
    }
    return <div className="container addsubject-form">
        <h1 style={{textAlign:"center"}}>{datas.title}</h1>
        {/* <p className="create-time">{datas.created_At}</p> */}
        <p style={{textAlign:'left'}}>
            {datas.desc}
        </p>
        {/* <AddAnnounce/> */}
        <AnnounceList/>
    </div>
}

export default AnnounceDetail;