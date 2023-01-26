import { useEffect, useState } from "react"
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "Software Engineer",
    "Cloud Developer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "Technical Writer",
    "Technical Writer",
    "All in One",
]

export default function Hero(){
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);   
    }, [])
    
    return(
        <>
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container">
            <h1 className="hello">Hello, I'm</h1>
                <h1>Abzed Mohammed</h1>
                <p>a <span className="typed">
                <TextTransition springConfig={presets.slow}>
                {TEXTS[index % TEXTS.length]}
            </TextTransition>
                </span></p>
                <div className="social-links">
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/AbzedMohammed" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://facebook.com/abzed.tetz" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/abzedmohammed" className="github"><i className="bx bxl-github"></i></a>
                    {/* <a target="_blank" rel="noreferrer" href="https://wa.me/254759507042?text=Hello" className="whatsapp"><i className="bx bxl-whatsapp"></i></a> */}
                    <a target="_blank" rel="noreferrer" href="https://t.me/+254759507042" className="telegram"><i className="bx bxl-telegram"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://dev.to/abzed" className="dev"><i className="bx bxl-dev-to"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abzed-mohammed-630bb181/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </section>
        </>
    )
}