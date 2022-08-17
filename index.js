function receivesAFunction(callback){
    callback();

}
//receivesAFunction(function(){return "hi there"})
function  returnsANamedFunction(){
    function name(){
        return "MERCY"
    }
    return name;
}
function returnsAnAnonymousFunction(){
    return function(){

    }
 }