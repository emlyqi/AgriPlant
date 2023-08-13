var day = 1;
var currCoins = 100;
var goalCoins = 1000;
var dailySpend = 0;
var dailyEarn = 0;
var numDeadCrops = 0;
var daysLeft = 14-day;
var plantsPlanted = [0,0,0,0,0,0,0];
var selection = false;
var toolSelectionImg;
var toolSelectionPrice;
var selected = [0,0,0,0,0,0,0];
var pestUsed = [0,0,0,0,0,0,0];
var fertUsed = [0,0,0,0,0,0,0];
var correct = false;
var answered = false;
var tempCoins;
var tempDailySpend;
var hasDayReset = false;
var deathProb = 0.3;
var coinsMulti = 1;
var coinsMultis = [1,1,1,1,1,1,1];
var windPow = false;
var first = true;
localStorage.setItem("instructions", "0");
var pfArray;
localStorage.clear();

const trivQ1 = ["Pesticides are often used to control pests in agriculture. What are some risks of pesticides on the human body?", "Affect the nervous system", "Affect the hormone or endocrine system", "All of the above", 2]
const trivQ2 = ["What does good stewardship of the natural systems and resources that farms rely on not include?", "Removing carbon sinks", "Managing water wisely", "Promoting biodiversity", 0]
const trivQ3 = ["Malathion, known to be the most toxic pesticide to wildlife, is likely to cause harm to what percent of the 1,782 animals and plants under the endangered species act?", "97%", "84%", "68%", 0]
const trivQ4 = ["How do cover crops and perennial help in a farm?", "They cover and hide the crops from the excess interaction of UV rays from the sun", "They take in all the water and nutrients such that it creates an environment in which it is inhospitable for weeds to thrive in", "They protect and build soil health by preventing erosion, replenishing soil nutrients, and keeping weeds in check", 2]
const trivQ5 = ["It is estimated that roughly _____ birds are killed annually by pesticides on U.S. agricultural lands.", "142 million", "67 million", "2.4 million", 1]
const trivQ6 = ["What are the 3 parts to sustainable agriculture?", "Environmental stewardship, society, policy", "Economy, society, policy", "Society, economy, environmental stewardship", 2]
const trivQ7 = ["What is a method to reduce the dependance for pesticides using sustainable agriculture?", "Plant hedgerows along field edges to encourage pest predators into the area", "Use homemade pesticides instead, such as borax, to reduce the presence of pests", "Place rubbish bins outside your home to deter pests", 0]
const trivQ8 = ["How can crop rotation improve soil fertility?", "Rotating plants at different angles everyday loosens the soil for nutrients", "Different plants draw from, and give back, different nutrients to the soil", "Crop rotation uses more water which can take nutrients from nearby bodies of water", 1]
const trivQ9 = ["Sustainable farming methods are also referred to as ________.", "Agroecology", "Agriplantation", "Aquaculture", 0]
const trivQ10 = ["What is “agroecology”?", "Farming techniques that balance the carbon output with carbon input", "Farming techniques that minimize the environmental impact of farming", "Farming techniques that maximize the economic output of farming", 1]
const trivQ11 = ["What does “agtech” refer to?", "Technology to study a plants biology and its impact on the environment", "Sustainable agriculture that increases the industry’s impact on the society through the environment", "Agricultural practices that are more efficient, safe, and less environmentally damaging than current agricultural methods", 2]
const trivQ12 = ["What pesticide is most toxic to wildlife?", "Chlorpyrifos", "Malathion", "Glyphosate", 1]
const trivQ13 = ["What does an economically and socially sustainable agriculture system not support?", "Creating access to healthy food for all", "Promoting racial inequity and injustice", "Supporting the next generation of farmers", 1]
const trivQ14 = ["Carbofuran, one of history’s deadliest pesticides, only needs what quantity to kill a 400-pound bear?", "⅛ tsp", "¼ tsp", "½ tsp", 1]
const trivQs = [trivQ1, trivQ2, trivQ3, trivQ4, trivQ5, trivQ6, trivQ7, trivQ8, trivQ9, trivQ10, trivQ11, trivQ12, trivQ13, trivQ14]

document.getElementById("mainTriv").disabled = true; 
document.getElementById("mainMarket").disabled = true; 
document.getElementById("mainEndDay").disabled = true;

if (first==true && localStorage.getItem("begin") == null) {
  document.getElementById("instrQ").style.display = "none"; 
  document.getElementById("speechDiv").style.display = "block";
  document.getElementById("mainTriv").disabled = true; 
  document.getElementById("mainMarket").disabled = true; 
  document.getElementById("mainEndDay").disabled = true;
  localStorage.setItem("begin", "it has begun!");
  document.getElementById("speechBub").src = "assets/speechBubbles/1.png";  
  localStorage.setItem("instructions", "1");
  first = false;
}

if (first==true) {
  document.getElementById("endDay").style.display = "none"; 
  document.getElementById("mainGame").style.display = "block"; 
  document.getElementById("instrQ").style.display = "block"; 
  document.getElementById("marketPlace").style.display = "none"; 
  document.getElementById("selectTools").style.display = "none"; 
  document.getElementById("triviaPlace").style.display = "none"; 
  document.getElementById("currCoins").style.display = "none"; 
  document.getElementById("collectMoney").style.display = "none";
  document.getElementById("aboutPg").style.display = "none";
  document.getElementById("end").style.display = "none";
  document.getElementById("speechDiv").style.display = "none";
  
  let instrDiv = document.getElementById("speechDiv");
  let button = document.createElement('button');
  let text = document.createTextNode("");
}

function redoInstr() {
  document.getElementById("instrQ").style.display = "none"; 
  document.getElementById("speechDiv").style.display = "block";
  document.getElementById("mainTriv").disabled = true; 
  document.getElementById("mainMarket").disabled = true; 
  document.getElementById("mainEndDay").disabled = true;
  document.getElementById("speechBub").src = "assets/speechBubbles/1.png";  
  localStorage.setItem("instructions", "1");
  first = false;
}

