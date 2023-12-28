import React from 'react';
// import arrow from "../assets/arrow.png";
import checkmark from "../assets/checkmark.png";

const Experience = () => {
    // const myFunction = () => {
    //     window.location.href = "#about";
    // }

    const technologies = [
        {
            name: "HTML",
            level: "Experienced",
        }, {
            name: "CSS",
            level: "Intermediate",
        }, {
            name: "JavaScript",
            level: "Intermediate",
        }, {
            name: "React.JS",
            level: "Intermediate",
        }, {
            name: "Tailwind",
            level: "Intermediate",
        }, {
            name: "MaterialUI",
            level: "Basic",
        },
    ]
    return (
        <div id='experience' style={{ minHeight: "100vh" }}>
            <div style={{ textAlign: "center" }} >
                <p >Explore My</p>
                <h1 style={{ marginTop: "4px", fontSize: "3rem" }} >Experience</h1>
            </div>

            <div style={{ border: "1.5px solid gray", padding: "28px", width: "35%", borderRadius: "4rem", margin: "auto", marginTop: "24px" }}>
                <h1 style={{ textAlign: "center" }}>Frontend Development</h1>
                <div style={{
                    display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", gap: "44px", marginTop: "16px", marginLeft: "16px"
                }}>
                    {
                        technologies.map((e, index) => (

                            <div key={index} style={{ width: "fit-content", display: "flex", }}>
                                <img src={checkmark} alt='checkmark'
                                    style={{ width: "32px", marginRight: "12px", height: "32px", cursor: "pointer", }} />
                                <div>
                                    <p>{e.name}</p>
                                    <p>{e.level}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "end", marginRight: "200px" }}>
                <img src={arrow} alt="arrow Button" className="arrow-button" onClick={myFunction}
                    style={{ width: "32px", height: "32px", cursor: "pointer", }}
                />
            </div> */}
        </div>
    )
}

export default Experience