// <---------- BLOCK 1 - Objects ---------->

const users = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        registrationDate: 'Tue, 12 Jan 2021 12: 28: 18 + 0000',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '050 866-66-66',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        registrationDate: 'Mon, 11 Jan 2021 12: 28: 18 + 0000',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '050 877-77-77',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        registrationDate: 'Mon, 11 Jan 2020 12: 28: 18 + 0000',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '067 866-66-66',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        registrationDate: 'Mon, 11 Jan 2021 18: 28: 18 + 0000',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '097 866-66-68',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        registrationDate: 'Mon, 11 Jan 2021 18: 48: 18 + 0000',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(067) 888-88-88',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        registrationDate: 'Mon, 11 Jan 2021 18: 18: 18 + 0000',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '(067) 888-99-99',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        registrationDate: 'Mon, 11 Jan 2021 18: 48: 19 + 0000',

        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '(068) 777-58-88',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        registrationDate: 'Mon, 11 Jan 2021 12: 18: 18 + 0000',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '(068) 999-99-28',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        registrationDate: 'Mon, 11 Jan 2021 12: 18: 18 + 0000',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(068) 999-44-28',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        registrationDate: 'Mon, 11 Jan 2021 17: 28: 18 + 0000',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '(067) 999-99-28',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

/* 1.1
 * Создать хэш таблицу
 * Где ключ = user id, а значение - объект user
 * Из данного массива users
 */
const usersHashTable = new Map();
users.forEach((user) => usersHashTable.set(user.id, user));

console.log('Users', usersHashTable);

/* 1.2
 * Запросить у пользователя id - вывести данные по пользователю
 */
const getUserData = (id) => usersHashTable.get(id);
document.querySelector('.task-2__btn').addEventListener('click', (e) => {
    e.preventDefault();
    const id = +document.querySelector('.task-2__input').value;

    console.log(getUserData(id) || `User with id ${id} NOT found`);
});

/* 1.3
 * Запросить у пользователя id, есть такой есть -
 * запросить дополнительное поле - адрес. Вывести адрес.
 */
document.querySelector('.task-3__btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.task-3-selectbox') &&
        document.querySelector('.task-3-selectbox').remove();

    const input = document.querySelector('.task-3__input');
    const id = +input.value;
    const user = getUserData(id);

    if (user) {
        const label = document.createElement('label');
        label.innerText = 'Please, choose address field ';

        const selectbox = document.createElement('select');
        selectbox.classList.add('task-3-selectbox');

        for (const key in user.address) {
            const option = document.createElement('option');
            option.innerText = key;
            option.value = key;

            selectbox.append(option);
        }

        selectbox.onchange = (event) => {
            console.log(user.address[event.target.value]);
        };

        input.parentNode.append(label, selectbox);
    } else {
        console.log(`User with id ${id} NOT found`);
    }
});

/* 1.4
 * Запросить у пользователя ввести название компании
 * найти пользователя с такой компанией - вернуть объект пользователя.
 */
document.querySelector('.task-4__btn').addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.querySelector('.task-4__input');
    const targetCompany = input.value;
    const targetCompanyUsers = []; // Bacause few users may work in same company

    for (const user of usersHashTable.values()) {
        if (user.company.name === targetCompany) {
            targetCompanyUsers.push(user);
        }
    }

    if (targetCompanyUsers.length === 0) {
        console.log(`There is no users working in ${targetCompany}`);
    } else {
        while (targetCompanyUsers.length > 0) {
            console.log(targetCompanyUsers.pop());
        }
    }
});

/* 1.5
 * Сделать каждый property id пользователя неудаляемым
 * и запретить его мутацию/изменение.
 */
const changePropertyUsersId = () => {
    for (const user of usersHashTable.values()) {
        Object.defineProperty(user, 'id', {
            writable: false,
            configurable: false
        });
    }
};

// // Test
// changePropertyUsersId();
// const currUser = usersHashTable.get(1);
// console.log(currUser.id); // 1
// currUser.id = 4;
// console.log(currUser.id); // 1
// delete currUser.id;
// console.log(currUser.id); // 1

