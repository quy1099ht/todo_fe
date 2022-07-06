import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LoadingComponent } from '../../components/utils/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class ProgressingService {

  constructor(private modal: NzModalService) { }

  progressingModal = () => {
    let modalSucc : any = null;
    modalSucc = this.modal.create({
      nzTitle: "Processing...",
      nzContent: LoadingComponent,
      nzCancelDisabled: true,
      nzOkDisabled: true,
      nzClosable: false,
      nzKeyboard: false,
      nzFooter : null,
      nzMaskClosable : false
    });
  }
}
