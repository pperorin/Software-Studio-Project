const MembersPage = () => {
    return (
        <div className="container">
            <h2 className="mb-4">Member List</h2>
            <ul className="list-group">
                <li className="list-group-item d-flex">
                    <p className="p-0 m-2 flex-grow-1">ชื่อ นามสกุล</p>
                    <button className="btn-warning m-2">BAN</button> <button className="btn-danger m-2">DELETE</button>
                </li>
            </ul>
        </div>
    );
};

export default MembersPage;
