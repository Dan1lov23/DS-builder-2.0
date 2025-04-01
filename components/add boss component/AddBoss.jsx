import './addBosses.css'

export default function AddBosses({setBossName, setBossSrc, setBossHp}) {

    let showBossesCounter = 0;

    function showBosses() {
        const bossesList = document.getElementById('showBossesList');
        if (showBossesCounter % 2 === 0) {
            bossesList.style.display = 'block';
        } else {
            bossesList.style.display = 'none';
        }
        showBossesCounter++;
    }

    // массивы с боссами
    const bosessArray = [
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0036_Asylum%20Demon.jpg",
            name: "Asylum Demon",
            hp: 825
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0035_Bell%20Gargoyle.jpg",
            name: "Bell Gargoyle",
            hp: 1000,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0034_Capra%20Demon.jpg",
            name: "Capra Demon",
            hp:  1176,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0033_Ceaseless%20Discharge.jpg",
            name: "Ceaseless Discharge",
            hp: 4200,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0032_Centipede%20Demon.jpg",
            name: "Centipede Demon",
            hp: 3432,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0031_Chaos%20Witch%20Quelaag.jpg",
            name:"Chaos Witch Quelaag",
            hp: 3139,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0030_Crossbreed%20Priscilla.jpg",
            name: "Crossbreed Priscilla",
            hp: 2300,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0029_Dark%20Sun%20Gwyndolin.jpg",
            name: "Dark Sun Gwyndolin",
            hp: 2000,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0028_Demon%20Firesage.jpg",
            name: "Demon Firesage",
            hp: 5950,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0027_Four%20Kings.jpg",
            name: "Four Kings",
            hp: 9604,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0026_Gaping%20Dragon.jpg",
            name: "Gaping Dragon",
            hp: 4041,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0025_Great%20Greywolf%20Sif.jpg",
            name: "Great Grey Wolf Sif",
            hp: 3432,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0024_Gwyn%20Lord%20of%20Cinder.jpg",
            name: "Gwyn Lord of Cinder",
            hp: 4250,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0023_Iron%20Golem.jpg",
            name: "Iron Golem",
            hp: 2880,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0022_Moonlight%20Butterfly.jpg",
            name: "Moonlight Butterfly",
            hp: 1225,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0021_Nito.jpg",
            name: "Nito",
            hp: 4317,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0020_Ornstein%20&%20Smough.jpg",
            name: "Ornstein and Smough",
            hp: 6000,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0019_Pinwheel.jpg",
            name: "Pinwheel",
            hp: 1326,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0018_Seath%20the%20Scaleless.jpg",
            name: "Seath the Scaleless",
            hp: 5525,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0017_Stray%20Demon.jpg",
            name: "Stray Deamon",
            hp: 5250,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0015_Taurus%20Demon.jpg",
            name: "Taurus Deamon",
            hp: 1215,
        },
        {
            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0016_Bed%20of%20Chaos.jpg",
            name: "The Bed of Chaos",
            hp: 3,
        },
    ];

    function addBoss(name, src, hp) {
        setBossName(name);
        setBossSrc(src);
        setBossHp(hp);
    }

    return (
        <>
            <div className="showBosessButton">
                <button onClick={showBosses} id="showButton">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RVVrAAwPsM5OPq9nRgDH6A0pmqGy6iZ0OlBrSniOLEPTpLBXj1i4WlbmRbsmEBgN73M&usqp=CAU"/>
                </button>
            </div>
            <div className="showBossesList" id="showBossesList">
                <div className="mainAddBoses">
                    <div className="addBosessContanier">
                        {bosessArray.map((item, index) => (
                            <div key={index} className="addBosessContanierOne" onClick={() => addBoss(item.name, item.src, item.hp)}>
                                <p></p>
                                <img src={item.src} alt=""/>
                                <p></p>
                                <a href={`https://darksouls.wiki.fextralife.com/${item.name}`}>
                                    {item.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}