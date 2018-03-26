// Code to tie to the back end for preformance updates


demoArray = document.querySelectorAll (".runners");
var numbers = [21.31, 18, 66,];


function populateStats (array, values){
for (var i = 0; i < array.length; i++){
    array[i].innerHTML = values[i];
}
}
populateStats (demoArray, numbers);


