import Card from "./Card";

export default function Dev({projects}) {
    return(
        <>
        <div className="container mt-3 mb-5">
            <center>
                <h1 className="arrow">Web Applications</h1>
            </center>
            <div className="row">
            <div className="col-md-1"></div> 
            <div className="col-md-10">
                {
                    projects.length ?
                    projects.map(project => {
                    return <Card key={project.id} title={project.title} picture={project.picture}
                    description={project.description} tags={project.tags} date={project.date} url={project.url} />
                })
                :
                <div>
                    <span className="loader"></span>
                    <p className="text-center mt-3">Fetching projects from a very slow server😂😂😂. Please wait... </p>
                </div>
               } 
            </div> 
            <div className="col-md-1"></div> 
            </div>
        </div>
        </>
    )
}