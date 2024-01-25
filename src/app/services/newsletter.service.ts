import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewsletterResponse {
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private endpointUrl = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) {}

    sendData(nome: string, email: string): Observable<NewsletterResponse>{
      const data = {nome, email};

      return this.http.post<NewsletterResponse>(this.endpointUrl, data);
    }

}
