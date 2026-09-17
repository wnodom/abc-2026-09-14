import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Video } from './types';

@Service()
export class VideoDataService {
  private readonly http = inject(HttpClient);

  loadVideos() {
    return this.http.get<Video[]>(
      'https://api.angularbootcamp.com/videos',
    );
  }
}
