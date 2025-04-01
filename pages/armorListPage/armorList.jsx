import './armorList.css';
import AddHelm from "../addHelm/AddHelm.jsx";
import { useState, useEffect } from "react";

function ArmorList({helmResist, setHelmResist}) {
    const [importHelmSrc, setImportHelmSrc] = useState("");
    const [importHelmName, setImportHelmName] = useState("");
    const [importHelmResist, setImportHelmResist] = useState("");

    const defaultHelmSrc = "https://static-00.iconduck.com/assets.00/brutal-helm-icon-512x512-si8ohd6j.png";

    useEffect(() => {
        console.log("importHelmSrc изменился:", importHelmSrc);
    }, [importHelmSrc]);

    useEffect(() => {
        console.log("importHelmName изменился:", importHelmName);
    }, [importHelmName]);

    useEffect(() => {
        console.log("importHelmResiste изменился:", importHelmResist);
    }, [importHelmResist]);

    let showCounter = 0;

    function show() {
        const showHelmDiv = document.getElementById("showList");
        if (showCounter % 2 === 0) {
            showHelmDiv.style.display = "block";
        } else {
            showHelmDiv.style.display = "none";
        }
        showCounter++;
    }

    helmResist = importHelmResist;
    setHelmResist(helmResist);

    return (
        <>
            <div className="showList" id="showList">
                <AddHelm setImportHelmSrc={setImportHelmSrc} setImportHelmName={setImportHelmName} setImportHelmResist={setImportHelmResist} />
            </div>
            <div className="armourListMain">
                <div className="armorListMainContainer">
                    <div className="armor" onClick={show}>
                        <a href="#">
                            <img id="1" src={importHelmSrc || defaultHelmSrc} alt="Helm"/>
                        </a>
                    </div>
                    <div className="armor">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-PqKTzgKGtXkz7PvKWDg6JYjzJCxLchxqbfT-GQnFxh7a6WuMX0dPik7-2hn0q6DncA&usqp=CAU"/>
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