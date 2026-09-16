import { Component, computed, inject, input } from '@angular/core';
import { Video } from '../../types';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'ns-video-player',
  styleUrl: './video-player.scss',
  templateUrl: './video-player.html',
})
export class VideoPlayer {
  public readonly video = input.required<Video | undefined>();

  // constructor(private sanitizer: DomSanitizer) {}

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly videoUrl = computed(() => {
    console.log('COMPUTING VIDEO URL');

    const v = this.video();
    if (v) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/' + v.id,
      );
    }

    return undefined;
  });
}
