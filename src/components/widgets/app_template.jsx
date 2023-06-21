import { useScreenSize } from '../screen_size_context';


function AppTemplate({ children, text, cross, alignment , width}) {
    const { isSmallScreen, isMediumScreen } = useScreenSize();

    return (
        <div style={{
            display: "flex",
            flexDirection: "Column",
            height: "1000px",
            justifyContent: alignment ?? "start",
            alignItems: cross ?? "start",
            width: isSmallScreen ? "760px" : isMediumScreen ? "1024px" :"100%",
        }}>
            <div style={{
                backgroundColor: "black", width: width ?? "100%", display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: isSmallScreen ? "20px" : "30px", paddingTop: isSmallScreen ? "30px" : "30px"
            }}>
                < p style={{ fontSize: isSmallScreen ? "17px" : (isMediumScreen ? "20px" : "25px"), fontWeight: "bold", color: "white", paddingLeft: "20px" }} >{text ?? "Green Card"}</p>
            </div >
            {children}
        </div >
    );
}

export default AppTemplate