// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get references to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
const totalSettings = document.querySelector(".totalSettings");
//get a reference to the add button
const button-primary = document.querySelector(".button-primary");
//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var settings = callsTotal + smsTotal
// create a variables that will keep track of all three totals.
const callTotal = document.querySelector(".callTotalSettings");
const smsTotal = document.querySelector(".smsTotalSettings");
const total = document.querySelector(".totalSettings");
var totals = callTotalSettings + smsTotalSetting;
// these variables are global and defined outside of the Add button event listener.
var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click', function(){
    var button-primary = document.querySelector(".billItemTypeWithSettings:checked");
    if (button-primary.value === 'call') {
        callsTotal += 2.75;
    } else if (button-primary.value === 'sms') {
        smsTotal += 0.75;
    }
 
//update the totals that is displayed on the screen.
    callTotalTwo.innerHTML = callsTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwo.innerHTML = totalCost.toFixed(2);
});
//add an event listener for when the add button is pressed
button-primary.addEventListener('click', function(){
    var button-primary = document.querySelector(".billItemTypeWithSettings:checked");
    if (button-primary.value === 'call') {
        warningLevelSetting
    } else if (button-primary.value === 'sms') {
        criticalLevelSetting;
    }

//update the totals that is displayed on the screen.
    callTotalTwo.innerHTML = callsTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwo.innerHTML = totalCost.toFixed(2);


});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.


//use the warning level: toggle
//use the critical level: toggle