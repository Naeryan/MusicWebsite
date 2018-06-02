import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
