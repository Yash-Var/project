document.getElementById("submitButton").addEventListener("click", fetchBedData);
const result = document.getElementById("results");
const button= document.getElementById("submitButton");
const sendEmail = require('../js/sendEmail');
const Sendmail=require('../js/sendEmail')
const hospitals= document.getElementById("hospitals");
var Hospital = $("input[type='radio'][name='hospital']:checked").val();
let  selectedHospital;
var hospital = {};

function fetchBedData() {
  
  const form = document.getElementById("register").elements;
  const url = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges";
  const prefCity = form.city.value;
  const recvEmail = form.email.value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toLowerCase());
  const city = prefCity.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  console.log(city);
  console.log(recvEmail);
  
  fetch(url).then((response) => response.json()).then((json) => {
    console.log(json);
    let bedcount;
    let noOfHospitals =0;

     let Hospitals=[];
    bedcount=0;
    for (let x of json.data.medicalColleges) {
      if (x.city === city) {
         noOfHospitals+=1;

        bedcount=bedcount+ x.hospitalBeds;
        console.log(bedcount);
        console.log(noOfHospitals);
        console.log(x.name);
        Hospitals+=x.name;

   
       }

     }
     
     if(bedcount===0){
       swal("Sorry, No bed found");
     } else {
       
 if (confirm("Confirm booking") == true) {
    swal(selectedHospital);
  // sendEmail()
 } else {
  swal("You canceled!");
 }
     }
     
   });
 }

 function setHospitals() {
  const form = document.getElementById("register").elements;
  const url = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges";
  const prefCity = form.city.value;
  const recvEmail = form.email.value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toLowerCase());
  const city = prefCity.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  const hospitals= document.getElementById("hospitals");


          fetch(url).then((response) => response.json()).then((json) => {
            console.log(json);
            for (let x of json.data.medicalColleges) {
              if (x.city === city) {
               
               console.log(x.name);
               var opt = document.createElement('option');
               opt.text = x.name+" :- "+x.hospitalBeds;
               hospitals.appendChild(opt)
            
              }
             
              
  };
});
  req.send();
}
   
function selectedhospital() {
  const form = document.getElementById("register").elements;
  const hospitals= document.getElementById("hospitals");
   let  selectedHospital;

  selectedHospital=hospitals.value;
  console.log(selectedHospital);
}


