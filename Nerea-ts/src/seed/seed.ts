
export interface Products {
  titulo: string;
  imagen: string;
  precio: number;
  descripcion: string;
  categoria: Category;
};

type Category = 'parafina' | 'soja' | 'custom' | 'glicerina';



export const products: Products[] = [
  {
    titulo: "Vela Canister P.",
    imagen: "/public/img/Parafina/Canister.jpg",
    precio: 18,
    descripcion: "Rel. Floral",
    categoria: 'parafina'
  },
  {
    titulo: "Vela Cuadrada P.",
    imagen: "/public/img/Parafina/Canister.jpg",
    precio: 13.5,
    descripcion: "Rosas",
    categoria: 'parafina'

  },
  {
    titulo: "Vela Vaso Redondo P.",
    imagen: "/public/img/Parafina/Canister.jpg",
    precio: 8,
    descripcion: "Rel. Floral",
    categoria: 'parafina'
  },
  {
    titulo: "Vela Tulipan P.",
    imagen: "/public/img/Parafina/Canister.jpg",
    precio: 12,
    descripcion: "Rel. Floral",
    categoria: 'parafina'
  },

];




