import './boss.css';

import AddBosses from "../add boss component/AddBoss.jsx";
import Modal from "../../modal/Modal component/Modal.jsx";

import { useState, useEffect } from "react";

export default function BossComponent({setBossResist, setImportBossHp }) {
    const [name, setName] = useState("");
    const [src, setSrc] = useState("");
    const [hp, setHp] = useState(0);
    const [resist, setResist] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setImportBossHp(hp);
        setBossResist(resist);
    }, [hp]);

    const defaultBossSrc = "https://i.pinimg.com/736x/30/30/e3/3030e3fa40eb4fd810320bbff7f0a1c4.jpg";

    return (
        <>
            <div className="showBossesButton">
                <button onClick={() => setIsModalOpen(true)}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RVVrAAwPsM5OPq9nRgDH6A0pmqGy6iZ0OlBrSniOLEPTpLBXj1i4WlbmRbsmEBgN73M&usqp=CAU"/>
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <AddBosses setBossName={setName} setBossSrc={setSrc} setBossHp={setHp} setBossResist={setResist} />
            </Modal>
            <div className="bossComponentMain">
                <div className="boss">
                    <img src={src || defaultBossSrc} alt="" className="bossImg" />
                    <h1>{name}</h1>
                    <h1>{hp} HP</h1>
                </div>
            </div>
        </>
    );
}