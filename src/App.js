import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import ReactDOM from "react-dom/client";
// import AnimatedCursor from "react-animated-cursor"
import LoadingBar from 'react-top-loading-bar'
import Blobity from 'blobity';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    const apiKey = '250ef95a95de44a5a7a1b3f5aebd6ae6';
    const country = 'us';


    const options = { color: 'rgb(180, 180, 180)' };
    new Blobity(options);
    return (
        <div>

            {/* <AnimatedCursor
                    color="255,64,64"
                    innerSize={12}
                    outerSize={20}
                    innerScale={1}
                    outerScale={1.7}
                    outerAlpha={10}
                    outerStyle={{
                        border: '0 solid #2F4F4F'
                    }}
                /> */}
            <options />
            <BrowserRouter>
                <NavBar />
                <LoadingBar
                    color='#f11946'
                    progress={100}

                />

                <Routes>
                    <Route path="/" element={<News key="general" pageSize={10} country={country} category="general" apiKey={apiKey} />} />

                    <Route path="/home" element={<News key="general" pageSize={10} country={country} category="general" apiKey={apiKey} />} />

                    <Route path="/business" element={<News key="business" pageSize={10} country={country} category="business" apiKey={apiKey} />} />

                    <Route path="/entertainment" element={<News key="entertainment" pageSize={10} country={country} category="entertainment" apiKey={apiKey} />} />

                    <Route path="/health" element={<News key="health" pageSize={10} country={country} category="health" apiKey={apiKey} />} />

                    <Route path="/science" element={<News key="science" pageSize={10} country={country} category="science" apiKey={apiKey} />} />

                    <Route path="sports" element={<News key="sports" pageSize={10} country={country} category="sports" apiKey={apiKey} />} />

                    <Route path="/technology" element={<News key="technology" pageSize={10} country={country} category="technology" apiKey={apiKey} />} />

                </Routes>

            </BrowserRouter>
        </div>
    )
}
export default App