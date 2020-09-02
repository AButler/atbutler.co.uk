export default class App {
  documentElement: HTMLElement;
  modal: HTMLElement;

  constructor(private window: Window) {}

  initialize() {
    const document = this.window.document;

    this.documentElement = document.documentElement;
    this.modal = document.getElementById('certification-modal');

    document
      .getElementById('certification-button')
      .addEventListener('click', () => {
        this.showModal(true);
      });

    document
      .getElementById('close-modal-button')
      .addEventListener('click', () => {
        this.showModal(false);
      });

    document
      .getElementById('modal-background')
      .addEventListener('click', () => {
        this.showModal(false);
      });
  }

  showModal(visible: boolean) {
    this.modal.classList.toggle('is-active', visible);
    this.documentElement.classList.toggle('is-clipped', visible);
  }
}
