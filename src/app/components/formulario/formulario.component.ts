import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario!: FormGroup;

  temacolor =
    {
      texto: "text-green-700",
      fondo: "bg-green-950",
      textofondo: "text-white",
    }

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      experienciaLaboral: this.fb.array([]),
      formacionacademica: this.fb.array([]),
      otrasactividades: this.fb.array([]),
      referencias: this.fb.array([]),
      practicas: this.fb.array([]),
      cursosrealizados: this.fb.array([]),
      permisodeconduccion: this.fb.array([]),
      enlaces: this.fb.array([]),
      hobbies: this.fb.array([]),
      habilidades: this.fb.array([]),
      idiomas: this.fb.array([]),
      nombre: new FormControl("Rafael Francisco"),
      apellidos: new FormControl("Serrano Urtecho"),
      posicionlaboral: new FormControl("Programador Web"),
      telefono: new FormControl("612471014"),
      email: new FormControl("rafa.tesla@gmail.com"),
      perfilprofesional: new FormControl("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere massa arcu, eu porttitor est tincidunt sed. Integer sit amet volutpat metus, ac varius velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel quam ultricies, venenatis risus sit amet, mollis justo. Aenean ut convallis velit. Vivamus interdum rhoncus mauris non convallis. Duis in nibh porta nunc dictum tristique. Fusce tristique maximus risus, eu sollicitudin risus interdum ut. Vestibulum malesuada vitae arcu sed congue.  Etiam molestie dignissim odio sollicitudin fermentum. Sed risus ex, cursus ac purus non, placerat bibendum neque. Phasellus pharetra nec augue sit amet finibus. Ut condimentum sem in dignissim tristique. In sit amet sagittis magna. Nam id tincidunt ante. Donec porttitor ante arcu, nec porta diam faucibus quis. Cras fringilla libero nec cursus volutpat. Nullam feugiat nulla lorem, vitae vestibulum augue bibendum sit amet. Nullam odio neque, viverra et nisi non, elementum tempus turpis. Mauris et bibendum eros. Maecenas porttitor congue eros sed gravida. Cras condimentum, turpis vel varius tincidunt, leo massa vehicula dui, eu ultrices quam libero vitae lacus.  Cras magna metus, consequat eu diam ac, tincidunt faucibus risus. Curabitur id eros nec purus bibendum cursus quis quis purus. Nulla neque tellus, congue ut sollicitudin ut, mollis id sem. Praesent ex quam, vulputate at enim id, sodales egestas augue. Mauris interdum justo venenatis, molestie mi vel, euismod mi. Vivamus luctus, libero eu luctus mollis, ligula elit malesuada mauris, sed dictum augue ante et erat. Vivamus sed urna eu arcu placerat pretium eu nec diam. Nulla suscipit lectus ut mauris porta, ut congue felis aliquam. Nullam consectetur dui sit amet maximus tempor. Nam pellentesque rhoncus sapien. Etiam vestibulum scelerisque tempor. Maecenas auctor, magna a laoreet suscipit, purus velit sollicitudin ipsum, eget venenatis odio ipsum ac augue."),

    });
  }

  get experienciaLaboral(): FormArray {
    return this.formulario.get('experienciaLaboral') as FormArray;
  }
  get formacionacademica(): FormArray {
    return this.formulario.get('formacionacademica') as FormArray;
  }
  get otrasactividades(): FormArray {
    return this.formulario.get('otrasactividades') as FormArray;
  }
  get referencias(): FormArray {
    return this.formulario.get('referencias') as FormArray;
  }
  get practicas(): FormArray {
    return this.formulario.get('practicas') as FormArray;
  }
  get cursosrealizados(): FormArray {
    return this.formulario.get('cursosrealizados') as FormArray;
  }
  get permisodeconduccion(): FormArray {
    return this.formulario.get('permisodeconduccion') as FormArray;
  }
  get enlaces(): FormArray {
    return this.formulario.get('enlaces') as FormArray;
  }
  get hobbies(): FormArray {
    return this.formulario.get('hobbies') as FormArray;
  }
  get habilidades(): FormArray {
    return this.formulario.get('habilidades') as FormArray;
  }
  get idiomas(): FormArray {
    return this.formulario.get('idiomas') as FormArray;
  }



  anadirexperienciaLaboral() {
    const experienciaLaboralFg = this.fb.group({
      posicionlaboral: new FormControl(''),
      empresa: new FormControl(''),
      fechainicio: new FormControl(''),
      fechafin: new FormControl(''),
      ciudad: new FormControl(''),
      resumen: new FormControl(''),
    })
    this.experienciaLaboral.push(experienciaLaboralFg);
  }

  anadirformacionacademica() {
    const formacionacademicaFg = this.fb.group({
      escuela: new FormControl(''),
      grado: new FormControl(''),
      fechainicio: new FormControl(''),
      fechafin: new FormControl(''),
      ciudad: new FormControl(''),
      resumen: new FormControl(''),
    })
    this.formacionacademica.push(formacionacademicaFg);
  }

  anadirotrasactividades() {
    const otrasactividadesFg = this.fb.group({
      titulo: new FormControl(''),
      grado: new FormControl(''),
      fechainicio: new FormControl(''),
      fechafin: new FormControl(''),
      ciudad: new FormControl(''),
      resumen: new FormControl(''),
    })
    this.otrasactividades.push(otrasactividadesFg);
  }
  anadirreferencias() {
    const referenciasFg = this.fb.group({
      referencia: new FormControl(''),
      compania: new FormControl(''),
      telefono: new FormControl(''),
      email: new FormControl(''),
    })
    this.referencias.push(referenciasFg);
  }
  anadirpracticas() {
    const practicasFg = this.fb.group({
      titulo: new FormControl(''),
      empresa: new FormControl(''),
      fechainicio: new FormControl(''),
      fechafin: new FormControl(''),
      ciudad: new FormControl(''),
      resumen: new FormControl(''),
    })
    this.practicas.push(practicasFg);
  }
  anadircursosrealizados() {
    const cursosrealizadosFg = this.fb.group({
      instituto: new FormControl(''),
      curso: new FormControl(''),
      fechainicio: new FormControl(''),
      fechafin: new FormControl(''),  
    })
    this.cursosrealizados.push(cursosrealizadosFg);
  }
  anadirpermisodeconduccion() {
    const permisodeconduccionFg = this.fb.group({
      titulo: new FormControl(''),
    })
    this.permisodeconduccion.push(permisodeconduccionFg);
  }
  anadirenlaces() {
    const enlacesFg = this.fb.group({
      etiqueta: new FormControl(''),
      url: new FormControl(''),
    })
    this.enlaces.push(enlacesFg);
  }
  anadirhobbies() {
    const hobbiesFg = this.fb.group({
      resumen: new FormControl(''),
    })
    this.hobbies.push(hobbiesFg);
  }
  anadirhabilidades() {
    const habilidadesFg = this.fb.group({
      habilidades: new FormControl(''),
      nivel: new FormControl(''),
    })
    this.habilidades.push(habilidadesFg);
  }
  anadiridiomas() {
    const idiomasFg = this.fb.group({
      idioma: new FormControl(''),
      nivel: new FormControl(''),
    })
    this.idiomas.push(idiomasFg);
  }






  borrarexperienciaLaboral(indice: number) {
    this.experienciaLaboral.removeAt(indice);
  }
  borrarformacionacademica(indice: number) {
    this.formacionacademica.removeAt(indice);
  }
  borrarotrasactividades(indice: number) {
    this.otrasactividades.removeAt(indice);
  }
  borrarreferencias(indice: number) {
    this.referencias.removeAt(indice);
  }
  borrarpracticas(indice: number) {
    this.practicas.removeAt(indice);
  }
  borrarcursosrealizados(indice: number) {
    this.cursosrealizados.removeAt(indice);
  }
  borrarpermisodeconduccion(indice: number) {
    this.permisodeconduccion.removeAt(indice);
  }
  borrarenlaces(indice: number) {
    this.enlaces.removeAt(indice);
  }
  borrarhobbies(indice: number) {
    this.hobbies.removeAt(indice);
  }
  borrarhabilidades(indice: number) {
    this.habilidades.removeAt(indice);
  }
  borraridiomas(indice: number) {
    this.idiomas.removeAt(indice);
  }



}
