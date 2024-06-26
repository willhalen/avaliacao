import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model'; // Importa a interface User

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = {
    id: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  createUser(): void {
    this.userService.createUser(this.user).subscribe({
      next: () => {
        console.log('User created successfully');
        this.router.navigate(['/users']);
      },
      error: (error) => {
        console.error('Error creating user:', error);
      }
    });
  }
}
