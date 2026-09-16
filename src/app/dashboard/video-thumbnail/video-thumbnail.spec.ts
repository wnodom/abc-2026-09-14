import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoThumbnail } from './video-thumbnail';

describe('VideoThumbnail', () => {
  let component: VideoThumbnail;
  let fixture: ComponentFixture<VideoThumbnail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoThumbnail],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoThumbnail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