function mainGame() {
  document.getElementById("currCoins").innerHTML = currCoins.toString();
  document.getElementById("currCoins").style.display = "block";
  document.getElementById("endDay").style.display = "none"; 
  document.getElementById("cropIcons").style.display = "block"; 
  document.getElementById("mainGame").style.display = "block"; 
  document.getElementById("instrQ").style.display = "none"; 
  document.getElementById("marketPlace").style.display = "none"; 
  document.getElementById("selectTools").style.display = "none"; 
  document.getElementById("triviaPlace").style.display = "none"; 
  document.getElementById("icons").style.display = "block";  
  document.getElementById("collectMoney").style.display = "none";
  document.getElementById("aboutPg").style.display = "none";
  document.getElementById("end").style.display = "none";
  document.getElementById("speechDiv").style.display = "none";
  document.getElementById("mainInstr").disabled = false; 
  document.getElementById("mainTriv").disabled = false; 
  document.getElementById("mainMarket").disabled = false; 
  document.getElementById("mainEndDay").disabled = false;

  if (localStorage.getItem("instructions") == "2") {  
    document.getElementById("currCoins").style.display = "block";
    document.getElementById("speechDiv").style.display = "block";
    document.getElementById("mainTriv").disabled = false; 
    document.getElementById("mainMarket").disabled = true; 
    document.getElementById("mainEndDay").disabled = true;
    document.getElementById("mainInstr").disabled = true;   
    document.getElementById("speechBub").src = "assets/speechBubbles/3.png"; 
    localStorage.setItem("instructions", "3"); 
  }
  else if (localStorage.getItem("instructions") == "4.1") { 
    document.getElementById("currCoins").innerHTML = currCoins.toString(); 
    document.getElementById("speechDiv").style.display = "block";
    document.getElementById("mainTriv").disabled = true; 
    document.getElementById("mainMarket").disabled = false; 
    document.getElementById("mainEndDay").disabled = true;
    document.getElementById("mainInstr").disabled = true;   
    document.getElementById("speechBub").src = "assets/speechBubbles/5.png"; 
    localStorage.setItem("instructions", "5"); 
  }
  else if (localStorage.getItem("instructions") == "13") {    
    document.getElementById("speechDiv").style.display = "block"; 
    document.getElementById("mainTriv").disabled = true; 
    document.getElementById("mainMarket").disabled = true; 
    document.getElementById("mainEndDay").disabled = true;
    document.getElementById("mainInstr").disabled = true;   
    document.getElementById("speechBub").src = "assets/speechBubbles/14.png"; 
    setTimeout(() => {
    document.getElementById("speechBub").src = "assets/speechBubbles/15.png"; 
    localStorage.setItem("instructions", "15"); 
    document.getElementById("mainEndDay").disabled = false;
    }, 4000);
  }  
  
  if (hasDayReset) {
    var tempEarn = 0;
    for (var i=0; i<7; i++) {
      var cropId = "crop" + i.toString();
      var coinId = "collectMoney" + i.toString();
      var coinImgId = "collectMoney" + i.toString() + "Img";
      if (plantsPlanted[i] != 0 && plantsPlanted[i] != -1) {
        var cropProfit;
          
        if (plantsPlanted[i] == 'lettImg.png') {
          cropProfit = 22;
          tempEarn += (22*coinsMultis[i]);
        } 
        else if (plantsPlanted[i] == "aspImg.png") {
          cropProfit = 35;
          tempEarn += (35*coinsMultis[i]);
        } 
        else if (plantsPlanted[i] == "cornImg.png") {
          cropProfit = 66;
          tempEarn += (66*coinsMultis[i]);
        } 
        else if (plantsPlanted[i] == "mushImg.png") {
          cropProfit = 118;
          tempEarn += (118*coinsMultis[i]);
        } 
        else if (plantsPlanted[i] == "strawImg.png") {
          cropProfit = 185;
          tempEarn += (185*coinsMultis[i]);
        }
        document.getElementById(cropId).src = "assets/crops/emptyCrop.png"; 
        document.getElementById(coinImgId).src = "assets/buttons/coin.png"; 
        document.getElementById(coinId).innerHTML = " + " + coinsMultis[i] + "("+ cropProfit.toString() + ")";  
      }
      else if (plantsPlanted[i] == -1) {
        document.getElementById(cropId).src = "assets/crops/emptyCrop.png"; 
        document.getElementById(coinImgId).src = "assets/buttons/skull.png"; 
        document.getElementById(coinId).innerHTML = "dead";          
      }
      else {
        document.getElementById(coinImgId).src = "assets/buttons/emptyCoin.png"; 
        document.getElementById(coinId).innerHTML = "";          
      }
    } 

    plantsPlanted = [0,0,0,0,0,0,0];
    if (windPow == true) {
      coinsMultis = [1.5,1.5,1.5,1.5,1.5,1.5,1.5];
    } else {
      coinsMultis = [1,1,1,1,1,1,1];
    }
    dailyEarn += tempEarn;
    currCoins += tempEarn;
    document.getElementById("collectMoney").classList.add("fade-in-fade-out");
    document.getElementById("collectMoneyT").classList.add("fade-in-fade-out");
    document.getElementById("collectMoney").style.display = "block"; 
    document.getElementById("collectMoneyT").style.display = "block";
    
    setTimeout(() => {
    document.getElementById("collectMoney").style.display = "none"; 
    document.getElementById("collectMoneyT").style.display = "none";     
    document.getElementById("collectMoney").classList.remove("fade-in-fade-out");
    document.getElementById("collectMoneyT").classList.remove("fade-in-fade-out");   
    }, 4000);  
  document.getElementById("currCoins").innerHTML = currCoins.toString();
  hasDayReset = false;
  }    

  if (answered) {
    document.getElementById("mainTrivImg").src = "assets/buttons/disabledTriv.png";
    document.getElementById("mainTriv").disabled = true;
  }
  if (selection) {
    var alrUsed;
    tempCoins = currCoins;
    tempDailySpend = dailySpend;
    
    document.getElementById("selectTools").style.display = "block"; 
    document.getElementById("icons").style.display = "none"; 
    document.getElementById("cropIcons").style.display = "block"; 

    if (toolSelectionPrice == 54) {
      alrUsed = 'assets/toolsSelection/boughtPest.png';
      pfArray = pestUsed;
    } else if (toolSelectionPrice = 97) {
      alrUsed = 'assets/toolsSelection/boughtFert.png';
      pfArray = fertUsed;
    }
    
    for (var i=0; i<7; i++) {
      var elementId = "select" + i.toString() + "Img";
      var elementButtId = "select" + i.toString();
      if (plantsPlanted[i] != 0) {
        if (pfArray[i] == 1) {
          document.getElementById(elementId).src=alrUsed; 
          document.getElementById(elementId).style.pointerEvents = "auto";
        }
        else {
          document.getElementById(elementId).src="assets/toolsSelection/emptySelection.png";
          document.getElementById(elementId).style.pointerEvents = "auto";
          document.getElementById(elementButtId).className='mainButtons';
        }
      }
      else {
        document.getElementById(elementId).src="assets/toolsSelection/transparentSelection.png";
        document.getElementById(elementId).style.pointerEvents = "none";
      }
    }   
  } 
}

