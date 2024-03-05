
interface Products {
  titulo: string;
  slug: string;
  imagen: string;
  precio: number;
  descripcion: string;
  categoria: Category;
  pesoGR:number;
  promocion:boolean;
}

type Category = 'Parafina' | 'Soja' | 'Custom' | 'Glicerina Vegetal' | '---';

interface SeedData {
  products: Products[];
}

export const initialData: SeedData = {

  products: [
    {
      titulo: "Vela Canister P.",
      slug: "vela_canister_p",
      imagen: "/public/img/Parafina/Canister.jpg",
      precio: 18,
      descripcion: "Rel. Floral",
      categoria: "Parafina",
      pesoGR: 85,
      promocion: false
    },
    {
      titulo: "Vela Cuadrada P.",
      slug: "vela_cuadrada_p",
      imagen: "/public/img/Parafina/Vaso_Cuadrado.jpg",
      precio: 13.5,
      descripcion: "Rosas",
      categoria: "Parafina",
      pesoGR: 85,
      promocion: false
    },
    {
      titulo: "Vela Vaso Redondo P.",
      slug: "vela_vaso_redondo_p",
      imagen: "/public/img/Parafina/Vaso_Redondo.jpg",
      precio: 8,
      descripcion: "Rel. Floral",
      categoria: "Parafina",
      pesoGR: 50,
      promocion: false
    },
    {
      titulo: "Vela Tulipan P.",
      slug: "vela_tulipan_p",
      imagen: "/public/img/Parafina/Tulipan.png",
      precio: 12,
      descripcion: "Rel. Floral",
      categoria: "Parafina",
      pesoGR: 129,
      promocion: true
    },
    {
      titulo: "Vela Escultura Hombre P.",
      slug: "vela_escultura_hombre_p",
      imagen: "/public/img/Parafina/Escul_Hombre.jpg",
      precio: 6,
      descripcion: "Rel. Floral",
      categoria: "Parafina",
      pesoGR: 54,
      promocion: false
    },
    {
      titulo: "Vela Niña(o) P.",
      slug: "vela_ninao_p",
      imagen: "/public/img/Parafina/Vela_niño.jpg",
      precio: 3,
      descripcion: "Rel. Floral",
      categoria: "Parafina",
      pesoGR: 26,
      promocion: false
    },
    {
      titulo: "Vela Tulipan S.",
      slug: "vela_tulipan_s",
      imagen: "/public/img/Soja/Tulipan.jpg",
      precio: 29,
      descripcion: "Amor",
      categoria: "Soja",
      pesoGR: 121,
      promocion: true
    },
    {
      titulo: "Vela Busto Hombre S.",
      slug: "vela_busto_hombre_s",
      imagen: "/public/img/Soja/Busto_Hombre.jpg",
      precio: 15,
      descripcion: "Amor",
      categoria: "Soja",
      pesoGR: 58,
      promocion: false
    },
    {
      titulo: "Vela Vaso Redondo S.",
      slug: "vela_vaso_redondo_s",
      imagen: "/public/img/Soja/Vaso_Redondo.png",
      precio: 14,
      descripcion: "Madera/Rosas Secas",
      categoria: "Soja",
      pesoGR: 46,
      promocion: true
    },
    {
      titulo: "Vela Cuadrada Grande S.",
      slug: "vela_cuadrada_grande_s",
      imagen: "/public/img/Soja/Cuadrada_grande.jpg",
      precio: 51,
      descripcion: "Cappuccino",
      categoria: "Soja",
      pesoGR: 202,
      promocion: false
    },
    {
      titulo: "Vela Cuadrada S.",
      slug: "vela_cuadrada_s",
      imagen: "/public/img/Soja/Vela_cuadrada.jpg",
      precio: 21,
      descripcion: "Madera/Cappuccino",
      categoria: "Soja",
      pesoGR: 75,
      promocion: true
    },
    {
      titulo: "Vela Canister S.",
      slug: "vela_canister_s",
      imagen: "/public/img/Soja/Canister.jpg",
      precio: 29,
      descripcion: "Frambuesas",
      categoria: "Soja",
      pesoGR: 113,
      promocion: false
    },
    {
      titulo: "Vela Postre Tasa S.",
      slug: "vela_postre_tasa_s",
      imagen: "/public/img/Soja/Postre_tasa.jpg",
      precio: 28,
      descripcion: "Cafe/otros",
      categoria: "Soja",
      pesoGR: 145,
      promocion: false
    },
    {
      titulo: "Vela Postre Vaso S.",
      slug: "vela_postre_vaso_s",
      imagen: "/public/img/Soja/Postre_vaso.jpg",
      precio: 20,
      descripcion: "Cafe/otros",
      categoria: "Soja",
      pesoGR: 90,
      promocion: true
    },
    {
      titulo: "Vela Sirena S.",
      slug: "vela_sirena_s",
      imagen: "/public/img/Masajes/Vela_Sirena.jpg",
      precio: 30,
      descripcion: "Eucalipto",
      categoria: "Soja",
      pesoGR: 80,
      promocion: false
    },
    {
      titulo: "Vela Medusa S.",
      slug: "vela_medusa_s",
      imagen: "/public/img/Masajes/Vela_Medusa.png",
      precio: 30,
      descripcion: "Eucalipto",
      categoria: "Soja",
      pesoGR: 80,
      promocion: true
    },
    {
      titulo: "Vela Jarra S.",
      slug: "vela_jarra_s",
      imagen: "/public/img/Masajes/Vela_jarra.jpg",
      precio: 35,
      descripcion: "Ylang Ylang",
      categoria: "Soja",
      pesoGR: 118,
      promocion: false
    },
    {
      titulo: "Manteca Corporal Pz.",
      slug: "manteca_corporal_pz",
      imagen: "/public/img/Pedidos/Manteca_Corporal.jpg",
      precio: 45,
      descripcion: "Ylang Ylang y mas",
      categoria: "Custom",
      pesoGR: 50,
      promocion: false
    },
    {
      titulo: "Bombas Efervescentes -",
      slug: "bombas_efervescentes_",
      imagen: "/public/img/Pedidos/Bombas_efervescentes.jpg",
      precio: 4,
      descripcion: "---",
      categoria: "---",
      pesoGR: 8.75,
      promocion: false
    },
    {
      titulo: "Jabones Corporales G.",
      slug: "jabones_corporales_g",
      imagen: "/public/img/Pedidos/Jabones_corporales.jpg",
      precio: 20,
      descripcion: "Avena/otros",
      categoria: "Glicerina Vegetal",
      pesoGR: 20,
      promocion: false
    },
    {
      titulo: "Vela Niña(o) S.",
      slug: "vela_ninao_s",
      imagen: "/public/img/Recuerdos/Vela_Niño.jpg",
      precio: 4,
      descripcion: "A elección",
      categoria: "Soja",
      pesoGR: 24,
      promocion: false
    },
    {
      titulo: "Vela Tradicional P.",
      slug: "vela_tradicional_p",
      imagen: "/public/img/Recuerdos/Vela_tradicional.jpg",
      precio: 3,
      descripcion: "Sin esencia",
      categoria: "Parafina",
      pesoGR: 30,
      promocion: false
    },
    {
      titulo: "Jabon Letra G.",
      slug: "jabon_letra_g",
      imagen: "/public/img/Recuerdos/Jabon_letra.jpg",
      precio: 2.4,
      descripcion: "A elección",
      categoria: "Glicerina Vegetal",
      pesoGR: 15,
      promocion: true
    },
    {
      titulo: "Vela Decorativa Reno P.",
      slug: "vela_decorativa_reno_p",
      imagen: "/public/img/Navidad/Deco_Reno.jpg",
      precio: 20,
      descripcion: "Dulce variado",
      categoria: "Parafina",
      pesoGR: 123,
      promocion: false
    },
    {
      titulo: "Vela Decorativa Arbol S.",
      slug: "vela_decorativa_arbol_s",
      imagen: "/public/img/Navidad/Deco_Arbol.jpg",
      precio: 20,
      descripcion: "Dulce variado",
      categoria: "Soja",
      pesoGR: 60,
      promocion: true
    },
    {
      titulo: "Vela Decorativa Jengibre S.",
      slug: "vela_decorativa_jengibre_s",
      imagen: "/public/img/Navidad/Deco_Jengibre.jpg",
      precio: 19,
      descripcion: "Dulce variado",
      categoria: "Soja",
      pesoGR: 60,
      promocion: false
    }
  ]

}





