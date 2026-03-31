import { afterNextRender, Component, computed, OnInit, signal } from '@angular/core';
import mermaid from "mermaid";

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrl: './new-home.component.scss'
})
export class NewHomeComponent implements OnInit {

  name = signal('Lingash');
  age = signal(27);

  isMajor = computed(() => this.age() > 18);

  constructor() {
    afterNextRender({
      read: () => {
        void mermaid.init()
      }
    })

    mermaid.registerIconPacks([
      {
        name: 'logos',
        loader: () =>
          fetch('https://unpkg.com/@iconify-json/logos@1/icons.json').then((res) => res.json()),
      },
      {
        name: 'skill-icons',
        loader: () =>
          fetch('https://unpkg.com/@iconify-json/skill-icons@1/icons.json').then((res) => res.json()),
      },
      {
        name: 'vscode-icons',
        loader: () =>
          fetch('https://unpkg.com/@iconify-json/vscode-icons@1/icons.json').then((res) => res.json()),
      },
      {
        name: 'gcp',
        loader: () =>
          fetch('https://unpkg.com/@iconify-json/gcp@1/icons.json').then((res) => res.json()),
      },
    ]);
  }

  ngOnInit(): void {
    this.age.set(18);
  }

  // constructor(@Inject(PLATFORM_ID) private _platformId: object) {
  // }

  // ngAfterViewInit(): void {
  //   if (isPlatformBrowser(this._platformId)) {
  //     void mermaid.init();
  //   }
  // }

}
