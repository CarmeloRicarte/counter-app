import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por id', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe retornar undefined si no existe el id', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar un array con los héroes de DC', () => {
        const dcHeroes = getHeroesByOwner('DC');
        expect(dcHeroes.length).toBe(3)
        expect(dcHeroes).toStrictEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ])
    });

    test('getHeroesByOwner debe retornar un array con los héroes de Marvel', () => {
        const dcHeroes = getHeroesByOwner('Marvel');
        expect(dcHeroes.length).toBe(2)
        expect(dcHeroes).toStrictEqual([
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ])
    });
});