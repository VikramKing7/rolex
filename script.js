function cbmi()
{
    let wei=prompt("Enter your weight:");
    let heigh=prompt("Enter your heightcm");


    let height=heigh/100;
    let BMI=wei/(height*height);

    document.getElementById("re").innerHTML=`Your BMI is ${BMI.toFixed(2)}`;


}