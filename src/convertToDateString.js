import parseRussianString from './parseRussianString';


export default function parseDate(input) {
    const year = getYear(input);
    const month = getMonth(input);
    const day = getDay(input);
    const hour = getHour(input);
    const minute = getMinute(input);

    // формирование и возврат объекта Date на основе извлеченных значений
}