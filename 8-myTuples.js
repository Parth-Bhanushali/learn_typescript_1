var tUser; // have to adhere to this order strictly
tUser = ["pb", 111, true];
tUser = [111, "pb", true];
var rgb = [255, 115, 255];
var rgb2 = [255, 115, 255, 0.8];
var newUser = [132, "example"];
newUser[0] = "example";
newUser[1] = "Vexample"; // values can be changed though
newUser.push(true);
newUser.push("more");
newUser.push("moreAndMore"); // it does not restrict adding more data to array!!
