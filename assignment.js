function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount   = bed * 5;
    var totalWood  = chairCount + tableCount + bedCount;
    return totalWood; 
}

function brickCalculator(floor){
    if(floor <=20){
        if(floor <=10){
            var tenFloor = floor * 15000;
            return tenFloor;
        }
        else{
            var twentyFloor = 150000 + (floor-10) * 12000;
            return twentyFloor;
        }
    }
    else{
        var aboveTwenty = 270000 + (floor-20) * 10000;
        return aboveTwenty;
    }
}

function tinyFriend(friendName){
    var smallest = friendName[0].length;
    var tinyName = friendName[0]
    for(var i = 0; i < friendName.length; i++){
        var currentName = friendName[i].length;
        if(currentName < smallest){
            smallest = currentName;
            tinyName = friendName[i];
        }
    } 
    return tinyName;  
}
