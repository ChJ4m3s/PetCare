export const getPets = (ownerId: string) => {
    return [{
        uuid: 'mock',
        name: 'Pippo',
        owner: 'mockanchequi',
        birthDate: 'ancoramock',
        specie: 'mock',
        avatar: 'https://www.medicalnewstoday.com/articles/322868'
    }] as Pet[];
}
