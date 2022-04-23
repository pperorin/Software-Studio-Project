const MembersPage = () => {
    return (
        <div className="container">
            <h2 className="mb-4">Member List</h2>
            <ul class="list-group">
                <li class="list-group-item d-flex">
                    <p class="p-0 m-2 flex-grow-1">ชื่อ นามสกุล</p>
                    <button class="btn-warning m-2">BAN</button> <button class="btn-danger m-2">DELETE</button>
                </li>
            </ul>
        </div>
    );
};

export default MembersPage;
