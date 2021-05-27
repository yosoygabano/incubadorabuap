<template>
<div class="py-12" >
  <h1 class=" my-12 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center">  Cursos</h1> 

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
<div>
      
<div class="max-w-screen-xs py-12 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between ">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      Ready to dive in?
      <br>
      <span class="text-indigo-600">Start your free trial today.</span>
    </h2>
    <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
      <div class="inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Get started
        </a>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Learn more
        </a>
      </div>
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
            Descripcion:"Una marco de trabajo que te ayudara a crear productos exitosos",
            Botontes:"Ágile"
        }
    }
}
</script>