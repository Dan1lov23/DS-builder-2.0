import './characterList.css';

export default function CharacterList({setName, setSrc, setLevel, setVitality, setAttunement, setStrength, setDexterity, setResistance, setIntelligence, setFaith, setEndurance}) {

    // в массиве будут статы класса при старте игры
    const charatersArray = [
        {
            name: "Warrior", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/warrior-starting-class-male-dark-souls.jpg",
            level: 4, vitality: 11, attunement: 8, strength: 13, dexterity: 13, resistance: 11, intelligence: 9, faith: 9, endurecne: 12,
        },
        {
            name: "Knight", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/knight-starting-class-male-dark-souls.jpg",
            level: 5, vitality: 14, attunement: 10, strength: 11, dexterity: 11, resistance: 10, intelligence: 9, faith: 11, endurecne: 10
        },
        {
            name: "Wanderer", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/wanderer-starting-class-male-dark-souls.jpg",
            level: 3, vitality: 10, attunement: 11, strength: 10, dexterity: 14, resistance: 12, intelligence: 11, faith: 8, endurecne: 10,
        },
        {
            name: "Thief", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/thief-starting-class-male-dark-souls.jpg",
            level: 4, vitality: 11, attunement: 8, strength: 13, dexterity: 13, resistance: 11, intelligence: 9, faith: 9, endurecne: 12
        },
        {
            name: "Bandit", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/bandit-starting-class-male-dark-souls.jpg",
            level: 5, vitality: 12, attunement: 8, strength: 14, dexterity: 9, resistance: 11, intelligence: 8, faith: 10, endurecne: 14,
        }   ,
        {
            name: "Hunter", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hunter-starting-class-male-dark-souls.jpg",
            level: 4, vitality: 11, attunement: 9, strength: 12, dexterity: 14, resistance: 11, intelligence: 9, faith: 9, endurecne: 11,
        },
        {
            name: "Sorcerer", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/sorcerer-starting-class-male-dark-souls.jpg",
            level: 3, vitality: 8, attunement: 15, strength: 9, dexterity: 11, resistance: 8, intelligence: 15, faith: 8, endurecne: 8,
        },
        {
            name: "Pyromancer", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/pyromancer-starting-class-male-dark-souls.jpg",
            level: 1, vitality: 10, attunement: 12, strength: 12, dexterity: 9, resistance: 12, intelligence: 10, faith: 8, endurecne: 11,
        },
        {
            name: "Cleric", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/cleric-starting-class-male-dark-souls.jpg",
            level: 2, vitality: 11, attunement: 11, strength: 12, dexterity: 8, resistance: 11, intelligence: 8, faith: 14, endurecne: 9,
        },
        {
            name: "Deprived", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/deprived-starting-class-male-dark-souls.jpg",
            level: 6, vitality: 11, attunement: 11, strength: 11, dexterity: 11, resistance: 11, intelligence: 11, faith: 11, endurecne: 11,
        },
    ]

    function getCharacterStat(name, src, level, vitality, attunement, strength, dexterity, intelligence, faith, resist, endurecne) {
        setName(name);
        setSrc(src);
        setLevel(level);
        setVitality(vitality);
        setAttunement(attunement);
        setEndurance(endurecne);
        setResistance(resist);
        setStrength(strength);
        setDexterity(dexterity);
        setIntelligence(intelligence);
        setFaith(faith);
    }

    return (
        <>
            <div className="charactersListMain">
                <div className="charactersListMainContainer">
                    {charatersArray.map((character, index) => (
                        <div className="character" key={index} onClick={() => getCharacterStat(character.name, character.src, character.level, character.vitality, character.attunement, character.resistance, character.strength, character.dexterity, character.intelligence, character.faith, character.endurecne)}>
                            <img src={character.src} alt="character"/>
                            <a href={"https://darksouls.wiki.fextralife.com/" + character.name}>
                                <p>{character.name}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}