const SubjectCard = ({ data }) => {
    return <div class="col-sm-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>
                    <p class="card-text">{data.desc}</p>
                    <a href={data.id} class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
   
}

export default SubjectCard;