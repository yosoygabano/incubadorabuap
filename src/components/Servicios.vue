<template>
<!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
<div class="py-12 ">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p class="text-base leading-6 text-blue-500 font-semibold tracking-wide uppercase"></p>
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-700  sm:text-4xl sm:leading-10">
          Servicios de incubadora
        </h3>
      </div>
        <!-- This is an example component -->
      <div class="mx-4 pt-10 ">
        <div class="grid gap-6 mb-8 md:grid-cols-2">
                    <div class="min-w-0 p-4 bg-blue-600 rounded-lg shadow-xs dark:bg-gray-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
                      <h4 class="mb-4 font-semibold text-gray-100 dark:text-gray-300">
                        {{ncurso1}}
                      </h4>
                      <p class="text-gray-100 dark:text-gray-100">
                        {{curso1}}
                      </p>
                    </div>
                    <div class="min-w-0 p-4 text-white bg-purple-600 rounded-lg shadow-xs transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
                      <h4 class="mb-4 font-semibold">
                        {{ncurso2}}
                      </h4>
                      <p>
                        {{curso2}}
                      </p>
                    </div>
                </div>
        </div>
      <div class="mx-4  ">
        <div class="grid gap-6 mb-8 md:grid-cols-2">
                    <div class="min-w-0 p-4 bg-pink-600 rounded-lg shadow-xs dark:bg-gray-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
                      <h4 class="mb-4 font-semibold text-gray-100 dark:text-gray-300">
                        {{ncurso3}}
                      </h4>
                      <p class="text-gray-100 dark:text-gray-100">
                        {{curso3}}
                      </p>
                    </div>
                    <div class="min-w-0 p-4 text-white bg-gray-800 rounded-lg shadow-xs transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
                      <h4 class="mb-4 font-semibold">
                        {{ncurso5}}
                      </h4>
                      <p>
                        {{curso5}}
                      </p>
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
      ncurso1:"Incubación de base social", 
curso1:"Impulsamos emprendimientos con problemáticas sociales incorporando asesoría, formación y mentorías.", 
ncurso2:"Incubación tradicional.", 
curso2:"Impulsamos emprendimientos de estudiantes universitarios.", 
ncurso3:"Capacitación",  
curso3:"Ofrecemos capacitación personalizada para tu emprendimiento. Ofrecemos capacitación grupal en tu emprendimiento.", 
ncurso4:"Coach para universitarios", 
curso4:"Brindamos acompañamiento a emprendedores universitarios ", 
ncurso5:"Marketing digital", 
curso5:"Analiza el entorno, define tus objetivos, prepara una estrategia, Muestra lo que haces, mide los resultados.", 
ncurso6:"Plan de negocios", 
curso6:"Te ayudamos a formar distintas estrategias para tu plan de negocios.", 
ncurso7:"Modelo de negocios.", 
curso7:"Forma un plan de negocio evaluando las estrategias para alcanzar tus objetivos en tu emprendimiento.", 
ncurso8:"Mentorías.", 
curso8:"Ofrecemos apoyo de nuestros mentores, ellos te guiaran para crear un producto exitoso. ", 

    }
  }
}
</script>