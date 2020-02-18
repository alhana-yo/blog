import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from "./posts.component";

const ROUTES: Routes = [{ path: "", component: PostsComponent }];

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [PostsComponent]
})
export class PostsModule {}
