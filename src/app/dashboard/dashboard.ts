import { Component, inject, signal } from '@angular/core';
import { VideoList } from './video-list/video-list';
import { VideoPlayer } from './video-player/video-player';
import { Video } from '../types';

import { toSignal } from '@angular/core/rxjs-interop';
import { VideoDataService } from '../video-data-service';
import { StatFilters } from '../stat-filters/stat-filters';

@Component({
  imports: [VideoList, VideoPlayer, StatFilters],
  selector: 'ns-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export default class Dashboard {
  protected readonly currentVideo = signal<Video | undefined>(undefined);

  private readonly svc = inject(VideoDataService);

  protected readonly videos = toSignal(this.svc.loadVideos(), {
    initialValue: [],
  });

  tellMeAboutVideo(v: Video) {
    console.log('THE DASHBOARD SAYS...', v);

    this.currentVideo.set(v);
  }
}