/* 1.6
 * Написать сеттер - чтобы при изменении phone - проверялась
 * валидность номера телефона при помощи регулярного выражения
 * для (ххх) ххх-хх-хх - все х - числа.
 */

const changeUsersPhoneSetter = () => {
    for (const user of usersHashTable.values()) {
        user._phone = user.phone;

        Object.defineProperty(user, 'phone', {
            set: function (phone) {
                const re = /^\(\d{3}\) \d{3}\-\d{2}-\d{2}/g;
                const isValidNumber = re.test(phone);

                if (isValidNumber) {
                    this['_phone'] = phone;
                } else {
                    console.log('Phone number format is NOT valid');
                }
            },
            get: function () {
                return this['_phone'];
            }
        });

        Object.defineProperty(user, '_phone', {
            enumerable: false
        });
    }
};

// // Test
// changeUsersPhoneSetter();
// const currentUser = usersHashTable.get(1);
// console.log('User phone =>', currentUser.phone); // 050 866-66-66

// currentUser.phone = '(050) 123-12-12'; // Change with valid format
// console.log('Changed to new phone => ', currentUser.phone); // (050) 123-12-12

// currentUser.phone = '050 123-12-12'; // Change with not valid => Msg: "Phone number format is NOT valid"
// console.log(currentUser.phone); // number not changed

// <---------- BLOCK 2 - Arrays ---------->

/** 2.1
 * Написать функцию которая находила бы первый и последний индекс
 * вхождения в массив переданного числа (запросить у пользователя).
 * И выводила  в виде [[FIRST_INDEX], [LAST_INDEX]].
 * Если такого числа нет - выводить вместо индексов -1 [-1,-1].
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const getFirstLastIndex = (nums, target) => [nums.indexOf(target), nums.lastIndexOf(target)];

// console.log(getFirstLastIndex([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
// console.log(getFirstLastIndex([5, 7, 7, 8, 8, 10], 8)); // [3, 4]

/** 2.2
 * Пересечение массивов
 * Дано два массива, напишиите функцию для вычисления их пересечения.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
    const map = new Map();
    const result = [];

    for (const number of nums1) {
        map.set(number, map.get(number) + 1 || 1);
    }

    for (const number of nums2) {
        if (map.get(number) >= 1) {
            result.push(number);
            map.set(number, map.get(number) - 1);
        }
    }

    return result;
};

// console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
// console.log(intersect([4, 4, 4, 4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4, 4]
// console.log(intersect([8, 0, 3], [0, 0])); // [0]

/** 2.3
 * Написать функцию, которая принимает два массива и индекс.
 * (arr1, arr2, index) => Возвращает новый массив в котором
 * в первый массив по переданному индексу записывается второй массив.
 * Порядок после вставки должен сохраняться
 * Первый и второй массивы не должны изменяться
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} index
 * @return {number[]}
 */
const mergeArraysByIndex = (arr1, arr2, index) =>
    arr1.slice(0, index).concat(arr2, arr1.slice(index));

// console.log(mergeArraysByIndex([1, 2, 3, 4, 5], [6, 7, 8], 1)); // [1, ​6, 7, 8​, 2, 3, 4, 5]

// 2.4 Отсортировать массив из первого задания
// - в порядке убывания id
const sortFuncByIdDec = (a, b) => b.id - a.id;

// - в порядке убывания даты регистрации (registrationDate)
const sortFuncByRegistrationDateDec = (a, b) => {
    const getTimestamp = (str) => {
        const dateStr = str.slice(0, 20) + str.slice(20).replace(/ /g, '').replace(/\+/g, ' GMT+');
        return Date.parse(dateStr);
    };

    return getTimestamp(b.registrationDate) - getTimestamp(a.registrationDate);
};

// console.log(users.sort(sortFuncByIdDec));
// console.log(users.sort(sortFuncByRegistrationDateDec));
