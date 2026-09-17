import { Component, inject, signal } from '@angular/core';
import { VideoList } from './video-list/video-list';
import { VideoPlayer } from './video-player/video-player';
import { Video } from '../types';
import { HttpClient } from '@angular/common/http';

import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [VideoList, VideoPlayer],
  selector: 'ns-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export default class Dashboard {
  protected readonly currentVideo = signal<Video | undefined>(undefined);

  // private readonly http = inject(HttpClient);

  // protected videos$ = inject(HttpClient).get<Video[]>(
  //   'https://api.angularbootcamp.com/videos',
  // );

  protected readonly videos = toSignal(
    inject(HttpClient).get<Video[]>(
      'https://api.angularbootcamp.com/videos',
    ),
    { initialValue: [] },
  );

  tellMeAboutVideo(v: Video) {
    console.log('THE DASHBOARD SAYS...', v);

    this.currentVideo.set(v);
  }
}
