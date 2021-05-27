<template>
<!-- Este ocupamos el ciclo ford-->
<div class="my-6 ">
<div class="flex flex-wrap justify-center">
  <div class="px-4">
    <img src="@/img/objetivo.png" alt="..." class=" max-w-full h-auto align-middle border-none" />
  </div>
</div>

   <div class="py-5">
        <main class="h-full overflow-y-auto">
            <div class="container  mx-auto grid">
              <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <!-- Card -->
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xl dark:bg-gray-800 container"
                  v-for="i in objetivo"
                  :key="i.oid"
                  cols="12"
                  sm="4">
                  <div class="p-3 mr-4 text-blue-100  rounded-full dark:text-orange-100" :style="myStyle">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                     {{objetivo[i]}}  {{i}}
                    </p>
                  </div>
                </div>

              </div>
  
            </div>
        </main>
    </div>

</div>
</template>

<script>
export default {
  data(){
    return{
      objetivo:['Fin de la pobreza',' Hambre cero', ' Salud y bienestar',' Educación de calidad', 'Igualdad de género', 'Agua limpia y saneamiento', ' Energía asequible y no contaminante', ' Trabajodecente y crecimiento económico','Industria, Innovación e infraestructura',' Reducción de las desigualdades',' Ciudades y comunidades sostenibles','Producción y consumo responsable','Acción por el clima','Vida submarina',' Vida de ecosistemas terrestres','Paz, Justicia e intituciones sólidas',' Alianza para lograr los objetivos' ],
      
      myStyle:{
         backgroundColor:"#16a085" 

      }
    
    }
  }
  //
}
</script>