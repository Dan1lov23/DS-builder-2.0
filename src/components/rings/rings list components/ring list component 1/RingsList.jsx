import './ringsList.css';
import Modal from '../../../modal/Modal component/Modal.jsx'; // Импортируйте ваш компонент модального окна

export default function RingsList({ setRingSrc, setRingName }) {

    const ringsArray = [
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4042.png", name: "Tiny Being's Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4004.png", name: "Cloranthy Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4000.png", name: "Havel`s Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4020.png", name: "Ring of Steel Protection"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4007.png", name: "Spell Stoneplate Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4005.png", name: "Flame Stoneplate Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4006.png", name: "Thunder Stoneplate Ring"},
        {src: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/speckled_stoneplate_ring.png", name: "Speckled Stoneplate Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4009.png", name: "Bloodbite Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4010.png", name: "Poisonbite Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4013.png", name: "Cursebite Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4001.png", name: "Red Tearstone Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4036.png", name: "Blue Tearstone Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4015.png", name: "Bellowing Dragoncrest Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4039.png", name: "Lingering Dragoncrest Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4023.png", name: "Slumbering Dragoncrest Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4016.png", name: "Dusk Crown Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4014.png", name: "White Seance Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4038.png", name: "Darkmoon Seance Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4011.png", name: "Ring of the Sun's Firstborn"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4040.png", name: "Darkmoon Blade Covenant Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4030.png", name: "Ring of the Sun Princess"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4031.png", name: "Leo Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4035.png", name: "Wolf Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4019.png", name: "Hawk Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4017.png", name: "Horrwnt Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4032.png", name: "East Wood Grain Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4028.png", name: "Dark Wood Grain Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4025.png", name: "Rusted Iron Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4021.png", name: "Covetous Gold Serpent Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4022.png", name: "Covetous Silver Serpent Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4002.png", name: "Covenant of Artorias"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4003.png", name: "Orange Charred Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4037.png", name: "Old Witch's Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4041.png", name: "Cat Covenant Ring"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4024.png", name: "Ring of Fog"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4029.png", name: "Ring og Favor and Protection"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/4018.png", name: "Ring of the Evil Eye"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Calamity%20Ring.png", name: "Calamity Ring"},
    ]

    function addRing(src, name) {
        setRingSrc(src);
        setRingName(name);
    }

    return (
        <>
            <div className="ringsMain">
                <div className="ringsMainContanier">
                    <div className="rings">
                        {ringsArray.map((ring, index) => (
                            <div className="ring" key={index} onClick={() => addRing(ring.src, ring.name)}>
                                <img src={ring.src} alt="ring img"/>
                                <p>
                                    <a href={`https://darksouls.wiki.fextralife.com/${ring.name}`}>
                                        {ring.name}
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
