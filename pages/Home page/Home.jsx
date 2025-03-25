import CharacterRedactor from '../../components/character redactor/Redactor.jsx';
import EquipAdd from '../../components/equip add component/EquipAdd.jsx';
import EquipList from "../equip list page/equipList.jsx";
import { useState, useEffect } from "react";

export default function Home() {
    const [userItem, setUserItem] = useState([]); // Инициализация состояния userItem как пустого массива
    const [requirementsItem, setRequirementsItem] = useState([]);

    // Импортируем статы из компонента редактор
    const [strengthImport, setStrengthImport] = useState(10);
    const [dexterityImport, setDexterityImport] = useState(10);
    const [intelligenceImport, setIntelligenceImport] = useState(10);
    const [faithImport, setFaithImport] = useState(10);

    // Функция для удаления элемента
    const removeItem = (index) => {
        setUserItem(prevItems => prevItems.filter((_, i) => i !== index));
    };

    // Печать strengthImport при его обновлении
    useEffect(() => {
        console.log('Обновление strengthImport:', strengthImport);
    }, [strengthImport]);

    useEffect(() => {
        console.log('Обновление dexterityImport:', dexterityImport);
    }, [dexterityImport]);

    useEffect(() => {
        console.log('Обновление intelligenceImport:', intelligenceImport);
    }, [intelligenceImport]);

    useEffect(() => {
        console.log('Обновление faithImport:', faithImport);
    }, [faithImport]);

    // Проверка требований для каждого элемента
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
            />
            <EquipAdd
                userItem={userItem}
                removeItem={removeItem}
                requirementsItem={requirementsItem}
            />
            <EquipList
                userItem={userItem}
                setUserItem={setUserItem}
                requirementsItem={requirementsItem}
                setRequirementsItem={setRequirementsItem}
            />
        </>
    );
}