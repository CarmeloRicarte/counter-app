import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas sobre 11-async-await', () => {
    test('getImagen debe retornar un error si no hay api', async () => {
        const resp = await getImagen();
        expect(resp).toBe('No se encontró la imagen');
    });
});