const toViewerUnits = (height, width) => {
        let maxHeight = document.getElementsByTagName("html")[0].getBoundingClientRect()['height'];
        let maxWidth = document.getElementsByTagName("html")[0].getBoundingClientRect()['width'];
        let vh = (height/maxHeight)*100;
        let vw = (width/maxWidth)*100;
        console.log(`Input item's current vh': ${vh}`);
        console.log(`Input item's current vw': ${vw}`);
        return([vw, vh]);
}

Math.solveProportion = function(initialX, initialY, newY){
    let ratio = initialX/initialY;
    return ratio/newY;
}

//A pair of functions I use at a Tutoring job. 
//Takes answers and explanations from a document (passed as a long string) and outputs 
//number-indexed answers w/o explanations

const appendNumber = (arr, start) => {
    for(let i= start; i<= arr.length; i++){
            console.log(String(i) + ') ' + String(arr[i-1]));
    }
    return arr;
}

const getAnswers = (text, start) =>{
    let answerArray = [];
    let textArray = text.split('');
    for(let i=0; i< textArray.length; i++){
        if(textArray[i] === '→'){ // Most debriefs offset answers and ONLY answers w/ '→'. Will need to be modified for debriefs following different standard.
            let answer = String(textArray[i-1]);
            answerArray.push(answer);
        }
    }
    return appendNumber(answerArray, start);
}

// string for running local MongoDB:
// "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe"