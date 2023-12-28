const Foooter = () => {
    return (
        <div
            className="footer">
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                <a style={{ paddingRight: "24px" }}
                    href="https://github.com/akhileshydv7">
                    <img width="30" height="30"
                        src="https://ghost32-bifrost.netlify.app/assets/icons/github.png"
                        alt="ok" />
                </a>
                <a style={{ paddingRight: "24px" }}
                    href="mailto:akhileshyadav26620@gmail.com">
                    <img width="30" height="30"
                        src="https://www.kalashsharma.com/assets/gmail.png"
                        alt="ok" />
                </a>
                <a
                    href="https://www.linkedin.com/in/akhileshyadav26/">
                    <img width="30" height="30"
                        src="https://ghost32-bifrost.netlify.app/assets/icons/linkedin.png"
                        alt="ok" />
                </a>
            </div>
            <div
                style={{
                    display: "flex", flexDirection: "column",
                    justifyContent: "center", alignItems: "center", paddingTop: "28px", color: "white"
                }}>
                <small>Designed & built by akhileshyadav26</small>
                <small>© 2023 Swiggy_Clone. All rights reserved</small>
            </div>
        </div>
    )
}

export default Foooter;