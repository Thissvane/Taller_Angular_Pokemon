import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface RegistroData {
  nombre: string;
  usuario: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  model: RegistroData = { nombre: '', usuario: '', email: '', password: '' };
  registrado: RegistroData | null = null;

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    this.registrado = { ...this.model };
  }
}
