import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'end', margin: '3%' }}>
            <Link to="/subject">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/54/54410.png"
                    alt="list icon"
                    style={{ width: '40px', margin: '0 10px' }}
                />
            </Link>
            <Link to="/subject/addSubject">
                <img
                    src="https://www.img.in.th/images/051636b4cd139d6bd3906c9ef4051c61.png"
                    style={{ width: '40px', margin: '0 10px' }}
                    alt="Create"
                />
            </Link>
            {/* <Link to="/subject/subject">
                <button>
                    <img src="https://cdn-icons.flaticon.com/png/512/4503/premium/4503700.png?token=exp=1650895503~hmac=4d489992d23e453aac612b7b967e3ec8" style={{ width: "40px" }} />
                </button>
            </Link> */}
        </div>
    );
};

export default Sidebar;
