import { useState, useEffect } from 'react';
import axios from 'axios';

import { SubjectCard } from '../../../components';

const SubjectList = () => {
    // const datas = [
    //     {
    //         "id": "6262959f487d7f639d6696c7",
    //         "user_ID": "626161d0ab22607b298bc916",
    //         "username": "mook",
    //         "title": "ddddddddddddddddddddddddddd",
    //         "desc": "คุคิ",
    //         "isHide": false,
    //         "created_At": "2022-04-22T11:46:39.95Z",
    //         "updated_At": "0001-01-01T00:00:00Z",
    //         "countLikes": [
    //             "6261625eab22607b298bc917"
    //         ],
    //         "isAnouncement": false
    //     },
    //     {
    //         "id": "6262959f487d7f639d6696c7",
    //         "user_ID": "626161d0ab22607b298bc916",
    //         "username": "mook",
    //         "title": "ddddddddddddddddddddddddddd",
    //         "desc": "คุคิ",
    //         "isHide": false,
    //         "created_At": "2022-04-22T11:46:39.95Z",
    //         "updated_At": "0001-01-01T00:00:00Z",
    //         "countLikes": [
    //             "6261625eab22607b298bc917"
    //         ],
    //         "isAnouncement": false
    //     },
    //     {
    //         "id": "6262959f487d7f639d6696c7",
    //         "user_ID": "626161d0ab22607b298bc916",
    //         "username": "mook",
    //         "title": "ddddddddddddddddddddddddddd",
    //         "desc": "คุคิ",
    //         "isHide": false,
    //         "created_At": "2022-04-22T11:46:39.95Z",
    //         "updated_At": "0001-01-01T00:00:00Z",
    //         "countLikes": [
    //             "6261625eab22607b298bc917"
    //         ],
    //         "isAnouncement": false
    //     },
    //     {
    //         "id": "6262959f487d7f639d6696c7",
    //         "user_ID": "626161d0ab22607b298bc916",
    //         "username": "mook",
    //         "title": "ddddddddddddddddddddddddddd",
    //         "desc": "คุคิ",
    //         "isHide": false,
    //         "created_At": "2022-04-22T11:46:39.95Z",
    //         "updated_At": "0001-01-01T00:00:00Z",
    //         "countLikes": [
    //             "6261625eab22607b298bc917"
    //         ],
    //         "isAnouncement": false
    //     }
    // ]
    const [allSubjects, setAllSubjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reload, setReload] = useState(false); 

    useEffect(() => {
        const fetchAllSubjects = async () => {
            try {
                const res = await axios.get('https://localhost:7061/api/subject');
                setAllSubjects(res.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        fetchAllSubjects();
    }, [reload]);


    return (
        <div className='container'>
            <h1 style={{ margin: "30px 0" }}>All Subjects</h1>
            <div className="row">
                {allSubjects.map((subject) =>
                    <SubjectCard data={subject} />
                )}
            </div>
        </div>
    );
};

export default SubjectList;
