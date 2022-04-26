import { PageLayout } from '../../components';
import Carousel from './components/Carousel';
import AnnounceDetail from './components/AnnounceDetail';

const HomePage = () => {
    return (
        <PageLayout>
            <Carousel/>
            <div>
                <AnnounceDetail/>
            </div>
        </PageLayout>
    );
};

export default HomePage;
