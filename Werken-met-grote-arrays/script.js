const listCountriesButton = document.querySelector('.countries')
const capricornWomenButton = document.querySelector('.capricorn_women')
const creditCardButton = document.querySelector('.credit-card')
const countryMostPeopleButton = document.querySelector('.countries_most_people')
const results = document.querySelector('.results')
const clearList = () => results.innerHTML = "";

const addArrayDataToList = (array) => {
    clearList();
    array.forEach(element => {
        let li = document.createElement("li");
        let textnode = document.createTextNode(element);
        li.appendChild(textnode);
        results.appendChild(li);

    });
}
// console.log(addArrayDataToList(randomPersonData))


//Opdracht 1: Landen!!
const getCountries = () => {
    const sortedCountries = randomPersonData
        .sort((a, b) => {
            if (a.region < b.region) {
                return -1;
            }
            if (a.region > b.region) {
                return 1;
            }
        })
        .map(object => object.region)
    return sortedCountries
}

const uniqueCountries = [...new Set(getCountries())] // set is unieke elementen uit de array halen

const getCountryList = () => {
    clearList();
    uniqueCountries.forEach(element => {
        const li = document.createElement("li");
        const textnode = document.createTextNode(element);
        li.appendChild(textnode);
        results.appendChild(li);
    });
}

listCountriesButton.addEventListener('click', function () {
    getCountryList(randomPersonData)
})





// opdracht 2 Steenbokken!!
const dmyString = randomPersonData.map(person => person.birthday.dmyString)

console.log(dmyString)

const checkCapriCorn = (dmyString) => {
    const day = dmyString.slice(0, 2);
    const month = dmyString.slice(3, 5);
    if (parseInt(month) == 12 && parseInt(day) >= 22 || parseInt(month) == 1 && parseInt(day) <= 19) {
        return true;
    } else {
        return false;
    }
};

const capriCornCheck = () => {
    if (checkCapriCorn) {
        checkCapriCorn == true
        return true
    }
}
console.log(checkCapriCorn())


const getPersons = () => {
    let capricornWomen = [];
    randomPersonData.forEach(element => {
        if (element.gender === "female" && parseInt(element.birthday.dmy.slice(-4)) < 1990 && checkCapriCorn(element.birthday.dmy) == true) {
            capricornWomen.push(`${element.name} ${element.surname}` +
                `<img src="${element.photo}" alt="picture>`);
            capricornWomen.push(`${element.name} ${element.surname} ${element.photo}`);
        } else {
            return;
        }
    });
    addArrayDataToList(capricornWomen)
}



const getWomenOver30 = () => randomPersonData
    .filter(woman => woman.gender === 'female')
    .filter(woman => woman.age = parseInt(woman.birthday.dmy.slice(-4)) < 1990)
    .map(checkCapriCorn() = true)

console.log(getWomenOver30(randomPersonData))

getCapricornWomenover30 = () => {
    getWomenOver30()
    addArrayDataToList(getCapricornWomenover30)
}
getCapricornWomenover30()



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






// const isWoman = person => person.gender === "female";

// const isOver30 = person => person.age > 30;

// const isCapricorn = person => person.sign === CAPRICORN;

// const sortByName = (person1, person2) =>
//     sort_helper(person1.name > person2.name);

// const getCapricornWomen = personData =>
//     personData
//         .filter(isWoman)
//         .filter(isOver30)
//         .map(addStarSign)
//         .filter(isCapricorn)
//         .sort(sortByName);

// const generateCapricornWomanHTML = ({
//     name,
//     surname,
//     photo,
//     age,
//     birthday,
// }) => {
//     // Add age and birthday to make manual checking easier.
//     const nameSpan = document.createElement("span");
//     nameSpan.innerHTML = `${name} ${surname}`;

//     const photoSpan = document.createElement("span");
//     photoSpan.innerHTML = photo;

//     const ageSpan = document.createElement("span");
//     ageSpan.innerHTML = age;

//     const birthdaySpan = document.createElement("span");
//     birthdaySpan.innerHTML = birthday.dmy;

//     const li = document.createElement("li");
//     li.appendChild(nameSpan);
//     li.appendChild(photoSpan);
//     li.appendChild(ageSpan);
//     li.appendChild(birthdaySpan);

//     return li;
// };

// const displayCapricornWomen = () => {
//     getCapricornWomen(randomPersonData)
//         .map(generateCapricornWomanHTML)
//         .forEach(addToResultList);
// };

