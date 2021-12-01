import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-certificados-screen',
  templateUrl: './certificados-screen.component.html',
  styleUrls: ['./certificados-screen.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})
export class CertificadosScreenComponent {

    certificados: any[] = [
      {
        imagen: "certificadoej.png",
        titulo: "Curso de Programación",
        certificado: "certificadoej.jpg",
      },
      {
        imagen: "certificadoej.png",
        titulo: "Curso de Diseño UI/UX",
        certificado: "certificadoej.jpg",
      },
      {
        imagen: "certificadoej.png",
        titulo: "Curso de Diseño Gráfico",
        certificado: "certificadoej.jpg",
      }

    ]

    otroscursos: any[] = [
      {
        url: "https://www.youtube.com/embed/rEsSxd0L4GI",
        titulo: "Curso de programación",
        descripcion: "4 Módulos"
      },{
        url: "https://www.youtube.com/embed/rEsSxd0L4GI",
        titulo: "Curso de diseño",
        descripcion: "2 Módulos"
      },{
        url: "https://www.youtube.com/embed/rEsSxd0L4GI",
        titulo: "Curso de programación web",
        descripcion: "2 Módulos"
      }
    ]


    closeResult = '';
    constructor(private modalService: NgbModal) {}

    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    openScrollableContent(content:any) {
      this.modalService.open(content, { scrollable: true });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  }




