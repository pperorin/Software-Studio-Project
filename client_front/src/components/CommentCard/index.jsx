const CommentCard = ({ data }) => {
    return <div className="col" style={{ margin: "10px 0" }}>
        <div className="card">
            <div className="card-body" style={{ margin: "0 10px" }}>
                <div style={{display: "flex",alignItems:"center"}}>
                    <h5 className="card-title">{data.username}</h5>&nbsp;
                    <p className="create-time" style={{fontSize:"70%",marginLeft:"1%",marginTop:"2%"}}>{data.created_At}</p>
                </div>
                <hr style={{margin:"0 0 1% 0"}}/>
                <p className="card-text">{data.desc}</p>
                <div style={{ display: "flex" }}>
                    <img src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png" style={{ width: 30, flexBasis: 49.5 }} />
                    <p style={{ margin: 10, flexBasis: 49.5 }}>10</p>
                </div>
            </div>
        </div>
    </div>

}
export default CommentCard;