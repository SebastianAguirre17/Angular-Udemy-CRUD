import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/hereos.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    constructor(private heroesServices: HeroesService) { }

    heroes: HeroeModel[] = [];
    cargando = false;

    ngOnInit(): void {
        this.cargando = true;

        this.heroesServices.getHeroes()
            .subscribe(resp => {
                this.heroes = resp;
                this.cargando = false;
            });
    }

    borrarHeroe(heroe: HeroeModel, index: number) {

        Swal.fire({
            title: 'Eliminar',
            text: `¿Está seguro que desea eliminar a ${heroe.nombre}?`,
            allowOutsideClick: false,
            icon: 'info',
            showConfirmButton: true,
            showCancelButton: true
        }).then(resp => {
            if(resp.value) {
                this.heroes.splice(index, 1);
                this.heroesServices.borrarHeroe(heroe.id)
                    .subscribe()
            }
        })
    }
}
