<template>
<div class="mx-2 ">
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class=" bg-blue-900 shadow-xl overflow-hidden sm:rounded-lg" style="max-width:1000px">
  <div class="px-4 py-5 sm:px-6">
    <h3 class=" text-xl	 font-bold text-gray-100">
     Curso {{Nombrecurso}}
    </h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">
     
    </p>
  </div>
  <div class="border-t border-gray-200">
    <dl>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class=" font-bold text-gray-500">
          Instructor
        </dt>
        <dd class="mt-1 text-sm text-left	 text-gray-900 sm:mt-0 sm:col-span-2">
          {{Instructor}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-bold text-gray-500">
          Descripción
        </dt>
        <dd class="mt-1 text-sm text-left	 text-gray-900 sm:mt-0 sm:col-span-2">
          {{Descripcion}}
        </dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-bold text-gray-500">
          Contenido del curso
        </dt>
        <dd class="mt-1 text-sm  text-left	text-gray-900 sm:mt-0 sm:col-span-2">
          {{Contenidocurso}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-bold text-gray-500">
           Horas de curso
        </dt>
        <dd class="mt-1 text-sm text-left	 text-gray-900 sm:mt-0 sm:col-span-2">
          {{Horascurso}}
        </dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-bold text-gray-500">
          Fecha Inicio
        </dt>
        <dd class="mt-1 text-sm text-left	text-gray-900 sm:mt-0 sm:col-span-2">
        {{Fechainicio}}
         </dd>
      </div>

    </dl>
  </div>
</div>
</div>
</template>
<script>
export default {
  data(){
    return{
      Nombrecurso:" Design thinking",
      Instructor:"Marco Antonio ",
      Descripcion:"Una marco de trabajo que te ayudara a crear productos exitosos",
      Contenidocurso:"1 Presentación",
      Horascurso:"Viernes Y Jueves 8:00pm ",
      Fechainicio:" 24 De mayo",



    }
  }
}
</script>