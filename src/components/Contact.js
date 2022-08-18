import Footer from "./Footer";

export default function Contact(){
    return(
        <>
        <div className="container mt-3">
            <center>
                <h1 className="arrow">Contact Me</h1>
                <div className="row contact-details mt-2">
                <div className="col-md-4">
                    <div className="dark-box box-hover mt-2">
                    <h2><i className="bx bx-map"></i><span className="text-muted">Address</span></h2>
                    <p>Lucky Summer, Nairobi</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="dark-box box-hover mt-2">
                    <h2><i className="bx bx-mobile"></i><span className="text-muted">Phone</span></h2>
                    <p>+254 759 507 042</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="dark-box box-hover mt-2">
                    <h2><i className="bx bx-paper-plane"></i><span className="text-muted">Email</span></h2>
                    <p><a href="index.html#">ibraabzed@gmail.com</a></p>
                    </div>
                </div>
                </div>

                <div className="row">
                <div className="col-lg-4 mt-5">
                <iframe title="Abzed's Location"
                src="https://maps.google.com/maps?q=Lucky+Summer+Police+Post&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-100 w-100" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
                </div>

                    <div className="col-lg-8 mt-5">
                    <h4 className="drop-line mb-2">DROP ME A <span>LINE</span></h4>
                    <form action="forms/contact.php" method="post" className="php-email-form">
                    <div className="row">
                        <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                    </div>
                    <div className="my-3 d-none">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <button type="submit" className="btn btn-outline-primary mt-3">Send Message</button>
                    </form>
        
                </div>
                </div>
            </center>
        </div>
        <Footer />
        </>
    )
}