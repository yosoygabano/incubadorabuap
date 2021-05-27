<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="py-12  bg-blue-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase"></h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-4xl">
        Mentoria
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-100 lg:mx-auto">
Acompañamiento en las diferentes etapas de su emprendimiento.
      </p>
    </div>

    <div class="mt-10">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div class="flex">
          <div class="flex-shrink-0">
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-extrabold text-indigo-100">
              {{ncurso4}}
            </dt>
            <dd class="mt-2 text-base text-blue-100">
                {{curso4}}
            </dd>
          </div>
        </div>

        <div class="flex">
          <div class="flex-shrink-0">
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-extrabold text-indigo-100">
                {{ncurso6}}
            </dt>
            <dd class="mt-2 text-base text-blue-100">
                {{curso6}}
            </dd>
          </div>
        </div>

        <div class="flex">
          <div class="flex-shrink-0">
     
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-extrabold text-indigo-100">
                {{ncurso7}}
            </dt>
            <dd class="mt-2 text-base text-blue-100">
                {{curso7}}
            </dd>
          </div>
        </div>

        <div class="flex">
          <div class="flex-shrink-0">
    
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-extrabold text-indigo-100">
                {{ncurso8}}
            </dt>
            <dd class="mt-2 text-base text-blue-100">
                {{curso8}}
            </dd>
          </div>
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
 
ncurso4:"Coach para universitarios", 
curso4:"Brindamos acompañamiento a emprendedores universitarios ", 
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