function selecting(selectId) {
  var pos;
  if (selectId == 'select0') {
    pos = 0;
  }
  else if (selectId == 'select1') {
    pos = 1;
  }
  else if (selectId == 'select2') {
    pos = 2;
  }
  else if (selectId == 'select3') {
    pos = 3;
  }
  else if (selectId == 'select4') {
    pos = 4;
  }
  else if (selectId == 'select5') {
    pos = 5;
  }
  else if (selectId == 'select6') {
    pos = 6;
  }
  
  if (selected[pos]==0 && pfArray[pos]!=1) {
    if (tempCoins<toolSelectionPrice) {
      document.getElementById(selectId+'Img').src='assets/toolsSelection/noCoinSelection.png';
      document.getElementById(selectId).className='errorMarketButtons';
      setTimeout(() => {
        document.getElementById(selectId+'Img').src='assets/toolsSelection/emptySelection.png';
        document.getElementById(selectId).className='mainButtons';
      }, 2000);
    }
    else {
      document.getElementById(selectId+'Img').src=toolSelectionImg;
      document.getElementById(selectId).className='errorMarketButtons';
      selected[pos] = 1;
      tempCoins -= toolSelectionPrice;
      tempDailySpend += toolSelectionPrice;
    }
  }
  else if (selected[pos]==1 && pfArray[pos]!=1) {
    document.getElementById(selectId+'Img').src='assets/toolsSelection/emptySelection.png';
    document.getElementById(selectId).className='mainButtons';    
    selected[pos] = 0;
    tempCoins += toolSelectionPrice;
    tempDailySpend -= toolSelectionPrice;
  }
}

function confirmSelect() {
  if (tempCoins==currCoins) {
    document.getElementById("selectCheckImg").src='assets/buttons/vButtNoSelect.png';
    document.getElementById("selectConfirm").className='errorMarketButtons';
    setTimeout(() => {
      document.getElementById("selectCheckImg").src='assets/buttons/vButt.png';
      document.getElementById("selectConfirm").className='mainButtons';
    }, 2000);
  }
  else {
    for (var i=0; i<7; i++) {
      if(selected[i]==1) {
        if (toolSelectionPrice == 54) {
          pestUsed[i] = 1;
        } else if (toolSelectionPrice = 97) {
          fertUsed[i] = 1;
        }
      }
      selected[i] = 0;
    }
    currCoins = tempCoins;
    dailySpend = tempDailySpend;
    document.getElementById("currCoins").innerHTML = currCoins.toString();
    selection = false;
    marketTools();
  }  
}

function cancelSelect() {
  for (var i=0; i<7; i++) {
    selected[i] = 0;
  }  
  selection = false;
  marketTools();
}

function about() {
  document.getElementById("aboutPg").style.display = "block";
  document.getElementById("mainGame").style.display = "none";
  document.getElementById("currCoins").style.display = "none";

  if (localStorage.getItem("instructions") == "1") {  
    document.getElementById("speechBub").src = "assets/speechBubbles/2.png"; 
    localStorage.setItem("instructions", "2");
  }
}

function trivia() {
  document.getElementById("triviaPlace").style.display = "block";
  document.getElementById("mainGame").style.display = "none";

  if (localStorage.getItem("instructions") == "3") {  
    document.getElementById("speechBub").src = "assets/speechBubbles/4.png"; 
    localStorage.setItem("instructions", "4");
  }

  var qIndex0 = trivQs[day-1][0];
  var qIndex1 = trivQs[day-1][1];
  var qIndex2 = trivQs[day-1][2];
  var qIndex3 = trivQs[day-1][3];

  document.getElementById("triviaQuestion").innerHTML = qIndex0;
  document.getElementById("triviaAns0").innerHTML = qIndex1;
  document.getElementById("triviaAns1").innerHTML = qIndex2;
  document.getElementById("triviaAns2").innerHTML = qIndex3;

  localStorage.setItem("chosenAns", "");
}

function checkAns(trivCheckId) {
  if (trivCheckId == "triviaAns0") {
    document.getElementById(trivCheckId).style.backgroundColor = "#EDBF9B";
    document.getElementById("triviaAns1").style.backgroundColor = "#FEFEE3";
    document.getElementById("triviaAns2").style.backgroundColor = "#FEFEE3";
  } else if (trivCheckId == "triviaAns1") {
    document.getElementById(trivCheckId).style.backgroundColor = "#EDBF9B";
    document.getElementById("triviaAns0").style.backgroundColor = "#FEFEE3";
    document.getElementById("triviaAns2").style.backgroundColor = "#FEFEE3";
  } else if (trivCheckId == "triviaAns2") {
    document.getElementById(trivCheckId).style.backgroundColor = "#EDBF9B";
    document.getElementById("triviaAns1").style.backgroundColor = "#FEFEE3";
    document.getElementById("triviaAns0").style.backgroundColor = "#FEFEE3";
  }
  localStorage.setItem("chosenAns", trivCheckId);
  document.getElementById("confirmAns").disabled = false;
}

function confirmAns() {
  if (localStorage.getItem("instructions") == "4") {  
    document.getElementById("speechDiv").style.display = "none";
    localStorage.setItem("instructions", "4.1");
  }
  document.getElementById("confirmAns").style.display = "none";
  var qIndex4 = trivQs[day-1][4];
  if (localStorage.chosenAns == "triviaAns0") {
    if (qIndex4 == 0) {
      correct = true;
    } 
    else {
      document.getElementById("triviaAns0").style.backgroundColor = "#FD6262";
      document.getElementById("triviaAns"+qIndex4).style.backgroundColor = "#79C85D";
    }
  } 
  else if (localStorage.chosenAns == "triviaAns1") {
    if (qIndex4 == 1) {
      correct = true;
    } 
    else {
      document.getElementById("triviaAns1").style.backgroundColor = "#FD6262";
      document.getElementById("triviaAns"+qIndex4).style.backgroundColor = "#79C85D";
    }
  } 
  else if (localStorage.chosenAns == "triviaAns2") {
    if (qIndex4 == 2) {
      correct = true;
    } 
    else {
      document.getElementById("triviaAns2").style.backgroundColor = "#FD6262";
      document.getElementById("triviaAns"+qIndex4).style.backgroundColor = "#79C85D";
    }
  }
  if (correct == true) {
    document.getElementById("triviaAns"+qIndex4).style.backgroundColor = "#79C85D";
    dailyEarn += 50; 
    currCoins += 50;
  }
  document.getElementById("triviaX").style.display = "block";
  answered = true;
  document.getElementById("triviaAns0").disabled = true;
  document.getElementById("triviaAns1").disabled = true;
  document.getElementById("triviaAns2").disabled = true;
}

