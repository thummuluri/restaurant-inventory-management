import {Component, OnInit} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";

import {ToastrService} from "ngx-toastr";
import {LoadingService} from "src/app/loading.service";

import {InventoryService} from "src/app/inventory/inventory.service";
import {Inventory} from "src/app/inventory/inventory";

import {environment} from "src/environments/environment";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  loading$ = this.loader.loading$;
  inventory: Inventory[] = [];
  searchTerm: string = "";
  filteredInventory: Inventory[] = [];
  S3URL = environment.S3URL;
  ext: string = ".jpg"

  constructor(
    private inventoryService: InventoryService, private loader: LoadingService,
    private toastr: ToastrService
  ) {
  }

  getInventoryDetails(): void {
    this.inventoryService.getInventoryDetails().subscribe(
      (response: Inventory[]) => {
        this.inventory = response;
        this.toastr.success("Inventory Details Retrieved Successfully");
      },
      (error: HttpErrorResponse) => {
        this.toastr.error(error.error.message);
      }
    );
  }

  filterInventory(): void {
    this.filteredInventory = this.inventory.filter(item =>
      item.item_name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.getInventoryDetails();
  }
}
