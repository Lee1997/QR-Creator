(function() {
    'use strict';
    var tags = document.getElementsByTagName('li');
    var c = 0;
    for(var i = 0; i < tags.length; i++){
        var animalName = tags[i].getElementsByTagName('a')[0].title;
        if(animalName.includes('(')){
            console.log(animalName.substring(0, animalName.indexOf('(')) + "\n");
            c++;
        }
    }
    alert(c);
})();