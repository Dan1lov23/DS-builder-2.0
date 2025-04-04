import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home page/Home.jsx'
import "../pages/addHelm/addHelm"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
