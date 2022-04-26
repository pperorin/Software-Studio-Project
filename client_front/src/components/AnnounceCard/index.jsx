const AnnounceCard = ({ data }) => {
    return <div className="row" style={{margin:"10px 0"}}>
        <div className="card">
            <div className="card-body" style={{margin:"0 10px"}}>
                <h5 className="card-title">{data.username}</h5>
                <p className="create-time">{data.created_At}</p>
                <p className="card-text">{data.desc}</p>
                <div style={{display:"flex"}}>
                </div>
            </div>
        </div>
    </div>

}
export default AnnounceCard;