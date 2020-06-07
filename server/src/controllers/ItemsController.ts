import { Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response){
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                name: item.title,
                image_url: `http://192.168.1.8:3333/uploads/${item.image}`,
            };
        }) //Transforma as imagens para um jeito mais acessível pro front-end
    
        return response.json(serializedItems);
    }
}

export default ItemsController;