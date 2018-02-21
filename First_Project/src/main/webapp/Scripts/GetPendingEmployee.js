

v

function findJSONEmployee() {
	var xhr = new XMLHttpRequest() || new ActieXObject("Microsoft.HttpRequest");
	xhr.open("Get", "/First_Project/requestTableAddition");
	xhr.send();
	xhr.onreadystatechange = stuffEmployee2;
};

function stuffEmployee2() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		if(xhr.responseText){
		obj = JSON.parse(xhr.responseText);
		//console.log(obj.Request_Id);
		console.log(Object.keys(obj).length + " this is the size");
		
		var j = 0;
		var keys = [];
		var values = [];
		for (var key in obj) {
			//console.log(key);
			if (key != undefined) {
				keys[j] = key;
			}
			if (obj[key] != undefined) {
				values[j] = obj[key];
			}
			j++;
		}
		var table = document.getElementById("Table_body");
		table.innerHTML = "";
		
		var headRow = table.insertRow(0);
		for (var i = 0; i < Object.keys(obj).length; i++) {
			var headCell = headRow.insertCell(i);
			headCell.innerHTML = keys[i];
		}
		// count is the number of things in the object need to set -6
		var count =1;
		while(count<2){
		var headRow = table.insertRow(count);
			for (var i = 0; i < Object.keys(obj).length; i++) {
				var headCell = headRow.insertCell(i);
				headCell.innerHTML = values[i];
			}
			count+=1;
		}
	}else{
		document.getElementById("Table_body").innerHTML = "You have no Pending Requests";

	}
	}

};