function market() {
  document.getElementById("marketTools").style.display = "none";  
  document.getElementById("marketPlants").style.display = "none";  
  document.getElementById("marketUpgrades").style.display = "none"; 
  document.getElementById("marketMarket").style.display = "block"; 
  document.getElementById("marketPlants2").style.display = "none"; 
  document.getElementById("mainGame").style.display = "block"; 
  document.getElementById("marketPlace").style.display = "block"; 
  document.getElementById("marketMarketPlants").disabled = false; 
  document.getElementById("marketMarketTools").disabled = false; 
  document.getElementById("marketMarketUpgrades").disabled = false;
  document.getElementById("marketMarketX").disabled = false;
  
  if (localStorage.getItem("instructions") == "5") {  
    document.getElementById("marketMarketTools").disabled = true; 
    document.getElementById("marketMarketUpgrades").disabled = true;
    document.getElementById("marketMarketX").disabled = true;   
    document.getElementById("speechBub").src = "assets/speechBubbles/6.png"; 
    localStorage.setItem("instructions", "6"); 
  }  
  else if (localStorage.getItem("instructions") == "11") {   
    document.getElementById("marketMarketPlants").disabled = true; 
    document.getElementById("marketMarketTools").disabled = false; 
    document.getElementById("marketMarketUpgrades").disabled = true;
    document.getElementById("marketMarketX").disabled = true;
    document.getElementById("speechBub").src = "assets/speechBubbles/12.png"; 
    localStorage.setItem("instructions", "12"); 
  }  
  else if (localStorage.getItem("instructions") == "12") {     
    document.getElementById("marketMarketPlants").disabled = true; 
    document.getElementById("marketMarketTools").disabled = true; 
    document.getElementById("marketMarketUpgrades").disabled = false;
    document.getElementById("marketMarketX").disabled = true;
    document.getElementById("speechBub").src = "assets/speechBubbles/13.png"; 
    localStorage.setItem("instructions", "13"); 
  }
  else if (localStorage.getItem("instructions") == "13") {     
    document.getElementById("marketMarketPlants").disabled = true; 
    document.getElementById("marketMarketTools").disabled = true; 
    document.getElementById("marketMarketUpgrades").disabled = true;
    document.getElementById("marketMarketX").disabled = false;
    document.getElementById("speechBub").src = "assets/speechBubbles/2.png"; 
  }
  
  localStorage.setItem("infoLett", "false");
  localStorage.setItem("infoAsp", "false");
  localStorage.setItem("infoCorn", "false");
  localStorage.setItem("infoMush", "false");
  localStorage.setItem("infoStraw", "false");
  localStorage.setItem("infoPest", "false");
  localStorage.setItem("infoFert", "false");
  localStorage.setItem("infoWindbr", "false");
  localStorage.setItem("infoWindPow", "false");
}

function marketPlants() {  
  document.getElementById("marketTools").style.display = "none";  
  document.getElementById("marketPlants").style.display = "block";  
  document.getElementById("marketUpgrades").style.display = "none"; 
  document.getElementById("marketMarket").style.display = "none";  
  document.getElementById("marketPlants2").style.display = "none";   
  document.getElementById("marketPlantsLettInfo").disabled = false;  
  document.getElementById("marketPlantsAspInfo").disabled = false; 
  document.getElementById("marketPlantsCornInfo").disabled = false;
  document.getElementById("marketPlantsNext").disabled = false;   
  document.getElementById("marketBackButton").disabled = false; 
  document.getElementById("marketPlantsLettPrice").disabled = false;
  document.getElementById("marketPlantsAspPrice").disabled = false;   
  document.getElementById("marketPlantsCornPrice").disabled = false; 
  
  if (localStorage.getItem("instructions") == "6") {  
    document.getElementById("marketPlantsAspInfo").disabled = true; 
    document.getElementById("marketPlantsCornInfo").disabled = true;
    document.getElementById("marketPlantsNext").disabled = true;   
    document.getElementById("marketBackButton").disabled = true; 
    document.getElementById("marketPlantsLettPrice").disabled = true;
    document.getElementById("marketPlantsAspPrice").disabled = true;   
    document.getElementById("marketPlantsCornPrice").disabled = true; 
    document.getElementById("speechBub").src = "assets/speechBubbles/7.png"; 
    localStorage.setItem("instructions", "7"); 
  } 
}

function marketPlantsLettInfo() {  
  if (localStorage.getItem("instructions") == "7") {  
    document.getElementById("speechBub").src = "assets/speechBubbles/8.png"; 
    localStorage.setItem("instructions", "8"); 
  }  
  else if (localStorage.getItem("instructions") == "8") {   
    document.getElementById("marketPlantsLettInfo").disabled = true; 
    document.getElementById("marketPlantsAspInfo").disabled = true; 
    document.getElementById("marketPlantsCornInfo").disabled = true;
    document.getElementById("marketPlantsNext").disabled = true;   
    document.getElementById("marketBackButton").disabled = true; 
    document.getElementById("marketPlantsLettPrice").disabled = false;
    document.getElementById("marketPlantsAspPrice").disabled = true;   
    document.getElementById("marketPlantsCornPrice").disabled = true; 
    document.getElementById("speechBub").src = "assets/speechBubbles/9.png"; 
    localStorage.setItem("instructions", "9"); 
  } 
  
  if (localStorage.getItem("infoLett") == "false") {
    document.getElementById('marketPlantsLett').src='assets/cards/lettInfoCrd.png';   
    document.getElementById('marketPlantsLettImg').src='assets/buttons/backButt2.png';
    localStorage.setItem("infoLett", "true");
    document.getElementById("marketPlantsLettPrice").style.display = "none";
  }
  else {
    document.getElementById('marketPlantsLett').src='assets/cards/lettCrd.png';
    document.getElementById('marketPlantsLettImg').src='assets/buttons/iButt.png';
    localStorage.setItem("infoLett", "false");
    document.getElementById("marketPlantsLettPrice").style.display = "block";
  }
}

