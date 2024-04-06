import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-exercises',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle
    ],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss'
})
export class ExercisesComponent {

}
