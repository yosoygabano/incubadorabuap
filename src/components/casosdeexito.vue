<template>
<div class="container mx-auto ">
 <h1 class=" my-4 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center">  Nuestros incubados</h1> 
  <div class="grid gap-6 mb-8 md:grid-cols-2">
   <div v-for="(datos,i) in datos"
                    :key="i" class="py-5 shadow-2xl ">
        <main class="h-full overflow-y-auto">
            <div class="container  mx-auto grid">
              <!-- Cards -->
              <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex">
                <div class="md:flex-shrink-0">
                  <img class="h-48 w-full object-cover md:w-48" src="@/img/uno.svg" alt="Man looking at item at a store">
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{datos.empresa}}</div>
                  <p class="mt-2 text-gray-500"> {{datos.descripcion}}.</p>
                </div>
              </div>
            </div>

            </div>
            
        </main>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
datos:[
  {
    id:1,
    empresa: "MUUK",
    descripcion:"Lugar de expresión para artes diversas, como punto de reunión. "
  },
    {
    id:2,
    empresa: "LA ESQUINA DE HELICON ",
    descripcion:"Lugar de expresión para artes diversas, como punto de reunión. "
  },
    {
    id:3,
    empresa: "PLUMONES KRAKEN",
    descripcion:"Reutilización de Plumones"
  },
    {
    id:4,
    empresa: "BIOPLÁSTICO",
    descripcion:"Bioplástico Con Residuos de Limón "
  },
    {
    id:5,
    empresa: "ELSA TECHNOLOGY",
    descripcion:"Empresa de soluciones tecnológicas"
  },
    {
    id:6,
    empresa: "HAMBRU",
    descripcion:"Elaboración de bolsas a mano tipo pañaleras"
  },
    {
    id:7,
    empresa: "KAENDA",
    descripcion:"Botanas  a base de coco horneado "
  },
    {
    id: 8,
    empresa: "MIKE WINTER",
    descripcion:"Elaboración de figuras a base de moldeado artesanal, donde puedes personalizar tu idea"
  },
      {
    id: 9,
    empresa: "UNLIMITED",
    descripcion:"Agencia de viajes "
  },
      {
    id: 10,
    empresa: "STAFF",
    descripcion:"Staff para eventos con universitarios "
  },
      {
    id: 11,
    empresa: "Doggy Go",
    descripcion:"Ecommerce de productos para mascotas "
  },
      {
    id: 12,
    empresa: "Lactancia Materna",
    descripcion:"Empresa de capacitaciones especializadas "
  },
]
        }
    }
}
</script>