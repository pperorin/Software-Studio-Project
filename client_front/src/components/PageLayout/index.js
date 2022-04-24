import NavigationBar from './NavigationBar';
import Footer from './Footer';

const PageLayout = (props) => {
    const { children } = props;
    return (
        <>
            <NavigationBar />
            <main className="w-100 mb-8 vh-100">{children}</main>
            <Footer />
        </>
    );
};

export default PageLayout;
