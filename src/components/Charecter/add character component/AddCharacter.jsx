import Modal from '../../modal/Modal component/Modal.jsx';
import CharacterList from "../characters list/Characters list.jsx";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function AddCharacter() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <CharacterList />
            </Modal>
            <div className="addCharacter">
                <div className="addCharacterMainContanier" onClick={() => setIsModalOpen(true)}>
                   <button><FontAwesomeIcon icon={faCheck} /></button>
                </div>
            </div>
        </>
    )
}