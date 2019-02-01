import { Component, OnInit } from '@angular/core';
import { BeersService } from "../../config/beers.service";
import { Beer } from "../../config/beer";

@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.css']
})
export class AdvancedsearchComponent implements OnInit {

  public component: number = 3;

  public filter: boolean = false;
  public disabled: string = "true";

  public name_abv: string = "abv";
  public name_ebc: string = "ebc";
  public name_ibu: string = "ibu";
  public name_brewed: string = "brewed";

  private filter_abv: string;     //abv_gt=0&abv_lt=100&
  private filter_ebc: string;     //ebc_gt=0&ebc_lt=300&
  private filter_ibu: string;     //ibu_gt=0&ibu_lt=200&
  private filter_brewed: string;  //brewed_after=10-2000&brewed_before=10-2018

  private state_abv: boolean = false;
  private state_ebc: boolean = false;
  private state_ibu: boolean = false;
  private state_brewed: boolean = false;

  constructor(public beerService: BeersService) { }

  ngOnInit() {
  }

  onActivateFilter(item) {
    switch (item.name) {
      case this.name_abv: {
        this.state_abv = item.state;
        break;
      }
      case this.name_ebc: {
        this.state_ebc = item.state;
        break;
      }
      case this.name_ibu: {
        this.state_ibu = item.state;
        break;
      }
      case this.name_brewed: {
        this.state_brewed = item.state;
        break;
      }
    }
  }

  onRangeChange(item) {
    switch (item.name) {
      case this.name_abv: {
        this.filter_abv = "abv_gt=" + item.range[0] + "&abv_lt=" + item.range[1]
        break;
      }
      case this.name_ebc: {
        this.filter_ebc = "ebc_gt=" + item.range[0] + "&ebc_lt=" + item.range[1]
        break;
      }
      case this.name_ibu: {
        this.filter_ibu = "ibu_gt=" + item.range[0] + "&ibu_lt=" + item.range[1]
        break;
      }
    }
  }
}
