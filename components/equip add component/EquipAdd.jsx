import './equipAdd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function EquipAdd({ userItem, removeItem }) {
    // печатаем все харакеристики оружия включая скейлы для проверки
    console.log(userItem[0]);
    return (
        <div className="equipAddMain">
            <div className="equipAddContainer">
                {userItem.map((item, index) => (
                    <div className="equipAdd" key={index}>
                        <div className="equipAddDamage">
                            <img src="https://cdn-icons-png.flaticon.com/512/1840/1840736.png"/><h1>{item.damage}</h1>
                        </div>
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