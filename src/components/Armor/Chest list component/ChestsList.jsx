import './chestsList.css';

export default function ChestsList({setImportChestName, setImportChestSrc, setImportChestResist}) {

    const armorList = [
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/wanderer_coat.png", name: "Wanderer Coat", resist: 23},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/black_leather_armor.png", name: "Black leather armor", resist: 23},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/brigand_armor.png", name: "Brigand armor", resist:23},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/leather_armor.png", name: "Leather armor", resist: 24},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/sorcerer_cloak.png", name: "Sorcerer cloak", resist: 20},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/tattered_cloth_robe.png", name: "Tattered Cloth Robe", resist: 21},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/holy_robe.png", name: "Holy Robe", resist: 22},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hard_leather_armor.png", name: "Hard Leather armor", resist: 26},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/knight_armor.png", name: "Knight Armor", resist: 37},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/shadow_garb.png", name: "Shadow Garb", resist: 23},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/black_sorcerer_cloak.png", name: "Black sorcerer cloak", resist: 13},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/maiden_robe.png", name: "Maiden Robe"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/antiquated_dress.png", name: "Antiquated Dress"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hollow_thiefs_leather_armor.png", name: "Hollow Thiefs Leather armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/painting_guardian_robe.png", name: "Painting Guardian Robe"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hollow_warrior_armor.png", name: "Hollow Warrior Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hollow_soldier_armor.png", name: "Hollow Soldier Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/dingy_robe.png", name: "Dingy Robe"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/moonlight_robe.png", name: "Moonlight Robe"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/sage_robe.png", name: "Sage Robe"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/goldhemmed_black_cloak.png", name: "Gold Hemmed Black Cloak"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/crimson_robe.png", name: "Crimson Robe"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/black_cleric_robe.png", name: "Black Cleric Robe"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/witch_cloak.png", name: "Witch Cloak"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/xanthous_overcoat.png", name: "Xanthous overcoat"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/chain_armor.png", name: "Chain Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/robe_of_the_great_lord_icon.png", name: "Robe of the Great Lord"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Chester's%20Long%20Coat.png", name: "Chester's%20Long%20Coat"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/robe_of_the_channelers.png", name: "Robe of the Channelers"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Lord's%20Blade%20Robe.png", name: "Lord's%20Blade%20Robe"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/armor_of_the_sun.png", name: "Armor of The Sun"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/eastern_armor.png", name: "Eastern Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/armor_of_the_glorious.png", name: "Armor of the glorious"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/balder_armor.png", name: "Balder Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/armor_of_thorns.png", name: "Armor of Thorns"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/dark_armor.png", name: "Dark Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/elite_knight_armor.png", name: "Elite knight armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/ornstein's_armor_icon.png", name: "ornstein's armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/crystalline_armor.png", name: "Crystalline armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/brass_armor.png", name: "Brass Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Elite%20Cleric%20Chest.png", name: ""},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/embraced_armor_of_favor.png", name: "Emraced armor of favor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/catarina_armor.png", name: "Catarina Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/silver_knight_armor.png", name: "Silver Knight Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/black_knight_armor.png", name: "Black knight armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/paladin_armor.png", name: "Paladin Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Steel%20Armor.png", name: "Steel%20Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Armor%20of%20Artorias.png", name: ""},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Gough's%20Chest.png", name: "Cough's%20Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/black_iron_armor.png", name: "Black iron armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Giant%20Armor.png", name: "Giant Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/havels_armor.png", name: "Havels armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/smoughs_armor.png", name: "Smoughs Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Golem%20Armor.png", name: "Golem%20Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Stone%20Armor.png", name: "Stone%20Armor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Guardian%20Armor.png", name: "Guardian%20Armor"},
    ]

    function addChests(src, name, resist) {
        setImportChestName(name);
        setImportChestSrc(src);
        setImportChestResist(resist);
    }

    return (
        <>
            <div className="chestMain">
                <div className="chestMainContanier">
                    <div className="chests">
                        {armorList.map((chest, index) => (
                            <div className="chest" key={index} onClick={() => addChests(chest.src, chest.name, chest.resist)}>
                                <img src={chest.src} alt="ring img"/>
                                <p>
                                    <a href={`https://darksouls.wiki.fextralife.com/${chest.name}`}>
                                        {chest.name}
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}