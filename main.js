


let title=document.getElementById("title")
let firstName=document.getElementById("firstName")
let lastName=document.getElementById("lastName")
let gender=document.getElementById("gender")
let accountBalance=document.getElementById("accountBalance")
let loanAmount=document.getElementById("loanAmount")
let account=document.getElementById("account")
let credit=document.getElementById("credit")
let deposit=document.getElementById("deposit")
let collection=document.getElementById("collection")
let repayment=document.getElementById("repayment")
let titleError=document.getElementById("titleError")
let firstnameError=document.getElementById("firstnameError")
let lastnameError=document.getElementById("lastnameError")
let genderError=document.getElementById("genderError")
let accountbalanceError=document.getElementById("accountbalanceError")
let loanamountError=document.getElementById("loanamountError")
let creditError=document.getElementById("creditError")
let depositError=document.getElementById("depositError")
let collectionError=document.getElementById("collectionError")
let repaymentError=document.getElementById("repaymentError")
let accountError=document.getElementById("accountError")
let btn=document.getElementById("btn")
let messageTxt=document.getElementById("messageTxt")
let pointAward = 0

btn.addEventListener("click", function(){

    validateData()
})

function validateData(){
    if (title.value == ""){
        titleError.innerHTML = "*"
    }else{
        titleError.innerHTML = ""
    }

    if (firstName.value == ""){
        firstnameError.innerHTML = "*"
    }else{
        firstnameError.innerHTML = ""
    }

    if (lastName.value == ""){
        lastnameError.innerHTML = "*"
    }else{
        lastnameError.innerHTML = ""
    }

    if (gender.value == ""){
        genderError.innerHTML = "*"
    }else{
        genderError.innerHTML = ""
    }

    if (accountBalance.value == ""){
        accountbalanceError.innerHTML = "*"
    }else{
        accountbalanceError.innerHTML = ""
    }

    if (loanAmount.value == ""){
        loanamountError.innerHTML = "*"
    }else{
        loanamountError.innerHTML = ""
    }

    if (credit.value == ""){
        creditError.innerHTML = "*"
    }else{
        creditError.innerHTML = ""
    }
    if (deposit.value == ""){
        depositError.innerHTML = "*"
    }else{
        depositError.innerHTML = ""
    }

    if (collection.value == ""){
        collectionError.innerHTML = "*"
    }else{
        collectionError.innerHTML = ""
    }

    if (repayment.value == ""){
        repaymentError.innerHTML = "*"
    }else{
        repaymentError.innerHTML = ""
    }

    if (account.value == ""){
        accountError.innerHTML = "*"
    }else{
        accountError.innerHTML = ""
    }

    if (title.value != "" &&  firstName.value != "" && lastName.value != "" && gender.value != "" && accountBalance.value != "" && loanAmount.value != "" && account.value != "" && credit.value != "" && deposit.value != "" && collection.value != "" && repayment.value != "" ){
        
        activate()
    }

}

function activate(){

    if (accountBalance.value > loanAmount.value){
        pointAward +=10
    }else{
        pointAward -=10
    }
    if (credit.value =="6"){
        pointAward +=10
    }else{
        pointAward +=0
    }
    if (deposit.value == "1"){
        pointAward +=5
    }else{
        pointAward -=5
    }
    if (collection.value == "6" ||collection.value == "7" ||collection.value == "8" || collection.value =="9"){
        pointAward +=10
    }else{
        pointAward -=10
    }
    if (repayment.value == "1" ||repayment.value == "2" ||repayment.value == "3" ||repayment.value == "4" ||repayment.value == "5"){
        pointAward +=5
    }else{
        pointAward -=5
    }
    if (account.value == "1"){
        pointAward +=5
    }else{
        pointAward +=10
    }

    proceed()
   

}

function proceed(){
    if (pointAward > 30){
        messageTxt.innerHTML = "You are " + pointAward + " points and " + "your Loan request has been accepted"
        
    }else {
        messageTxt.innerHTML =  "You are " + pointAward + " points and " + "your Loan request has been rejected !"
    }

    endService()
}


function endService(){
    title.value == ""
    firstName.value == ""
    lastName.value == ""
    gender.value == ""
    accountBalance.value == ""
    loanAmount.value == ""
    credit.value == ""
    deposit.value == ""
    collection.value == ""
    repayment.value == ""
    account.value == ""
    


}

