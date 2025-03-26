import './equipList.css';

export default function EquipList({ userItem, setUserItem}) {

    //

    function addItem(src, name) {
        if (userItem.length < 2) {
            const weapon = weaponsTypes.flatMap(type => type.weapons).find(weapon => weapon.name === name);
            const newItem = {
                src,
                name,
                damage: weapon.damage,
                minStrength: weapon.minStrength,
                minDexterity: weapon.minDexterity,
                minIntelligence: weapon.minIntelligence,
                minFaith: weapon.minFaith,
                // скейлы от оружия
                strengthScale: "E",
                dexterityScale: "A",
                intelligenceScale: "-",
                faithScale: "-"
            };
            setUserItem([...userItem, newItem]);
        }
    }

    const weaponsTypes = [
        {
            // кинжалы и ножи (в оригинале дагеры)
            name: "Daggers",
            weapons: [
                {
                    src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Wpn_Dagger.png",
                    // название оружия
                    name: "Dagger",
                    // урон от оружия
                    damage: 140,
                    // требования для нормального использования оружия
                    // минимальная сила
                    minStrength: 5,
                    // минимальная ловкость
                    minDexterity: 8,
                    // миимальный интеллект
                    minIntelligence: 0,
                    // манимальная вера
                    minFaith: 0,
                },
                {
                    src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Wpn_Ghost_Blade.png", name: "Ghost Blade",
                    damage: 140,
                    minStrength: 5, minDexterity: 8, minIntelligence: 0, minFaith: 0,
                },
                {
                    src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Wpn_Bandit's_Knife.png", name: "Bandit's Knife",
                    damage: 140,
                    minStrength: 5, minDexterity: 8, minIntelligence: 0, minFaith: 0,}
                ,
                {
                    src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Wpn_Parrying_Dagger.png", name: "Parrying Dagger",
                    damage: 140,
                    minStrength: 5, minDexterity: 8, minIntelligence: 0, minFaith: 0,
                },
                {
                    src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Wpn_Priscilla's_Dagger.png", name: "Priscilla's Dagger",
                    damage: 140,
                    minStrength: 5, minDexterity: 8, minIntelligence: 0, minFaith: 0,
                },
                {
                    src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Dark%20Silver%20Tracer.png", name: "Silver Tracer",
                    damage: 140,
                    minStrength: 5, minDexterity: 8, minIntelligence: 0, minFaith: 0,
                },
            ]
        },
        {
            // прямые мечи
            name: "Straight Swords",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/straight_sword_hilt.png", name: "Straight Sword Hilt"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Broken_Straight_Sword.png", name: "Broken Straight Sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/broadsword.png", name: "Broadsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/shortsword.png", name: "Shortsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Longsword.png", name: "Longsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/barbed_straight_sword.png", name: "Barbed Straight Sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/sunlight_straight_sword.png", name: "Sunlight Straight sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/balder_side_sword.png", name: "Balder Side Sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/astoras_straight_sword.png", name: "Astora's Straight Sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/silv_knight_str_sword.png", name: "Silver Knight Straight Sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Drake_Sword.png", name: "Drake Sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Darksword.png", name: "Darksword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/crystal_straight_sword.png", name: "Crystal Straight Sword"},
            ]
        },
        {
            name: "Greatswords",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/bastard_sword.png", name: "Bastard Sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/black_knight_sword.png", name: "Black Knight Sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/claymore.png", name: "Claymore"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/flamberge.png", name: "Flamberge"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/crystal_greatsword_1.png", name: "Crystal Greatsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/manserpent_greatsword.png", name: "Man-Serpent Greatsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/great_lord_greatsword_1.png", name: "Great Lord Greatsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/moonlight_greatsword.png", name: "Moonlight Greatsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/greatsword_of_artorias.png", name: "greatsword of artorias"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/greatsword_of_artorias_3.png", name: "Greatsword of Artorias (Cursed)"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/stone_greatsword.png", name: "stone greatsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Abyss%20Greatsword.png", name: "Abyss Greatsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Obsidian%20Greatsword.png", name: "Obsidian Greatsword"},
            ]
        },
        {
            name: "Ultra Greatswords",
            weapons: [
                {
                    src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/dragon_greatsword.png",
                    name: "Dragon Greatsword",
                    damage: 585,
                    minStrength: 50, minDexterity: 10, minFaith: 0, minIntelligence: 0
                },
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/greatsword.png", name: "Great Greatsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/black_knight_greatsword.png", name: "Black knight greatsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/zweihander.png", name: "Zweihander"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/demon_great_machete.png", name: "Demon Great Machete"}
            ]
        },
        {
            name: "Curved Swords",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/scimitar.png", name: "Scimitar"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/shotel.png", name: "Shotel"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/falchion.png", name: "Falchion"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/quelaags_furysword_1.png", name: "Quelaag's Furysword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/painting_guardian_sword.png", name: "Painting Guardian Sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/jagged_ghost_blade.png", name: "Jagged Ghost Blade"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Gold%20Tracer.png", name: "Gold Tracer"},
            ]
        },
        {
            name: "Katanas",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/uchigatana.png", name: "Uchigatana"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/washing_pole.png", name: "Washing Pole"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/iaito.png", name: "Iaito"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/chaos_blade_1.png", name: "Chaos Blade"},
            ]
        },
        {
            name: "Curved Greatswords",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/server.png", name: "Server"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/murakumo.png", name: "Murakumo"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/gravelord_sword.png", name: "Gravelord Sword"},
            ]
        },
        {
            name: "Piercing Swords",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/rapier.png", name: "Rapier"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/estoc.png", name: "Estoc"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/mail_breaker.png", name: "Mail Breaker"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/ricards_rapier.png", name: "Ricard Rapier"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/velkas_rapier.png", name: "Velka's Rapier"},
            ]
        },
        {
            name: "Axes",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hand_axe.png", name: "Hand Axes"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/gargoyle_tail_axe.png", name: "Gargoy Tail Axe"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/battle_axe.png", name: "Battle Axe"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/butcher_knife.png", name: "Butcher Kinder"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/crescent_axe.png", name: "Crescent Axe"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/golem_axe_1.png", name: "Golem Axe"},
            ]
        },
        {
            name: "Great Axes",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/demons_greataxe.png", name: "Demons Greataxe"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/greataxe.png", name: "Greataxe"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/dragon_king_greataxe.png", name: "Dragon King Greataxe"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/black_knight_greataxe.png", name: "Black knight Greataxe"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Stone%20Greataxe.png", name: "Stone%20Greataxe"},
            ]
        },
        {
            name: "Hammers",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Club.png", name: "Club"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/reinforced_club.png", name: "Reinforced Club"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/mace.png", name: "Mace"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/morning_star.png", name: "Morning Star"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/warpick.png", name: "Warpick"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/pickaxe.png", name: "Pickaxe"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/blacksmith_hammer.png", name: "Blacksmith Hammer"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/blacksmith_giant_hammer.png", name: "Blacksmith_giant_hammer"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hammer_of_vamos.png", name: "Hammer of Vamos"},
            ]
        },
        {
            name: "Fist & Claw",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/caestus.png", name: "Caestus"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/claw.png", name: "Claws"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/dragon_bone_fist_1.png", name: "Dragon Bone Fist"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/dark_hand.png", name: "Dark Hand"},
            ]
        },
        {
            name: "Spears",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/spear.png", name: "Spear"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/winged_spear.png", name: "Winged Spear"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/demons_spear.png", name: "Demon's Spear"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/pike.png", name: "Pike"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/dragonslayer_spear_9.png", name: "Dragonslayer Spear"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/partizan.png", name: "Partizan"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/channelers_trident.png", name: "Channelers Trident"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/silver_knight_spear.png", name: "Silver knight Spear"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/moonlight_butterfly_horn_9.png", name: "Moonlight Butterfly Hron"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Four-pronged%20Plow.png", name: "Four-pronged low"},
            ]
        },
        {
            name: "Halberds",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/halberd.png", name: "Halberd"},
            ]
        }
    ];

    return (
        <>
            <div className="equipListMainTitle">
                <h1>Dark Souls weapons</h1>
            </div>
            <div className="equipListMain">
                {weaponsTypes.map((weaponType, index) => (
                    <div key={index}>
                        <div className="weaponTypeNameTitle">
                            <h1>{weaponType.name}</h1>
                        </div>
                        <div className="equipListContainer">
                            {weaponType.weapons.map((weapon, weaponIndex) => (
                                <div className="weaponMain" key={weaponIndex} onClick={() => addItem(weapon.src, weapon.name)}>
                                        <img src={weapon.src} alt={weapon.name} />
                                        <p>______________</p>
                                        <a href={`https://darksouls.wiki.fextralife.com/${weapon.name}`}>
                                            <span>{weapon.name}</span>
                                        </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
