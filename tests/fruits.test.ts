import supertest from "supertest";
import app from "../src/index";

const api = supertest(app);

describe('testing api', () => {
    it('testing GET: /fruits', async () => {
        const result = await api.get('/fruits');

        expect(result.status).toBe(200);

        expect(result.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    price: expect.any(Number),
                })
            ])            
        )
    })

    it('testing POST: /fruits', async () => {
        const result = await api.post('/fruits').send({
            name: "Banana",
            price: 3,
        })
        expect(result.status).toBe(201);                  
    })
})