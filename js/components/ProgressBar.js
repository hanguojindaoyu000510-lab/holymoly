/**
 * ProgressBar Component
 * 진행 상황(0~100%)을 하늘-초록 그라데이션으로 보여주는 상단 바 컴포넌트
 */

export class ProgressBar {
  /**
   * @param {Object} props
   * @param {number} props.current - 현재 문항 번호
   * @param {number} props.total - 전체 문항 수
   */
  constructor({ current, total }) {
    this.current = current;
    this.total = total;
  }

  update(current) {
    this.current = current;
    const percentage = Math.round((this.current / this.total) * 100);
    const fillEl = this.container.querySelector('.progress-fill');
    const textEl = this.container.querySelector('.progress-text');
    if (fillEl) fillEl.style.width = `${percentage}%`;
    if (textEl) textEl.textContent = `${this.current} / ${this.total}`;
  }

  render() {
    const percentage = Math.round((this.current / this.total) * 100);

    this.container = document.createElement('div');
    this.container.className = 'progress-wrapper';
    this.container.innerHTML = `
      <div class="progress-header">
        <span>진행 상황</span>
        <span class="progress-text">${this.current} / ${this.total}</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width: ${percentage}%"></div>
      </div>
    `;

    return this.container;
  }
}
