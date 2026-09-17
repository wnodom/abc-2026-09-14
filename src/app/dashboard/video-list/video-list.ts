// import { JsonPipe } from '@angular/common';
import {
  Component,
  input,
  output,
  // effect,
  signal,
  OnInit,
} from '@angular/core';

import { Video } from '../../types';
import { VideoThumbnail } from '../video-thumbnail/video-thumbnail';

@Component({
  imports: [VideoThumbnail],
  selector: 'ns-video-list',
  styleUrl: './video-list.scss',
  templateUrl: './video-list.html',
})
export class VideoList implements OnInit {
  public readonly videoPicked = output<Video>();

  public readonly videos = input.required<Video[]>();

  protected readonly currentVideo = signal<Video | undefined>(undefined);

  protected readonly showDetails = signal(false);

  // private videoEffect = effect(() => {
  //   console.log('Current video is now', this.currentVideo());
  // });

  // constructor() {
  //   console.table(this.videos());
  // }

  ngOnInit() {
    console.table(this.videos());
  }

  rememberSelectedVideo(video: Video) {
    this.currentVideo.set(video);
    this.videoPicked.emit(video);
  }
}
