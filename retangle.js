function staircaseGagal(n) {
    // Write your code here
    let hasil = ''
    for(let i = n; i > 0; i--){
        for(let j = 1; j <= n; j++){
            if(j >= i){
                hasil += '# '
            }else{
                hasil += ''
            }
        }
        hasil += '\n'
    }
    return hasil
}

console.log(staircase(10))

function staircase(n){
    let hasil = ''
    for(let i = 0; i < n; i++){
        for(let j = n -1; j > i; j--){
            hasil += ' '
        }
        for(let k = 0; k < i; k++){
            hasil += '#'
        } hasil += '\n'
    }

    return hasil
}