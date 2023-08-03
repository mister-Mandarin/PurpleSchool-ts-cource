import axios from 'axios';

const url:string = 'https://dummyjson.com/users'

interface IMainObject {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}

interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: 'male' | 'female',
    email: string,
    phone: string, //но лучше наверно использовать какую то библиотеку/функцию или регулярку
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: 'A-' | 'A+' | 'B+' | 'B-' | 'O+' | 'O−' | 'AB+' | 'AB-',
    height: number,
    weight: number,
    eyeColor: 'Green' | 'Gray' | 'Brown' | 'Amber' | 'Blue',
    hair: hairType,
    domain: string,
    ip: string, //так же как и с номером
    address: addressType,
    macAddress: string,
    university: string,
    bank: bankType,
    company: companyType,
    ein: string,
    ssn: string,
    userAgent: string
}

type hairType = {
    color: 'Auburn' | 'Blond' | 'Black' | 'Brown',
    type: 'Curly' | 'Strands' | 'Very curly' | 'Wavy' | 'Straight'
}

type addressType = {
    address: string,
    city: string,
    coordinates: {
        lat: number,
        lng: number
    },
    postalCode: string, // странно почему все данные приходят строкой
    state: string
}

type bankType = {
    cardExpire: string,
    cardNumber: string,
    cardType: 'bankcard' | 'maestro' | 'mastercard' | 'jcb' | 'visa-electron' | 'americanexpress' | 'diners-club-carte-blanche' | 'instapayment' | 'switch' | 'solo',
    currency: 'Peso' | 'Ruble' | 'Yuan Renminbi' | 'Euro' | 'Rupiah' | 'Ringgit' | 'Rial' | 'Dollar' | 'Rupee' | 'Koruna' | 'Real' | 'Yen' | 'Hryvnia',
    iban: string
}

type companyType = {
    address: {
        address: string,
        city: string,
        coordinates: {
            lat:number,
            lng:number
        },
        postalCode: string,
        state: string
    },
    department: string,
    name: string,
    title: string
}

async function getUser() {
    try {
        const response = await axios.get(url);
        const users: IMainObject = response.data;
        console.log(users);
    } catch (error) {
        console.error(error);
    }
}

getUser();