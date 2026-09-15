import { Component } from '@angular/core';
import { VideoList } from './video-list/video-list';
import { VideoPlayer } from './video-player/video-player';

@Component({
  imports: [VideoList, VideoPlayer],
  selector: 'ns-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export default class Dashboard {}
