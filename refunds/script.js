function myFunction() {
    let a = document.getElementById('textbox_id').value
    console.log(a);
    console.log(typeof a)
    let nums = []
    for (let i = 1; i < 31; i++) {
        nums.push(i)
    };

    console.log(nums)

    if (nums.includes(Number(a))) {
        let days = Number(a);
        let coins = (5 * days) / 30;
        const realCoins = Math.round(coins * 100) / 100
        document.getElementById("textfield").innerHTML = realCoins + " zł";
    } else if (a === "Morex") {
        document.getElementById("textfield").innerHTML = '<img src="/sussypage/morex/morexspin.gif">';
    } else if (a === "kolpa01") {
        document.getElementById("textfield").innerHTML = 'Czemu tu jesteś<br><img src="morenteeth.png">';
    } else {
        document.getElementById("textfield").innerHTML = "None2";
    };
    
}

