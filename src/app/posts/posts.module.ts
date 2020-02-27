import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormModule } from '../components/post-form/post-form.module';
import { PostsComponent } from './posts.component';

const ROUTES: Routes = [{ path: '', component: PostsComponent }];

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), PostFormModule],
  exports: [PostsComponent]
})
export class PostsModule { }
