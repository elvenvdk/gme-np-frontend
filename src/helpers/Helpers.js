import numeral from 'numeral';

export const formatCurrency = (num) => numeral(num).format('$0,0.00');

export const formatPercentage = (num) => numeral(num).format('0%');
