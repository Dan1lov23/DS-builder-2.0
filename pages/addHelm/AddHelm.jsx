import './addHelm.css';

export default function AddHelm({ setImportHelmSrc, setImportHelmName, setImportHelmResist }) { // Убрал ненужный props importHelmSrc

    const helmsArray = [
        // массив обьектов с парой ключ значение
        // src - путь до изображения, name - название шлема, resist - значние, которое будет прибавлятьсяя к общему физи ческому резисту
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/wanderer_hood.png", name: "Helm of the Wise", resist: 21.8},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/thief_mask.png", name: "Six-Eyed Helm of the Channelers", resist: 21.8},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/brigand_hood.png", name: "Crystalline Helm", resist: 21.8},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/phariss_hat.png", name: "Pharis Hat", resist: 16.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/helm_sorcerer_hat.png", name: "Helm Sorcerer", resist: 19.4},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/tattered_cloth_hood.png", name: "Tattered Cloth Hood", resist: 19.4},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/priests_hat.png", name: "Priest's Hat", resist: 16.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/standard_helm.png", name: "Standard Helm", resist: 33.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/knight_helm.png", name: "Knowledge Helm", resist: 33.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/shadow_mask.png", name: "Shadow Mask", resist: 14},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/helm_black_sorcerer_hat.png", name: "Black Sorcerer Helm", resist: 12.1},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/sixeyed_helm_of_the_channelers.png", name: "Six-Eyed Helm of the Channelers", resist: 20},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/cleric_helm.png", name: "Cleric Helm", resist: 36.6},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/maiden_hood.png", name: "Maiden Hood", resist: 16.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/crown_of_dusk.png", name: "Crown of Dusk", resist: 5},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hollow_thiefs_hood.png", name: "Hollow Thief's Hood", resist: 19.4},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/painting_guardian_hood.png", name: "Painting Guardian Hood", resist: 4.6},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hollow_warrior_helm.png", name: "Hollow Warrior Helm", resist: 24.2},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hollow_soldier_helm.png", name: "Hollow Soldier Helm", resist: 24.2},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/dingy_hood.png", name: "Dingy Hood", resist: 14.5},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/crown_of_the_dark_sun.png", name: "Crown of the Dark Sun", resist: 12},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/big_hat.png", name: "Big Hat", resist: 21.7},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/goldhemmed_black_hood.png", name: "Goldhemmed Black Hood", resist: 11},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/mask_of_the_sealer.png", name: "Mask of the Sealer", resist: 18.6},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/mask_of_velka.png", name: "Mask of Velka", resist: 18.6},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/witch_hat.png", name: "Witch Hat", resist: 13.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/xanthous_crown.png", name: "Xanthous Crown", resist: 27.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/chain_helm.png", name: "Chain Helm", resist: 29},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/crown_of_the_great_lord.png", name: "Crown of the Great Lord", resist: 19},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Snickering%20Top%20Hat.png", name: "Snickering Top Hat", resist: 18.6},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Porcelain%20Mask.png", name: "Porcelain Mask", resist: 20.1},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/solaire_helm.png", name: "Solaire's Helm", resist: 33.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/eastern_helm.png", name: "Eastern Helm", resist: 26.3},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/helm_of_the_wise.png", name: "Helm of the Wise", resist: 18},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/balder_helm.png", name: "Balder Helm", resist: 33.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/helm_of_thorns.png", name: "Helm of Thorns", resist: 26.3},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/dark_mask.png", name: "Dark Mask", resist: 27.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/elite_knight_helm.png", name: "Elite Knight Helm", resist: 36.3},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/ornsteins_helm.png", name: "Ornstein's Helm", resist: 32},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/crystalline_helm.png", name: "Crystalline Helm", resist: 25},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/brass_helm.png", name: "Brass Helm", resist: 27.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/helm_of_favor.png", name: "Helm of Favor", resist: 27.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/catarina_helm.png", name: "Catarina Helm", resist: 34.1},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/silver_knight_helm.png", name: "Silver Knight Helm", resist: 32.5},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/black_knight_helm.png", name: "Black Knight Helm", resist: 32.5},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/paladin_helm.png", name: "Paladin Helm", resist: 34.1},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Steel%20Helm.png", name: "Steel Helm", resist: 38.7},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Helm%20of%20Artorias.png", name: "Helm of Artorias", resist: 27.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Gough's%20Helm.png", name: "Gough's Helm", resist: 38.8},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/black_iron_helm.png", name: "Black Iron Helm", resist: 41.1},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/giant_helm_icon.png", name: "Giant Helm", resist: 41.9},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/havels_helm.png", name: "Havel's Helm", resist: 36},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/smoughs_helm.png", name: "Smough's Helm", resist: 40},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/golem_helm_icon.png", name: "Golem Helm", resist: 35},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Stone%20Helm.png", name: "Stone Helm", resist: 35},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Guardian%20Helm.png", name: "Guardian Helm", resist: 41},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/fang_boar_helm.png", name: "Fang Boar Helm", resist: 40.3},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/gargoyle_helm.png", name: "Gargoyle Helm", resist: 23.2},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/sunlight_maggot.png", name: "Sunlight Maggot", resist: 6},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/symbol_of_avarice.png", name: "Symbol of Avarice", resist: 21},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/sack.png", name: "Sack", resist: 21},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/royal_helm.png", name: "Royal Helm", resist: 14.5},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/mask_of_the_father.png", name: "Mask of the Father", resist: 6},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/mask_of_the_mother.png", name: "Mask of the Mother", resist: 6},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/mask_of_the_child.png", name: "Mask of the Child", resist: 6},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Bloated%20Head.png", name: "Bloated Head", resist: 17},
        {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Bloated%20Sorcerer%20Head.png", name: "Bloated Sorcerer Head", resist: 14},
    ]

    function addHelm(src, name, resist) { // Убрал ненужный параметр name
        setImportHelmSrc(src); // Обновляем состояние с помощью setImportHelmSrc
        setImportHelmName(name);
        setImportHelmResist(resist);
    }

    return (
        <>
            <div className="addHelmMainContentTitle">
                <h1>Helms</h1>
            </div>
            <div className="addHelmMain">
                <div className="addHelmMainContainer">
                    {helmsArray.map((item, index) => (
                        <div key={index} className="addHelmMainItem" onClick={() => addHelm(item.src, item.name, item.resist)}> {/* Передаем только src */}
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
