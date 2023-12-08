function gradingStudents(grades){
    let resultGrade = []
    for(let x in grades){
        // resultGrade.push(x + 2)
        if(grades[x] < 35){
            resultGrade.push(grades[x])
        } else if((grades[x] + 2) % 5 == 0){
            resultGrade.push(grades[x] + 2)
        } else{
            resultGrade.push(grades[x])
        }
    }

    return resultGrade
}

grades = [73, 67, 38, 33]
console.log(gradingStudents(grades))

// define Set
// const set = new Set([3, 2, 4]);

// // looping through Set
// for (let i of set) {
//     console.log(i);
// }