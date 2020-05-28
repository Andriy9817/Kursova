import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavItemComponent implements OnInit {

  @Input() item;
  @Input() type;

  constructor() {
  }

  ngOnInit(): void {
  }

}
