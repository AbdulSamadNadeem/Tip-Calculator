function calc(){
    let bill=document.getElementById('bill')
    let tip=document.getElementById('tip')
    let amount = document.getElementById('amount')
    bill= +bill.value
    tip= +tip.value
    let tip_percen=tip/100

    let calculation= (tip_percen)*bill

    let total = bill + calculation

    amount.innerText = "Rs" + total.toFixed(2)


}

let poilcy = document.getElementById('policy')
let time =new Date()

poilcy.innerText = "All Rights Reserved By Abdul Samad " + time.getFullYear()