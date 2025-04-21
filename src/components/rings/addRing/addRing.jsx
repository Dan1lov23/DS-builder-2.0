import RingsList from '../rings list components/ring list component 1/RingsList.jsx';
import RingList2 from '../rings list components/ring list component 2/ringList2.jsx';
import './addRing.css';
import { useEffect, useState } from "react";
import Modal from '../../modal/Modal component/Modal.jsx';

export default function Rings({ setImportRingName }) {
    const [ringSrc, setRingSrc] = useState("");
    const [ringName, setRingName] = useState("noneRingName1");
    const [ringSrc2, setRingSrc2] = useState("");
    const [ringName2, setRingName2] = useState("noneRingName2");
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    // Картинка по умолчанию
    const defaultSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWjxfGwFMFxVmAylKA4YwmUWloowikPHfQZeKfrD26JInVtJKFwbmgolQzrn0AjFnaaA&usqp=CAU";

    // Картинка при ошибке
    const [errorSrc, setErrorSrc] = useState("");

    // Обновляем имя кольца и устанавливаем изображение ошибки
    useEffect(() => {
        console.log("Кольцо -", ringName, ringName2);
        if (ringName === ringName2 && ringName !== "noneRingName1" && ringName2 !== "noneRingName2") {
            console.log(ringName, ringName2);
            setErrorSrc("https://cdn-icons-png.flaticon.com/512/483/483366.png");
        } else {
            setErrorSrc(""); // Сбрасываем ошибку если имена разные
        }

        // Устанавливаем имя кольца для импорта
        setImportRingName(ringName);

    }, [ringName, ringName2]); // Добавляем зависимость от ringName и ringName2

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
                        <img src={ringSrc || defaultSrc} alt="Кольцо 1" id="ringOne" />
                    </button>
                    <button onClick={() => setIsModalOpen2(true)}>
                        <img src={errorSrc || ringSrc2 || defaultSrc} alt="Кольцо 2" id="ringTwo" />
                    </button>
                </div>
            </div>
        </>
    );
}