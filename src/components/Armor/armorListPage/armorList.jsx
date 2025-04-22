import './armorList.css';

import { useState, useEffect } from "react";

import HelmsList from "../Helms/HelmList.jsx";
import Modal from "../../modal/Modal component/Modal.jsx";
import ChestsList from "../Chest/ChestsList.jsx";
import GauntletsList from "../Gauntlets/GauntletsList.jsx";
import LeggingsList from "../Leggins/LeggingLists.jsx";


function ArmorList({helmResist, setHelmResist, armorResist, setArmorResist, gauntletResist, setGauntletResist, leggingsResist, setLeggingsResist}) {
    const [importHelmSrc, setImportHelmSrc] = useState("");
    const [importHelmName, setImportHelmName] = useState("");
    const [importHelmResist, setImportHelmResist] = useState("");

    const [importChestName, setImportChestName] = useState("")
    const [importChestSrc, setImportChestSrc] = useState("");
    const [importChestResist, setImportChestResist] = useState("");

    const [importGauntletSrc, setImportGauntletSrc] = useState("");
    const [importGauntletName, setImportGauntletName] = useState("");
    const [importGauntletResist, setImportGauntletResist] = useState("");

    const [importLeggingsName, setImportLeggingsName] = useState("");
    const [importLeggingsSrc, setImportLeggingsSrc] = useState("");
    const [importLeggingsResist, setImportLeggingsResist] = useState("");

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);

    const defaultHelmSrc = "https://static-00.iconduck.com/assets.00/brutal-helm-icon-512x512-si8ohd6j.png";
    const defaultChestSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-PqKTzgKGtXkz7PvKWDg6JYjzJCxLchxqbfT-GQnFxh7a6WuMX0dPik7-2hn0q6DncA&usqp=CAU";
    const defaultGauntletSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhb12ZrK6GdnwWvbNv423BFOBSjsoE-9KRdqT4Xl91gEXNDhAInRltN96TLytTcZpNHu4&usqp=CAU";
    const defaultLeggingsSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBHY2cqc_l0FhFQvhZ9oCZRixXi6pVHCEUg&s"

    useEffect(() => {
        console.log("Новый шлем:", importHelmName, importHelmResist);
    }, [importHelmName]);

    useEffect(() => {
        console.log("Новая броня:", importChestName, importChestResist);
    }, [importChestName]);

    useEffect(() => {
        console.log("Новые перчатки", importGauntletName, importGauntletResist);
    }, [importGauntletName])

    useEffect(() => {
        console.log("Новые поножи", importLeggingsName, importLeggingsResist);
    }, [importLeggingsName])

    // резист для шлема
    helmResist = importHelmResist;
    setHelmResist(helmResist);
    // резист длоя брони
    armorResist = importChestResist;
    setArmorResist(armorResist);
    // резист перчаток
    gauntletResist = importGauntletResist;
    setGauntletResist(gauntletResist);
    // резист для поножей
    leggingsResist = importLeggingsResist;
    setLeggingsResist(leggingsResist);

    return (
        <>
            <Modal isOpen={isModalOpen1} onClose={() => setIsModalOpen1(false)}>
                <HelmsList setImportHelmSrc={setImportHelmSrc} setImportHelmName={setImportHelmName} setImportHelmResist={setImportHelmResist}/>
            </Modal>
            <Modal isOpen={isModalOpen2} onClose={() => setIsModalOpen2(false)}>
                <ChestsList setImportChestName={setImportChestName} setImportChestSrc={setImportChestSrc} setImportChestResist={setImportChestResist}/>
            </Modal>
            <Modal isOpen={isModalOpen3} onClose={() => setIsModalOpen3(false)}>
                <GauntletsList setImportGauntletName={setImportGauntletName} setImportGauntletSrc={setImportGauntletSrc} setImportGauntletResist={setImportGauntletResist}/>
            </Modal>
            <Modal isOpen={isModalOpen4} onClose={() => setIsModalOpen4(false)}>
                <LeggingsList setImportLeggingsName={setImportLeggingsName} setImportLeggingsSrc={setImportLeggingsSrc} setImportLeggingsResist={setImportLeggingsResist}/>
            </Modal>
            <div className="armourListMain">
                <div className="armorListMainContainer">
                    <div className="armor" onClick={() => setIsModalOpen1(true)}>
                        <a href="#">
                            <img id="1" src={importHelmSrc || defaultHelmSrc} alt="Helm"/>
                        </a>
                    </div>
                    <div className="armor" onClick={() => setIsModalOpen2(true)}>
                        <a href="#">
                            <img src={importChestSrc || defaultChestSrc} alt="Chest"/>
                        </a>
                    </div>
                    <div className="armor" onClick={() => setIsModalOpen3(true)}>
                        <a href="#">
                            <img src={importGauntletSrc || defaultGauntletSrc} alt="Gauntlet"/>
                        </a>
                    </div>
                    <div className="armor" onClick={() => setIsModalOpen4(true)}>
                        <a href="#">
                            <img src={importLeggingsSrc || defaultLeggingsSrc} alt="Gauntlet"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArmorList;
