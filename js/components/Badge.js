/**
 * Badge Component
 * 귀여운 이모지와 라벨을 담는 둥근 알약형 뱃지 컴포넌트
 */

export class Badge {
  /**
   * @param {Object} props
   * @param {string} props.text - 뱃지 텍스트
   * @param {string} [props.icon] - 이모지 또는 아이콘
   * @param {'leaf' | 'sky'} [props.variant='leaf'] - 뱃지 컬러 스타일
   */
  constructor({ text, icon = '', variant = 'leaf' }) {
    this.text = text;
    this.icon = icon;
    this.variant = variant;
  }

  render() {
    const badgeEl = document.createElement('span');
    badgeEl.className = `badge-cute ${this.variant === 'sky' ? 'badge-sky' : ''}`;
    badgeEl.innerHTML = `
      ${this.icon ? `<span>${this.icon}</span>` : ''}
      <span>${this.text}</span>
    `;
    return badgeEl;
  }
}
