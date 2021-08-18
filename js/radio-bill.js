// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//added a variable to the SMS total
const smsTotalTwo = document.querySelector(".smsTotalTwo");
//added a variable to the call total
const callTotalTwo = document.querySelector(".callTotalTwo");
//create a variable that will keep track of the total bill
const totalTwo = document.querySelector(".totalTwo");
//defining totalCostTwo
var totalCostTwo = document.querySelector(".totalCostTwo");
/*//create a variable that will keep track of the total bill
var callsTotalElem = document.querySelector(".callTotalOne"); 
var smsTotalElem = document.querySelector(".smsTotalOne"); 
var totalCostElem = document.querySelector(".totalOne");*/


// these variables are global and defined outside of the Add button event listener.
var callsTotal = 0;
var smsTotal = 0;

//add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener('click', function() {
    var checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");
    //alert('You clicked me');
    //console.log(checkedRadioBtn.value);

    if (checkedRadioBtn.value === 'call'){
    
    // billItemType will be 'call' or 'sms'
    callsTotal += 2.75
    } else if (checkedRadioBtn.value === 'sms') {
    smsTotal += 0.75
    }

    //update the totals that is displayed on the screen.
    callTotalTwo.innerHTML = callsTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwo.innerHTML = totalCost.toFixed(2);



//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");

if (totalCost >= 50){
    // adding the danger class will make the text red
    totalTwo.classList.add("danger");
    }
else if (totalCost >= 30){
    totalTwo.classList.add("warning");
    }

});
textTotalAddBtn.addEventListener('click', textBillTotal);


