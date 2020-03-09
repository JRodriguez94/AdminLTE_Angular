import {Component, OnInit} from '@angular/core';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'adminLTE';
  constructor(private permisionsService: NgxPermissionsService) {}
  ngOnInit(): void {
    const permissions = ['ADMIN'];
    // const permissions = ['ADMIN', 'JOSUE'];
    // const permissions = ['USER'];
    this.permisionsService.loadPermissions(permissions);
  }
}
