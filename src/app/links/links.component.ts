import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-links',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle
    ],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {

}
