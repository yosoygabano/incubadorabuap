<template>
<div>
    <nav class="flex items-center justify-between flex-wrap bg-transparent  p-8">
        <div class="flex items-center flex-shrink-0 text-blue-900 mr-6">
          <img @click="seleccionar('Principal')" class="fill-current" width="100" height="54"  src="@/img/incubadora.jpeg" >
        
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-3 border rounded text-indigo-600  border-indigo-400 hover:text-blue-400 hover:border-blue-600 ">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="hidden md:block md:ml-12 md:pr-20">
            <a @click="seleccionar('Principal')" href="#" class="font-semibold text-blue-700 hover:text-gray-900 transition duration-150 ease-in-out">Inicio</a>
            <a @click="seleccionar('cursos')" href="#" class="ml-10 font-semibold text-blue-700 hover:text-gray-900 transition duration-150 ease-in-out">Cursos</a>
            <a @click="seleccionar('Enactus')" href="#" class="ml-10 font-semibold text-blue-700 hover:text-gray-900 transition duration-150 ease-in-out">Enactus</a>
            <a @click="seleccionar('Convocatorias')" href="#" class="ml-10 font-semibold text-blue-700 hover:text-gray-900 transition duration-150 ease-in-out">Convocatorias</a>
            <a @click="seleccionar('exito')" href="#" class="ml-10 font-semibold text-blue-700 hover:text-gray-900 transition duration-150 ease-in-out">Casos de éxito</a>
            <a @click="seleccionar('registro')" href="#" class="ml-10 font-semibold text-blue-700 hover:text-gray-900 transition duration-150 ease-in-out">Registro</a>
            <a @click="seleccionar('login')" href="#" class="ml-10 font-semibold text-blue-700 hover:text-gray-900 transition duration-150 ease-in-out">Login</a>        
         
          </div>
          
      </nav>

        <content>
        
          <component :is="componenenteactual"> 
            </component>   
       
      </content>  

    </div>  

</template>

<script>
import Principal from '@/components/Principal.vue'
import Cursos from '@/components/Cursos.vue'
import registro from '@/components/Registro.vue'
import exito from '@/components/casosdeexito.vue'
import Login from '@/components/Login.vue'
import Incubacion from '@/views/Incubacion.vue'
import Enactus from '@/views/Enactus.vue'
import Convocatorias from '@/views/Convocatorias.vue'
import Casos from '@/views/Casosdeexito.vue'
import Cursov from '@/views/Cursos.vue'

/*import Servicios from '@/components/Servicios.vue'
import Organigrama from '@/components/Organigrama.vue'
import Pooter from '@/components/Footer.vue'
import Objetivo from '@/components/Objetivo.vue'
import Formulario from '@/components/Formulario.vue'
*/
export default {
      name:'app',
  components: {
  Principal, 
  Cursos, 
  Incubacion,
  Enactus,
  Convocatorias,
  Casos,
  Cursov, 
  registro,
  Login,
  exito,
  /*
  Servicios,
  Organigrama,
  Pooter,
  Objetivo,
  Formulario */
   },
  data(){
    return{
      componenenteactual:'Principal',
    }
  },

   methods :{
     seleccionar(nombre){
       this.componenenteactual= nombre
     }
   }
   
} 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #003b5c;
}
</style>