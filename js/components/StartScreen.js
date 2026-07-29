/**
 * StartScreen Component (1. 시작 화면 / 메인 랜딩 컴포넌트)
 * prd.md의 "Step 1. 메인 랜딩 화면" 및 design.md의 "Witty & Sleek Glass" 디자인 가이드 적용
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
      padding: 10px 0 10px;
      text-align: center;
    `;

    // 1. 상단 뱃지 & 마스코트 아바타
    const topBox = document.createElement('div');
    topBox.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 14px;';

    const badge = new Badge({
      text: '✨ 2026 대학생 창업캠프 전용',
      icon: '🌱',
      variant: 'leaf'
    }).render();

    const avatarBox = document.createElement('div');
    avatarBox.className = 'result-avatar-circle animate-cute-bounce animate-glow-pulse';
    avatarBox.style.cssText = `
      width: 120px;
      height: 120px;
      font-size: 64px;
      margin-top: 6px;
      background: rgba(255, 255, 255, 0.95);
      border: 4px solid var(--leaf-mint);
    `;
    avatarBox.innerHTML = '🚀';

    topBox.appendChild(badge);
    topBox.appendChild(avatarBox);

    // 2. 중앙 타이틀 및 위트 있는 소개문
    const centerBox = document.createElement('div');
    centerBox.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 12px; margin: 16px 0;';

    const title = document.createElement('h1');
    title.style.cssText = `
      font-size: 26px;
      font-weight: 800;
      line-height: 1.38;
      color: var(--text-main);
    `;
    title.innerHTML = '나는 창업 팀에서<br><span style="background: var(--sky-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">어떤 역할을 맡아야 할까?</span>';

    const desc = document.createElement('p');
    desc.style.cssText = `
      font-size: 15px;
      color: var(--text-sub);
      line-height: 1.6;
      font-weight: 500;
    `;
    desc.innerHTML = '약 <b>3분 만에</b> 알아보는 나의 창업가 성향!<br>나와 가장 잘 맞는 <b>🤝 환상의 짝꿍 파트너</b>를 찾아보세요.';

    const statsTag = document.createElement('div');
    statsTag.style.cssText = `
      display: inline-flex;
      align-items: center;
      gap: 14px;
      padding: 10px 18px;
      background: var(--sky-tint);
      border: 1px solid rgba(2, 132, 199, 0.2);
      border-radius: var(--radius-pill);
      font-size: 13px;
      font-weight: 700;
      color: var(--sky-main);
      margin-top: 4px;
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
