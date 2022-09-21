function spy() {
    return(8);
}

function receivesAFunction(spy){
    spy();
    return(9);

}

function returnsANamedFunction (){
    return spy;
}

function returnsAnAnonymousFunction(){
    return function (){
        return(7);
    };
}