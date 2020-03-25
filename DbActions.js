var esqID
//PATHS
var paths = {
    env : "/EnvForm",
    rawMaterials : "/rawM",
    aux : "/aux",
    products : "/Products",
    hazards : "/HazardousMaterials",
    fuels : "/Fuels",
    air : "/AirEmissionsPointSources",
    fugAir : "/FugitiveAirEmissions",
    water : "/WaterConsumption",
    effluent : "/EffluentWastewater",
    solid : "/SolidLiquidWaste",
    noise : "/Noise",
    flare : "/Flare",
    incinerator : "/Incinerator",
    load : "/LoadUnload",
    dredge : "/DredgingOperations",
    other : "/OtherInformation", 
}

//Get next btn
btn = document.getElementById("noise")
    btn.addEventListener('click', function () {
        onClick(this)
    })

//On next click
function onClick(btn) {
    console.log(btn.id)
    path = url+paths[btn.id]
    data = new FormData(document.getElementById(btn.id + "Form"))
    postData(path, data)
}

//REQUEST SETUP
var xhr = new XMLHttpRequest();
var url = 'http://36868619.ngrok.io/api';

//SEND REQUEST BLOCK
function postData(path, body) {
    xhr.open("post", path, true)
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function () {
        if (xhr.status === 200)
            console.log("success")
        else
            console.log("fail")
        var response = JSON.parse(xhr.responseText)

        console.log(response)
    }
    var tempArr = []
    var temp = new Object()
    var count=0
    for (var [key, value] of data.entries()){
        count++
        temp[key] = value
        if (key == "empty")
        {
            count = 0
            tempArr.push(temp)
            temp = new Object()
        }
        console.log(key, value)
    }
    jsonData = {"noise": tempArr}
    console.log(jsonData)
    xhr.send(JSON.stringify(body))
}

//SUBMIT ARRAY OF OBJECTS TEST
document.getElementById("submitNoise").addEventListener('click', function(){
    
})

// "noises": [
//     {
//       "noiseID": 1,
//       "source": "string",
//       "noiseLevelInsidePremises": 0,
//       "noiseLevelatBoundaryFence": 0,
//       "controlMethods": "string",
//       "esqId": 5
//     }
//   ]