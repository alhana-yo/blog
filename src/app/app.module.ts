import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PostsModule } from "./posts/posts.module";
import { BlogEntriesService } from "./services/blog-entries.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PostsModule, HttpClientModule],
  providers: [BlogEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
