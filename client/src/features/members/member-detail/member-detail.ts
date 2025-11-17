import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { MembersService } from '../../../core/services/members-service';
<<<<<<< HEAD
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
=======
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
>>>>>>> 5c032c53062d565de699228c3c68d9b4a5ab0527
import { AsyncPipe } from '@angular/common';
import { filter, Observable } from 'rxjs';
import { Member } from '../../../types/member';

@Component({
  selector: 'app-member-detail',
  imports: [AsyncPipe, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './member-detail.html',
  styleUrl: './member-detail.css'
})
export class MemberDetail implements OnInit{
  private membersService = inject(MembersService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  protected member = signal<Member | undefined>(undefined);
  protected title = signal<string | undefined>("Profile");

  ngOnInit(): void {
    this.route.data.subscribe({
      next: data => this.member.set(data['member'])
    });
    this.title.set(this.route.firstChild?.snapshot?.title);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe({
      next: () => {
        this.title.set(this.route.firstChild?.snapshot?.title);
      }
    });
  }
}
