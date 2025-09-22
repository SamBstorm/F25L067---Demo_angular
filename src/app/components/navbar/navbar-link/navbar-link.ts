import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INavbarItem } from '../../../core/models/inavbar-item';

@Component({
  selector: 'app-navbar-link',
  imports: [RouterLink],
  templateUrl: './navbar-link.html',
  styleUrl: './navbar-link.scss'
})
export class NavbarLink {
  link : InputSignal<INavbarItem> = input.required<INavbarItem>();
}
