function grade(studentMarks){
    // student mark should be between 0 and 100
    if (studentMarks>100 || studentMarks<0){
        return "Error"
    }
    else if (studentMarks>79){
        return "A"
    } else if (studentMarks>=60 && studentMarks<=79){
        return "B"
    } else if (studentMarks>=49 && studentMarks<=59){
        return "C"
    } else if (studentMarks>=40 && studentMarks<=49){
        return "D"
    } else {
        return "E"
    }
}
//input student mark here
console.log(grade())