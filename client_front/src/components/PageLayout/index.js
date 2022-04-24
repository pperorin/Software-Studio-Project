import NavigationBar from './NavigationBar';
import Footer from './Footer';

const PageLayout = (props) => {
    const { children } = props;
    return (
        <>
            <NavigationBar />
            <main className="flex-grow w-100 mb-8 vh-100 align-items-center d-flex justify-content-center">{children}</main>
            <Footer />
        </>
    );
};

export default PageLayout;
