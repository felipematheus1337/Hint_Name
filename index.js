const consonant = require('consonant');



const generateRandomSyllabsToFill = (remainingSylabs) => {
    const randomVowels = ['a', 'e', 'i', 'o', 'u']
    const { consonants } = consonant;
    let arrOfSyllabs = []
    for (let i = 0; i < remainingSylabs; i++) {
     const pickRandomArrPositionToConso = Math.floor((Math.random() * 14))
     const pickRandomArrPositionToVowel = Math.floor((Math.random() * 5))
     const consonantToTry = consonants[pickRandomArrPositionToConso]
     const vowelToTry = randomVowels[pickRandomArrPositionToVowel]
     const sylab = consonantToTry + vowelToTry;
     arrOfSyllabs.push(sylab)
    }

    return arrOfSyllabs;
        
}

const generateMostUsedSyllabsToFill = (remainingSylabs) => {
    const randomVowels = ['a', 'e', 'i', 'o', 'u']
    const mostUsedConsonants = ['m','n','r','s','t','p','c']
    let arrOfSyllabs = []
    for (let i = 0; i < remainingSylabs; i++) {
     const pickRandomArrPositionToConso = Math.floor((Math.random() * 6))
     const pickRandomArrPositionToVowel = Math.floor((Math.random() * 5))
     const consonantToTry = mostUsedConsonants[pickRandomArrPositionToConso]
     const vowelToTry = randomVowels[pickRandomArrPositionToVowel]
     const sylab = consonantToTry + vowelToTry;
     arrOfSyllabs.push(sylab)
    }

    return arrOfSyllabs;
        
}




const generateRandomName = ([...sylabArr], totalsl) => {
    const TOTAL_SYLLABES = totalsl
    const firstSylab = sylabArr[0];
    const remainingSylabs = 4 - sylabArr.length;


    const swapPlacesArr = (arr) => {
        let formatted_name = arr.split(" ").map(name => name[0].toUpperCase() + name.slice(1)).join(' ')
        console.log(formatted_name);
    }
    
    

    let i = 1;

    console.log("PRINT POSSIBLES NAMES WITH RANDOM CONSONANTS \n ")
    do {
        let nameArr = [];
        nameArr.push(firstSylab);
        [syllab1,syllab2] = generateRandomSyllabsToFill(remainingSylabs)
        nameArr.push(syllab1)
        nameArr.push(syllab2)
        nameArr.push(sylabArr[1])
        const diIndex = nameArr.indexOf(sylabArr[1])
        const pivot = nameArr[i]
        nameArr[i] = nameArr[diIndex]
        nameArr[diIndex] = pivot
        swapPlacesArr(nameArr.join(""));

        i++;
    } while (i < 4);


    console.log("\n PRINT POSSIBLE NAMES WITH MORE USED CONSONANTS IN PORTUGUESE LANGUAGE")
    console.log("INFO BY: https://www.sttmedia.com/characterfrequency-portuguese \n")
     

    i = 1;
    do {
        let nameArr = [];
        nameArr.push(firstSylab);
        [syllab1,syllab2] = generateMostUsedSyllabsToFill(remainingSylabs)
        nameArr.push(syllab1)
        nameArr.push(syllab2)
        nameArr.push(sylabArr[1])
        const diIndex = nameArr.indexOf(sylabArr[1])
        const pivot = nameArr[i]
        nameArr[i] = nameArr[diIndex]
        nameArr[diIndex] = pivot
        swapPlacesArr(nameArr.join(""));
        i++;
    } while (i < 4);


    
    

}



totalSyllabes = 4;
syllabesDescribed = ['ma', 'di']


generateRandomName(syllabesDescribed, totalSyllabes)