function marketPlantsAspInfo() {
  if (localStorage.getItem("infoAsp") == "false") {
    document.getElementById('marketPlantsAsp').src='assets/cards/aspInfoCrd.png';     
    document.getElementById('marketPlantsAspImg').src='assets/buttons/backButt2.png';
    localStorage.setItem("infoAsp", "true");
    document.getElementById("marketPlantsAspPrice").style.display = "none";
  }
  else {
    document.getElementById('marketPlantsAsp').src='assets/cards/aspCrd.png';
    document.getElementById('marketPlantsAspImg').src='assets/buttons/iButt.png';
    localStorage.setItem("infoAsp", "false");
    document.getElementById("marketPlantsAspPrice").style.display = "block";
  }
}

function marketPlantsCornInfo() {
  if (localStorage.getItem("infoCorn") == "false") {
    document.getElementById('marketPlantsCorn').src='assets/cards/cornInfoCrd.png';       
    document.getElementById('marketPlantsCornImg').src='assets/buttons/backButt2.png';
    localStorage.setItem("infoCorn", "true");
    document.getElementById("marketPlantsCornPrice").style.display = "none";
  }
  else {
    document.getElementById('marketPlantsCorn').src='assets/cards/cornCrd.png';
    document.getElementById('marketPlantsCornImg').src='assets/buttons/iButt.png';
    localStorage.setItem("infoCorn", "false");
    document.getElementById("marketPlantsCornPrice").style.display = "block";
  }
}

function marketPlantsMushInfo() {
  if (localStorage.getItem("infoMush") == "false") {
    document.getElementById('marketPlantsMush').src='assets/cards/mushInfoCrd.png'; 
    document.getElementById('marketPlantsMushImg').src='assets/buttons/backButt2.png';
    localStorage.setItem("infoMush", "true");
    document.getElementById("marketPlantsMushPrice").style.display = "none";
  }
  else {
    document.getElementById('marketPlantsMush').src='assets/cards/mushCrd.png';
    document.getElementById('marketPlantsMushImg').src='assets/buttons/iButt.png';
    localStorage.setItem("infoMush", "false");
    document.getElementById("marketPlantsMushPrice").style.display = "block";
  }
}

function marketPlantsStrawInfo() {
  if (localStorage.getItem("infoStraw") == "false") {
    document.getElementById('marketPlantsStraw').src='assets/cards/strawInfoCrd.png'; 
    document.getElementById('marketPlantsStrawImg').src='assets/buttons/backButt2.png';
    localStorage.setItem("infoStraw", "true");
    document.getElementById("marketPlantsStrawPrice").style.display = "none";
  }
  else {
    document.getElementById('marketPlantsStraw').src='assets/cards/strawCrd.png';
    document.getElementById('marketPlantsStrawImg').src='assets/buttons/iButt.png';
    localStorage.setItem("infoStraw", "false");
    document.getElementById("marketPlantsStrawPrice").style.display = "block";
  }
}

function marketPlants2() {
  document.getElementById("marketTools").style.display = "none";  
  document.getElementById("marketPlants").style.display = "none";   
  document.getElementById("marketPlants2").style.display = "block";  
  document.getElementById("marketUpgrades").style.display = "none"; 
  document.getElementById("marketMarket").style.display = "none"; 
  document.getElementById("marketPlantsMushInfo").disabled = false; 
  document.getElementById("marketPlantsStrawInfo").disabled = false; 
  document.getElementById("marketPlantsBack").disabled = false;
  document.getElementById("marketBackButton").disabled = false;   
  document.getElementById("marketPlantsMushPrice").disabled = false; 
  document.getElementById("marketPlantsStrawPrice").disabled = false;
  
  if (localStorage.getItem("instructions") == "10") {   
    document.getElementById("marketPlantsMushInfo").disabled = true; 
    document.getElementById("marketPlantsStrawInfo").disabled = true; 
    document.getElementById("marketPlantsBack").disabled = true; 
    document.getElementById("marketPlantsMushPrice").disabled = true; 
    document.getElementById("marketPlantsStrawPrice").disabled = true;
    document.getElementById("speechBub").src = "assets/speechBubbles/11.png"; 
    localStorage.setItem("instructions", "11"); 
  }  
  
}

function plantPurchase(plantId) {
  var price;
  var marketElementId;
  var marketPriceElementId;
  var cropImg;
  var priceImg;
  
  if (localStorage.getItem("instructions") == "9") {   
    document.getElementById("marketPlantsLettInfo").disabled = true; 
    document.getElementById("marketPlantsAspInfo").disabled = true; 
    document.getElementById("marketPlantsCornInfo").disabled = true;
    document.getElementById("marketPlantsNext").disabled = false;   
    document.getElementById("marketBackButton").disabled = true; 
    document.getElementById("marketPlantsLettPrice").disabled = true;
    document.getElementById("marketPlantsAspPrice").disabled = true;   
    document.getElementById("marketPlantsCornPrice").disabled = true; 
    document.getElementById("speechBub").src = "assets/speechBubbles/10.png"; 
    localStorage.setItem("instructions", "10"); 
  } 
  
  if (plantId == "marketPlantsLettPrice") {
    price = 14;
    cropImg = "lettImg.png";
    marketElementId = "marketPlantsLettPrice";
    marketPriceElementId = "marketPlantsLettPriceImg";
    priceImg = 'assets/prices/14Butt.png';
  }

  else if (plantId == "marketPlantsAspPrice") {
    price = 23;
    cropImg = "aspImg.png";
    marketElementId = "marketPlantsAspPrice";
    marketPriceElementId = "marketPlantsAspPriceImg";
    priceImg = 'assets/prices/23Butt.png';
  }

  else if (plantId == "marketPlantsCornPrice") {
    price = 42;
    cropImg = "cornImg.png";
    marketElementId = "marketPlantsCornPrice";
    marketPriceElementId = "marketPlantsCornPriceImg";
    priceImg = 'assets/prices/42Butt.png';
  }

  else if (plantId == "marketPlantsMushPrice") {
    price = 76;
    cropImg = "mushImg.png";
    marketElementId = "marketPlantsMushPrice";
    marketPriceElementId = "marketPlantsMushPriceImg";
    priceImg = 'assets/prices/76Butt.png';
  }

  else if (plantId == "marketPlantsStrawPrice") {
    price = 107;
    cropImg = "strawImg.png";
    marketElementId = "marketPlantsStrawPrice";
    marketPriceElementId = "marketPlantsStrawPriceImg";
    priceImg = 'assets/prices/107Butt.png';
  }
  
  for (var i=0; i<7; i++) {
    if (plantsPlanted[i] == 0) {
      if (currCoins >= price) {
        plantsPlanted[i] = cropImg;
        var cropElementId = "crop" + i.toString();
        document.getElementById(cropElementId).src='assets/crops/' + plantsPlanted[i]; 
        currCoins -= price;
        dailySpend += price;
        break;
      }
      else {
        document.getElementById(marketPriceElementId).src='assets/prices/noCoins.png';
        document.getElementById(marketElementId).className='errorMarketButtons';
        setTimeout(() => {
          document.getElementById(marketPriceElementId).src=priceImg;
          document.getElementById(marketElementId).className='mainButtons';
        }, 2000);
      }
    }
    else if (i == 6) {
      document.getElementById(marketPriceElementId).src='assets/prices/noSpace.png';
      document.getElementById(marketElementId).className='errorMarketButtons';
      setTimeout(() => {
        document.getElementById(marketPriceElementId).src=priceImg;
        document.getElementById(marketElementId).className='mainButtons';
      }, 2000);
    }
  }
  document.getElementById("currCoins").innerHTML = currCoins.toString();
}

