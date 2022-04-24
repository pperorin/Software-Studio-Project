import { PageLayout } from '../../components';
import Carousel from './components/Carousel';

const HomePage = () => {
    return (
        <PageLayout>
            <Carousel/>
            <div>
                <h1>Homepage</h1>
            </div>
        </PageLayout>
    );
};

export default HomePage;
