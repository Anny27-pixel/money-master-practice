document.getElementById('btn-canculate').addEventListener('click', function () {
    const incomeField = document.getElementById('income-field');
    const incomeTotalString = incomeField.value;
    const incomeTotal = parseFloat(incomeTotalString);


    const foodField = document.getElementById('food-field');
    const foodCostTotatString = foodField.value;
    const foodCostTotal = parseFloat(foodCostTotatString);

    const rentField = document.getElementById('rent-field');
    const rentCostTotalString = rentField.value;
    const rentCostTotal = parseFloat(rentCostTotalString);

    const clothesField = document.getElementById('clothes-filed');
    const clothesCostTotalString = clothesField.value;
    const clothesCostTotal = parseFloat(clothesCostTotalString);


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