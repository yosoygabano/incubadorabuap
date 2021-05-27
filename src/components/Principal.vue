<template>
<div>
<div class="container flex flex-wrap mx-auto my-4 "> 
    <div>
      <main class=" mx-1 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left  py-12">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            {{titulo}}
            
            <span class="text-blue-600">{{titulo2}}</span>
          </h2>
          <p class="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
           {{titulo3}}
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex items-center justify-center mx-auto py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                {{titulo4}}
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center mx-auto py-3 border border-transparent text-base leading-6 font-bold rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                {{titulo5}}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div class="max-w-lg">
      <img class=" my-12 object-right-bottom   " src="@/img/incubador.svg" alt="">
    </div>
</div>

   <servicios/> 
   <buap/>
    <mentoria/>
    
    <valores/> 
    <organigrama/>
     <objetivo/>
      
    <pooter/>  
    <formulario/>
</div>

</template>

<script>

//import Cursos from '@/components/Cursos.vue'
import Servicios from '@/components/Servicios.vue'
import Organigrama from '@/components/Organigrama.vue'
import Pooter from '@/components/Footer.vue'
import Objetivo from '@/components/Objetivo.vue'
import Formulario from '@/components/Formulario.vue'
import Mentoria from '@/components/Mentoria.vue'
import Buap from '@/components/Buap.vue'
import Valores from '@/components/Valores.vue'
export default {
  components: {
 

  Servicios,
  Organigrama,
  Pooter,
  Objetivo,
  Formulario,
  Mentoria, 
  Buap,
  Valores
   },
    data (){
     return{
       titulo: "Proceso de",
       titulo2: "incubación",
       titulo3: "Conoce más sobre nuestros programas de incubación ",
       titulo4: "Incubación",
       titulo5: "Cursos"

     }
   }
}
</script>