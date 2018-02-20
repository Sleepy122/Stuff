

var xhr = new XMLHttpRequest() || new ActieXObject("Microsoft.HttpRequest");

function getAllEmployees() {
	xhr.open("Get", "/First_Project/AllEmployeeInfo");
	xhr.send();
	xhr.onreadystatechange = stuffEmployee;
}
;

function stuffEmployee() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		obj = JSON.parse(xhr.responseText);
		//console.log(obj);
		//console.log(obj.things[0].length);
		//console.log(obj.Request_Id);
		//console.log(Object.keys(obj).length + " this is the size");
		var j = 0;
		var keys = [];
		var values = [];
		
		//console.log("test"+obj.things[0].L_name);
		for (var x = 0; x < obj.things.length; x++) {
			j=0;
			//console.log(obj.things[x]);
			miniObj = obj.things[x];
			//console.log(miniObj);
			for (var key in miniObj) {
				//console.log(key);
				if (key != undefined) {
					keys[j] = key;
				}
				if (miniObj[key] != undefined) {
					values[j] = miniObj[key];
				}
				j++;
			}
			console.log(values);
			//console.log(Object.keys(obj.things[x]).length);
			var table = document.getElementById("All_Employees");
			//console.dir(values);
			//console.dir(keys);
		//table.innerHTML = "";
		if (x <= 0) {
			console.log("gothere");
			var headRow = table.insertRow(0);
			for (var i = 0; i < 7; i++) {
				var headCell = headRow.insertCell(i);
				headCell.innerHTML = keys[i];
				console.log(keys[i]);
			}
		}
		// count is the number of things in the object need to set -6

		var headRow = table.insertRow(1);
		for (var i = 0; i < Object.keys(miniObj).length; i++) {
			var headCell = headRow.insertCell(i);
			headCell.innerHTML = values[i];
		}

		}
	}

}
;