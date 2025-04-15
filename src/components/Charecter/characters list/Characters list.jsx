export default function CharacterList() {

    const charatersArray = [
        {name: "Warrior", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/warrior-starting-class-male-dark-souls.jpg"},
        {name: "Knight", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/knight-starting-class-male-dark-souls.jpg"},
        {name: "Wanderer", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/wanderer-starting-class-male-dark-souls.jpg"},
        {name: "Thief", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/thief-starting-class-male-dark-souls.jpg"},
        {name: "Bandit", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/bandit-starting-class-male-dark-souls.jpg"},
        {name: "Hunter", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hunter-starting-class-male-dark-souls.jpg"},
        {name: "Sorcerer", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/sorcerer-starting-class-male-dark-souls.jpg"},
        {name: "Pyromancer", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/pyromancer-starting-class-male-dark-souls.jpg"},
        {name: "Cleric", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/cleric-starting-class-male-dark-souls.jpg"},
        {name: "Deprived", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/deprived-starting-class-male-dark-souls.jpg"},
    ]

    return (
        <>
            <div className="charactersListMain">
                <div className="charactersListMainContainer">
                    {charatersArray.map((character, index) => (
                        <div className="charater" key={index}>
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