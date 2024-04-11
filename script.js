
const locateButton = document.querySelector('.btn');
var a= document.querySelector('.obesity');
let BC= document.querySelector('.colorr').style;

locateButton.addEventListener('click', function(){
    
    let height= Number(document.querySelector('.height').value) ;
    let weight= Number(document.querySelector('.weight').value);
    if(height != '' && weight!=''){
    let bmi = calculations(height ,weight);
    

    document.querySelector('.bminumber').innerHTML=bmi.toFixed(2);
    // document.querySelector('.weight').value='';
    // document.querySelector('.height').value='';
    if(bmi < 18.5){
        BC.backgroundColor = '#58CFB1';
        
        a.setAttribute('title', 'under-weight');
    } else if(bmi >= 18.5 && bmi <= 24.9){
        BC.backgroundColor= '#17A37E';
        a.setAttribute('title', 'Normal');
    } else if(bmi >= 25 && bmi <= 29.9){
        BC.backgroundColor = '#FF9D80';
        a.setAttribute('title', 'excess-weight');
    } else if(bmi >= 30 && bmi <= 34.9){
        BC.backgroundColor= '#EF5F6C';
        a.setAttribute('title', 'obese');
    } else {
        BC.backgroundColor = '#E24E4E';
        a.setAttribute('title', 'extremly-obese');
    }
    document.querySelector('.height').placeholder= 'Enter Height (cm)';
    document.querySelector('.weight').placeholder= 'Enter Weight (kg)';
}
    else{
        if(height =='' || weight ==''){
            document.querySelector('.height').placeholder= 'Height required!';
            document.querySelector('.weight').placeholder= 'Weight required!';
        }
       
    }
   
})

function calculations(height, weight){
    let den= (height/100)*(height/100)
    return weight/den ;
}
