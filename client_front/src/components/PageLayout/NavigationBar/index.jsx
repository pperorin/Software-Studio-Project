import { useSelector } from 'react-redux';

const NavigationBar = () => {
    const user = useSelector((state) => state.auth);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="./navbar.png" width="30" height="30" alt=""></img>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/subject">
                                Subject
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ReligiousDay">
                                Religious Day
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/HistoryOfBuddhism">
                                History of Buddhism
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                About Us
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">
                                About
                            </a>
                        </li> */}
                        {user.user?.isAdmin === true ? (
                            <li className="nav-item">
                                <a className="nav-link" href="/admin">
                                    Admin
                                </a>
                            </li>
                        ) : (
                            ''
                        )}

                        {/* <li className="nav-item">
                            <a className="nav-link" href="/register">
                                Register
                            </a>
                        </li> */}
                    </ul>
                    {user.user == null ? (
                        <a className="justify-content-end" href="/register">
                            Register
                        </a>
                    ) : (
                        ''
                    )}
                    {user.user !== null ? (
                        <a className="justify-content-end" href="/profile">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                                alt="profile"
                                className="userIcon"
                            />
                        </a>
                    ) : (
                        <a className="nav-link justify-content-end" href="/login">
                            Login
                        </a>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
