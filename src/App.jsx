import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home page/Home.jsx'
import EquipList from '../pages/equip list page/equipList.jsx'
import EquipAdd from "../components/equip add component/EquipAdd.jsx";
import ArmorList from "../pages/armorListPage/armorList.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="equipList" element={<EquipList />}/>
                    <Route path="armor" element={<ArmorList />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
