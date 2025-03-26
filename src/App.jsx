import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home page/Home.jsx'
import EquipList from '../pages/equip list page/equipList.jsx'
import EquipAdd from "../components/equip add component/EquipAdd.jsx";

// импорты старнц брони

import "../pages/addHelm/addHelm"
import AddHelm from "../pages/addHelm/AddHelm.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/equipList" element={<EquipList />}/>
                    <Route path="/helms" element={<AddHelm />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
