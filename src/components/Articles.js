import Card from "./Card";

export default function Articles({articles}) {
    return(
        <>
            <div className="container my-3">
                <center>
                    <h1 className="arrow">Published Articles</h1>
                </center>
                <div className="row">
                   <div className="col-md-1"></div> 
                   <div className="col-md-10">
                   {
                    articles.map(article => {
                        return <Card key={article.id} title={article.title} picture={article.social_image}
                        description={article.description} language={article.language} url={article.url} />
                    })
                   }                    
                   </div> 
                   <div className="col-md-1"></div> 
                </div>
            </div>
        </>
    )
}