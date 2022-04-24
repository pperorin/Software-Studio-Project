import { CommentCard } from "./../../../components";

const CommentList = ({ data }) => {
    const datas = [
        {
            "id": "626296bb743e4549e2ef36b5",
            "user_ID": "626161d0ab22607b298bc916",
            "subject_ID": "6262959f487d7f639d6696c7",
            "username": "mook",
            "desc": "อุอิ",
            "isHide": false,
            "created_At": "2022-04-22T11:51:23.779Z",
            "updated_At": "2022-04-22T11:51:55.853Z",
            "countLikes": [
                "62611f9586698334d6efffc6"
            ]
        },
        {
            "id": "626296bb743e4549e2ef36b5",
            "user_ID": "626161d0ab22607b298bc916",
            "subject_ID": "6262959f487d7f639d6696c7",
            "username": "mook",
            "desc": "อุอิ",
            "isHide": false,
            "created_At": "2022-04-22T11:51:23.779Z",
            "updated_At": "2022-04-22T11:51:55.853Z",
            "countLikes": [
                "62611f9586698334d6efffc6"
            ]
        },
        {
            "id": "626296bb743e4549e2ef36b5",
            "user_ID": "626161d0ab22607b298bc916",
            "subject_ID": "6262959f487d7f639d6696c7",
            "username": "mook",
            "desc": "อุอิ",
            "isHide": false,
            "created_At": "2022-04-22T11:51:23.779Z",
            "updated_At": "2022-04-22T11:51:55.853Z",
            "countLikes": [
                "62611f9586698334d6efffc6"
            ]
        },
        {
            "id": "626296bb743e4549e2ef36b5",
            "user_ID": "626161d0ab22607b298bc916",
            "subject_ID": "6262959f487d7f639d6696c7",
            "username": "mook",
            "desc": "อุอิ",
            "isHide": false,
            "created_At": "2022-04-22T11:51:23.779Z",
            "updated_At": "2022-04-22T11:51:55.853Z",
            "countLikes": [
                "62611f9586698334d6efffc6"
            ]
        }
    ]
    return <div className="container addsubject-form">
        {datas.map((data) =>
            <CommentCard data={data} />
        )}
    </div>
}
export default CommentList;