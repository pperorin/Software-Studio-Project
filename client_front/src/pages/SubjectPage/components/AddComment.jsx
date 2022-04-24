const AddComment = ({ data }) => {
    return <div className="container addsubject-form">
        <form>
            <div class="mb-3">
                <label for="title" class="form-label">Commnet</label>
                <input type="text" class="form-control" id="title" placeholder="Enter your title" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
}

export default AddComment;