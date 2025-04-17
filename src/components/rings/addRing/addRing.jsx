import RingsList from '../rings list components/ring list component 1/RingsList.jsx';
import RingList2 from '../rings list components/ring list component 2/ringList2.jsx';
import './addRing.css';
import { useEffect, useState } from "react";
import Modal from '../../modal/Modal component/Modal.jsx'; // Импортируйте ваш компонент модального окна

export default function Rings({setImportRingName}) {
    const [ringSrc, setRingSrc] = useState("");
    const [ringName, setRingName] = useState("");
    const [ringSrc2, setRingSrc2] = useState("");
    const [ringName2, setRingName2] = useState("");
    const [isModalOpen1, setIsModalOpen1] = useState(false); // Состояние для управления модальным окном
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const defaultSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWjxfGwFMFxVmAylKA4YwmUWloowikPHfQZeKfrD26JInVtJKFwbmgolQzrn0AjFnaaA&usqp=CAU";

    useEffect(() => {
        console.log("Кольцо -", ringSrc, "dmkjdn");
    }, [ringSrc]);

    useEffect(() => {
        console.log("Кольцо -", ringName);
    }, [ringName]);

    useEffect(() => {
        console.log("Кольцо -", ringSrc2);
    }, [ringSrc2]);

    useEffect(() => {
        console.log("Кольцо -", ringName2);
    }, [ringName2]);

    setImportRingName(ringName);

    return (
        <>
            <Modal isOpen={isModalOpen1} onClose={() => setIsModalOpen1(false)}>
                <RingsList setRingSrc={setRingSrc} setRingName={setRingName} />
            </Modal>

            <Modal isOpen={isModalOpen2} onClose={() => setIsModalOpen2(false)}>
                <RingList2 setRingSrc={setRingSrc2} setRingName={setRingName2} />
            </Modal>
            <div className="showRingsMain">
                <div className="showRingsMainContent">
                    <button onClick={() => setIsModalOpen1(true)}>
                        <img src={ringSrc || defaultSrc} id="ringOne" />
                    </button>
                    <button onClick={() => setIsModalOpen2(true)}>
                        <img src={ringSrc2 || defaultSrc} id="ringTwo" />
                    </button>
                </div>
            </div>
        </>
    );
}
