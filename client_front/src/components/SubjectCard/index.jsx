const SubjectCard = ({ data }) => {
    return <div class="col-sm-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <p class="card-text">{data.desc}</p>
                <div style={{display:"flex"}}>
                    <img src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png" style={{ height: 50, width: 50,flexBasis:49.5 }} />
                    <p style={{margin:10,flexBasis:49.5}}>10</p>
                </div>
                <a href={data.id} class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>

}

export default SubjectCard;