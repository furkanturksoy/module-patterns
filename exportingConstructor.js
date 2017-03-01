function Hello(options){
    return options;
}


Hello.prototype.log = function(msg){
    console.log(msg)
}

module.exports = Hello;

// this will return a constructor

// the thing here is when you add the functionality in the prototype 
// it won't get duplicated in the memory it will point to the same spot
