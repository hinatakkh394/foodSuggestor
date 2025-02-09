if ("index.html"){
    const foodItems = [
        "抹茶アイス　300円", "ピザ　500円", "ラーメン　980円", "卵焼き串　300円", "シラスコロッケ　200円", 
        "お団子　200円", "カレーパン　400円", "アップルパイ　600円", "クレープ　470～600円", "焼き芋　時価"
    ];
    
    document.getElementById("generate-btn").addEventListener("click", () => {
    const combination = getRandomCombination(foodItems, 2);
    const queryString = `result.html?combination=${encodeURIComponent(combination.join(" + "))}`;
    window.location.href = queryString;
});

function getRandomCombination(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}


// `result.html` の処理
if ("result.html") {
const params = new URLSearchParams(window.location.search);
const combination = params.get("combination");

document.getElementById("result").innerText = 'おすすめの品: ${combination}';

document.getElementById("share-btn").addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({
            title: '江ノ電沿線食べ歩きガチャの結果',
            text: 'おすすめの品: ${combination}',
            url: 'https://hinatakkh394.github.io/foodSuggestor/'
        })
        .then(() => console.log('共有が成功しました！'))
        .catch((error) => console.error('共有に失敗しました:', error));
    } else {
        console.log('Web Share APIはサポートされていません。');
    }
});
}

}
// Share button functionality for `index.html`
document.getElementById("share-btn").addEventListener("click", () => {
    const combination = getRandomCombination(foodItems, 2).join(" + ");
    if (navigator.share) {
        navigator.share({
            title: '江ノ電沿線食べ歩きガチャの結果',
            text: `おすすめの品: ${combination}`,
            url: 'https://hinatakkh394.github.io/foodSuggestor/'
        })
        .then(() => console.log('共有が成功しました！'))
        .catch((error) => console.error('共有に失敗しました:', error));
    } else {
        console.log('Web Share APIはサポートされていません。');
    }
});
