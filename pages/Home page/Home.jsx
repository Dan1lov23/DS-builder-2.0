import CharacterRedactor from '../../components/character redactor/Redactor.jsx';
import EquipAdd from '../../components/equip add component/EquipAdd.jsx';
import EquipList from "../equip list page/equipList.jsx";
import { useState, useEffect } from "react";
import ArmorList from "../armorListPage/armorList.jsx";
import AddBosess from "../../components/add boss component/AddBoss.jsx";

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

    // Функция для удаления элемента
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
            <EquipAdd
                userItem={userItem}
                removeItem={removeItem}
                requirementsItem={requirementsItem}
            />
            <AddBosess/>
            <EquipList
                userItem={userItem}
                setUserItem={setUserItem}
                requirementsItem={requirementsItem}
                setRequirementsItem={setRequirementsItem}
            />
        </>
    );
}