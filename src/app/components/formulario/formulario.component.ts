import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'; // Todavía no lo usamos


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

    this.downloadPDF();
  }

    // tslint:disable-next-line:typedef
  downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale:2
    };
    html2canvas(DATA!, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`tutorial.pdf`);
    });
  }

  // public downloadPDF(): void {
  //   const doc = new jsPDF();

  //   doc.text('Hello world!', 10, 10);
  //   doc.save('hello-world.pdf');
  // }

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
      nombre: new FormControl(""),
      apellidos: new FormControl(""),
      posicionlaboral: new FormControl(""),
      telefono: new FormControl(""),
      email: new FormControl(""),
      perfilprofesional: new FormControl(""),

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
      habilidad: new FormControl(''),
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
