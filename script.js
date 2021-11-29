//---------------------------------------------------------- #1
console.log("1: Initialize Array")
const submissions = [
    {name: "Jane", score: 95, date: "2020-01-24", passed: true},
    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
    {name: "Jack", score: 59, date: "2020-01-24", passed: false},
    {name: "Jill", score: 88, date: "2020-01-24", passed: false},
]
console.log (submissions);
//---------------------------------------------------------- #2
console.log("2: Function addSubmission")
function addSubmission (array, newName, newScore, newDate){
    let passed = false
    if (newScore >= 60) {
        passed = true
    }

    let newSubmission = {name:newName, score: newScore, date: newDate, passed: passed} //This is constructing an object
    array.push(newSubmission);
}

addSubmission(submissions, "Jason", 100, "2020-03-08")
console.log(submissions)
//---------------------------------------------------------- #3
console.log("3: Function deleteSubmissionByIndex")
function deleteSubmissionByIndex (array, index){
    array.splice(index, 1);
}

deleteSubmissionByIndex (submissions, "Jason", 100, "2020-03-08")
console.log(submissions);
//---------------------------------------------------------- #4
console.log("4: Function deleteSubmissionByName")

function deleteSubmissionByName (array, name) {
    array.splice(name, 1);
}

deleteSubmissionByName (submissions, "Joe")
console.log(submissions);

//---------------------------------------------------------- #5
console.log("5: Function editSubmission")

function editSubmission (array, index, score){
array[index].score = score;
if (score < 60){
    array[index].passed = false;
} 
else {
    array[index].passed = true;
    }
}

editSubmission(submissions, 1, 38);
console.log(submissions);

//---------------------------------------------------------- #6

console.log("6: Function findSubmissionByName");

const findSubmissionByName = function(array, name){
    const nameReturned = array.find(function(array, name){
        return array.name === array.name
    })
    return nameReturned;
}

let printMe = findSubmissionByName (submissions, 'Jack')
console.log(printMe);


//---------------------------------------------------------- #7
console.log("7: Function findLowestScore");

function findLowestScore(array){
    let lowestScore = 100
    for(let sub of array){
        if(sub.score < lowestScore)
            lowestScore = sub.score;
    }
    return lowestScore;
}
console.log(findLowestScore(submissions));

//---------------------------------------------------------- #8
console.log("8: Function findAverageScore");

function findAverageScore(array){
    
    let count = 0;

    for(let sub of array){
        count += sub.score;
    }
    const average = count / array.length;
    return average
}

console.log(findAverageScore(submissions));

//---------------------------------------------------------- #9

console.log("9: Function filterPassing");

const filterPassing = function(array){
    const newArray = array.filter(function(array){
        return array.score >= 60
    })
    return newArray;
};
let showFilterPassing = filterPassing(submissions)
console.log (showFilterPassing);


//---------------------------------------------------------- #9

console.log("10: Function filter90AndAbove");

const filter90AndAbove = function(array){
    const newArray = array.filter(function(array){
        return array.score >= 90
    })
    return newArray;
};
let showfilter90AndAbove = filter90AndAbove(submissions)
console.log (showfilter90AndAbove);
