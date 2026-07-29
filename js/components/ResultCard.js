/**
 * ResultCard Component
 * 최종 성향 결과, 캐릭터, 강점, 추천 역할 및 🤝 파트너 매칭 컴포넌트
 */

import { results } from '../data/results.js';
import { Badge } from './Badge.js';
import { Button } from './Button.js';

export class ResultCard {
  /**
   * @param {Object} props
   * @param {string} props.resultType - 가장 높은 점수의 성향 키 (e.g. 'idea', 'maker')
   * @param {string} [props.userName='익명의 창업가']
   * @param {Function} [props.onRestart] - 다시하기 클릭 콜백
   * @param {Function} [props.onShare] - 공유하기 클릭 콜백
   */
  constructor({ resultType, userName = '익명의 창업가', onRestart, onShare }) {
    this.typeData = results[resultType] || results.idea;
    this.userName = userName;
    this.onRestart = onRestart;
    this.onShare = onShare;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'result-container animate-fade-in';

    // 1. 히어로 캐릭터 카운터
    const partnerTypeData = results[this.typeData.partner.type] || results.analyst;

    container.innerHTML = `
      <div class="result-hero-card">
        <span class="badge-cute">✨ ${this.userName} 님의 창업 성향</span>
        <div class="result-avatar-circle animate-cute-bounce">
          ${this.typeData.emoji}
        </div>
        <h2 class="result-type-title">${this.typeData.title}</h2>
        <p class="result-type-desc">${this.typeData.summary}</p>
      </div>

      <!-- 강점 카드 -->
      <div class="result-info-box">
        <div class="result-info-title">💪 핵심 강점 & 파워</div>
        <ul style="padding-left: 18px; font-size: 14px; color: var(--text-main); line-height: 1.6;">
          ${this.typeData.strengths.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>

      <!-- 추천 역할 카드 -->
      <div class="result-info-box" style="background: var(--sky-tint); border: 1px solid rgba(0, 132, 255, 0.2);">
        <div class="result-info-title" style="color: var(--sky-main);">🎯 팀 내 추천 역할</div>
        <div style="font-size: 16px; font-weight: 800; color: var(--text-main);">${this.typeData.role}</div>
      </div>

      <!-- 🤝 환상의 파트너 궁합 카드 -->
      <div class="result-info-box" style="background: var(--leaf-light); border: 1px solid rgba(16, 185, 129, 0.25);">
        <div class="result-info-title" style="color: var(--leaf-main);">🤝 환상의 팀원 파트너 궁합</div>
        <div style="display: flex; align-items: center; gap: 10px; margin-top: 4px;">
          <span style="font-size: 32px;">${partnerTypeData.emoji}</span>
          <div>
            <div style="font-size: 15px; font-weight: 800; color: var(--text-main);">${this.typeData.partner.name}</div>
            <div style="font-size: 13px; color: var(--text-sub);">${this.typeData.partner.desc}</div>
          </div>
        </div>
      </div>

      <!-- 액션 버튼들 -->
      <div id="result-actions" style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px;"></div>
    `;

    const actionsContainer = container.querySelector('#result-actions');

    const shareBtn = new Button({
      text: '결과 공유 및 이미지 저장',
      variant: 'primary',
      icon: '🔗',
      onClick: () => this.onShare()
    }).render();

    const restartBtn = new Button({
      text: '테스트 다시하기',
      variant: 'outline',
      icon: '🔄',
      onClick: () => this.onRestart()
    }).render();

    actionsContainer.appendChild(shareBtn);
    actionsContainer.appendChild(restartBtn);

    return container;
  }
}
