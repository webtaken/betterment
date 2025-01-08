export interface ShopifyProduct {
  id: string;
  title: string;
  variants: Variants;
  handle: string;
}

export interface Variants {
  nodes: Node[];
}

export interface Node {
  id: string;
  price: Price;
}

export interface Price {
  amount: string;
  currencyCode: string;
}