function marketTools() {
  document.getElementById("marketPlace").style.display = "block";   
  document.getElementById("marketTools").style.display = "block";  
  document.getElementById("marketPlants").style.display = "none";   
  document.getElementById("marketPlants2").style.display = "none";  
  document.getElementById("marketUpgrades").style.display = "none"; 
  document.getElementById("marketMarket").style.display = "none";
  document.getElementById("mainGame").style.display = "none"; 
    document.getElementById("marketToolsPestInfo").disabled = false; 
    document.getElementById("marketToolsFertInfo").disabled = false; 
    document.getElementById("marketBackButton").disabled = false; 
    document.getElementById("marketToolsPestPrice").disabled = false; 
    document.getElementById("marketToolsFertPrice").disabled = false; 
  
  if (localStorage.getItem("instructions") == "12") {     
    document.getElementById("marketToolsPestInfo").disabled = true; 
    document.getElementById("marketToolsFertInfo").disabled = true; 
    document.getElementById("marketToolsPestPrice").disabled = true; 
    document.getElementById("marketToolsFertPrice").disabled = true; 
    document.getElementById("speechBub").src = "assets/speechBubbles/11.png"; 
  }  
}

function toolPurchase(toolsId) {
  var price;
  var marketElementId;
  var marketPriceElementId;
  var priceImg;
  
  if (toolsId == "marketToolsPestPrice") {
    price = 54;
    marketElementId = "marketToolsPestPrice";
    marketPriceElementId = "marketToolsPestPriceImg";
    priceImg = "assets/prices/54Butt.png";
  }
  else if (toolsId == "marketToolsFertPrice") {
    price = 97;
    marketElementId = "marketToolsFertPrice";
    marketPriceElementId = "marketToolsFertPriceImg";
    priceImg = "assets/prices/97Butt.png";
  }

  if (currCoins >= price) {
    var plant = false;
    for (var i=0; i<7; i++) {
      if (plantsPlanted[i] != 0) {
        plant = true;
        break;
      }
    }

    if (plant) { 
      if (toolsId == "marketToolsPestPrice") {
        toolSelectionImg = "assets/toolsSelection/pestSelection.png";
        toolSelectionPrice = 54;
      } else if (toolsId == "marketToolsFertPrice") {
        toolSelectionImg = "assets/toolsSelection/fertSelection.png";
        toolSelectionPrice = 97;
      }
      selection = true;
      mainGame();   
    }
    else {
      document.getElementById(marketPriceElementId).src='assets/prices/noCrops.png';
      document.getElementById(marketElementId).className='errorMarketButtons';
      setTimeout(() => {
        document.getElementById(marketPriceElementId).src=priceImg;
        document.getElementById(marketElementId).className='mainButtons';
      }, 2000);  
    }
  } 
  else {
    document.getElementById(marketPriceElementId).src='assets/prices/noCoins.png';
    document.getElementById(marketElementId).className='errorMarketButtons';
    setTimeout(() => {
      document.getElementById(marketPriceElementId).src=priceImg;
      document.getElementById(marketElementId).className='mainButtons';
    }, 2000);
  }
}

function marketToolsPestInfo() {
  if (localStorage.getItem("infoPest") == "false") {
    document.getElementById('marketToolsPest').src='assets/cards/pestInfoCrd.png'; 
    document.getElementById('marketToolsPestImg').src='assets/buttons/backButt2.png';
    localStorage.setItem("infoPest", "true");
    document.getElementById("marketToolsPestPrice").style.display = "none";
  }
  else {
    document.getElementById('marketToolsPest').src='assets/cards/pestCrd.png';
    document.getElementById('marketToolsPestImg').src='assets/buttons/iButt.png';
    localStorage.setItem("infoPest", "false");
    document.getElementById("marketToolsPestPrice").style.display = "block";
  }
}

function marketToolsFertInfo() {
  if (localStorage.getItem("infoFert") == "false") {
    document.getElementById('marketToolsFert').src='assets/cards/fertInfoCrd.png'; 
    document.getElementById('marketToolsFertImg').src='assets/buttons/backButt2.png';
    localStorage.setItem("infoFert", "true");
    document.getElementById("marketToolsFertPrice").style.display = "none";
  }
  else {
    document.getElementById('marketToolsFert').src='assets/cards/fertCrd.png';
    document.getElementById('marketToolsFertImg').src='assets/buttons/iButt.png';
    localStorage.setItem("infoFert", "false");
    document.getElementById("marketToolsFertPrice").style.display = "block";
  }
}

function marketUpgrades() {
  document.getElementById("marketTools").style.display = "none"; 
  document.getElementById("marketPlants2").style.display = "none";   
  document.getElementById("marketPlants").style.display = "none";  
  document.getElementById("marketUpgrades").style.display = "block"; 
  document.getElementById("marketMarket").style.display = "none";  
  document.getElementById("marketUpgradesWindbrInfo").disabled = false; 
  document.getElementById("marketUpgradesWindPowInfo").disabled = false; 
  document.getElementById("marketBackButton").disabled = false; 
  document.getElementById("marketUpgradesWindbrPrice").disabled = false; 
  document.getElementById("marketUpgradesWindPowPrice").disabled = false; 
  
  if (localStorage.getItem("instructions") == "13") {     
    document.getElementById("marketUpgradesWindbrInfo").disabled = true; 
    document.getElementById("marketUpgradesWindPowInfo").disabled = true;  
    document.getElementById("marketUpgradesWindbrPrice").disabled = true; 
    document.getElementById("marketUpgradesWindPowPrice").disabled = true; 
    document.getElementById("speechBub").src = "assets/speechBubbles/11.png"; 
  }
}

