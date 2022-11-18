document.getElementById("submitButton").addEventListener("click", fetchBedData);
const result = document.getElementById("results");
const button= document.getElementById("submitButton");




function fetchBedData() {

const form = document.getElementById("register").elements;
const url = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges";
const prefCity = form.city.value;
const recvEmail = form.email.value;
const city = prefCity.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
console.log(city);


fetch(url).then((response) => response.json()).then((json) => {
    console.log(json);

    var Beds = "<html>";

    for (let x of json.data.medicalColleges) {
      if (x.city === city) {
        
        bedcount=bedcount+ x.hospitalBeds;
        console.log(bedcount);
       }
     }
     if(bedcount===0){
       swal("Sorry, No bed found");
     } else {
       
 if (confirm("Confirm booking") == true) {
    swal("You will recieve a confirmation mail");
    Sendmail(recvEmail,city)
 } else {
  swal("You canceled!");
 }
     }
     
   });
 }