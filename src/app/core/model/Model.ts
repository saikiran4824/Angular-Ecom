export interface IProduct {
  quantity: number;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
      rate: number;
      count: number;
  };
}

export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}

export interface CategoryModel {
  id: number;
  name: string;
  parentCategoryId?: number;
}

export class CartClass {
  id: number;
  customerId: number;
  productId: number;
  quantity: number;
  addedDate: Date;

  constructor() {
      this.addedDate = new Date();
      this.id = 0;
      this.customerId = 0;
      this.productId = 0;
      this.quantity = 0;
  }
}