function upgradePurchase(upgradeId) {
  var price;
  var marketElementId;
  var marketPriceElementId;
  var priceImg;

  if (upgradeId == "marketUpgradesWindbrPrice") {
    price = 156;
    marketElementId = "marketUpgradesWindbrPrice";
    marketPriceElementId = "marketUpgradesWindbrPriceImg";
    priceImg = "assets/prices/156Butt.png";
  }
  else if (upgradeId == "marketUpgradesWindPowPrice") {
    price = 201;
    marketElementId = "marketUpgradesWindPowPrice";
    marketPriceElementId = "marketUpgradesWindPowPriceImg";
    priceImg = "assets/prices/201Butt.png";
  }

  if (currCoins >= price) {
    currCoins -= price;
    dailySpend += price;
    if (upgradeId == "marketUpgradesWindbrPrice") {
      deathProb = 0;
      //PLANTS WON'T DIE TODAY
      document.getElementById("marketUpgradesWindbrPriceImg").src = "assets/prices/alrEquip.png";
      document.getElementById("marketUpgradesWindbrPrice").disabled = true;
      document.getElementById("marketUpgradesWindbrPrice").className= "errorMarketButtons";
    } else if (upgradeId == "marketUpgradesWindPowPrice") {
      // coinsMulti = 1.5;
      for (var i=0; i<7; i++) {
        coinsMultis[i] *= 1.5;
        windPow = true;
      }
      //RECEIVE 50% MORE PROFIT FROM ALL CROPS FOREVER
      document.getElementById("marketUpgradesWindPowPriceImg").src = "assets/prices/alrEquip.png";
      document.getElementById("marketUpgradesWindPowPrice").className= "errorMarketButtons";
      document.getElementById("marketUpgradesWindPowPrice").disabled = true;
    }
  } else {
      document.getElementById(marketPriceElementId).src='assets/prices/noCoins.png';
      document.getElementById(marketElementId).className='errorMarketButtons';
      setTimeout(() => {
        document.getElementById(marketPriceElementId).src=priceImg;
        document.getElementById(marketElementId).className='mainButtons';
      }, 2000);
  }
  document.getElementById("currCoins").innerHTML = currCoins.toString();
}

function marketUpgradesWindbrInfo() {
  if (localStorage.getItem("infoWindbr") == "false") {
    document.getElementById('marketUpgradesWindbr').src='assets/cards/windbrInfoCrd.png'; 
    document.getElementById('marketUpgradesWindbrImg').src='assets/buttons/backButt2.png';
    localStorage.setItem("infoWindbr", "true");
    document.getElementById("marketUpgradesWindbrPrice").style.display = "none";
  }
  else {
    document.getElementById('marketUpgradesWindbr').src='assets/cards/windbrCrd.png';
    document.getElementById('marketUpgradesWindbrImg').src='assets/buttons/iButt.png';
    localStorage.setItem("infoWindbr", "false");
    document.getElementById("marketUpgradesWindbrPrice").style.display = "block";
  }
}

function marketUpgradesWindPowInfo() {
  if (localStorage.getItem("infoWindPow") == "false") {
    document.getElementById('marketUpgradesWindPow').src='assets/cards/windPowInfoCrd.png'; 
    document.getElementById('marketUpgradesWindPowImg').src='assets/buttons/backButt2.png';
    localStorage.setItem("infoWindPow", "true");
    document.getElementById("marketUpgradesWindPowPrice").style.display = "none";
  }
  else {
    document.getElementById('marketUpgradesWindPow').src='assets/cards/windPowCrd.png';
    document.getElementById('marketUpgradesWindPowImg').src='assets/buttons/iButt.png';
    localStorage.setItem("infoWindPow", "false");
    document.getElementById("marketUpgradesWindPowPrice").style.display = "block";
  }
}

function endDay() {    
  document.getElementById("mainGame").style.display = "none"; 
  document.getElementById("endDay").style.display = "block";
  
  if (localStorage.getItem("instructions") == "15") {   
    document.getElementById("speechBub").src = "assets/speechBubbles/16.png"; 
    localStorage.setItem("instructions", "0"); 
  }
  
  for (var i=0; i < 7; i++) {
    if (plantsPlanted[i] != 0) {
      var willDie = Math.floor(Math.random() * 3);
      if (willDie == 0) {
        if (deathProb != 0) {
          plantsPlanted[i] = -1;
          numDeadCrops += 1;
        }
      }
      if (pestUsed[i] == 1) {
        var willDie2 = Math.floor(Math.random() * 3);
        if (willDie2 != 0) {
          if (deathProb != 0) {
            plantsPlanted[i] = -1;
            numDeadCrops += 1;
          }
        } else {
          coinsMultis[i] *= 2;
        }
      }
    } 
    if (fertUsed[i] == 1) {
      coinsMultis[i] *= 3;
    }
  }

  document.getElementById("dailySpend").innerHTML = dailySpend;
  document.getElementById("dailyEarn").innerHTML = dailyEarn;
  if (numDeadCrops != 1) {
    document.getElementById("numDeadCrops").innerHTML = numDeadCrops.toString() + " CROPS DIED...";
  } else {
    document.getElementById("numDeadCrops").innerHTML = numDeadCrops.toString() + " CROP DIED...";
  }
  if (daysLeft != 1) {
    document.getElementById("numDaysLeft").innerHTML = daysLeft.toString() + " DAYS LEFT";
  } else {
    document.getElementById("numDaysLeft").innerHTML = daysLeft.toString() + " DAY LEFT";
  }
}

function newDay() {
  reset();
}
  
function endGame() {
  document.getElementById("end").style.display = "block";  
  document.getElementById("marketPlace").style.display = "none"; 
  document.getElementById("currCoins").style.display = "none";
  document.getElementById("dayNum").style.display = "none";
  document.getElementById("mainGame").style.display = "none";
  document.getElementById("scoreBoard").style.display = "none";

  document.getElementById("endCurrent").innerHTML = currCoins;
  
  if (currCoins >= goalCoins) {
    document.getElementById("endBg").src = "assets/winScr.png";
  }
  
}

