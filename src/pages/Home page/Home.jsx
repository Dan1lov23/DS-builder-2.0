import './home.css';

import CharacterRedactor from '../../components/Charecter/character redactor/Redactor.jsx';
import EquipAdd from '../../components/equip add component/EquipAdd.jsx';
import EquipList from "../../components/Weapons/equip list page/equipList.jsx";
import ArmorList from "../../components/Armor/armorListPage/armorList.jsx";
import BossComponent from "../../components/bosses/boss component/BossComponent.jsx";
import Rings from "../../components/rings/addRing/addRing.jsx";
import Modal from "../../components/modal/Modal component/Modal.jsx";
import AddCharacter from "../../components/Charecter/add character component/AddCharacter.jsx";

import { useState, useEffect } from "react";

export default function Home() {
    const [userItem, setUserItem] = useState([]);
    const [requirementsItem, setRequirementsItem] = useState([]);

    // Импортируем статы из компонента редактор
    const [strengthImport, setStrengthImport] = useState(10);
    const [dexterityImport, setDexterityImport] = useState(10);
    const [intelligenceImport, setIntelligenceImport] = useState(10);
    const [faithImport, setFaithImport] = useState(10);

    // резисты от брони
    const [helmResist, setHelmResist] = useState(0);

    // весь дамаг персонажа
    const [totalDamage, setTotalDamage] = useState(0);

    // хук для кольца
    const [ringName, setRingName] = useState("");
    useEffect(() => {
        console.log("Название кольца -", ringName);
    }, [ringName]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    // у каждого кольца будет уникальный бонус
    // реадлизую это с помощью конструкции switch....case
    switch(ringName) {
        case "Cloranthy Ring":
            console.log("Кольцо кларантии");
            break;
        case "Havel`s Ring":
            console.log("")
            break;
    }

    // Функция для удаления элемента снаряжения(оружия)
    const removeItem = (index) => {
        setUserItem(prevItems => prevItems.filter((_, i) => i !== index));
    };

    // Функция для нахождения бонуса при определённом скейле
    const bonusForScale = (scaleStrength) => {
        switch (scaleStrength) {
            case "S": return 0.75;
            case "A": return 0.67;
            case "B": return 0.5;
            case "C": return 0.33;
            case "D": return 0.25;
            case "E": return 0.1;
            case "None": return 0;
            default: return 0; // На случай, если скейл не распознан
        }
    };

    // Получаем все скейлы и рассчитываем общий урон
    useEffect(() => {
        if (userItem.length > 0) {
            const { strengthScale, dexterityScale, intelligenceScale, faithScale, damage } = userItem[0];

            const strengthBonus = bonusForScale(strengthScale);
            const dexterityBonus = bonusForScale(dexterityScale);
            const intelligenceBonus = bonusForScale(intelligenceScale);
            const faithBonus = bonusForScale(faithScale);

            // Расчет общего урона
            const calculatedDamage = damage +
                (strengthImport * strengthBonus) +
                (dexterityImport * dexterityBonus) +
                (intelligenceImport * intelligenceBonus) +
                (faithImport * faithBonus);

            setTotalDamage(calculatedDamage);
            console.log("Итоговый урон вашего персонажа -", calculatedDamage);
        }

        // проверка написанна для того, чтобы при удаленни оружия итоговый дамаг становился равен 0

        if (userItem.length === 0) {
            const calculatedDamage = 0
            setTotalDamage(calculatedDamage)
        }
    }, [userItem, strengthImport, dexterityImport, intelligenceImport, faithImport]);

    // Проверка требований для каждого элемента
    useEffect(() => {
        userItem.forEach(item => {
            if (strengthImport < item.minStrength) {
                console.log("Not enough strength for", item.name);
            }
            if (dexterityImport < item.minDexterity) {
                console.log("Not enough dexterity for", item.name);
            }
            if (intelligenceImport < item.minIntelligence) {
                console.log("Not enough intelligence for", item.name);
            }
            if (faithImport < item.minFaith) {
                console.log("Not enough faith for", item.name);
            }
        });
    }, [userItem, strengthImport, dexterityImport, intelligenceImport, faithImport]);

    // получаем хп босса
    let [bossHp, setBossHp] = useState(0);
    useEffect(() => {
        console.log("Текущее здоровье босса:", bossHp);// лог для проверки
    }, [bossHp]);

    // моудль для ударов по боссу
    // дальше будет дописываться

    let hitCounter = 0;   // счётчи ударов по боссу

    // функция удара по боссу
    const startBossHp = bossHp;
    function strikeButton() {
        let remaningBossHp = Math.round(bossHp - totalDamage);
        if (remaningBossHp >= 0) {
            bossHp -= totalDamage;
            document.getElementById("remaningBossHp").innerHTML = `${remaningBossHp}/${startBossHp} HP`;
            hitCounter++;
        } else if (remaningBossHp <= 0) {
            document.getElementById("remaningBossHp").innerHTML = `Босс убит`
            alert(`Босс убит \nПотрачено ударов - ${hitCounter + 1}`)
        }
    }

    // получаем резисты

    const [resist, setResist] = useState(0);

    useEffect(() => {
        console.log("Резист босса -", resist);
    }, [resist])

    const [armorResist, setArmorResist] = useState(0);

    return (
        <>
            <AddCharacter/>
            <CharacterRedactor
                strengthImport={strengthImport}
                setStrengthImport={setStrengthImport}
                dexterityImport={dexterityImport}
                setDexterityImport={setDexterityImport}
                intelligenceImport={intelligenceImport}
                setIntelligenceImport={setIntelligenceImport}
                faithImport={faithImport}
                setFaithImport={setFaithImport}
                helmResist={helmResist}
                chestResist={armorResist}
                totalDamage={totalDamage}
            />
            <ArmorList
                helmResist={helmResist}
                setHelmResist={setHelmResist}
                armorResist={armorResist}
                setArmorResist={setArmorResist}
            />
            <Rings setImportRingName={setRingName}/>
            <div className="openWeaponModal">
                <button onClick={() => setIsModalOpen(true)}>
                    <img src="https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-weapons-icon-png-image_892081.png"/>
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <EquipList
                    userItem={userItem}
                    setUserItem={setUserItem}
                    requirementsItem={requirementsItem}
                    setRequirementsItem={setRequirementsItem}
                />
            </Modal>
            <EquipAdd
                userItem={userItem}
                removeItem={removeItem}
                requirementsItem={requirementsItem}
            />
            <BossComponent importBossHp={bossHp} setImportBossHp={setBossHp} setBossResist={setResist}/>
            <div className="bossStrike">
                <div className="bossStrikeButton">
                    <button onClick={() => strikeButton()}><img
                        src="https://cdn-icons-png.flaticon.com/512/1840/1840736.png"/></button>
                    <p id="remaningBossHp"></p>
                </div>
            </div>
        </>
    );
}
