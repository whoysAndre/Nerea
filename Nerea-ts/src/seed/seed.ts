
export interface Products {
  titulo: string;
  slug: string;
  imagen: string;
  precio: number;
  descripcion: string;
  categoria: Category;
};

type Category = 'parafina' | 'soja' | 'custom' | 'glicerina';



export const products: Products[] = [
  {
    titulo: "Vela Canister P.",
    slug: 'vela_canister_parafina',
    imagen: "/public/img/Parafina/Canister.jpg",
    precio: 18,
    descripcion: "Rel. Floral",
    categoria: 'parafina'
  },
  {
    titulo: "Vela Cuadrada P.",
    slug:"vela_cuadrada_parafina_canister",
    imagen: "/public/img/Parafina/Canister.jpg",
    precio: 13.5,
    descripcion: "Rosas",
    categoria: 'parafina'

  },
  {
    titulo: "Vela Vaso Redondo P.",
    slug: "vela_vaso_redondo_parafina",
    imagen: "/public/img/Parafina/Canister.jpg",
    precio: 8,
    descripcion: "Rel. Floral",
    categoria: 'parafina'
  },
  {
    titulo: "Vela Tulipan P.",
    slug: "vela_tulipan_parafina_canister",
    imagen: "/public/img/Parafina/Canister.jpg",
    precio: 12,
    descripcion: "Rel. Floral",
    categoria: 'parafina'
  },

];




