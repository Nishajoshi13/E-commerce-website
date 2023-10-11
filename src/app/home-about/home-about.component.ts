import { Component } from '@angular/core';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css']
})
export class HomeAboutComponent {
  videoUrl: string = '/assets/pexels-maksim-goncharenok-5642528 (720p).mp4';

  fullContent: string='were not just selling flowers; were crafting moments.With a commitment to freshness, creativity, and personalized service, were your go-to destination for stunning floral arrangements that speak from the heart.Choose us for memorable expressions of love, joy, and gratitude through the timeless beauty of flowersyoure choosing more than a flower shop; youre selecting a partner in petals. Our passion for blooms attention to detail, and dedication to your satisfaction set us apart. We offer an exquisite range of floral designs, prompt delivery, and personalized care.When you choose us, youre choosing floral artistry that turns moments into cherished memories. <br>Let your emotions blossom with us';
  displayContent:string=this.fullContent.slice(0, this.fullContent.length / 2);
  showMore: boolean = false;

  toggleContent() {
    if (this.showMore) {
      this.displayContent = this.fullContent.slice(0, this.fullContent.length / 2);
    } else {
      this.displayContent = this.fullContent;
    }

    this.showMore = !this.showMore;
  }
  }






