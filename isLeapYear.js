function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isMyYearLeapYear = isLeapYear(1933);
console.log(isMyYearLeapYear);
const isMyYearLeapYear2 =isLeapYear(1960);
console.log(isMyYearLeapYear2);

