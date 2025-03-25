import './equipAdd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function EquipAdd({ userItem, removeItem }) {
    return (
        <div className="equipAddMain">
            <div className="equipAddContainer">
                {userItem.map((item, index) => (
                    <div className="equipAdd" key={index}>
                        <button>
                            <img src={item.src} alt={item.name} />
                        </button>
                        <button className="deleteButton" onClick={() => removeItem(index)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <h1>Requirements</h1>
                        <div className="requirementsMain">
                            <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_strength.png" />
                            <p>{item.minStrength}</p>
                        </div>
                        <div className="requirementsMain">
                            <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_dexterity.png" />
                            <p>{item.minDexterity}</p>
                        </div>
                        <div className="requirementsMain">
                            <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_intelligence.png" />
                            <p>{item.minIntelligence}</p>
                        </div>
                        <div className="requirementsMain">
                            <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_faith.png" />
                            <p>{item.minFaith}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}