// 山牌の登録
const yamahai = [ 1,  1,  1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6,6, 6, 6, 7,7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 
                 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 
                 21, 21, 21, 21, 22, 22, 22, 22, 23, 23, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 26, 26, 26, 26, 27, 27, 27, 27,28, 28, 28, 28, 29, 29, 29, 29,
                 31, 31, 31, 31, 32, 32, 32, 32, 33, 33, 33, 33, 34, 34, 34, 34,
                 41, 41, 41, 41, 42, 42, 42, 42, 43, 43, 43, 43];
// 乱数からの手配の生成
// 136の乱数を生成してtehai_iに入れ込んでいく作業。
for(i=0; i<14; i++){
    let r = Math.floor(Math.random()*yamahai.length);
    const tumo = yamahai.splice(r,1);
    console.log(tumo);
    $('#tehai_'+i).append('<img src="./img/'+tumo+'.png" alt="">')
}

// バブルソート（リーパイ）

// 牌クリックで捨て牌に移動 → 一枚積もる

// 上がり判定

// 国士無双、チートイツの上がり判定追加

// 役が表示されるようにする。

// for(i=0; i<136; i++){
//         let r = Math.floor(Math.random() * 5);
//         if(r == 0){
//             let n = Math.ceil(Math.random()*9);
//             let hai = 0+n;
//             yamahai.push(hai);
//         }else if(r == 1){
//             let n = Math.ceil(Math.random()*9);
//             let hai = 10+n;
//             yamahai.push(hai);
//         }else if(r == 2){
//             let n = Math.ceil(Math.random()*9);
//             let hai = 20+n;
//             yamahai.push(hai);
//         }else if(r == 3){
//             let n = Math.ceil(Math.random()*4);
//             let hai = 30+n;
//             yamahai.push(hai);
//         }else if(r == 4){
//             let n = Math.ceil(Math.random()*3);
//             let hai = 40+n;
//             yamahai.push(hai);
//             }
// }            console.log(yamahai);

// 乱数からの手配の生成
// yamahaiから手配に移動しないといけないけど、

// バブルソート（リーパイ）

// 牌クリックで捨て牌に移動 → 一枚積もる

// 上がり判定

// 国士無双、チートイツの上がり判定追加

// 役が表示されるようにする。