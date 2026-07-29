/**
 * Button Component
 * 약간 둥근 모서리(14px)와 바운스 터치감을 가진 재사용 가능한 버튼 컴포넌트
 */

export class Button {
  /**
   * @param {Object} props
   * @param {string} props.text - 버튼 텍스트
   * @param {'primary' | 'leaf' | 'outline'} [props.variant='primary'] - 버튼 스타일
   * @param {string} [props.icon] - 이모지 또는 아이콘
   * @param {Function} [props.onClick] - 클릭 이벤트 핸들러
   */
  constructor({ text, variant = 'primary', icon = '', onClick = () => {} }) {
    this.text = text;
    this.variant = variant;
    this.icon = icon;
    this.onClick = onClick;
  }

  render() {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `btn-base btn-${this.variant}`;
    btn.innerHTML = `
      ${this.icon ? `<span>${this.icon}</span>` : ''}
      <span>${this.text}</span>
    `;

    btn.addEventListener('click', (e) => {
      this.onClick(e);
    });

    return btn;
  }
}
