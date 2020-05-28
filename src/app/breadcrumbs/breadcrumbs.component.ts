import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

export interface IBreadcrumb {
  label: string;
  path: string;
  icon?: string;
  isAdd?: boolean;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {

  @Input() title: string;
  @Input() isBack: boolean;
  @Input() withMargin = true;
  @Input() links: IBreadcrumb[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
