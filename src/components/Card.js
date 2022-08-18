export default function Card(){
    return(
        <>
        <a target="_blank" href="{{item.url}}">
            <div className="card project-card mt-3">
                <div className="img-box">
                    <img src="https://res.cloudinary.com/abzed/image/upload/v1657987941/eifkhxzwsfqchfuw1bwq.png" alt="card-img" />
                </div>
                <div className="content">
                    <h3>Title</h3>
                    <p>Card description...</p>
                    <div className="card-action">
                        <div className="name-container">
                            <img src="https://res.cloudinary.com/abzed/image/upload/v1658123480/azagfvxpgtszyuqafdr0.jpg" className="avatar" alt="card-user-avatar" />
                            <div className="name-box">
                                <span>Abzed Mohammed</span>
                                <small>18 Aug</small>
                            </div>
                        </div>
                        <ul>
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