function generateGrade(){
    const marks=document.getElementById('marks').value
    let grade
     grade=document.getElementById('grade')
    if(marks <0 || marks >100 ){
      grade.innerHTML="Input invalid!"
    }
    else if(marks <=100 && marks>79){
       grade.innerHTML="Scored an A!"
    }
    else if(marks <=79 && marks>=60){
       grade.innerHTML="Scored an B!"
    }
    else if(marks <=59 && marks>=50){
       grade.innerHTML="Scored a C!"
    }
    else if(marks <=40 && marks<=49){
       grade.innerHTML="Scored a D!"
    }else{
        grade.innerHTML='Failed with an E'
    }
}