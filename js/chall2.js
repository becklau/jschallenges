function billingCheck(){
    console.log("Made it")
    var billing = document.querySelector("#bill").value;
    var is_checked = document.querySelector("#sameAddress").checked
    console.log(is_checked)
    if (is_checked){
        document.querySelector("#home").value = billing
        document.querySelector("#home").disabled = true
    } else {
        document.querySelector("#home").disabled = false
        document.querySelector("#home").value = ""
    }
    var home = document.querySelector("#home")

}