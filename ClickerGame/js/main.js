// MAIN VARS //

// SHOP VARS

var priceT1 = document.getElementById("priceT1");
var priceT2 = document.getElementById("priceT2");
var priceT3 = document.getElementById("priceT3");
var priceT4 = document.getElementById("priceT4");

const t1Shop = document.getElementById("t1-shop");
const t2Shop = document.getElementById("t2-shop");
const t3Shop = document.getElementById("t3-shop");
const t4Shop = document.getElementById("t4-shop");

const moneyTXT = document.getElementById("money");
var clickPowerTXT = document.getElementById("clickPower");
var autoClicks = document.getElementById("autoClicks");
const clickerButton = document.getElementById("clicker");
const alertMessage = document.getElementById("message");

T1Count = document.getElementById("n1");
T2Count = document.getElementById("n2");
T3Count = document.getElementById("n3");

// STATS //

money = 0;
clicks = 0;
multiplyerClick = 1;
multiplyerT1 = 1;
multiplyerT2 = 10;
multiplyerT3 = 100;
numT1 = 0;
numT2 = 0;
numT3 = 0;


// PRICES //


Tier1 = 5;
Tier2 = 50;
Tier3 = 1;

clickerUpgrade = 10;


// Useful Vars //

const alertNothing = "";
var gameTitle = "Clicker Game :: $";

// MAIN CLICK FUNC //


clickerButton.onclick = function() {
    money += multiplyerClick;
    ++clicks;
    moneyTXT.innerHTML = money;
    document.title = gameTitle + money;

    // Click Achievements //

    function rankOneClicker() {
        if(clicks == 10) {
            
        }
    }

    rankOneClicker();
}


// ##### SHOP ##### //


// T1 Upgrade


t1Shop.onclick = function() {
    if (money >= Tier1) {
        money -= Tier1;
        ++numT1;

        Tier1 = Math.floor(Tier1 * 1.5);

        // Updating Stats
        moneyTXT.innerHTML = money;
        priceT1.innerHTML = Tier1;
        document.title = gameTitle + money;
        autoClicks.innerHTML = numT1;
        T1Count.innerHTML = numT1;
        

        // Auto Money Gainer Loop
        var T1Repeat = setInterval(function() { 
        if (numT1 > 0) {
            money++;

            // Updating Stats
            moneyTXT.innerHTML = money;
            document.title = gameTitle + money;
        } else { 
            clearInterval(T1Repeat);
        }}, 1000); // T1 SPEED

    } else {
        setTimeout(function() {
            alertMessage.style.animation = "fadeIn 0.5s ease-in";

            alertMessage.innerHTML = "Not Enough Money!";
            alertMessage.style.color = "#f44242";
            alertMessage.style.textShadow = "0px 0px 5px red";
            alertMessage.style.backgroundColor = "#222";
            alertMessage.style.border = "1px solid #000";

            setTimeout(function() {
                alertMessage.style.animation = "fadeAway 0.5s ease-out";

                setTimeout(function() {
                    alertMessage.innerHTML = alertNothing;

                    alertMessage.style.backgroundColor = "";
                    alertMessage.style.border = "";
                }, 400)
            }, 2000);
        }, 200);       
    }
}


// T2 Upgrade


t2Shop.onclick = function() {
    if (money >= Tier2) {
        money -= Tier2;
        ++numT1;

        Tier2 = Math.floor(Tier2 * 1.5);

        // Updating Stats
        moneyTXT.innerHTML = money;
        priceT2.innerHTML = Tier2;
        document.title = gameTitle + money;
        

        // Auto Money Gainer Loop
        var T2Repeat = setInterval(function() { 
        if (numT2 > 0) {
            money++;

            // Updating Stats
            moneyTXT.innerHTML = money;
            document.title = gameTitle + money;
        } else { 
            clearInterval(T2Repeat);
        }}, 1000); // T2 SPEED

    } else {
        setTimeout(function() {
            alertMessage.style.animation = "fadeIn 0.5s ease-in";

            alertMessage.innerHTML = "Not Enough Money!";
            alertMessage.style.color = "#f44242";
            alertMessage.style.textShadow = "0px 0px 5px red";
            alertMessage.style.backgroundColor = "#222";
            alertMessage.style.border = "1px solid #000";

            setTimeout(function() {
                alertMessage.style.animation = "fadeAway 0.5s ease-out";

                setTimeout(function() {
                    alertMessage.innerHTML = alertNothing;

                    alertMessage.style.backgroundColor = "";
                    alertMessage.style.border = "";
                }, 400)
            }, 2000);
        }, 200);       
    }
}


// T3 Upgrade


t3Shop.onclick = function() {
    if (money >= clickerUpgrade) {
        money -= clickerUpgrade;
        moneyTXT.innerHTML = money;
        clickerUpgrade = Math.floor(clickerUpgrade * 5);
        multiplyer = Math.floor(multiplyer * 2);

        // Updating Stats
        priceT4.innerHTML = clickerUpgrade;
        clickPowerTXT.innerHTML = multiplyerClick;
    } else {
        setTimeout(function() {
            alertMessage.style.animation = "fadeIn 0.5s ease-in";

            alertMessage.innerHTML = "Not Enough Money!";
            alertMessage.style.color = "#f44242";
            alertMessage.style.textShadow = "0px 0px 5px red";
            alertMessage.style.backgroundColor = "#222";
            alertMessage.style.border = "1px solid #000";

            setTimeout(function() {
                alertMessage.style.animation = "fadeAway 0.5s ease-out";

                setTimeout(function() {
                    alertMessage.innerHTML = alertNothing;

                    alertMessage.style.backgroundColor = "";
                    alertMessage.style.border = "";
                }, 400)
            }, 2000);
        }, 200);       
    } 
}


// Click Power Upgrade


t4Shop.onclick = function() {
    if (money >= clickerUpgrade) {
        money -= clickerUpgrade;
        moneyTXT.innerHTML = money;
        clickerUpgrade = Math.floor(clickerUpgrade * 5);
        multiplyerClick = Math.floor(multiplyerClick * 2);

        // Updating Stats
        document.title = gameTitle + money;
        priceT4.innerHTML = clickerUpgrade;
        clickPowerTXT.innerHTML = multiplyerClick;
    } else {
        setTimeout(function() {
            alertMessage.style.animation = "fadeIn 0.5s ease-in";

            alertMessage.innerHTML = "Not Enough Money!";
            alertMessage.style.color = "#f44242";
            alertMessage.style.textShadow = "0px 0px 5px red";
            alertMessage.style.backgroundColor = "#222";
            alertMessage.style.border = "1px solid #000";

            setTimeout(function() {
                alertMessage.style.animation = "fadeAway 0.5s ease-out";

                setTimeout(function() {
                    alertMessage.innerHTML = alertNothing;

                    alertMessage.style.backgroundColor = "";
                    alertMessage.style.border = "";
                }, 400)
            }, 2000);
        }, 200);       
    }
}


// Achievements //