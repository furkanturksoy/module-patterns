// mongoose uses this pattern so when we require mongoose anywhere in the project
// it will point to the same instance

function something(){

}

module.exports = new something();

// this will export an instance of something so whenever it's required it will point to the same instance
