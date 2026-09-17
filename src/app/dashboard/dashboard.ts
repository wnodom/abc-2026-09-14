import { Component, inject, signal } from '@angular/core';
import { VideoList } from './video-list/video-list';
import { VideoPlayer } from './video-player/video-player';
import { Video } from '../types';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [VideoList, VideoPlayer],
  selector: 'ns-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export default class Dashboard {
  protected readonly currentVideo = signal<Video | undefined>(undefined);

  protected readonly videos = signal<Video[]>([]);

  private readonly http = inject(HttpClient);

  private videosObservable = this.http.get<Video[]>(
    'https://api.angularbootcamp.com/videos',
  );

  constructor() {
    this.videosObservable.subscribe((data) => {
      console.table(data);
      this.videos.set(data);
    });
  }

  tellMeAboutVideo(v: Video) {
    console.log('THE DASHBOARD SAYS...', v);

    this.currentVideo.set(v);
  }
}
