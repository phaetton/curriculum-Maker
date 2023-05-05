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
  nombre: string = "Rafael Francisco";
  apellidos: string = "Serrano Urtecho";
  posicionlaboral: string = "Programador Web";
  telefono: string = "612471014";
  email: string = "rafa.tesla@gmail.com";
  perfilprofesional: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere massa arcu, eu porttitor est tincidunt sed. Integer sit amet volutpat metus, ac varius velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel quam ultricies, venenatis risus sit amet, mollis justo. Aenean ut convallis velit. Vivamus interdum rhoncus mauris non convallis. Duis in nibh porta nunc dictum tristique. Fusce tristique maximus risus, eu sollicitudin risus interdum ut. Vestibulum malesuada vitae arcu sed congue.  Etiam molestie dignissim odio sollicitudin fermentum. Sed risus ex, cursus ac purus non, placerat bibendum neque. Phasellus pharetra nec augue sit amet finibus. Ut condimentum sem in dignissim tristique. In sit amet sagittis magna. Nam id tincidunt ante. Donec porttitor ante arcu, nec porta diam faucibus quis. Cras fringilla libero nec cursus volutpat. Nullam feugiat nulla lorem, vitae vestibulum augue bibendum sit amet. Nullam odio neque, viverra et nisi non, elementum tempus turpis. Mauris et bibendum eros. Maecenas porttitor congue eros sed gravida. Cras condimentum, turpis vel varius tincidunt, leo massa vehicula dui, eu ultrices quam libero vitae lacus.  Cras magna metus, consequat eu diam ac, tincidunt faucibus risus. Curabitur id eros nec purus bibendum cursus quis quis purus. Nulla neque tellus, congue ut sollicitudin ut, mollis id sem. Praesent ex quam, vulputate at enim id, sodales egestas augue. Mauris interdum justo venenatis, molestie mi vel, euismod mi. Vivamus luctus, libero eu luctus mollis, ligula elit malesuada mauris, sed dictum augue ante et erat. Vivamus sed urna eu arcu placerat pretium eu nec diam. Nulla suscipit lectus ut mauris porta, ut congue felis aliquam. Nullam consectetur dui sit amet maximus tempor. Nam pellentesque rhoncus sapien. Etiam vestibulum scelerisque tempor. Maecenas auctor, magna a laoreet suscipit, purus velit sollicitudin ipsum, eget venenatis odio ipsum ac augue.";

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
      experienciaLaboral: new FormControl(''),
    })
    this.experienciaLaboral.push(experienciaLaboralFg);
  }
  anadirformacionacademica() {
    const formacionacademicaFg = this.fb.group({
      formacionacademica: new FormControl(''),
    })
    this.formacionacademica.push(formacionacademicaFg);
  }
  anadirotrasactividades() {
    const otrasactividadesFg = this.fb.group({
      otrasactividades: new FormControl(''),
    })
    this.otrasactividades.push(otrasactividadesFg);
  }
  anadirreferencias() {
    const referenciasFg = this.fb.group({
      referencias: new FormControl(''),
    })
    this.referencias.push(referenciasFg);
  }
  anadirpracticas() {
    const practicasFg = this.fb.group({
      practicas: new FormControl(''),
    })
    this.practicas.push(practicasFg);
  }
  anadircursosrealizados() {
    const cursosrealizadosFg = this.fb.group({
      cursosrealizados: new FormControl(''),
    })
    this.cursosrealizados.push(cursosrealizadosFg);
  }
  anadirpermisodeconduccion() {
    const permisodeconduccionFg = this.fb.group({
      permisodeconduccion: new FormControl(''),
    })
    this.permisodeconduccion.push(permisodeconduccionFg);
  }
  anadirenlaces() {
    const enlacesFg = this.fb.group({
      enlaces: new FormControl(''),
    })
    this.enlaces.push(enlacesFg);
  }
  anadirhobbies() {
    const hobbiesFg = this.fb.group({
      hobbies: new FormControl(''),
    })
    this.hobbies.push(hobbiesFg);
  }
  anadirhabilidades() {
    const habilidadesFg = this.fb.group({
      habilidades: new FormControl(''),
    })
    this.habilidades.push(habilidadesFg);
  }
  anadiridiomas() {
    const idiomasFg = this.fb.group({
      idiomas: new FormControl(''),
    })
    this.idiomas.push(idiomasFg);
  }






  borrarexperienciaLaboral(indice:number){
    this.experienciaLaboral.removeAt(indice);
  }
  borrarformacionacademica(indice:number){
    this.formacionacademica.removeAt(indice);
  }
  borrarotrasactividades(indice:number){
    this.otrasactividades.removeAt(indice);
  }
  borrarreferencias(indice:number){
    this.referencias.removeAt(indice);
  }
  borrarpracticas(indice:number){
    this.practicas.removeAt(indice);
  }
  borrarcursosrealizados(indice:number){
    this.cursosrealizados.removeAt(indice);
  }
  borrarpermisodeconduccion(indice:number){
    this.permisodeconduccion.removeAt(indice);
  }
  borrarenlaces(indice:number){
    this.enlaces.removeAt(indice);
  }
  borrarhobbies(indice:number){
    this.hobbies.removeAt(indice);
  }
  borrarhabilidades(indice:number){
    this.habilidades.removeAt(indice);
  }
  borraridiomas(indice:number){
    this.idiomas.removeAt(indice);
  }



}
