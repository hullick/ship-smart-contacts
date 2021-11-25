import { ModalEnum } from "../types/modals";
import * as bootstrap from "bootstrap";
import { Service } from "typedi";

@Service()
export default class ModalService {
  private modalsFound = new Map<string, bootstrap.Modal>();

  show(modalId: ModalEnum) {
    this.closeAll();

    if (this.modalsFound.get(modalId)) {
      this.modalsFound.get(modalId)?.show();
    } else {
      try {
        this.modalsFound.set(
          modalId,
          new bootstrap.Modal(document.getElementById(modalId)!, {
            keyboard: false,
          })
        );

        this.show(modalId);
      } catch (error) {
        throw new Error("O modal não pôde ser encontrado");
      }
    }
  }

  close(modalId: ModalEnum) {
    let modal = this.modalsFound.get(modalId);

    if (modal) {
      modal.hide();
    } else {
      throw new Error("O modal não pôde ser encontrado");
    }
  }

  closeAll() {
    this.modalsFound.forEach((currentModal: bootstrap.Modal) => {
      currentModal.hide();
    });
  }
}
