import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../services/newsletter.service';

@Component({
  selector: 'app-news-form',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    ReactiveFormsModule
  ],
  providers: [
    NewsletterService
  ],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss'
})
export class NewsFormComponent {

  newsLetterForm!: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.newsLetterForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(){
    this.loading.set(true);
    if(this.newsLetterForm.valid){
      this.service.sendData(this.newsLetterForm.value.nome, this.newsLetterForm.value.email).subscribe({
        next: () => {
          this.newsLetterForm.reset();
          this.loading.set(false);
        },
      })
    }
  }



}
