const AnnounceCard = ({ data }) => {
    return <div class="col" style={{margin:"10px 0"}}>
        <div class="card">
            <div class="card-body" style={{margin:"0 10px"}}>
                <h5 class="card-title">{data.username}</h5>
                <p class="create-time">{data.created_At}</p>
                <p class="card-text">{data.desc}</p>
                <div style={{display:"flex"}}>
                </div>
            </div>
        </div>
    </div>

}
export default AnnounceCard;