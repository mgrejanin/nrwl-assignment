import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersQuery } from './store/users.query';
import { UsersService } from './store/users.service';
import { UsersStore } from './store/users.store';

@NgModule({
  imports: [CommonModule],
  providers: [UsersQuery, UsersService, UsersStore],
})
export class UsersDataAccessModule {}
