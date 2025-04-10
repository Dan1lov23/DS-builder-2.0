import CharacterRedactor from '../../components/character redactor/Redactor.jsx';
import EquipAdd from '../../components/equip add component/EquipAdd.jsx';
import EquipList from "../equip list page/equipList.jsx";
import { useState, useEffect } from "react";
import ArmorList from "../armorListPage/armorList.jsx";
import BossComponent from "../../components/boss component/BossComponent.jsx";
import Rings from "../../pages/addRing/addRing.jsx";
import '../../pages/addChest/addChest.jsx'

import './home.css';
import AddChest from "../addChest/addChest.jsx";

export default function Home() {
    const [userItem, setUserItem] = useState([]); // Инициализация состояния userItem как пустого массива
    const [requirementsItem, setRequirementsItem] = useState([]);

    // Импортируем статы из компонента редактор
    const [strengthImport, setStrengthImport] = useState(10);
    const [dexterityImport, setDexterityImport] = useState(10);
    const [intelligenceImport, setIntelligenceImport] = useState(10);
    const [faithImport, setFaithImport] = useState(10);
    const [helmResist, setHelmResist] = useState(0);
    const [totalDamage, setTotalDamage] = useState(0);

    const [ringName, setRingName] = useState("");

    useEffect(() => {
        console.log("Название кольца -", ringName);
    }, [ringName]);

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

    // счётчи ударов по боссу
    let hitCounter = 0;

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

    return (
        <>
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
                totalDamage={totalDamage}
            />
            <ArmorList
                helmResist={helmResist}
                setHelmResist={setHelmResist}
            />
            <AddChest/>
            <Rings setImportRingName={setRingName}/>
            <EquipAdd
                userItem={userItem}
                removeItem={removeItem}
                requirementsItem={requirementsItem}
            />
            <BossComponent importBossHp={bossHp} setImportBossHp={setBossHp} setBossResist={setResist} />
            <div className="bossStrike">
                <div className="bossStrikeButton">
                    <button onClick={() => strikeButton()}><img src="https://cdn-icons-png.flaticon.com/512/1840/1840736.png"/></button>
                    <p id="remaningBossHp"></p>
                </div>
            </div>
            <EquipList
                userItem={userItem}
                setUserItem={setUserItem}
                requirementsItem={requirementsItem}
                setRequirementsItem={setRequirementsItem}
            />
        </>
    );
}
