/**
 * Modal Component
 * 창업 캠프 참가자 이름 및 대학명 입력 수집 모달 컴포넌트
 */

import { Button } from './Button.js';

export class Modal {
  /**
   * @param {Object} props
   * @param {Function} props.onSubmit - 입력 완료 시 콜백 (data: { name, univ })
   */
  constructor({ onSubmit }) {
    this.onSubmit = onSubmit;
  }

  render() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'modal-overlay';

    this.overlay.innerHTML = `
      <div class="modal-box animate-fade-in">
        <h3 style="font-size: 19px; font-weight: 800; color: var(--text-main); text-align: center;">
          🌱 캠프 참가자 정보 입력
        </h3>
        <p style="font-size: 13px; color: var(--text-sub); text-align: center; margin-top: -6px;">
          결과 카드 제출 및 팀 빌딩용 기본 정보입니다. (선택 입력)
        </p>

        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 6px;">
          <input type="text" id="input-name" class="modal-input" placeholder="이름 (예: 홍길동)" />
          <input type="text" id="input-univ" class="modal-input" placeholder="소속 대학/기관 (예: 창업대학교)" />
        </div>

        <div id="modal-actions" style="display: flex; flex-direction: column; gap: 8px; margin-top: 8px;"></div>
      </div>
    `;

    const modalActions = this.overlay.querySelector('#modal-actions');

    const startBtn = new Button({
      text: '테스트 시작하기',
      variant: 'primary',
      onClick: () => {
        const name = this.overlay.querySelector('#input-name').value.trim();
        const univ = this.overlay.querySelector('#input-univ').value.trim();
        this.close();
        this.onSubmit({ name: name || '익명의 창업가', univ: univ || '창업캠프' });
      }
    }).render();

    const guestBtn = new Button({
      text: '입력 없이 익명으로 시작',
      variant: 'outline',
      onClick: () => {
        this.close();
        this.onSubmit({ name: '익명의 창업가', univ: '캠프 참가자' });
      }
    }).render();

    modalActions.appendChild(startBtn);
    modalActions.appendChild(guestBtn);

    return this.overlay;
  }

  open() {
    this.overlay.classList.add('active');
  }

  close() {
    this.overlay.classList.remove('active');
  }
}
