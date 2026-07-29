/**
 * StartScreen Component (1. 시작 화면 / 메인 랜딩 컴포넌트)
 * 컴팩트 스마트폰 프레임 맞춤 세련된 레이아웃 적용
 */

import { Badge } from './Badge.js';
import { Button } from './Button.js';

export class StartScreen {
  /**
   * @param {Object} props
   * @param {Function} props.onStart - [테스트 시작하기] 버튼 클릭 시 콜백
   */
  constructor({ onStart }) {
    this.onStart = onStart;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'start-screen-container animate-fade-in';
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 0 0 10px;
      text-align: center;
    `;

    // 1. 상단 뱃지 & 마스코트 아바타
    const topBox = document.createElement('div');
    topBox.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 10px;';

    const badge = new Badge({
      text: '✨ 2026 대학생 창업캠프 전용',
      icon: '🌱',
      variant: 'leaf'
    }).render();

    const avatarBox = document.createElement('div');
    avatarBox.className = 'result-avatar-circle animate-cute-bounce';
    avatarBox.style.cssText = `
      width: 96px;
      height: 96px;
      font-size: 50px;
      margin-top: 4px;
      background: rgba(255, 255, 255, 0.95);
      border: 3px solid var(--leaf-mint);
    `;
    avatarBox.innerHTML = '🚀';

    topBox.appendChild(badge);
    topBox.appendChild(avatarBox);

    // 2. 중앙 타이틀 및 위트 있는 소개문
    const centerBox = document.createElement('div');
    centerBox.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 10px 0;';

    const title = document.createElement('h1');
    title.style.cssText = `
      font-size: 23px;
      font-weight: 800;
      line-height: 1.35;
      color: var(--text-main);
    `;
    title.innerHTML = '나는 창업 팀에서<br><span style="background: var(--sky-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">어떤 역할을 맡아야 할까?</span>';

    const desc = document.createElement('p');
    desc.style.cssText = `
      font-size: 14px;
      color: var(--text-sub);
      line-height: 1.55;
      font-weight: 500;
    `;
    desc.innerHTML = '약 <b>3분 만에</b> 알아보는 나의 창업가 성향!<br>나와 가장 잘 맞는 <b>🤝 환상의 짝꿍 파트너</b>를 찾아보세요.';

    const statsTag = document.createElement('div');
    statsTag.style.cssText = `
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 8px 16px;
      background: var(--sky-tint);
      border: 1px solid rgba(2, 132, 199, 0.2);
      border-radius: var(--radius-pill);
      font-size: 12px;
      font-weight: 700;
      color: var(--sky-main);
      margin-top: 2px;
    `;
    statsTag.innerHTML = `
      <span>⏱️ 약 3분 소요</span>
      <span style="opacity: 0.4;">|</span>
      <span>📋 12개 상황 질문</span>
    `;

    centerBox.appendChild(title);
    centerBox.appendChild(desc);
    centerBox.appendChild(statsTag);

    // 3. 하단 시작 버튼
    const bottomBox = document.createElement('div');
    bottomBox.style.width = '100%';

    const startBtn = new Button({
      text: '나의 창업 성향 진단하기',
      variant: 'primary',
      icon: '✨',
      onClick: () => this.onStart()
    }).render();

    bottomBox.appendChild(startBtn);

    container.appendChild(topBox);
    container.appendChild(centerBox);
    container.appendChild(bottomBox);

    return container;
  }
}
