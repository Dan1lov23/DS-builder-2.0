import './boss.css';
import '../add boss component/AddBoss.jsx'
import AddBosses from "../add boss component/AddBoss.jsx";
import {useState} from "react";

export default function BossComponent(setBossName, setBossSrc, setBossHp) {

    const [name, setName] = useState("");
    const [src, setSrc] = useState("");
    const [hp, setHp] = useState(0);

    const defaultBossSrc = "https://i.pinimg.com/736x/30/30/e3/3030e3fa40eb4fd810320bbff7f0a1c4.jpg";

    return (
        <>
            <AddBosses setBossName={setName} setBossSrc={setSrc} setBossHp={setHp} />
            <div className="bossComponentMain">
                    <div className="boss">
                        <img src={src || defaultBossSrc} alt="" className="bossImg"/>
                        <h1>{name}</h1>
                        <h1>{hp} HP</h1>
                        <img src="https://www.kindpng.com/picc/m/85-852344_health-bar-png-game-health-bar-png-transparent.png" className="bossHpBarImg"/>
                    </div>
            </div>
        </>
    )
}