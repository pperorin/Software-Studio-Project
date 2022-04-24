import { PageLayout } from '../../components';
import AddAnnounce from './components/AddAnnounce';
import AnnounceDetail from './components/AnnounceDetail';
import AnnounceList from './components/AnnounceList';

const AnnouncementPage = () => {
    return (
        <PageLayout>
            <div>
                <AnnounceDetail/>
            </div>
        </PageLayout>
    );
};

export default AnnouncementPage;
