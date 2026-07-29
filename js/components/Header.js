/**
 * Header Component
 * 앱 상단 브랜딩 및 뒤로가기 제어 헤더 컴포넌트
 */

export class Header {
  /**
   * @param {Object} props
   * @param {string} [props.title='창업 성향 테스트']
   * @param {boolean} [props.showBack=false]
   * @param {Function} [props.onBack]
   */
  constructor({ title = '창업 성향 테스트', showBack = false, onBack = () => {} }) {
    this.title = title;
    this.showBack = showBack;
    this.onBack = onBack;
  }

  render() {
    const header = document.createElement('header');
    header.className = 'app-header';

    header.innerHTML = `
      <div class="header-brand">
        <div class="header-brand-icon">🌱</div>
        <span>${this.title}</span>
      </div>
      ${this.showBack ? `
        <button type="button" class="header-back-btn">
          <span>← 이전</span>
        </button>
      ` : ''}
    `;

    if (this.showBack) {
      const backBtn = header.querySelector('.header-back-btn');
      if (backBtn) {
        backBtn.addEventListener('click', () => this.onBack());
      }
    }

    return header;
  }
}
