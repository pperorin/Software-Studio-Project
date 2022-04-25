import { AnnounceCard } from '../../../components';

const AnnounceList = () => {
    const datas = [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
    ]
    return (
        <div className='container'>
            {/* <h1 style={{ margin: "30px 0" }}>All Announcements</h1> */}
            <div class="row">
                {datas.map((data) =>
                    <AnnounceCard data={data} />
                )}
            </div>
        </div>
    );
};

export default AnnounceList;
