// a module that returns an object 

module.exports = {
    property1 : "value",
    property2 : "value2",
    function1 : function(){}
}

//note this is not same as 

module.exports.property1 = "value"; 

//because it replaces the module.exports object with the anonym object given
