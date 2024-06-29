import Movie from './Movie';

type CartItem = {
  id: number;
  name: string;
  price: number;
};

export default class Cart {
  private _items: CartItem[] = [];

  add(item: CartItem): void {
    this._items.push(item);
  }

  get items(): CartItem[] {
    return [...this._items];
  }

  getTotalPrice(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }

  getTotalPriceWithDiscount(discount: number): number {
    const totalPrice = this.getTotalPrice();
    return totalPrice - totalPrice * discount;
  }

  delete(itemId: number): void {
    this._items = this._items.filter(item => item.id !== itemId);
  }
}