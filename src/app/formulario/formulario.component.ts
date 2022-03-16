import { PersonasService } from './../personas.service';
import { LoggingService } from './../LoggingService.service';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  //@Output() personaCreada = new EventEmitter<Persona>();

  nombreInput= '';
  apellidoInput= '';

  //@ViewChild('nombreInput') nombreInput: ElementRef;
  //@ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private loggingService: LoggingService,
              private personasService: PersonasService){
                this.personasService.saludar.subscribe(
                  (indice: number) => alert("El indice es: " + indice)
                  );
              }

  ngOnInit(): void {

  }

  agregarPersona(){

    //let persona = new Persona(
      //this.nombreInput.nativeElement.value,
      //this.apellidoInput.nativeElement.value);

    //this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre: " + persona.nombre + " apellido: " + persona.apellido);
    //this.personaCreada.emit(persona);

    let persona = new Persona(this.nombreInput, this.apellidoInput);

    this.personasService.agregarPersona(persona);
  }

}
