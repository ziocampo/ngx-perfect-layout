import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, Type, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DomSanitizer } from '@angular/platform-browser';
import {  Router } from '@angular/router';
import { NgxPerfectLayoutService } from '../ngx-perfect-layout.service';

export interface GeneralPurposeColumnDefinition {
  id: string,
  headerText: string,
  sortable: boolean,
  format?: Function,
  component?: Type<any>,
  cellStyle?: string
}

export interface GeneralPurposeRowClickEvent {
  index: number;
  item: any;
}

@Component({
  selector: 'ngx-general-purpose-table',
  templateUrl: './ngx-general-purpose-table.component.html',
  styleUrls: ['./ngx-general-purpose-table.component.scss']
})
export class NgxGeneralPurposeTableComponent implements OnInit, OnChanges {

  @ViewChild(MatPaginator) _paginator: MatPaginator|undefined;
  @ViewChild(MatSort) _sort: MatSort|undefined;

  @Input()
  public selectedRowFunction: (item:any) => boolean = (item) => false;

  @Input()
  public columns: GeneralPurposeColumnDefinition[] = [{
    id: "id",
    headerText: "Id",
    sortable: true
  }];

  public displayedColumns: string[] = [];

  @Input()
  public canAdd: boolean = true;

  @Input()
  public allItems: any[] = [];

  @Input() public sortField: string = "";
  @Input() public sortDirection: "asc" | "desc" | "" = "";

  public currentPageIndex: number = 0;
  public currentPageSize: number = 10;
  public currentSearchText: string = "";

  public filteredItems: any[] = [];
  public currentItems: any[] = [];

  @Output() itemClicked: EventEmitter<GeneralPurposeRowClickEvent> = new EventEmitter<GeneralPurposeRowClickEvent>()
  @Output() addItemClicked: EventEmitter<void> = new EventEmitter<void>()

  private stateServiceKeyPrefix: string;

  constructor(
    public stateService: NgxPerfectLayoutService,
    private router: Router,
    public domSanitiser: DomSanitizer
  ) {
    this.stateServiceKeyPrefix = `GeneralPurposeTableComponent.(${router.url})`;
    this.currentPageSize = stateService.getLocalValue(`${this.stateServiceKeyPrefix}.currentPageSize`, 10);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["allItems"]) {
      this.reset();
    }
  }

  private reset() {
    this.onFilterChanged("");
    this.getCurrentItemsPage();
  }

  public onAddItemButtonClick() {
    this.addItemClicked.emit();
  }

  async ngOnInit() {
    this.displayedColumns = this.columns.map(o => o.id);
    this.displayedColumns.push("actions");
  }

  private async getCurrentItemsPage() {
    this.currentItems = this
      .filteredItems
      .sort((a, b) => {

        const valueA = eval(`a.${this.sortField}`)
        const valueB = eval(`b.${this.sortField}`)

        if (this.sortDirection == '') {
          return 0;
        }

        if (valueA > valueB) {
          return this.sortDirection == 'asc' ? 1 : -1;
        }
        else if (valueA < valueB) {
          return this.sortDirection == 'asc' ? -1 : 1;
        }
        else {
          return 0;
        }

      })
      .slice()
      .splice(this.currentPageIndex * this.currentPageSize, this.currentPageSize);
  }

  public onPaginationChanged(event: PageEvent) {
    this.currentPageIndex = event.pageIndex;
    this.currentPageSize = event.pageSize;
    this.stateService.setLocalValue<number>(`${this.stateServiceKeyPrefix}.currentPageSize`, event.pageSize)
    this.getCurrentItemsPage();
  }

  public onFilterChanged(text: string) {
    this.currentSearchText = text;
    if (this._paginator) {
      this._paginator.firstPage();
    }
    if (this.currentSearchText) {
      this.filteredItems = this.allItems.filter(o =>
        Object.entries(o).filter(p => ((p[1] ?? "") as string).indexOf(this.currentSearchText)).length > -1
      );
    }
    else {
      this.filteredItems = this.allItems;
    }
    this.getCurrentItemsPage();
  }

  public onSortChanged(fieldName: string, sortDirection: "asc" | "desc" | "") {
    this.sortField = fieldName;
    this.sortDirection = sortDirection;
    this.getCurrentItemsPage();
  }

  public onItemClicked(index:number, item:any) {
    this.itemClicked.emit({ item, index });
  }

  //public getComponent(columnDefinition: GeneralPurposeColumnDefinition, item:any, what:any)
  //{
  //    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(columnDefinition.component);
  //    const componentRef = what.createComponent(componentFactory);
  //    console.log(componentRef);
  //    //componentRef.instance.data = adItem.data;
  //}

}
