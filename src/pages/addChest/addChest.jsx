import Modal from '../../components/Modal component/Modal.jsx';
import '../../components/armor list component/ChestsList.jsx'
import RingsList from "../../components/rings list components/ring list component 1/RingsList.jsx";
import {useState} from "react";

export default function AddChest() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <RingsList />
            </Modal>
        </>
    )
}