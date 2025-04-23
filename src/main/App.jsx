import Home from '../pages/Home page/Home.jsx'
import Portal from "../pages/portal page/Portal.jsx";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

// <Route path="*" element={<Home />}/> я до этого прописывал дефолтный путь как "/", а надо было "*"
// при прогрузке страницы ничего не отображалось я не мог понять что это
// в общем впредь надо помнить, этот блок текста будет как напомнинание

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home />}/>
                    <Route path="/portal" element={<Portal />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
