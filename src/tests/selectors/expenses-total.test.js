import getExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
    const expenses = [];
    const result = getExpensesTotal(expenses);
    expect(result).toEqual(0);
});

test('should correctly add up a single expense', () => {
    const expenses = [
        {
            id: '1',
            description: 'Gum',
            note: '',
            amount: '190',
            createdAt: 0
        }
    ];
    const result = getExpensesTotal(expenses);
    expect(result).toEqual('190');
});