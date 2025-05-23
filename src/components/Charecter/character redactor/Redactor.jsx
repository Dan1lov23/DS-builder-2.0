import './redactor.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

import {useEffect, useState} from "react";
import AddCharacter from "../add character component/AddCharacter.jsx";

export default function CharacterRedactor({strengthImport, setStrengthImport, dexterityImport, setDexterityImport, intelligenceImport, setIntelligenceImport, faithImport, setFaithImport, helmResist, chestResist, gauntletResist, totalDamage}) {

    let [level, setLevel] = useState(1);
    let [vitality, setVitality] = useState(10);
    let [attunement, setAttunement] = useState(10);
    let [endurance, setEndurance] = useState(10);
    let [strength, setStrength] = useState(10);
    let [dexterity, setDexterity] = useState(10);
    let [resistance, setResistance] = useState(10);
    let [intelligence, setIntelligence] = useState(10);
    let [faith, setFaith] = useState(10);
    let [newLevelSouls, setNewLevelSouls] = useState(0);

    // массив стоимости новго повышения уровня персонажа

    const newLevelCostArray = [
        // два нуля нужны чтобы при увелечении уровня правильно отображалось число душ, нужных на повышение уровня
        0, 0, 673, 690, 707, 724, 741, 758, 775, 793, 811,
        829, 847, 1039, 1238, 1445, 1660, 1883, 2114, 2353, 2601,
        2857, 3122, 3396, 3678, 3970, 4271, 4581, 4900, 5229, 5567,
        5915, 6273, 6641, 7019, 7407, 7805, 8214, 8634, 9064, 9505,
        9957, 10420, 10894, 11379, 11876, 12384, 12904, 13436, 13979, 14535,
        15103, 15683, 16275, 16880, 17497, 18127, 18770, 19426, 20095, 20777,
        21472, 22181, 22904, 23640, 24390, 25154, 25932, 26724, 27530, 28351,
        29186, 30036, 30901, 31780, 32675, 33585, 34510, 35450, 36406, 37377,
        118337, 151295, 189680, 233897, 284351, 341447, 405590, 477185, 556637, 644351,
        740732, 846185, 961115, 1085927, 1221026, 1366817, 1523705, 1692095, 1872392, 2065001,
        2270327, 2488775, 2720750, 2966657, 3226901, 3501887, 3792020, 4097705, 4419347, 4757351,
        5112122, 5484065, 5873585, 6281087, 6706976, 7151657, 7615535, 8099015, 8602502, 8879349
    ]

    const hpValues = [ // - массив для хранения показателей здоровья на разных уровнях прокачки этого стата
        400,  // уровень 1
        415,  // уровень 2
        433,  // уровень 3
        451,  // уровень 4
        471,  // уровень 5
        490,  // уровень 6
        511,  // уровень 7
        530,  // уровень 8
        552,  // уровень 9
        572,  // уровень 10
        594,  // уровень 11
        616,  // уровень 12
        638,  // уровень 13
        658,  // уровень 14
        682,  // уровень 15
        698,  // уровень 16
        718,  // уровень 17
        742,  // уровень 18
        766,  // уровень 19
        792,  // уровень 20
        821,  // уровень 21
        849,  // уровень 22
        878,  // уровень 23
        908,  // уровень 24
        938,  // уровень 25
        970,  // уровень 26
        1001, // уровень 27
        1034, // уровень 28
        1066, // уровень 29
        1100, // уровень 30
        1123, // уровень 31
        1147, // уровень 32
        1170, // уровень 33
        1193, // уровень 34
        1216, // уровень 35
        1239, // уровень 36
        1261, // уровень 37
        1283, // уровень 38
        1304, // уровень 39
        1325, // уровень 40
        1346, // уровень 41
        1366, // уровень 42
        1386, // уровень 43
        1405, // уровень 44
        1424, // уровень 45
        1442, // уровень 46
        1458, // уровень 47
        1474, // уровень 48
        1489, // уровень 49
        1500, // уровень 50
        1508, // уровень 51
        1517, // уровень 52
        1526, // уровень 53
        1535, // уровень 54
        1544, // уровень 55
        1553, // уровень 56
        1562, // уровень 57
        1571, // уровень 58
        1580, // уровень 59
        1588, // уровень 60
        1597, // уровень 61
        1606, // уровень 62
        1615, // уровень 63
        1623, // уровень 64
        1632, // уровень 65
        1641,  // уровень 66
        1649, // уровень 67
        1658, // уровень 68
        1666, // уровень 69
        1675, // уровень 70
        1683, // уровень 71
        1692, // уровень 72
        1700, // уровень 73
        1709, // уровень 74
        1717, // уровень 75
        1725, // уровень 76
        1734, // уровень 77
        1742, // уровень 78
        1750, // уровень 79
        1758, // уровень 80
        1767, // уровень 81
        1775, // уровень 82
        1783, // уровень 83
        1791, // уровень 84
        1799, // уровень 85
        1807, // уровень 86
        1814, // уровень 87
        1822, // уровень 88
        1830, // уровень 89
        1837, // уровень 90
        1845, // уровень 91
        1852, // уровень 92
        1860, // уровень 93
        1867, // уровень 94
        1874, // уровень 95
        1881, // уровень 96
        1888, // уровень 97
        1894, // уровень 98
        1900  // уровень 99
    ];

    const enduranceValues = [
        81, 82, 83, 84, 85, 86, 87, 88, 90, 91,
        93, 95, 97, 98, 100, 102, 104, 106, 108, 110,
        112, 115, 117, 119, 121, 124, 126, 129, 131, 133,
        136, 139, 141, 144, 146, 149, 152, 154, 157, 160,
        160, 160, 160, 160, 160, 160, 160, 160, 160, 160
    ];  //

    const EquipLoadValues = [ 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0,
        51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0,
        61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0,
        71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0,
        81.0, 82.0, 83.0, 84.0, 85.0, 86.0, 87.0, 88.0, 89.0, 90.0,
        91.0, 92.0, 93.0, 94.0, 95.0, 96.0, 97.0, 98.0, 99.0, 100.0,
        101.0, 102.0, 103.0, 104.0, 105.0, 106.0, 107.0, 108.0, 109.0, 110.0,
        111.0, 112.0, 113.0, 114.0, 115.0, 116.0, 117.0, 118.0, 119.0, 120.0,
        121.0, 122.0, 123.0, 124.0, 125.0, 126.0, 127.0, 128.0, 129.0, 130.0,
        131.0, 132.0, 133.0, 134.0, 135.0, 136.0, 137.0, 138.0, 139.0, 140.0,
        141.0, 142.0, 143.0, 144.0, 145.0, 146.0, 147.0, 148.0, 149.0, 150.0
    ];

    const levelMain = [
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_level.png", signature: "level", num: level}
    ]

    const statsArray = [
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_vitality.png", signature: "vitality", num: vitality, plus: setVitality},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_attunement.png", signature: "attunement", num: attunement, plus: setAttunement},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_endurance.png", signature: "endurance", num: endurance, plus: setEndurance},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_strength.png", signature: "strength", num: strength, plus: setStrength},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_dexterity.png", signature: "dexterity", num: dexterity, plus: setDexterity},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_resistance.png", signature: "resistance", num: resistance, plus: setResistance},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_intelligence.png", signature: "intelligence", num: intelligence, plus: setIntelligence},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_faith.png", signature: "faith", num: faith, plus: setFaith}
    ]

    const handleIncrease = (setStat) => {
        setStat((prev) => prev + 1);
        setLevel(level + 1);
        setNewLevelSouls(newLevelCostArray[level + 1]);
    };

    const handleDecrease = (setStat, stat) => {
        setStat((prev) => Math.max(prev - 1, 10));
        // уровень не может быть меньше первого
        if (level >= 1 && stat > 10) {
            setLevel(level - 1);
            setNewLevelSouls(newLevelCostArray[level - 1]);
        }
    };

    let HP = hpValues[statsArray[0].num] // хп
    let stamina = enduranceValues[statsArray[2].num] // стамина
    const equipLoad = EquipLoadValues[statsArray[2].num] // грузоподьёмность

    // console.log() лучше делать здесь так как тогжа будет происходить правиьное икременирование
    // и декременирование
    //console.log(strength, dexterity) // статы персонажа, тображаю для наглядности,
    // дальше это будет применяться в модуле сравнение требований показателей оружия
    // и показаелей персонажа

    // импорт статов в главный компонент Home

    strengthImport = strength;
    setStrengthImport(strengthImport);

    dexterityImport = dexterity;
    setDexterityImport(dexterityImport);

    intelligenceImport = intelligence;
    setIntelligenceImport(intelligenceImport);

    faithImport = faith;
    setFaithImport(faithImport);


    useEffect(() => {
        console.log(strengthImport);
    }, [strengthImport])

    let totalResist = helmResist + chestResist + gauntletResist;

    useEffect(() => {
        console.log(chestResist)
    }, [chestResist])

    const [characterName, setCharacterName] = useState(0);
    const [characterSrc, setCharacterSrc] = useState(0);
    const [characterLevel, setCharacterLevel] = useState(0);
    const [characterVitality, setCharacterVitality] = useState(0);
    const [characterAttutment, setCharacterAttutment] = useState(0);
    const [characterResist, setCharacterResist] = useState(0);
    const [characterStrength, setCharacterStrength] = useState(0);
    const [characterDexterity, setCharacterDexterity] = useState(0);
    const [characterIntelligence, setCharacterIntelligence] = useState(0);
    const [characterFaith, setCharacterFaith] = useState(0);
    const [characterEndurance, setCharacterEndurance] = useState(0);

    useEffect(() => {
        setVitality(characterVitality);
        setResistance(characterResist);
        setAttunement(characterAttutment);
        setEndurance(characterEndurance);
        setLevel(characterLevel);
        setStrength(characterStrength);
        setDexterity(characterDexterity);
        setIntelligence(characterIntelligence);
        setFaith(characterFaith);
        console.log("Пропсы выбора класса персонажа передались и рендерятся в главном компоненте:", characterName, characterSrc, characterVitality,
            characterLevel, characterAttutment, characterResist, characterStrength, characterDexterity, characterIntelligence, characterFaith);
        console.log("Статы персонажа после выбора класса - ", level, attunement, vitality, resistance, strength, dexterity, faith, intelligence);
    }, [characterName]);

    const defClassName = "none";

    return (
        <>
            <div className="redactorMain">
                <div className="redactorMainContent">
                    <div className="redactorCharacterName">
                        <input type="text" placeholder="Character Name"/>
                        <AddCharacter setClassName={setCharacterName} setClassSrc={setCharacterSrc}
                                      setClassLevel={setCharacterLevel} setClassVitality={setCharacterVitality}
                                      setClassAttutment={setCharacterAttutment} setClassResist={setCharacterResist}
                                      classStrength={characterStrength} setClassStrength={setCharacterStrength}
                                      setClassDexterity={setCharacterDexterity}
                                      setClassIntelligence={setCharacterIntelligence}
                                      setClassFaith={setCharacterFaith} setClassEndurance={setCharacterEndurance}
                        />
                    </div>
                    <div className="redactorStats">
                        {levelMain.map((stat) => (
                            <div className="statsLevel" key={stat.signature}>
                                <p>Start class - {characterName || defClassName}</p>
                                <img src={stat.href} alt={stat.signature}/>
                                <span>{stat.signature} </span>
                                <span>- {level}</span>
                            </div>
                        ))}
                        {statsArray.map((stat) => (
                            <div className="stats" key={stat.signature}>
                                <img src={stat.href} alt={stat.signature}/>
                                <button onClick={() => handleIncrease(stat.plus)}><FontAwesomeIcon icon={faPlus}/>
                                </button>
                                <button onClick={() => handleDecrease(stat.plus, stat.num)}><FontAwesomeIcon
                                    icon={faMinus}/>
                                </button>
                                <span>{stat.signature}</span>
                                <p>{stat.num}</p>
                            </div>
                        ))}
                        <div className="stats">
                            <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls-3/icon_hp.png"/>
                            <span>HP - {HP}</span>
                        </div>
                        <div className="stats">
                            <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls-3/icon_stamina.png"/>
                            <span>Stamina - {stamina}</span>
                        </div>
                        <div className="stats">
                            <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls-3/icon_equip_load.png"/>
                            <span>Equip Load - {equipLoad}</span>
                        </div>
                        <div className="stats">
                            <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_phy.png"/>
                            <span>Physical resist - {totalResist}</span>
                        </div>
                        <div className="stats">
                            <img src="https://image.pngaaa.com/450/291450-middle.png"/>
                            <span>Souls for new level - {newLevelSouls}</span>
                        </div>
                        <div className="stats">
                            <img src="https://cdn-icons-png.flaticon.com/512/1840/1840736.png"/>
                            <span>Total damage - {totalDamage}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
