var queryString = new Array()
window.onload = function () {
    document.querySelector(".lang").innerHTML = "Loading..."
    document.querySelector(".eng").innerHTML = "Loading..."
    document.querySelector(".sub3").innerHTML = "Loading..."
    document.querySelector(".sub4").innerHTML = "Loading..."
    document.querySelector(".sub5").innerHTML = "Loading..."
    document.querySelector(".sub6").innerHTML = "Loading..."
    if (queryString.length == 0) {
        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&')
            for (var i = 0; i < params.length; i++) {
                var key = params[i].split('=')[0]
                var value = decodeURIComponent(params[i].split('=')[1])
                queryString[key] = value
            }
        }
    }
    calculate()
}

function calculate() {

    document.querySelector(".lang").innerHTML = queryString["l"]
    document.querySelector(".eng").innerHTML = queryString["e"]
    document.querySelector(".sub3").innerHTML = queryString["3"]
    document.querySelector(".sub4").innerHTML = queryString["4"]
    document.querySelector(".sub5").innerHTML = queryString["5"]
    document.querySelector(".sub6").innerHTML = queryString["6"]
    document.querySelector(".tot").innerHTML = parseInt(queryString["l"]) + parseInt(queryString["e"]) + parseInt(queryString["3"]) + parseInt(queryString["4"]) + parseInt(queryString["5"]) + parseInt(queryString["6"]) + 
}
