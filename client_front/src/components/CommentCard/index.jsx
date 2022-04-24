const CommentCard = ({ data }) => {
    return <div class="col" style={{margin:"10px 0"}}>
        <div class="card">
            <div class="card-body" style={{margin:"0 10px"}}>
                <h5 class="card-title">{data.username}</h5>
                <p class="create-time">{data.created_At}</p>
                <p class="card-text">{data.desc}</p>
                <div style={{display:"flex"}}>
                    <img src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png" style={{ width: 30,flexBasis:49.5 }} />
                    <p style={{margin:10,flexBasis:49.5}}>10</p>
                </div>
            </div>
        </div>
    </div>

}

export default CommentCard;