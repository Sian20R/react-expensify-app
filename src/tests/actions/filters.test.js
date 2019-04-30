import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('should generate set start date action object', () => {
    const result = setStartDate(moment(0));
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const result = setEndDate(moment(0));
    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sortByDate action object', () => {
    const result = sortByDate();
    expect(result).toEqual({
        type: 'SORT_BY',
        sortBy: 'date'
    });  
});

test('should generate sortByAmount action object', () => {
    const result = sortByAmount();
    expect(result).toEqual({
        type: 'SORT_BY',
        sortBy: 'amount'
    });  
});

test('should generate setTextFilter action object with values', () => {
    const result = setTextFilter('Rent');
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    });  
});

test('should generate setTextFilter action object with default values', () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });  
});