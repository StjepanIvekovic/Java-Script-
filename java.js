
function getAverage(scores) {
    let suma=0;
    let count = 0;
    for(let i=0; i<scores.length; i++) {
        suma = suma + scores[i];
        count++;
        const currentAverage = suma / count;
        console.log(currentAverage,"ovo je trenutni prosjek"); 
      
    }
    const avg = suma/scores.length;
    return avg;

}



console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

 function getGrade(score) {
    if(score == 100) {
        return "A++"
    }
    else if(score >= 90 && score <= 99) {
        return "A"; 
    }
    else if(score >= 80 && score <= 89) {
        return "B"; 
    }
    else if(score >= 70 && score <= 79) {
        return "C"; 
    }
    else if(score >= 60 && score <= 69) {
        return "D"; 
    }
    else{
        return "F";
    }

}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56)); 
 function hasPassingGrade(score) {
    if(score >= 60) {
        return true;
    }else {
        return false; 
    }
} 

 console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87)); 
function studentMsg(totalScores, studentScore) {
    let sum = 0;
    for(const totalScore of totalScores) {
        sum = sum + totalScore; 
    }
    const classAverage = sum / totalScores.length; 
    function getGrade(score) {
        if (score === 100) {
          return "A++";
        } else if (score >= 90) {
          return "A";
        } else if (score >= 80) {
          return "B";
        } else if (score >= 70) {
          return "C";
        } else if (score >= 60) {
          return "D";
        } else {
          return "F";
        }
      }
      const myGrade = getGrade(studentScore);
      const pass = myGrade !== 'F';

      if(pass){
        return "Class average: " + classAverage + ". Your grade: " + myGrade + ". You passed the course.";   
      }else{
        return "Class average: " + classAverage + ". Your grade: " + myGrade + ". You  the course.";

      }
    
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));