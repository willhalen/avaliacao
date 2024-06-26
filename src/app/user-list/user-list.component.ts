import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }

  viewUser(userId: string): void {
    console.log(`View user with ID: ${userId}`);
    // Aqui você pode adicionar a lógica para exibir os detalhes do usuário na tela
  }

  updateUser(userId: string): void {
    console.log(`Edit user with ID: ${userId}`);
    // Aqui você pode adicionar a lógica para redirecionar para a página de edição do usuário
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log(`User with ID ${userId} deleted`);
        this.getUsers(); // Atualizar a lista de usuários após exclusão
      },
      error => {
        console.error('Error deleting user', error);
      }
    );
  }
}
