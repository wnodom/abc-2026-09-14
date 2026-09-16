import { Component, input } from '@angular/core';
import { Video } from '../../types';

@Component({
  imports: [],
  selector: 'ns-video-player',
  styleUrl: './video-player.scss',
  templateUrl: './video-player.html',
})
export class VideoPlayer {
  public readonly video = input.required<Video | undefined>();
}
