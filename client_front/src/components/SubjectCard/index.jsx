import { useNavigate } from "react-router-dom";

const SubjectCard = ({ data }) => {
    const navigate = useNavigate();
    if (data.desc.length > 80) {
        data.desc = data.desc.substring(0, 100) + '...';
    }

    function onClickButton(){
        navigate(`/subject/${data.id}`)
    }
    return <div className="col-sm-4" >
        <div className="card" style={{ height: "190px" }}>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.desc}</p>
                <div style={{ display: "flex",justifyContent:"space-between"}}>
                    <div style={{justifyContent:"start"}}>
                        <img src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png" style={{display:"inline-block",marginRight:"10px",height:"40px"}} />
                        <p style={{display:"inline-block"}}>10</p>
                    </div>
                        <button onClick={onClickButton} className="btn btn-primary" style={{ height:"40px",justifyContent: "end" }}>อ่านต่อ</button>
                </div>

            </div>
        </div>
    </div>

}

export default SubjectCard;