import './addBosses.css'

export default function AddBosses() {

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
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0036_Asylum%20Demon.jpg", name: "Asylum Demon"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0035_Bell%20Gargoyle.jpg", name: "Bell Gargoyle"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0034_Capra%20Demon.jpg", name: "Capra Demon"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0033_Ceaseless%20Discharge.jpg", name: "Ceaseless Discharge"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0032_Centipede%20Demon.jpg", name: "Centipede Demon"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0031_Chaos%20Witch%20Quelaag.jpg", name:"Chaos Witch Quelaag"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0030_Crossbreed%20Priscilla.jpg", name: "Crossbreed Priscilla"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0029_Dark%20Sun%20Gwyndolin.jpg", name: "Dark Sun Gwyndolin"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0028_Demon%20Firesage.jpg", name: "Demon Firesage"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0027_Four%20Kings.jpg", name: "Four Kings"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0026_Gaping%20Dragon.jpg", name: "Gaping Dragon"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0025_Great%20Greywolf%20Sif.jpg", name: "Great Grey Wolf Sif"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0024_Gwyn%20Lord%20of%20Cinder.jpg", name: "Gwyn Lord of Cinder"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0023_Iron%20Golem.jpg", name: "Iron Golem"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0022_Moonlight%20Butterfly.jpg", name: "Moonlight Butterfly"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0021_Nito.jpg", name: "Nito"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0020_Ornstein%20&%20Smough.jpg", name: "Ornstein and Smough"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0019_Pinwheel.jpg", name: "Pinwheel"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0018_Seath%20the%20Scaleless.jpg", name: "Seath the Scaleless"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0017_Stray%20Demon.jpg", name: "Stray Deamon"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0015_Taurus%20Demon.jpg", name: "Taurus Deamon"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0016_Bed%20of%20Chaos.jpg", name: "The Bed of Chaos"},
    ];

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
                            <div key={index} className="addBosessContanierOne">
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