function scoreboard() {
  document.getElementById("scoreBoard").style.display = "block";
  document.getElementById("currCoins").style.display = "none";
  document.getElementById("end").style.display = "none";
  document.getElementById("dayNum").style.display = "none";
  document.getElementById("mainGame").style.display = "none";
  var skip = false;

  for (var i=1; i<6; i++) {
    var storageAKey = "A" + i.toString();
    var storageBKey = "B" + i.toString();
    
    if (localStorage.getItem(storageAKey) == null && skip==false) {
      localStorage.setItem(storageAKey, currCoins.toString());
      var d = new Date();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      var year = d.getFullYear();
      var hour = d.getHours();
      var mins = d.getMinutes();
      var secs = d.getSeconds(); 
      var date = month + "/" + day + "/" + year + " | " + hour + ":" + mins + ":" + secs;
      localStorage.setItem(storageBKey, date);      
      document.getElementById(storageAKey).innerHTML = localStorage.getItem(storageAKey);
      document.getElementById(storageBKey).innerHTML = localStorage.getItem(storageBKey);
      skip = true;
    }

    else if (localStorage.getItem(storageAKey)<currCoins && skip==false) {
      if (i<5) {    
        for(var j=5; j>i; j--) {
          var k = j-1;
          var tempStorageAKey = "A" + j.toString();
          var tempStorageBKey = "B" + j.toString(); 
          var OrigStorageAKey = "A" + k.toString();
          var OrigStorageBKey = "B" + k.toString(); 
          localStorage.setItem(tempStorageAKey, localStorage.getItem(OrigStorageAKey));
          localStorage.setItem(tempStorageBKey, localStorage.getItem(OrigStorageBKey));
        }
      }
      localStorage.setItem(storageAKey, currCoins.toString());
      var d = new Date();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      var year = d.getFullYear();
      var hour = d.getHours();
      var mins = d.getMinutes();
      var secs = d.getSeconds(); 
      var date = month + "/" + day + "/" + year + " | " + hour + ":" + mins + ":" + secs;
      localStorage.setItem(storageBKey, date);      
      document.getElementById(storageAKey).innerHTML = localStorage.getItem(storageAKey);
      document.getElementById(storageBKey).innerHTML = localStorage.getItem(storageBKey);
      skip = true;
    }
    else if (localStorage.getItem(storageAKey) != null) {
      document.getElementById(storageAKey).innerHTML = localStorage.getItem(storageAKey);
      document.getElementById(storageBKey).innerHTML = localStorage.getItem(storageBKey);
    }
  }  
  localStorage.setItem("infoFert", "false");
}

function playAgain() {
}

function reset() {
  day += 1;
  dailySpend = 0;
  dailyEarn = 0;
  numDeadCrops = 0;
  daysLeft = 14-day;
  selection = false;
  selected = [0,0,0,0,0,0,0];
  pestUsed = [0,0,0,0,0,0,0];
  fertUsed = [0,0,0,0,0,0,0]
  correct = false;
  answered = false;
  deathProb = 0.3;
  toolSelectionImg = "";
  toolSelectionPrice = "";
  tempCoins = "";
  tempDailySpend = "";

  document.getElementById('marketPlantsLett').src='assets/cards/lettCrd.png';
  document.getElementById('marketPlantsLettImg').src='assets/buttons/iButt.png';
  localStorage.setItem("infoLett", "false");
  document.getElementById('marketPlantsAsp').src='assets/cards/aspCrd.png';
  document.getElementById('marketPlantsAspImg').src='assets/buttons/iButt.png';
  localStorage.setItem("infoAsp", "false");
  document.getElementById('marketPlantsCorn').src='assets/cards/cornCrd.png';
  document.getElementById('marketPlantsCornImg').src='assets/buttons/iButt.png';
  localStorage.setItem("infoCorn", "false");
  document.getElementById('marketToolsFert').src='assets/cards/fertCrd.png';
  document.getElementById('marketToolsFertImg').src='assets/buttons/iButt.png';
  localStorage.setItem("infoFert", "false");
  document.getElementById('marketPlantsMush').src='assets/cards/mushCrd.png';
  document.getElementById('marketPlantsMushImg').src='assets/buttons/iButt.png';
  localStorage.setItem("infoMush", "false");
  document.getElementById('marketToolsPest').src='assets/cards/pestCrd.png';
  document.getElementById('marketToolsPestImg').src='assets/buttons/iButt.png';
  localStorage.setItem("infoPest", "false");
  document.getElementById('marketPlantsStraw').src='assets/cards/strawCrd.png';
  document.getElementById('marketPlantsStrawImg').src='assets/buttons/iButt.png';
  localStorage.setItem("infoStraw", "false");
  document.getElementById('marketUpgradesWindbr').src='assets/cards/windbrCrd.png';
  document.getElementById('marketUpgradesWindbrImg').src='assets/buttons/iButt.png';
  localStorage.setItem("infoWindbr", "false");
  document.getElementById('marketUpgradesWindPow').src='assets/cards/windPowCrd.png';
  document.getElementById('marketUpgradesWindPowImg').src='assets/buttons/iButt.png';
  localStorage.setItem("infoWindPow", "false");
  
  document.getElementById("triviaAns0").style.backgroundColor = "#FEFEE3";
  document.getElementById("triviaAns1").style.backgroundColor = "#FEFEE3";
  document.getElementById("triviaAns2").style.backgroundColor = "#FEFEE3";
  document.getElementById("mainTrivImg").src = "assets/buttons/trivButt.png";
  document.getElementById("mainTriv").disabled = false;
  document.getElementById("confirmAns").style.display = "block";
  document.getElementById("confirmAns").disabled = true;
  document.getElementById("triviaX").style.display = "none";
  document.getElementById("triviaAns0").disabled = false;
  document.getElementById("triviaAns1").disabled = false;
  document.getElementById("triviaAns2").disabled = false;

  document.getElementById("marketUpgradesWindbrPriceImg").src = "assets/prices/156Butt.png";
  document.getElementById("marketUpgradesWindbrPrice").disabled = false;
  document.getElementById("marketUpgradesWindbrPrice").className = "mainButtons";
  
  if (day <= 14) {
    document.getElementById("dayNum").innerHTML = "DAY " + day;
    hasDayReset = true;
    mainGame();
  } else {
    endGame();
  }
}