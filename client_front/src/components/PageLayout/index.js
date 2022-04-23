import NavigationBar from './NavigationBar';
import Footer from './Footer';

const PageLayout = (props) => {
    const { children } = props;
    return (
        <>
            <NavigationBar />
            <main className="flex-grow mb-8 min-vh-100">{children}</main>
            <Footer />
        </>
    );
};

export default PageLayout;
