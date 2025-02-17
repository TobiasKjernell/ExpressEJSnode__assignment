export const rootSearch = function(url){
    const baseRoot = url.split('/');
    const cleanUp = baseRoot.filter(root => root != "");
    var result = cleanUp.map(function() {
        return '../'
    }).join('');

    return result;
}
