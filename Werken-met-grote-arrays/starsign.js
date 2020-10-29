// const getStarSign = (month, day) => {
//     // Normally adding {} to if statements is better but here's an exception.
//     if (month === 1 && day <= 20) return CAPRICORN;
//     if (month === 1 && day >= 21) return AQUARIUS;
//     if (month === 2 && day <= 19) return AQUARIUS;
//     if (month === 2 && day >= 20) return PISCES;
//     if (month === 3 && day <= 20) return PISCES;
//     if (month === 3 && day >= 21) return ARIES;
//     if (month === 4 && day <= 20) return ARIES;
//     if (month === 4 && day >= 21) return TAURUS;
//     if (month === 5 && day <= 20) return TAURUS;
//     if (month === 5 && day >= 21) return GEMINI;
//     if (month === 6 && day <= 21) return GEMINI;
//     if (month === 6 && day >= 22) return CANCER;
//     if (month === 7 && day <= 22) return CANCER;
//     if (month === 7 && day >= 23) return LEO;
//     if (month === 8 && day <= 23) return LEO;
//     if (month === 8 && day >= 24) return VIRGO;
//     if (month === 9 && day <= 21) return VIRGO;
//     if (month === 9 && day >= 22) return LIBRA;
//     if (month === 10 && day <= 22) return LIBRA;
//     if (month === 10 && day >= 23) return SCORPIO;
//     if (month === 11 && day <= 21) return SCORPIO;
//     if (month === 11 && day >= 22) return SAGGITARIUS;
//     if (month === 12 && day <= 21) return SAGGITARIUS;
//     if (month === 12 && day >= 22) return CAPRICORN;
// };

// const addStarSign = person => {
//     const month = parseInt(person => person.birthday.dmy.split("/")[1]); // 1..12
//     const day = parseInt(person => person.birthday.dmy.split("/")[0]); // 1..31
//     person.sign = getStarSign(month, day);
//     return person;
// };

