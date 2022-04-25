const SubjectCard = ({ data }) => {
    if (data.desc.length > 80) {
        data.desc = data.desc.substring(0, 100) + '...';
    }
    return <div class="col-sm-4" >
        <div class="card" style={{ height: "190px" }}>
            <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <p class="card-text">{data.desc}</p>
                <div style={{ display: "flex",justifyContent:"space-between"}}>
                    <div style={{justifyContent:"start"}}>
                        <img src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png" style={{display:"inline-block",marginRight:"10px",height:"40px"}} />
                        <p style={{display:"inline-block"}}>10</p>
                    </div>
                    <a href={data.id} class="btn btn-primary" style={{ height:"40px",justifyContent: "end" }}>อ่านต่อ</a>
                </div>

            </div>
        </div>
    </div>

}

export default SubjectCard;