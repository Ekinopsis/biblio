import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { inicioComponent } from './components/libros/inicio/inicio.component';
import { ListarPrestamosComponent } from './components/libros/listar-prestamos/listar-prestamos.component';
import { LoginComponent } from './components/login/login.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios.component';
import { MostrarLibrosComponent } from './components/usuarios/mostrar-libros/mostrar-libros.component';
import { RegistrarUsuarioComponent } from './components/usuarios/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'registrarUsuario', component: RegistrarUsuarioComponent},
  {path:'mostrarLibros', component: MostrarLibrosComponent},

  // {path:'editarUsuario', component: LoginComponent},
  {path:'inicio', component: inicioComponent},
  {path:'listarUsuarios', component: ListarUsuariosComponent},
  {path:'listarPrestamos', component: ListarPrestamosComponent},

  {path:'**',redirectTo:'',pathMatch:'full'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
