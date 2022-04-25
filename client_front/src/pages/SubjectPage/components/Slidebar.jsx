import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "end", margin: "3%" }}>
            <Link to="/subject/addSubject">
                <button>
                    <img src="https://cdn-icons.flaticon.com/png/512/4503/premium/4503700.png?token=exp=1650895503~hmac=4d489992d23e453aac612b7b967e3ec8" style={{ width: "40px" }} />
                </button>
            </Link>
            <Link to="/admin/subject">
                <button>
                    <img src="https://cdn-icons.flaticon.com/png/512/4503/premium/4503700.png?token=exp=1650895503~hmac=4d489992d23e453aac612b7b967e3ec8" style={{ width: "40px" }} />
                </button>
            </Link>

        </div>
    );
};

export default Sidebar;
