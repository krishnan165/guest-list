
var array1=[];

function add_guest()
{
var name_guests=document.getElementById("addguest").value;

array1.push(name_guests);
console.log(array1);
document.getElementById("addedguests").innerHTML=array1;
}
function show()
{
    document.getElementById("sortedguest").innerHTML=array1.sort();
    console.log(array1.sort());
    
}
function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<array1.length; j++)
		{
			if(s==array1[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}

