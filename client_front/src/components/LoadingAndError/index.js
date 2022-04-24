const LoadingAndError = ({ isLoading, error }) => {
    return (
        <>
            {isLoading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
            {error && <div>{error}</div>}
        </>
    );
};

export default LoadingAndError;
