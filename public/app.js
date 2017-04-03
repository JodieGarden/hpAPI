var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var hpCharacters = JSON.parse(jsonString); 
  populateList(hpCharacters);
}

var populateList = function(hpCharacters){
  console.log(hpCharacters);
}

var populateList = function(hpCharacters){
  var ul = document.getElementById('harryPotter');

  hpCharacters.forEach(function(hpCharacter){
    var li = document.createElement('li');
    li.innerText = hpCharacter.name;
    ul.appendChild(li);
  });
}



var app = function(){
  var url = 'http://hp-api.herokuapp.com/api/characters';
  makeRequest(url, requestComplete);
};

window.onload = app