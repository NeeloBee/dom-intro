// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get references to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
const totalSettings = document.querySelector(".totalSettings");
//get a reference to the add button
const SettingsAddBtn = document.querySelector(".SettingsAddBtn");
//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var settings = callsTotal + smsTotal
// create a variables that will keep track of all three totals.
const callTotalElement = document.querySelector(".callTotalSettings");
const smsTotalElement = document.querySelector(".smsTotalSettings");
const totalElement = document.querySelector(".totalSettings");
//var totals = callTotalSettings + smsTotalSettings;
// these variables are global and defined outside of the Add button event listener.
var callTotal = 0;
var smsTotal = 0;
var total = 0;
//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click', function(){
  callsTotal = callsTotal + callCostSetting.value;
   
});
//add an event listener for when the add button is pressed
//console.log(buttonPrimary);
SettingsAddBtn.addEventListener('click', function(){
    //alert("hello");
    var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings:checked");
    //console.log(billItemTypeWithSettings.value);
    if (billItemTypeWithSettings.value === 'call') {
        callsTotal += 2.75;
    } else if (billItemTypeWithSettings.value === 'sms') {
        smsTotal += 0.75;
    } 

//update the totals that is displayed on the screen.
    callTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    total = callsTotal + smsTotal;
    totalElement.innerHTML = total.toFixed(2);
//update the totals that is displayed on the screen.
    /*callTotalTwo.innerHTML = callsTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwo.innerHTML = totalCost.toFixed(2);*/


});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

