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
const checkCapriCorn = (woman) => {
    const dmyString = woman.birthday.dmy; // new
    const day = dmyString.slice(0, 2);
    const month = dmyString.slice(3, 5);
    if (parseInt(month) == 12 && parseInt(day) >= 22 || parseInt(month) == 1 && parseInt(day) <= 19) {
        return true;
    } else {
        return false;
    }
};

const getCapricornWomenOver30 = () => randomPersonData
    .filter(woman => woman.gender === 'female')
    .filter(woman => woman.age = parseInt(woman.birthday.dmy.slice(-4)) < 1990)
    .filter(woman => checkCapriCorn(woman))


const getCapricornFunction = getCapricornWomenOver30()
// console.log(getCapricornFunction)


const getCapricornWomenOver30Names = getCapricornFunction.map(woman => woman = woman.name + ' ' + woman.surname)
// console.log(getCapricornWomenOver30Names)

displayCapricornWomen30 = () => {
    clearList();
    getCapricornWomenOver30Names.forEach(element => {
        let img = document.createElement('img');
        const li = document.createElement("li");
        const textnode = document.createTextNode(element);
        li.appendChild(textnode);
        li.appendChild(img)
        results.appendChild(li);
    })
}

capricornWomenButton.addEventListener('click', function () {
    displayCapricornWomen30(getCapricornWomenOver30Names)
})





// oude creditcards
const getCreditcardDate = (person) => {
    const creditCardDateToString = person.credit_card.expiration.split("/");
    const month = parseInt(creditCardDateToString[0]) - 1;
    const year = parseInt("20" + creditCardDateToString[1]);
    const creditCardDate = new Date(year, month);
    return creditCardDate
};

const getOldCreditcards = () => {
    const now = new Date();
    const adultPeople = randomPersonData.filter(person => person.age >= 18);
    const peopleWithOldCreditcards = adultPeople.filter(person => {
        return (
            getCreditcardDate(person) > now &&
            getCreditcardDate(person).getFullYear() === now.getFullYear() + 1
        );
    })
    const sortPeopleCreditcards = peopleWithOldCreditcards.sort((a, b) => {
        if (getCreditcardDate(a) < getCreditcardDate(b)) {
            return -1;
        }
        if (getCreditcardDate(a) > getCreditcardDate(b)) {
            return 1;
        }
        return 0;
    });
    return sortPeopleCreditcards;
};

const listOldCreditcards = getOldCreditcards()
const namesListOldCreditcards = listOldCreditcards.map(person => person = `Name: ${person.name} ${person.surname}. Phone: ${person.phone}. Credit Card Number:${person.credit_card.number}. Expiration date: ${person.credit_card.expiration}`)

const displayOldCreditcards = () => {
    clearList();
    namesListOldCreditcards.forEach(person => {
        const li = document.createElement("li");
        const textnode = document.createTextNode(person);
        li.appendChild(textnode);
        results.appendChild(li);
    })
}

creditCardButton.addEventListener("click", () => {
    displayOldCreditcards(namesListOldCreditcards);
});






// Meeste mensen

// let count = {};
// let countedPeopleInCountry = randomPersonData.forEach(element => {
//     count[element.region] = (count[element.region] || 0) + 1;
// });

const sortByCountry = (person) => {
    let count = {};
    randomPersonData.forEach(element => {
        count[element.region] = (count[element.region] || 0) + 1;
    });
    console.log(count)
    return sortByCountry()
}
// console.log(countedPeopleInCountry)
// console.log(sortByCountry())

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

const countryList = randomPersonData.map(person => person.region);

const uniqueMostCountries = [...new Set(countryList)]
console.log(uniqueMostCountries)

// const getMostPeoplePerCountry = () => {
//     const countryList = randomPersonData.map((person) => {
//         return person.region;
//     });
//     const uniqueCountries = [...new Set(countryList)]
//     console.log(uniqueCountries)

// const count = Array.from(
//     countryList.reduce((unique, item) => unique.set(item, (unique.get(item) || 0) + 1), new Map()),
//     ([country, count]) => ({ country, count })
// );

sortedMostCoutries = uniqueMostCountries.sort((a, b) => {
    if (a.country < b.country) {
        return -1;
    }
    if (a.country > b.country) {
        return 1;
    }
    return 0;
});


console.log(sortedMostCoutries)

const renderMostPeopleList = () => {
    clearList();
    uniqueMostCountries.forEach(element => {
        let li = document.createElement("li");
        let textnode = document.createTextNode(element);
        li.appendChild(textnode);
        li.innerHTML = element;
        results.appendChild(li);
    });


};
console.log(renderMostPeopleList(uniqueMostCountries))

countryMostPeopleButton.addEventListener("click", () => {
    renderMostPeopleList(uniqueMostCountries);
});