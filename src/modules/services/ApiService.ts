import { ICake } from "../models/cake";

export class ApiService {
    constructor(private baseUrl: string) {
    }

    public async getCakeList(): Promise<ICake[]> {
        return await fetch(`${this.baseUrl}/cakes`).then(response => response.json());
    }

    public async getCake(cakeId: string): Promise<ICake> {
        return await fetch(`${this.baseUrl}/cakes/${cakeId}`).then(response => response.json());
    }

    public async createCake(name: string, comment: string, yumFactor: number, imageUrl: string) {
        return await fetch(`${this.baseUrl}/cakes`, {
            method: 'POST', body: JSON.stringify({
                name, comment, yumFactor, imageUrl
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export default new ApiService(
    "http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api"
);
