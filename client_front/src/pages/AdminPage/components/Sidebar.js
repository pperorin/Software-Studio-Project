import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__header-title m-3">
                    <h1>Admin</h1>
                </div>
            </div>
            <div className="sidebar__content">
                <div className="sidebar__content-item m-2">
                    <Link to="/admin/thread">
                        <i className="fas fa-newspaper"></i>
                        <span> Thread</span>
                    </Link>
                </div>
                <div className="sidebar__content-item m-2">
                    <Link to="/admin/members">
                        <i className="fas fa-users"></i>
                        <span> Members</span>
                    </Link>
                </div>
                <div className="sidebar__content-item m-2">
                    <Link to="/admin/announcement">
                        <i className="fas fa-megaphone"></i>
                        <span> Announcement</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
