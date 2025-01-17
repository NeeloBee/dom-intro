// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
var callsTotalElem = document.querySelector(".callTotalOne"); 
var smsTotalElem = document.querySelector(".smsTotalOne"); 
var totalCostElem = document.querySelector(".totalOne");
//get a reference for the total bill element
//const totalOneSpanElement = document.querySelector(".totalOne");
//reference totalOne
//var totalOne = document.querySelector(".totalOne");
//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


// these variables are global and defined outside of the Add button event listener.
var callsTotal = 0;
var smsTotal = 0;

// the event listener is declared below here

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    } else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    //var totalCostElem = document.querySelector(".totalOne");
    //color the total based on the criteria

    
    
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }

}

textTotalAddBtn.addEventListener('click', textBillTotal);



/*const totalCost = Number(totalCostElem);
if (totalCost > 30) {
    //make the total orange
    totalOneSpanElement.classList.add("warning");
} else if (totalCost > 50) {
    //make the total red
    totalOneSpanElement.classList.add("danger");
}
//making a clean independent style for the color.

/*function styleTotalColor2(totalOne) {
    const totalCost = Number(totalOne);
    
    totalCostSpanElement.classList.remove("danger");
    totalCostSpanElement.classList.remove("warning");


    if (totalOne >= 30) {
        //make the total red
        totalCostSpanElement.classList.add("danger");
    } else if (totalOne > 20 && currentTotal < 30) {
        //make the total orange
        totalCostSpanElement.classList.add("warning");
    }*/


/*function textBillTotal(){

    // ... other code here
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    
    
}*/