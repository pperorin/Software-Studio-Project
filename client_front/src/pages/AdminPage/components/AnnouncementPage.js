const AnnouncementPage = () => {
    return (
        <div className="container">
            <h2 className="mb-4">Create new announcement</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="An announcement"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Write some description..."
                    ></textarea>
                </div>
                <button className="btn btn-primary float-end mt-3">Create</button>
            </form>
        </div>
    );
};

export default AnnouncementPage;
