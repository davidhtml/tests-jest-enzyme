import expenses from '../fixtures/expenses';
import TotalExpenses from '../../selectors/expenses-total';

test('should return total value of all expenses', () => {
    const value = 625;
    expect(TotalExpenses(expenses)).toBe(value);
});


test('should return 0 if there are no expenses', () => {
    const value = 0;
    expect(TotalExpenses([])).toBe(value);
});



test('should correctly add single expense', () => {
    const value = 195;
    expect(TotalExpenses([expenses[0]])).toBe(value);
});
