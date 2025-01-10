const foodItems = [
    "抹茶アイス　300円", "ピザ　500円", "ラーメン　980円", "卵焼き串　300円", "シラスコロッケ　200円", "お団子　200円", "カレーパン　400円", "アップルパイ　600円", "クレープ　470～600円", "焼き芋　時価"
];

document.getElementById("generate-btn").addEventListener("click", () => {
    // ランダムな組み合わせを生成
    const combination = getRandomCombination(foodItems, 2);
     // 結果ページにクエリパラメータとして組み合わせを渡す
     const queryString = `result.html?combination=${encodeURIComponent(combination.join(" + "))}`;
     window.location.href = queryString;
});

function getRandomCombination(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

document.getElementById("share-btn").addEventListener("click", () => {
    if(navigator.share) {
        navigator.share(
            title, 'チェックしてね！',
            text, 'これが面白い内容です！',   
        )
        .then(() => console.log('共有が成功しました！'))
        .catch((error) => console.error('共有に失敗しました:', error));
    } else {
        console.log('Web Share APIはサポートされていません。');
    }
});


