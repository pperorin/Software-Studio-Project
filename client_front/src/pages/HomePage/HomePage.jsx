import { PageLayout } from '../../components';
import Carousel from './components/Carousel';
import AnnounceDetail from '../AnnouncementPage/components/AnnounceDetail';

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
