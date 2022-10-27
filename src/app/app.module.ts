import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { inicioComponent } from './components/libros/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MostrarLibrosComponent } from './components/usuarios/mostrar-libros/mostrar-libros.component';
import { RegistrarUsuarioComponent } from './components/usuarios/registrar-usuario/registrar-usuario.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios.component';
import { ListarPrestamosComponent } from './components/libros/listar-prestamos/listar-prestamos.component';

@NgModule({
  declarations: [
    AppComponent,
    inicioComponent,
    LoginComponent,
    NavbarComponent,
    MostrarLibrosComponent,
    RegistrarUsuarioComponent,
    ListarUsuariosComponent,
    ListarPrestamosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
