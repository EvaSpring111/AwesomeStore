export interface Stuff {
    age: number,
    id: string,
    type: string,
    imageUrl: string,
    name: string,
    snippet: string,
    price: number,
    discount: number,
    screen: string,
    capacity: string,
    ram: string,
}

export interface CartProduct extends Stuff {
total: string|number;
  qty:number;
}
