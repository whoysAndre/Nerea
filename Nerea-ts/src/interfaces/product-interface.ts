export interface ProductInterface {
  titulo: string;
  slug: string;
  imagen: string;
  precio: number;
  descripcion: string;
  categoria: Category;
}

export type Category = 'parafina' | 'soja' | 'custom' | 'glicerina';