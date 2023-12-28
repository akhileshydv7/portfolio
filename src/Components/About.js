import profilePhoto from "../assets/about-pic.jpg";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
// import arrow from "../assets/arrow.png";

const About = () => {
    // const myFunction = () => {
    //     window.location.href = "#experience";
    // }
    return (
        <div id="about" className="about">
            <div style={{ display: "flex", }}>
                <div>
                    <div className="upper-text">
                        <p>Get To Know More</p>
                        <h1>About Me</h1>
                    </div>
                    <div className="down-part">
                        <img src={profilePhoto} alt="oops" />
                        <div>
                            <div className="about-box">
                                <div className="experience-box">
                                    <img src={experience} alt="oops" />
                                    <p style={{ fontSize: "20px", fontWeight: "600" }}>Experience</p>
                                    <p>Fresher</p>
                                    <p>Frontend</p>
                                    <p>Developer</p>
                                </div>
                                <div className="education-box">
                                    <img src={education} alt="oops" />
                                    <p style={{ fontSize: "20px", fontWeight: "600" }}>Education</p>
                                    <p>BTech</p>
                                    <p>Degree</p>
                                    <p>APS Bolarum</p>
                                </div>
                            </div>
                            <p className="profile">
                                I’m a self-taught developer. And love to experiment with new technologies. I’m quietly confident,
                                naturally curious, and perpetually working on improving my skills.
                                In my spare time I like building my own products
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <img src={arrow} alt="arrow Button" className="arrow-button" onClick={myFunction}
                        style={{ width: "32px", height: "32px", cursor: "pointer", }}
                    />
                </div> */}

            </div>

        </div>
    )
}

export default About