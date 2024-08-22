import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Import environment

@Injectable({
  providedIn: 'root'
})
export class OpenGraphService {
  private apiKey = environment.openGraphApiKey; // Use API key from environment

  constructor(
    private http: HttpClient
  ) { }

  fetchOGImage(url: string): Observable<string> {
    const apiUrl = `https://opengraph.io/api/1.1/site/${encodeURIComponent(url)}?app_id=${this.apiKey}`;
    return this.http.get(apiUrl).pipe(
      map((response: any) => {
        console.log('response', response);
        const ogImage = response.hybridGraph.image;
        return ogImage || '';
      })
    );
  }
}
