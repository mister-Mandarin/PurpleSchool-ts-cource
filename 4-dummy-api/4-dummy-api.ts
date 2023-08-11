import axios from 'axios';

const url: string = 'https://dummyjson.com/users';

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
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: HairType,
    domain: string,
    ip: number,
    address: AddressType,
    macAddress: string,
    university: string,
    bank: BankType,
    company: CompanyType,
    ein: string,
    ssn: string,
    userAgent: string
}

type HairType = {
    color: 'Auburn' | 'Blond' | 'Black' | 'Brown',
    type: 'Curly' | 'Strands' | 'Very curly' | 'Wavy' | 'Straight'
}

type AddressType = {
    address: string,
    city: string,
    coordinates: {
        lat: number,
        lng: number
    },
    postalCode: string,
    state: string
}

type BankType = {
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string
}

type CompanyType = {
    address: AddressType,
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