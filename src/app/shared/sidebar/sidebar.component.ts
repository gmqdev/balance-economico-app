import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    // Are you sure?
    Swal.fire({
      title: 'Cerrar sesión',
      text: "¿Estás seguro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'No, volver atrás'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout().then(() => {
          Swal.fire(
            'Sesión cerrada',
            '¡Hasta pronto!',
            'success'
          )
          this.router.navigate(['/login']);
        });
      }
    })
  }
}
