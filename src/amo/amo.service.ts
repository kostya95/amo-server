import { Injectable } from '@nestjs/common';
import api from 'src/connection';
@Injectable()
export class AmoService {
    async store(name, item): Promise<number>{
        const response = await api.post('/'+name, [item])
        const data = response.data
        return data._embedded[name][0].id
    }
}
