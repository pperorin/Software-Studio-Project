import { PageLayout } from '../../components';
import Password from './Components/Password';

const ProfilePage = () => {
    return (
        <PageLayout>
            <div className='center container'>
                <div class="row">
                    <div class="col-2">
                        <img src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="profile" className='profileImg' />
                    </div>
                    <div class="col-10">
                        <label htmlFor="">Username</label>
                        <input type="text" className='test' disabled placeholder="เซนเองครับ"/>
                        <Password />
                    </div>
                </div>
            </div>
        </PageLayout >
    );
};

export default ProfilePage;