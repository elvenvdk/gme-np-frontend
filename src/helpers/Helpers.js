import numeral from 'numeral';

export const formatCurrency = (num) => numeral(num).format('$0,0.00');
