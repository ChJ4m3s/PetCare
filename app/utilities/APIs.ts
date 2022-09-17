export const getPets = (ownerId: string) => {
    return [
        {
            uuid: 'mock',
            name: 'Pippo',
            owner: 'mockanchequi',
            birthDate: 'ancoramock',
            specie: 'mock',
            avatar: 'https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
        },
        {
            uuid: 'mock',
            name: 'Pluto',
            owner: 'mockanchequi',
            birthDate: 'ancoramock',
            specie: 'mock',
            avatar: 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
        }
    ] as Pet[];
}

export const getHistory = (petId: string) => {
    return [
        {
            uuid: "string",
            petId: "string",
            unit: "Kg",
            category: "weight",
            value: 15,
            timestamp: "2022-09-17T10:10:23",
            source: "owner"
        },
        {
            uuid: "string",
            petId: "string",
            unit: "Kg",
            category: "weight",
            value: 15,
            timestamp: "2022-09-17T10:10:23",
            source: "owner"
        }
    ] as Measure[];
}
