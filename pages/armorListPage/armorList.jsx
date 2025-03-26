import './armorList.css';
import AddHelm from "../addHelm/AddHelm.jsx";
import { useState, useEffect } from "react";

function ArmorList() {
    const [importHelmSrc, setImportHelmSrc] = useState("");
    const [importHelmName, setImportHelmName] = useState("");

    //let helmSrc = "https://t3.ftcdn.net/jpg/02/61/04/02/360_F_261040216_dI5MBh32t9TXeLN1l3mSmNCwILuNcUi5.jpg";

    useEffect(() => {
        console.log("importHelmSrc изменился:", importHelmSrc);
        // Здесь можно выполнить любые побочные эффекты, когда importHelmSrc изменяется
        document.getElementById("1").innerHTML = importHelmSrc;
        console.log(importHelmSrc);
    }, [importHelmSrc]);

    useEffect(() => {
        console.log("impportHelmName изменился:", importHelmName);
    }, [importHelmName]);

    return (
        <>
            <div>
                <AddHelm setImportHelmSrc={setImportHelmSrc} setImportHelmName={setImportHelmName}/>
            </div>
            <div className="armourListMain">
                <div className="armorListMainContainer">
                    <div className="armor">
                        <a href="#">
                            <img id="1" src={importHelmSrc} alt="Helm"/>
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
