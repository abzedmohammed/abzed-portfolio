export default function Card(props){
    return(
        <>
        <a target="_blank" rel="noreferrer" href={props.url}>
            <div className="card project-card mt-3">
                <div className="img-box">
                    <img src={props.picture} alt="card-img" />
                </div>
                <div className="content">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <div className="card-action">
                        <div className="name-container">
                            <img src="https://res.cloudinary.com/abzed/image/upload/v1658123480/azagfvxpgtszyuqafdr0.jpg" className="avatar" alt="card-user-avatar" />
                            <div className="name-box">
                                <span>Abzed Mohammed</span>
                                <small>18 Aug</small>
                            </div>
                        </div>
                        <ul className="tags-body">
                            <li className="tags btn-info mt-1">React</li>
                            <li className="tags btn-info mt-1">Cloudinary</li>
                        </ul>                    
                    </div>
                </div>
            </div>
        </a>
        </>
    )
}