import CharacterRedactor from '../../components/character redactor/Redactor.jsx';
import EquipAdd from '../../components/equip add component/EquipAdd.jsx';
import EquipList from "../equip list page/equipList.jsx";
import { useState, useEffect } from "react";

export default function Home() {
    const [userItem, setUserItem] = useState([]); // Инициализация состояния userItem как пустого массива
    const [requirementsItem, setRequirementsItem] = useState([]);

    // имопртируем статы из компонента редактор

    const [strengthImport, setStrengthImport] = useState(10);
    const [dexterityImport, setDexterityImport] = useState(10);


    // Функция для удаления элемента
    const removeItem = (index) => {
        setUserItem(prevItems => prevItems.filter((_, i) => i !== index));
    };

    // Печать strengthImport при его обновлении
    useEffect(() => {
        console.log('Обновление strengthImport:', strengthImport);
    }, [strengthImport]); // Зависимость от strengthImport

    useEffect(() => {
        console.log('Обновление dexterityImport:', dexterityImport);
    }, [dexterityImport]); // Зависимость от strengthImport

    const requirementsArray = String(requirementsItem).split(' ');
    console.log(requirementsArray[0]);

    if (strengthImport < Number(requirementsArray[0])) {
        console.log("Not enough strength")
    } else if (dexterityImport < Number(requirementsArray[1])) {
        console.log("Not enough dexterity")
    }

    return (
        <>
            <CharacterRedactor
                strengthImport={strengthImport}
                setStrengthImport={setStrengthImport}
                dexterityImport={dexterityImport}
                setDexterityImport={setDexterityImport}
            />
            <EquipAdd userItem={userItem} removeItem={(index) => {
                const newItems = userItem.filter((_, i) => i !== index);
                setUserItem(newItems);
            }}
                      requirementsItem={requirementsItem}/>
            <EquipList userItem={userItem} setUserItem={setUserItem} requirementsItem={requirementsItem} setRequirementsItem={setRequirementsItem}/>
        </>
    );
}
