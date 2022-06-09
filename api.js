import { newRangeCount } from "react-native/Libraries/Lists/VirtualizeUtils";

const API = 'http://192.168.8.104:80/crud_person/business/personAction.php';

export const getPersonInformation = async () => {
    const data = {
        getPersonList: 'getPersonList'
    }
    const res = await fetch(API, {
        method: 'POST',
        headers: {
            Accept:'application/json',
            'Content-Type': 'application/json',
        },
       body: JSON.stringify(data)
    });
    return await res.json();
};

export const getPerson = async (identification) => {
    const data = {
        getPerson: 'getPerson',
        identification: identification
    }
    const res = await fetch(API, {
        method: 'POST',
        headers: {
            Accept:'application/json',
            'Content-Type': 'application/json',
        },
       body: JSON.stringify(data)
    });
    return await res.json();
};

export const savePerson = async (newPerson) => {
    const res = await fetch(API, { 
        method: 'POST',
        headers: {
            Accept:'application/json',
            'Content-Type': 'application/json',
        },
       body: JSON.stringify({create: 'create', 
            identification: newPerson.identification,
            name: newPerson.name,
            lastName:  newPerson.lastName,
            address:  newPerson.address,
            phone:  newPerson.phone,
            email:  newPerson.email,
            age:  newPerson.age,
            sex:  newPerson.sex
        })
    });
    return await res.json();
};

export const deletePerson = async (person) => {
    const res = await fetch(API, { 
        method: 'POST',
        headers: {
            Accept:'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({delete: 'delete', 
            identification: person.identification
        })
    });
    return await res.json();
};

export const updatePerson = async (newPerson) => {
    const res = await fetch(API, { 
        method: 'POST',
        headers: {
            Accept:'application/json',
            'Content-Type': 'application/json',
        },
       body: JSON.stringify({update: 'update', 
            identification: newPerson.identification,
            address:  newPerson.address,
            phone:  newPerson.phone,
            email:  newPerson.email
        })
    });
    return await res.json();
};