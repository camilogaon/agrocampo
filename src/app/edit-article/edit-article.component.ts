import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent {


  articleId:any;
  article:any;
  constructor (private route: ActivatedRoute, private router: Router, private articalService:ArticleService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.articleId = Number (routeParams.get('articleId'));
    console.log(this.articleId);
    this.articalService.find(this.articleId).subscribe((data:any)=>{
      this.article = data;
      console.log(this.article);
    })
  }

  update(articleTitle:string, articleBody:string, articleAuthor:string){
    this.articalService.update(this.articleId, this.article).subscribe((res)=>{
      this.router.navigateByUrl('/');
    })
  }
}
