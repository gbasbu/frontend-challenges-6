function myFunction() {
    var basicPrice = document.getElementById('basicPrice')
    if(basicPrice.innerHTML != '$199.99'){
        basicPrice.innerHTML = '$199.99'
    }else{
        basicPrice.innerHTML = '$19.99'
    }

    var proPrice = document.getElementById('proPrice')
    if(proPrice.innerHTML != '$249.99'){
        proPrice.innerHTML = '$249.99'
    }else{
        proPrice.innerHTML = '$24.99'
    }

    var masterPrice = document.getElementById('masterPrice')
    if(masterPrice.innerHTML != '$399.99'){
        masterPrice.innerHTML = '$399.99'
    }else{
        masterPrice.innerHTML = '$39.99'
    }
}