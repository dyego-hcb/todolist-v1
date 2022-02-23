exports.getDate = function (){ // MELHOR JEITO DE DECLARAR FUNCOESconst
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
};
return  today.toLocaleDateString("en-US", options);
}

module.exports.getDay = getDay;

function getDay(){
    const today = new Date();
    const options = {
        weekday: "long"
    }
    return today.toLocaleDateString("en-US", options);
}