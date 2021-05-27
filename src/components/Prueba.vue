<template>
<div class="container">
 <div class="center my-10">
<h1 class=" my-12 text-center font-sans text-4xl tracking-tight leading-10 font-extrabold text-gray-600 sm:text-5xl sm:leading-none md:text-6xl"> Cursos</h1>
</div>

<div class="max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg bg-blue-900">
  <img class="w-full" src="@/img/uno.svg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-gray-100 text-xl mb-2">{{curso}}</div>
    <p class="text-gray-400 text-base">
    {{Descripcion}}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{Botontes}}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>


<h1 class=" my-12  font-sans text-4xl tracking-tight leading-10 font-extrabold text-gray-600 sm:text-5xl sm:leading-none md:text-6xl"> Servicios</h1>
</div>
</template>
<script>
export default {
    data(){
        return{
            curso:"Design thinking ",
            Descripcion:"Una marco de trabajo que te ayudara a crear productos éxitosos",
            Botontes:"Ágile"
        }
    }
}
</script>