interface Pet {
    uuid: string,
    name: string,
    owner: string,
    birthDate: string,
    specie: string,
    avatar: string
}

interface Measure {
    uuid: string,
    petId: string,
    unit: string,
    category: string,
    value: number,
    timestamp: string,
    note?: string,
    source: string
}

interface Owner {
    uuid: string,
    fistName: string,
    lastName: string,
    email: string
}

interface Food {
    uuid: string,
    name: string,
    nutrients: string
}
