///reference path =<"javascript/JavaScript.js"/> 

app.filter('satti',function () {

    return function (input) {
     
        var output = "";
        output = input.toUpperCase();
        return output;
    }
});