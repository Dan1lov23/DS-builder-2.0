import Modal from '../../modal/Modal component/Modal.jsx';
import CharacterList from "../characters list/Characters list.jsx";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

export default function AddCharacter() {

    // хуки для резистов персов, прокидываю через компонент

    const [name, setName] = useState("");
    const [src, setSrc] = useState("");
    const [level, setLevel] = useState(0);
    const [vitality, setVitality] = useState(0);
    const [attunement, setAttunement] = useState(0);
    const [resist, setResistance] = useState(false);
    const [strength, setStrength] = useState(0);
    const [dexterity, setDexterity] = useState(0);
    const [intelligence, setIntelligence] = useState(0);
    const [faith, setFaith] = useState(0);

    useEffect(() => {
        console.log(name, src, level, vitality, attunement, strength, dexterity, resist, intelligence, faith);
    }, [name])


    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <CharacterList setName={setName} setSrc={setSrc} setLevel={setLevel}
                               setAttunement={setAttunement} setVitality={setVitality} setResistance={setResistance}
                               setStrength={setStrength} setDexterity={setDexterity}
                               setIntelligence={setIntelligence} setFaith={setFaith} />
            </Modal>
            <div className="addCharacter">
                <div className="addCharacterMainContanier" onClick={() => setIsModalOpen(true)}>
                   <button><FontAwesomeIcon icon={faCheck} /></button>
                </div>
            </div>
        </>
    )
}