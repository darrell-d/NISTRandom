//Pull random numbers from NIST beacon

var NEXT = "https://beacon.nist.gov/rest/record/";

function getRand()
{

  var xmlhttp = null;
  var timeStamp = new Date();
  var curEpochTime = parseInt(timeStamp.getTime()/1000,10) - 60;

  xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", NEXT + curEpochTime, false);
  xmlHttp.send();

  xmlHttp.onreadystatechange = function(){
    console.log(xmlHTTP.status);
    //if(xmlHttp.responseStatus == 404)
    document.write(xmlHtp.responseText);
  }
}
