import './addCharacter.css';

import Modal from '../../modal/Modal component/Modal.jsx';
import CharacterList from "../characters list/Characters list.jsx";

import {useEffect, useState} from "react";

export default function AddCharacter({setClassName, setClassSrc, setClassLevel, setClassAttutment, setClassVitality, setClassResist, setClassStrength, setClassDexterity, setClassIntelligence, setClassFaith, setClassEndurance}) {

    // хуки для резистов персов, прокидываю через компонент
    const [name, setName] = useState("");
    const [src, setSrc] = useState("");
    const [level, setLevel] = useState(0);
    const [vitality, setVitality] = useState(0);
    const [endurance, setEndurance] = useState("");
    const [attunement, setAttunement] = useState(0);
    const [resist, setResistance] = useState(false);
    const [strength, setStrength] = useState(0);
    const [dexterity, setDexterity] = useState(0);
    const [intelligence, setIntelligence] = useState(0);
    const [faith, setFaith] = useState(0);

    useEffect(() => {
        setClassName(name);
        setClassSrc(src);
        setClassLevel(level);
        setClassAttutment(attunement);
        setClassVitality(vitality);
        setClassResist(resist);
        setClassEndurance(endurance);
        setClassStrength(strength);
        setClassDexterity(dexterity);
        setClassFaith(faith);
        setClassIntelligence(intelligence);
        console.log(name, src, level, vitality, attunement, strength, dexterity, resist, intelligence, faith);
    }, [name])

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <CharacterList setName={setName} setSrc={setSrc} setLevel={setLevel}
                               setAttunement={setAttunement} setVitality={setVitality} setResistance={setResistance}
                               setStrength={setStrength} setDexterity={setDexterity}
                               setIntelligence={setIntelligence} setFaith={setFaith} setEndurance={setEndurance}/>
            </Modal>
            <div className="addCharacter">
                <div className="addCharacterMainContanier" onClick={() => setIsModalOpen(true)}>
                   <button>
                       <img src="https://t4.ftcdn.net/jpg/04/20/62/39/360_F_420623928_a5QOH1T7RWyHGTOjvZAoppF80fTiuvJK.jpg"/>
                   </button>
                </div>
            </div>
        </>
    )
}