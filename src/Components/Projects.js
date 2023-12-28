import React from 'react';
import photo1 from '../assets/project-1.png';

const Projects = () => {
    const liveDemo = () => {
        window.location.href = "https://eatandbite.netlify.app/";
    }
    const github = () => {
        window.location.href = "https://github.com/akhileshydv7/EatandBite";
    }
    return (
        <div id="projects" style={{ minHeight: "100vh", }}>
            <div style={{ textAlign: "center" }} >
                <p >Browse My Recent</p>
                <h1 style={{ marginTop: "4px", fontSize: "3rem" }} >Projects</h1>
            </div>
            <div style={{
                margin: "auto", display: "flex", justifyContent: "center",
                alignItems: "center", gap: "4%",
            }}>
                <div style={{ border: "1.5px solid gray", width: "35%", textAlign: "center", borderRadius: "10%", paddingBottom: "12px" }}>
                    <img src={photo1} alt='oops'
                        style={{ width: "80%", borderRadius: "10%", marginTop: "32px" }}
                    />
                    <h1>Eat&Bite</h1>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "4%", margin: "8px 0", }}>
                        <button
                            style={{ padding: "12px 32px" }}
                            className='live-button'
                            onClick={github}>
                            Github
                        </button>
                        <button
                            style={{ padding: "12px 20px" }}
                            className='live-button'
                            onClick={liveDemo}>
                            Live Demo
                        </button>
                    </div>
                </div>
                <div style={{ border: "1.5px solid gray", width: "35%", textAlign: "center", borderRadius: "10%", paddingBottom: "12px" }}>
                    <img src={photo1} alt='oops'
                        style={{ width: "80%", borderRadius: "10%", marginTop: "32px" }}
                    />
                    <h1>Eat&Bite</h1>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "4%", margin: "8px 0", }}>
                        <button
                            style={{ padding: "12px 32px" }}
                            className='live-button'
                            onClick={github}>
                            Github
                        </button>
                        <button
                            style={{ padding: "12px 20px" }}
                            className='live-button'
                            onClick={liveDemo}>
                            Live Demo
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects