import React from 'react';

const TotalExpenses = (expenses) => {
    return expenses
        .map((item) => item.amount)
        .reduce((sum, value) => sum + value, 0)
}

export default TotalExpenses;
