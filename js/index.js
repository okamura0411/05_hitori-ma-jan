// 山牌の登録
// 最初各牌の種類（m,p,s,k,san）の5種類に分けてかける4つに分けたかったができなかった。
let haipai  = [];
const yamahai = [ 1,  1,  1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6,6, 6, 6, 7,7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 
                 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 
                 21, 21, 21, 21, 22, 22, 22, 22, 23, 23, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 26, 26, 26, 26, 27, 27, 27, 27,28, 28, 28, 28, 29, 29, 29, 29,
                 31, 31, 31, 31, 32, 32, 32, 32, 33, 33, 33, 33, 34, 34, 34, 34,
                 41, 41, 41, 41, 42, 42, 42, 42, 43, 43, 43, 43];
// 配牌
for(i=0; i<14; i++){
    let r = Math.floor(Math.random()*yamahai.length);
    const tumo = yamahai.splice(r,1); //配列データとして補完してくれる。
    haipai.push(Number(tumo));
}
// バブルソート（リーパイ）
function bsort(array){
    for(let i=0; i<13; i++){
        for(x=0; x<12; x++){
            if(array[x] > array[x+1]){
                [array[x],array[x+1]] = [array[x+1],array[x]];
            }
        }
    }return array;
}
// 画僧の出力
for(i=0; i<14; i++){
    $('#tehai_' + i).html('<img class="hai" src="./img/'+ bsort(haipai)[i] +'.png" name='+ i +'>')
}

// クリックイベント
$(document).on("click",".hai",function(){
    let n = $(this).attr('name');
    $(this).appendTo("#sutehai");
    $(this).empty();
    haipai.splice(n,1)
    // バブル
    function bsort(array){
        for(let i=0; i<13; i++){
            for(x=0; x<12; x++){
                if(array[x] > array[x+1]){
                    [array[x],array[x+1]] = [array[x+1],array[x]];
                }
            }
        }return array;
    }

    let r = Math.floor(Math.random()* yamahai.length);
    const tumo = yamahai.splice(r,1); //配列データとして補完してくれる。
    haipai.push(Number(tumo));
    console.log(bsort(haipai));
    for(i=0; i<14; i++){
        $('#tehai_' + i).html('<img class="hai" src="./img/'+ bsort(haipai)[i] +'.png" name='+ i +'>')
    }
});
