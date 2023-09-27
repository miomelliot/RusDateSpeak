function getYear(input) {
    const year_array = input.match(/(\b\d{2,4}\b)\s*год/i);
    return year_array ? year_array[0] : null;
}

function getMonth(input) {
    const months = {
        'январ': '01',
        'феврал': '02',
        'март': '03',
        'апрел': '04',
        'май': '05',
        'июн': '06',
        'июл': '07',
        'август': '08',
        'сентябр': '09',
        'октябр': '10',
        'ноябр': '11',
        'декабр': '12'
    };

    let re = new RegExp(Object.keys(months).join("|"), "gi");
    input = input.replace(re, function (matched) {
        return months[matched.toLowerCase()];
    });

    // в случае если месяц был передан цифрой
    if (!input.match(re) && (/\b\d{4}\s(\d{1,2})\b/i).test(input)) {
        let matchedYearMonth = input.match(/\b\d{4}\s(\d{1,2})\b/i);
        let monthNumber = parseInt(matchedYearMonth[1], 10);
        if (monthNumber <= 12) {
            let monthString = monthNumber < 10 ? "0" + monthNumber.toString() : monthNumber.toString();
            input = input.replace(/\b\d{4}\s\d{1,2}\b/i, monthString);
        }
    }

    // Если номер месяца не найден, вернуть false
    if (!(/\b\d{4}\s(0[1-9]|1[0-2])\s\b/).test(input)) {
        return false;
    }

    return input;
}

function getDay(input) {
    var day_array = input.match(/\d{4} (?:(?=0?[1-9]|1[0-2])0?[1-9]|0?[1-9]|1[0-2]) \b(?:[1-9]|[12]\d|3[01])\b|год (январ|феврал|март|апрел|май|июн|июл|август|сентябр|октябр|ноябр|декабр) \d{1,2}/i);
    if (day_array) {
        return day_array[-1];
    }
    let day_array = input.match(/\b(?:[1-9]|[12]\d|3[01])\s(январ|феврал|март|апрел|май|июн|июл|август|сентябр|октябр|ноябр|декабр)\b/i);
    if (day_array) {
        return day_array[0];
    } else if (/сегодня/.test(input)) {
        return currentDate.getDate(); // День месяца (от 1 до 31)
    } else if (/вчера/.test(input)) {
        return new Date((new Date()).setDate((new Date()).getDate() - 1)).getDate(); // День месяца -1 
    } else if (/позавчера/.test(input)) {
        return new Date((new Date()).setDate((new Date()).getDate() - 2)).getDate(); // День месяца -2
    }
}

function getHour(input) {
    let hour_array = input.match(/\b(?:[0-9]|1[0-9]|2[0-3])\b\sчас|\b(?:|[0-9]|0[0-9]|1[0-9]|2[0-3])\b:\b(?:[0-9]|[0-5][0-9])\b/i);
    
}

function getMinute(input) {
    // реализация функции для извлечения минут из input
}
