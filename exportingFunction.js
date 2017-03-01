module.exports = function(options){
    return options;
}

// this one here will return the function itself so when we require we also need to call itself

// this will create new instances whenever called whereas when we return object it will only create one object in the memory
