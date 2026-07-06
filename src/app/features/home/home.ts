import { Component, computed, OnInit, signal } from '@angular/core';
import { TablerIconComponent } from '@tabler/icons-angular';

@Component({
  selector: 'adb-home',
  imports: [TablerIconComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{
  tomatoPrice = signal(10);
  noOfKgs  = signal(11);
  totalAmount = computed(()=> this.tomatoPrice() * this.noOfKgs());

  ngOnInit(): void {
    console.log("----Total Amount --",this.totalAmount())
  }

  
}
