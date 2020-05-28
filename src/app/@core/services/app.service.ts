import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private isLoading = new BehaviorSubject(true);
  isLoading$ = this.isLoading.asObservable();

  constructor() {
  }

  setLoad(load: boolean) {
    this.isLoading.next(load);
  }
}
