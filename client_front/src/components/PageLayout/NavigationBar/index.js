import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav class="container flex justify-around py-8 mx-auto bg-white">
            <div>
                <h3 class="text-2xl font-medium text-blue-500">LOGO</h3>
            </div>
            <div class="space-x-8 text-gray-500">
                <Link to="/">Home</Link>
                <Link to="/">link1</Link>
                <Link to="/">link2</Link>
            </div>
        </nav>
    );
};

export default NavigationBar;
