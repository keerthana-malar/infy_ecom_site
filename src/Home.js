import React from "react";
import Categorysection from "./home/categorysection";
import Trend from "./home/trendingprojects";
// import Slider from "./home/Slider";

function Home(){
    return(
        <>
        {/* <Slider/> */}
        <Categorysection/>
        <Trend/>
        </>
    )
}

export default Home;