import { Component, Input } from '@angular/core';
import { SvgSizes } from '@app/shared/components/svg-icon/svg-icon.model';

@Component({
  selector: 'app-svg-icon[name]',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent {
  private link: string;

  @Input() size: SvgSizes;
  @Input()
  set name(iconName: string) {
    this.link = `/assets/images/svgs/${iconName}.svg#${iconName}`;
  }

  get url() {
    return this.link;
  }
}
