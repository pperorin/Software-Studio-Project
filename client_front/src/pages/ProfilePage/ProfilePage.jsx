import { PageLayout } from '../../components';
import Password from './components/Password';

const ProfilePage = () => {
    return (
        <PageLayout>
            <div className='center container'>
                <div className="row">
                    <div className="col-2">
                        <img src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="profile" className='profileImg' />
                    </div>
                    <div className="col-10">
                        <label htmlFor="">Username </label>
                        <input type="text" className='username' disabled placeholder="เซนเองครับ"/>
                        <Password />
                    </div>
                </div>
            </div>
        </PageLayout >
    );
};

export default ProfilePage;
