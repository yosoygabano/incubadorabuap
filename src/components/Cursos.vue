<template>
<div class="container mx-auto ">
<h1 class=" my-4 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center">  Nuestros cursos</h1> 
<div class="grid grid-cols-1 my-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
  <div class="flex flex-wrap bg-gray-50">
    <div class="max-w-xs mx-auto rounded-lg overflow-hidden bg-blue-900 shadow-2xl">
       <img class="w-full" src="@/img/uno.svg" alt="Sunset in the mountains"> 
      <div class="px-6 ">
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
  </div>
  <div class="flex flex-wrap bg-gray-50">
    <div class="max-w-xs mx-auto rounded-lg overflow-hidden bg-blue-900 shadow-2xl">
       <img class="w-full" src="@/img/cowor.svg" alt="Sunset in the mountains"> 
      <div class="px-6 ">
        <div class="font-bold text-gray-100 text-xl mb-2">{{curso1}}</div>
          <p class="text-gray-400 text-base">
            {{Descripcion1}}
          </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{Botontes}}</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  </div>
   <div class="flex flex-wrap bg-gray-50">
    <div class="max-w-xs mx-auto rounded-lg overflow-hidden bg-blue-900 shadow-2xl">
       <img class="w-full" src="@/img/social.svg" alt="Sunset in the mountains"> 
      <div class="px-6 ">
        <div class="font-bold text-gray-100 text-xl mb-2">{{curso2}}</div>
          <p class="text-gray-400 text-base">
            {{Descripcion2}}
          </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{Botontes}}</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
    data(){
        return{
            curso:"Design thinking ",
            curso1:"Lean Startup",
            curso2:"Google trends",
            Descripcion:"Una marco de trabajo que te ayudara a crear productos exitosos",
            Descripcion1:"Aprenderás a limitar tu proyecto moldeando un producto mínimo viable.",
            Descripcion2:"Aprenderás a buscar las tendencias de google así como cómo el usuario busca tu producto.",
            Botontes:"Ágile"
        }
    }
}
</script>