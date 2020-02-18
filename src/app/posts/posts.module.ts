import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PostsComponent } from "./posts.component";

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule],
  exports: [PostsComponent]
})
export class PostsModule {}
