import './addHelm.css';

export default function AddHelm({ setImportHelmSrc, setImportHelmName }) { // Убрал ненужный props importHelmSrc

    const helmsArray = [
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/wanderer_hood.png", name: "Helm of the Wise"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/thief_mask.png", name: "Six-Eyed Helm of the Channelers"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/brigand_hood.png", name: "Crystalline Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/phariss_hat.png", name: "Pharis Hat"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/helm_sorcerer_hat.png", name: "Helm Sorcerer"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/tattered_cloth_hood.png", name: "Tattered Cloth Hood"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/priests_hat.png", name: "Priest's Hat"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/standard_helm.png", name: "Standard Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/knight_helm.png", name: "Knowledge Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/shadow_mask.png", name: "Shadow Mask"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/helm_black_sorcerer_hat.png", name: "Black Sorcerer Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/sixeyed_helm_of_the_channelers.png", name: "Six-Eyed Helm of the Channelers"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/cleric_helm.png", name: "Cleric Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/maiden_hood.png", name: "Maiden Hood"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/crown_of_dusk.png", name: "Crown of Dusk"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hollow_thiefs_hood.png", name: "Hollow Thief's Hood"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/painting_guardian_hood.png", name: "Painting Guardian Hood"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hollow_warrior_helm.png", name: "Hollow Warrior Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hollow_soldier_helm.png", name: "Hollow Soldier Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/dingy_hood.png", name: "Dingy Hood"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/crown_of_the_dark_sun.png", name: "Crown of the Dark Sun"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/big_hat.png", name: "Big Hat"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/goldhemmed_black_hood.png", name: "Goldhemmed Black Hood"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/mask_of_the_sealer.png", name: "Mask of the Sealer"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/mask_of_velka.png", name: "Mask of Velka"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/witch_hat.png", name: "Witch Hat"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/xanthous_crown.png", name: "Xanthous Crown"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/chain_helm.png", name: "Chain Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/crown_of_the_great_lord.png", name: "Crown of the Great Lord"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Snickering%20Top%20Hat.png", name: "Snickering Top Hat"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Porcelain%20Mask.png", name: "Porcelain Mask"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/solaire_helm.png", name: "Solaire's Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/eastern_helm.png", name: "Eastern Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/helm_of_the_wise.png", name: "Helm of the Wise"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/balder_helm.png", name: "Balder Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/helm_of_thorns.png", name: "Helm of Thorns"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/dark_mask.png", name: "Dark Mask"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/elite_knight_helm.png", name: "Elite Knight Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/ornsteins_helm.png", name: "Ornstein's Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/crystalline_helm.png", name: "Crystalline Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/brass_helm.png", name: "Brass Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/helm_of_favor.png", name: "Helm of Favor"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/catarina_helm.png", name: "Catarina Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/silver_knight_helm.png", name: "Silver Knight Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/black_knight_helm.png", name: "Black Knight Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/paladin_helm.png", name: "Paladin Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Steel%20Helm.png", name: "Steel Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Helm%20of%20Artorias.png", name: "Helm of Artorias"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Gough's%20Helm.png", name: "Gough's Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/black_iron_helm.png", name: "Black Iron Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/giant_helm_icon.png", name: "Giant Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/havels_helm.png", name: "Havel's Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/smoughs_helm.png", name: "Smough's Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/golem_helm_icon.png", name: "Golem Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Stone%20Helm.png", name: "Stone Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Guardian%20Helm.png", name: "Guardian Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/fang_boar_helm.png", name: "Fang Boar Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/gargoyle_helm.png", name: "Gargoyle Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/sunlight_maggot.png", name: "Sunlight Maggot"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/symbol_of_avarice.png", name: "Symbol of Avarice"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/sack.png", name: "Sack"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/royal_helm.png", name: "Royal Helm"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/mask_of_the_father.png", name: "Mask of the Father"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/mask_of_the_mother.png", name: "Mask of the Mother"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Bloated%20Head.png", name: "Bloated Head"},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Bloated%20Sorcerer%20Head.png", name: "Bloated Sorcerer Head"},
    ]

    function addHelm(src, name) { // Убрал ненужный параметр name
        setImportHelmSrc(src); // Обновляем состояние с помощью setImportHelmSrc
        setImportHelmName(name);
    }

    return (
        <>
            <div className="addHelmMainContentTitle">
                <h1>Helms</h1>
            </div>
            <div className="addHelmMain">
                <div className="addHelmMainContainer">
                    {helmsArray.map((item, index) => (
                        <div key={index} className="addHelmMainItem" onClick={() => addHelm(item.src, item.name)}> {/* Передаем только src */}
                            <img src={item.src} alt={item.name} />
                            <a href={`https://darksouls.wiki.fextralife.com/${item.name}`} target="_blank" rel="noopener noreferrer"> {/* Добавил target="_blank" и rel="noopener noreferrer" */}
                                {item.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
////