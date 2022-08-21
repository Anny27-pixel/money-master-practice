document.getElementById('btn-canculate').addEventListener('click', function () {
    const incomeField = document.getElementById('income-field');
    const incomeTotalString = incomeField.value;
    const incomeTotal = parseFloat(incomeTotalString);




    const foodField = document.getElementById('food-field');
    const foodCostTotatString = foodField.value;
    const foodCostTotal = parseFloat(foodCostTotatString);
    foodField.value = '';

    const rentField = document.getElementById('rent-field');
    const rentCostTotalString = rentField.value;
    const rentCostTotal = parseFloat(rentCostTotalString);
    rentField.value = '';

    const clothesField = document.getElementById('clothes-filed');
    const clothesCostTotalString = clothesField.value;
    const clothesCostTotal = parseFloat(clothesCostTotalString);
    clothesField.value = '';


    // console.log(incomeTotal, foodCostTotal, rentCostTotal, clothesCostTotal);
    const totalCost = foodCostTotal + rentCostTotal + clothesCostTotal;

    const totalExpenseField = document.getElementById('total-expense-field');
    totalExpenseField.innerText = totalCost;

    const balanceTotal = incomeTotal - totalCost;

    const balanceTotalField = document.getElementById('balance-total-field');
    balanceTotalField.innerText = balanceTotal;
    // console.log(balanceTotal);




    // console.log(totalExpense);
})


document.getElementById('btn-save').addEventListener('click', function () {
    const saveField = document.getElementById('save-field');
    const saveAmountString = saveField.value;
    const saveAmount = parseFloat(saveAmountString);

    saveField.value = '';

    const incomeField = document.getElementById('income-field');
    const incomeTotalString = incomeField.value;
    const incomeTotal = parseFloat(incomeTotalString);

    incomeField.value = '';


    const save = ((saveAmount / 100) * incomeTotal);

    const saveAmountTotal = document.getElementById('save-amount');
    saveAmountTotal.innerText = save;

    const balanceTotalField = document.getElementById('balance-total-field');
    const balanceTotalString = balanceTotalField.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    const remainingBalanceField = document.getElementById('remaining-balance');
    const remainingBalance = balanceTotal - save;

    remainingBalanceField.innerText = remainingBalance;


})