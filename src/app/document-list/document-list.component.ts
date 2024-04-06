import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {JsonPipe, NgForOf} from "@angular/common";
import {ExerciseDocType} from "../types/exercise-doc";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatSort, MatSortHeader, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {dataConfig} from "../data-config";
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatPaginator,
    JsonPipe,
    NgForOf,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef,
    MatSort,
    MatSortHeader
  ],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.scss'
})
export class DocumentListComponent implements AfterViewInit, OnInit {

  assetsDocs = '/assets/docs/';
  assetsPdf = '/assets/pdfs/';

  documentsData: ExerciseDocType[] = [];

  documentBaseName = dataConfig.documentBaseName;
  documentFirstNumber = dataConfig.documentFirstNumber;
  documentLastNumber = dataConfig.documentLastNumber;

  displayedColumns: string[] = ['position', 'name', 'docxLink', 'pdfLink'];
  dataSource = new MatTableDataSource<ExerciseDocType>(this.documentsData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    this.makeData();
  }
  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Документов на странице:'
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private makeData(){
    for (let i = this.documentFirstNumber; i <=  this.documentLastNumber; i++ ) {
      this.documentsData.push({
        name: this.getDocumentName(i),
        position: i,
        docxLink: this.getLink(i, '.docx'),
        pdfLink:  this.getLink(i, '.pdf'),
      });
    }
  }
  private getDocumentName(index: number){
    return this.documentBaseName + index;
  }

  private getLink(index: number, format: string) {
    let baseUrl = (isDevMode())? '' :  dataConfig.baseUrl;
    let assetsDocs = (format === '.docx') ? this.assetsDocs : this.assetsPdf;
    return baseUrl + assetsDocs + this.getDocumentName(index) + format;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
