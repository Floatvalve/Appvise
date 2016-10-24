/**
 * Created by Maelhann oze on 20/10/2016.
 */
function speculateWebApp() {
// Here are Declared the variables on Which the algorithm lies, We must keep those updated as often as the market requires.
    var CPMDisplay = 2.80;   //The CPM for Display ads in Oct 2016
    var CPMVideo = 3.00 ;
    var CPMEmail = 5.00 ;
    var MTraffic = document.getElementById("Traffic").value ;
    var AdBlockUsers = 9.57 ;
    var ClickRate = 0.0017;
    var Bounce = document.getElementById("Bounce").value ;
    var PageAmount = document.getElementById("PageAmount").value; if (document.getElementById("PageAmount").value==0) {  PageAmount=1; }



    var AdsPerPage = document.getElementById("AdsPerPage").value ;
    var RecentTraffic = document.getElementById("LastMonth").value;
    var worth =((( ((   (100- AdBlockUsers)/100)*MTraffic)*((CPMDisplay+CPMVideo+CPMEmail)/3) ) )/1000) ; // Average Income per Month
    var WorthFinal=    (   worth +  ((( ((   (100- AdBlockUsers)/100)*RecentTraffic)*((CPMDisplay+CPMVideo+CPMEmail)/3) ) )/1000 )      ) /2     ; // Average of Most recent and average Income per Month
    var WorthUltimate = WorthFinal*((((100-Bounce)/100)*PageAmount)*AdsPerPage )  ;

    var Resultat = Math.round(WorthUltimate); // Rounding up the operations



    document.getElementById("results").innerHTML = "The value of your website is " + Resultat + " per month in ad revenue. WOW!" ;



}

function show_IOS() {
    document.getElementById("Form_Web").style = "display:none;";
    document.getElementById("Form_Android").style = "display:none;";
    document.getElementById("Form_IOS").style = "display:block" ;
}

function show_Android() {
    document.getElementById("Form_Web").style = "display:none;";
    document.getElementById("Form_Android").style = "display:block;";
    document.getElementById("Form_IOS").style = "display:none" ;
}

function show_WEB() {
    document.getElementById("Form_Web").style = "display:block;";
    document.getElementById("Form_Android").style = "display:none;";
    document.getElementById("Form_IOS").style = "display:none" ;
}

function speculateIOSApp(){
    
    var COI_IOS = document.getElementById("COI_IOS").value;     //This function is the speculation algorithm to determine the worth of an IOS application
    var IPM_IOS = document.getElementById("IPM_IOS").value;
    var ILM_IOS = document.getElementById("ILM_IOS").value ;
    var RPM_IOS = 4; // It actually varies quite a lot depending on Banners or interstitials, I decided to set it to 5 since the general trend goes downward.
    var APS_IOS = document.getElementById("APS_IOS").value;
    var ActiveUsers_IOS = document.getElementById("ActiveUsers_IOS").value;
    var Freemium = 0.022;



    var worth_IOS =    ((((ActiveUsers_IOS)*RPM_IOS)/1000)*APS_IOS) + ((IPM_IOS)*COI_IOS) + (((ActiveUsers_IOS)*Freemium)*ILM_IOS)  ;


    document.getElementById("results_IOS").innerHTML = "The value of your iOS app is " + worth_IOS + " dollars per month in ad revenue. It's value on sale is between " + 5*worth_IOS + " And " + 15*worth_IOS+ " dollars. " ;

}

function speculateAndroidApp(){

    var COI_Android = document.getElementById("COI_Android").value;     //This function is the speculation algorithm to determine the worth of an Android application
    var IPM_Android = document.getElementById("IPM_Android").value;
    var ILM_Android = document.getElementById("ILM_Android").value ;
    var RPM_Android = 3; // It actually varies quite a lot depending on Banners or interstitials, I decided to set it to 5 since the general trend goes downward.
    var APS_Android = document.getElementById("APS_Android").value;
    var ActiveUsers_Android = document.getElementById("ActiveUsers_Android").value;
    var Freemium = 0.022;



    var worth_Android =    ((((ActiveUsers_Android)*RPM_Android)/1000)*APS_Android) + ((IPM_Android)*COI_Android) + (((ActiveUsers_Android)*Freemium)*ILM_Android)  ;


    document.getElementById("results_Android").innerHTML = "The value of your iOS app is " + worth_Android + " dollars per month in ad revenue. It's value on sale is between " + 5*worth_Android+ " and " + 15*worth_Android+ " dollars. " ;

}