// document
//     .querySelector(".capricorn_women")
//     .addEventListener("click", displayCapricornWomen);










// oude creditcards

// const sortByDate = (oudeCreditcards) => {
//     const sortedByExpirationDate = oudeCreditcards.sort((a, b) => {
//         a = a.credit_card.expiration.split('/');
//         b = b.credit_card.expiration.split('/');
//         // console.log(b)
//         return a[1] - b[1] || a[0] - b[0];
//     });
//     return sortedByExpirationDate
// };
// console.log(sortByDate(randomPersonData))

// const filterArrayByExpiration = (array, year) => {
//     let stringThisYear = String(year);
//     stringThisYear = stringThisYear.slice(-2);
//     year++;
//     let stringNextYear = String(year);
//     stringNextYear = stringNextYear.slice(-2);
//     const filteredByExpiration = array.filter(person => parseInt(person.credit_card.expiration.slice(-2)) === parseInt(stringThisYear) ||
//         parseInt(person.credit_card.expiration.slice(-2)) === parseInt(stringNextYear));
//     return filteredByExpiration;
// }
// console.log(filterArrayByExpiration(randomPersonData))

const convertCCtoDate = () => {
    const creditCardDateToString = person => person.credit_card.expiration.split("/");
    // console.log(creditCardDateToString)
    const creditCardDate = new Date(
        parseInt("20" + creditCardDateToString[1]),
        parseInt(creditCardDateToString[0])
    );
    return creditCardDate;
};
console.log(convertCCtoDate(randomPersonData))


const getOldCreditcards = () => {
    const now = new Date();
    const oldCreditcardList = randomPersonData
        .filter(person => person.age >= 18)
        .filter(person => {
            return (
                convertCCtoDate(person) > now &&
                convertCCtoDate(person).getFullYear() === now.getFullYear() + 1
            );
        })
        .sort((a, b) => {
            if (convertCCtoDate(a) < convertCCtoDate(b)) {
                return -1;
            }
            if (convertCCtoDate(a) > convertCCtoDate(b)) {
                return 1;
            }

            // names must be equal
            return 0;
        });
    return oldCreditcardList;
};

const renderOldCreditcards = (oldCreditcardList) => {
    results.innerHTML = " ";
    oldCreditcardList.map((person) => {
        const listItemElement = document.createElement("li");
        listItemElement.innerHTML = `Name: ${person.name} ${person.surname}. Phone: ${person.phone}. Credit Card Number:${person.credit_card.number}. Expiration date: ${person.credit_card.expiration}`;
        results.appendChild(listItemElement);
        return listItemElement;
    });
};

creditCardButton.addEventListener("click", () => {
    results.innerHTML = "";
    renderOldCreditcards(getOldCreditcards());
});


// Meeste mensen
// const sortByCountry = (randomPersonData) => {
//     let count = {};
//     randomPersonData.forEach(element => {
//         count[element.region] = (count[element.region] || 0) + 1;
//     });
//     console.log(count);
//     const sortable = Object.fromEntries(
//         Object.entries(count).sort(([, a], [, b]) => b - a)
//     );
//     addArrayDataToList(randomPersonData)
//     const json_data = (JSON.stringify(sortable, null /*replacer function */, 4 /* space */))
//     //const result = JSON.parse(json_data);
//     console.log("json", json_data);
//     //addJSONObjectDataToList(result);
// };
// countryMostPeopleButton.addEventListener("click", function () {
//     sortByCountry(randomPersonData)
// });
// // sortByCountry(randomPersonData);



const getMostPeoplePerCountry = () => {
    const countryList = randomPersonData.map((person) => {
        return person.region;
    });

    const count = Array.from(
        countryList.reduce((unique, item) => unique.set(item, (unique.get(item) || 0) + 1), new Map()),
        ([country, count]) => ({ country, count })
    );

    count.sort((a, b) => {
        if (a.country < b.country) {
            return -1;
        }
        if (a.country > b.country) {
            return 1;
        }
        return 0;
    });
    return count;
};

const renderMostPeopleList = (mostPeoplePerCountry) => {
    results.innerHTML = " ";
    getMostPeoplePerCountry()
    mostPeoplePerCountry.map((listItem) => {
        const listItemElement = document.createElement("li");
        listItemElement.innerHTML = `${listItem.country}: ${listItem.count}`;
        results.appendChild(listItemElement);
        return listItemElement;
    });
};
renderMostPeopleList(randomPersonData)