import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'ns-video-list',
  styleUrl: './video-list.scss',
  templateUrl: './video-list.html',
})
export class VideoList {
  protected readonly videos = signal(
    JSON.parse(`
[
  {
    "title": "A Stellar Census of the Sword of Orion",
    "author": "NASA Spitzer",
    "id": "yB6NKBh9Q4Y",
    "viewDetails": [
      {
        "age": 36,
        "region": "North America",
        "date": "2021-06-23"
      },
      {
        "age": 30,
        "region": "North America",
        "date": "2021-06-23"
      },
      {
        "age": 54,
        "region": "North America",
        "date": "2021-07-23"
      },
      {
        "age": 43,
        "region": "Europe",
        "date": "2021-01-24"
      },
      {
        "age": 32,
        "region": "North America",
        "date": "2021-08-24"
      },
      {
        "age": 32,
        "region": "North America",
        "date": "2021-08-25"
      }
    ]
  },
  {
    "title": "Imagining the Planets of TRAPPIST-1",
    "author": "NASA Spitzer",
    "id": "YGkj2IAqT4Y",
    "viewDetails": [
      {
        "age": 17,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 27,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 47,
        "region": "Europe",
        "date": "2021-03-24"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2021-03-24"
      },
      {
        "age": 17,
        "region": "North America",
        "date": "2021-03-25"
      }
    ]
  },
  {
    "title": "Silicate Crystal Formation in the Disk of an Erupting Star",
    "author": "NASA Spitzer",
    "id": "pPz5lohthaw",
    "viewDetails": [
      {
        "age": 17,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 27,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 47,
        "region": "Europe",
        "date": "2021-03-24"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2021-03-24"
      },
      {
        "age": 17,
        "region": "North America",
        "date": "2021-03-25"
      }
    ]
  },
  {
    "title": "15 Years in Space: NASA's Spitzer Space Telescope",
    "author": "NASA Jet Propulsion Laboratory",
    "id": "vglkIIFQZWI",
    "viewDetails": [
      {
        "age": 36,
        "region": "North America",
        "date": "2021-06-23"
      },
      {
        "age": 30,
        "region": "North America",
        "date": "2021-06-23"
      },
      {
        "age": 54,
        "region": "North America",
        "date": "2021-07-23"
      },
      {
        "age": 43,
        "region": "Europe",
        "date": "2021-01-24"
      },
      {
        "age": 32,
        "region": "North America",
        "date": "2021-08-24"
      },
      {
        "age": 32,
        "region": "North America",
        "date": "2021-08-25"
      }
    ]
  },
  {
    "title": "NASA Scientists Share Why They Like Earth",
    "author": "NASA",
    "id": "tKZmcZc9-LY",
    "viewDetails": [
      {
        "age": 17,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 27,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 47,
        "region": "Europe",
        "date": "2021-03-24"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2021-03-24"
      },
      {
        "age": 17,
        "region": "North America",
        "date": "2021-03-25"
      }
    ]
  },
  {
    "title": "Incredible Discoveries Of The James Webb Telescope",
    "author": "BBC Earth Science",
    "id": "AvioLeO8Weo",
    "viewDetails": [
      {
        "age": 39,
        "region": "Europe",
        "date": "2021-06-28"
      },
      {
        "age": 31,
        "region": "Europe",
        "date": "2021-06-21"
      },
      {
        "age": 53,
        "region": "North America",
        "date": "2021-07-23"
      },
      {
        "age": 43,
        "region": "Europe",
        "date": "2021-01-24"
      },
      {
        "age": 38,
        "region": "North America",
        "date": "2021-08-26"
      },
      {
        "age": 31,
        "region": "North America",
        "date": "2021-08-25"
      }
    ]
  },
  {
    "title": "Juno: Scraping Jupiter",
    "author": "SpaceRip",
    "id": "-k3ze3G4Lyg",
    "viewDetails": [
      {
        "age": 29,
        "region": "Europe",
        "date": "2021-06-28"
      },
      {
        "age": 31,
        "region": "Europe",
        "date": "2021-05-21"
      },
      {
        "age": 54,
        "region": "North America",
        "date": "2021-07-23"
      },
      {
        "age": 43,
        "region": "North America",
        "date": "2021-03-24"
      },
      {
        "age": 58,
        "region": "North America",
        "date": "2021-08-26"
      },
      {
        "age": 21,
        "region": "North America",
        "date": "2021-02-25"
      }
    ]
  },
  {
    "title": "Why are stars spiky?",
    "author": "DeepSkyVideos",
    "id": "ipe3NN1yPzM",
    "viewDetails": [
      {
        "age": 39,
        "region": "Europe",
        "date": "2021-01-28"
      },
      {
        "age": 71,
        "region": "Europe",
        "date": "2021-05-25"
      },
      {
        "age": 24,
        "region": "North America",
        "date": "2021-04-23"
      },
      {
        "age": 43,
        "region": "North America",
        "date": "2021-03-24"
      },
      {
        "age": 39,
        "region": "North America",
        "date": "2021-03-26"
      },
      {
        "age": 27,
        "region": "North America",
        "date": "2021-02-25"
      }
    ]
  },
  {
    "title": "Egg Nebula ",
    "author": "DeepSkyVideos",
    "id": "ZCgZAMsuPz0",
    "viewDetails": [
      {
        "age": 39,
        "region": "Europe",
        "date": "2021-01-28"
      },
      {
        "age": 71,
        "region": "Europe",
        "date": "2021-05-25"
      },
      {
        "age": 24,
        "region": "North America",
        "date": "2021-04-23"
      },
      {
        "age": 19,
        "region": "North America",
        "date": "2021-02-24"
      },
      {
        "age": 32,
        "region": "Europe",
        "date": "2021-05-26"
      },
      {
        "age": 47,
        "region": "Asia",
        "date": "2021-01-25"
      }
    ]
  },
  {
    "title": "Neutron Star Collision Detected - Where Did It Happen?",
    "author": "VideoFromSpace",
    "id": "7Tit-O7HedE",
    "viewDetails": [
      {
        "age": 46,
        "region": "North America",
        "date": "2021-01-28"
      },
      {
        "age": 23,
        "region": "Europe",
        "date": "2021-03-25"
      },
      {
        "age": 34,
        "region": "Asia",
        "date": "2021-04-22"
      },
      {
        "age": 65,
        "region": "North America",
        "date": "2021-02-24"
      },
      {
        "age": 33,
        "region": "Europe",
        "date": "2021-09-26"
      },
      {
        "age": 36,
        "region": "Asia",
        "date": "2021-11-25"
      }
    ]
  }
]`),
  );

  constructor() {
    console.table(this.videos());
  }
}
