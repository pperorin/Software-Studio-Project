import { PageLayout } from '../../components';
import Carousel from './components/Carousel';
import AnnounceList from './components/AnnounceList';

const HomePage = () => {
    return (
        <PageLayout>
            <Carousel />
            <div>
                <AnnounceList />
            </div>
        </PageLayout>
    );
};

export default HomePage;
