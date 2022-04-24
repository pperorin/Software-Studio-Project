import { useNavigate } from 'react-router-dom';

const ThreadPage = () => {
    const navigate = useNavigate();

    const onThreadClickHandler = (id) => {
        navigate(`/`);
    };

    return (
        <div className="container">
            <h2 className="mb-4">All Thread</h2>
            <div className="list-group mt-4">
                <li
                    className="list-group-item list-group-item-action flex-column border border-dark align-items-start mb-2"
                    onClick={onThreadClickHandler.bind(this, 1)}
                >
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-3 fw-bold">ธรรมะกระตุกจิตกระชากใจ</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="text-truncate" style={{ textAlign: 'left', fontSize: '14px' }}>
                        นี่เป็นการแสดงให้ดูท่านผู้เจริญ นี่เป็นการสอนธรรมะท่านผู้เจริญ
                        มาเตรียมพร้อมพนมมือและกล่าวไปพร้อมๆ กัน. บทสวดมนต์ก่อนนอนสั้นๆ แบบที่ 1 บูชาพระรัตนตรัย +
                        แผ่เมตตา. ตั้งนะโม 3 จบ เพื่อสักการะ ...
                    </p>
                </li>
                <div className="flex-column">
                    <button className="btn-danger mx-1 float-end">DELETE</button>
                    <button className="btn-warning mx-1 float-end">HIDE</button>
                </div>
            </div>
        </div>
    );
};

export default ThreadPage;
