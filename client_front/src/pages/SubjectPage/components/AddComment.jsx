const AddComment = ({ data }) => {
    return <div className="container addsubject-form">
        <form>
            <div className="mb-3">
                <label for="title" className="form-label">Commnet</label>
                <input type="text" className="form-control" id="title" placeholder="Enter your title" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
}

export default AddComment;