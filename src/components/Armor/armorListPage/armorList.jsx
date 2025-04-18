import './armorList.css';
import HelmsList from "../Helms/helmList/HelmList.jsx";
import { useState, useEffect } from "react";
import '../../modal/Modal component/Modal.jsx'
import Modal from "../../modal/Modal component/Modal.jsx";
import ChestsList from "../Chest list component/ChestsList.jsx";

function ArmorList({helmResist, setHelmResist, armorResist, setArmorResist}) {
    const [importHelmSrc, setImportHelmSrc] = useState("");
    const [importHelmName, setImportHelmName] = useState("");
    const [importHelmResist, setImportHelmResist] = useState("");

    const [importChestName, setImportChestName] = useState("")
    const [importChestSrc, setImportChestSrc] = useState("");
    const [importChestResist, setImportChestResist] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const defaultHelmSrc = "https://static-00.iconduck.com/assets.00/brutal-helm-icon-512x512-si8ohd6j.png";
    const defaultChestSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-PqKTzgKGtXkz7PvKWDg6JYjzJCxLchxqbfT-GQnFxh7a6WuMX0dPik7-2hn0q6DncA&usqp=CAU";

    useEffect(() => {
        console.log("Новый шлем:", importHelmName, importHelmResist);
    }, [importHelmName]);

    useEffect(() => {
        console.log("Новая броня:", importChestName, importChestResist);
    }, [importChestName]);

    // резист для шлема
    helmResist = importHelmResist;
    setHelmResist(helmResist);
    // резист длоя брони
    armorResist = importChestResist;
    setArmorResist(armorResist);

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <HelmsList setImportHelmSrc={setImportHelmSrc} setImportHelmName={setImportHelmName} setImportHelmResist={setImportHelmResist}/>
            </Modal>
            <Modal isOpen={isModalOpen2} onClose={() => setIsModalOpen2(false)}>
                <ChestsList setImportChestName={setImportChestName} setImportChestSrc={setImportChestSrc} setImportChestResist={setImportChestResist}/>
            </Modal>
            <div className="armourListMain">
                <div className="armorListMainContainer">
                    <div className="armor" onClick={() => setIsModalOpen(true)}>
                        <a href="#">
                            <img id="1" src={importHelmSrc || defaultHelmSrc} alt="Helm"/>
                        </a>
                    </div>
                    <div className="armor" onClick={() => setIsModalOpen2(true)}>
                        <a href="#">
                            <img src={importChestSrc || defaultChestSrc} alt="Chest"/>
                        </a>
                    </div>
                    <div className="armor">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhb12ZrK6GdnwWvbNv423BFOBSjsoE-9KRdqT4Xl91gEXNDhAInRltN96TLytTcZpNHu4&usqp=CAU"/>
                    </div>
                    <div className="armor">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBHY2cqc_l0FhFQvhZ9oCZRixXi6pVHCEUg&s"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArmorList;
