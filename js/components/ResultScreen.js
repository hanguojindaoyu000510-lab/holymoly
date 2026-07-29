/**
 * ResultScreen Component (4. 최종 성향 결과 화면 전용 모듈형 컴포넌트)
 * prd.md의 "Step 4. 최종 성향 결과 화면" 및 design.md의 "Witty & Sleek Glass" 디자인 가이드 적용
 */

import { results } from '../data/results.js';
import { Badge } from './Badge.js';
import { Button } from './Button.js';

export class ResultScreen {
  /**
   * @param {Object} props
   * @param {string} props.resultType - 가장 높은 점수의 성향 키 ('idea', 'maker', 'strategy', 'comm', 'analyst', 'doer')
   * @param {string} [props.userName='익명의 창업가'] - 사용자 이름
   * @param {Function} [props.onRestart] - [다시 테스트하기] 클릭 콜백
   * @param {Function} [props.onShare] - [링크 복사하기] 클릭 콜백
   */
  constructor({ resultType, userName = '익명의 창업가', onRestart, onShare }) {
    this.typeData = results[resultType] || results.idea;
    this.userName = userName;
    this.onRestart = onRestart;
    this.onShare = onShare;
  }

  shareKakaoTalk() {
    const kakaoKey = (window.ENV_CONFIG && window.ENV_CONFIG.KAKAO_JS_KEY) || '';
    if (!kakaoKey) {
      alert('카카오 SDK 키가 설정되지 않았습니다. Vercel 환경변수(KAKAO_JS_KEY)를 확인해 주세요.');
      return;
    }

    const doShare = () => {
      if (window.Kakao) {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(kakaoKey);
        }

        window.Kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: `${this.userName} 님의 창업 성향: ${this.typeData.title}`,
            description: this.typeData.summary,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          buttons: [
            {
              title: '나도 창업 성향 테스트하기 🚀',
              link: {
                mobileWebUrl: window.location.href,
                webUrl: window.location.href,
              },
            },
          ],
        });
      } else {
        alert('카카오 SDK 연결에 실패했습니다. 네트워크 상태를 확인해 주세요.');
      }
    };

    if (window.Kakao) {
      doShare();
    } else {
      // Kakao SDK 동적 자동 로딩
      const script = document.createElement('script');
      script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
      script.onload = () => doShare();
      script.onerror = () => alert('카카오 SDK 스크립트 로드 실패');
      document.head.appendChild(script);
    }
  }

  render() {
    const container = document.createElement('div');
    container.className = 'result-screen-container animate-fade-in';
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding-bottom: 16px;
    `;

    const partnerTypeData = results[this.typeData.partner.type] || results.analyst;

    // 1. 히어로 캐릭터 카드 (Hero Card)
    const heroCard = document.createElement('div');
    heroCard.className = 'result-hero-card';

    const userBadge = new Badge({
      text: `✨ ${this.userName} 님의 창업 성향`,
      variant: 'leaf'
    }).render();

    const avatarBox = document.createElement('div');
    avatarBox.className = 'result-avatar-circle animate-cute-bounce';
    avatarBox.innerHTML = this.typeData.emoji;

    const title = document.createElement('h2');
    title.className = 'result-type-title';
    title.textContent = this.typeData.title;

    const desc = document.createElement('p');
    desc.className = 'result-type-desc';
    desc.textContent = this.typeData.summary;

    heroCard.appendChild(userBadge);
    heroCard.appendChild(avatarBox);
    heroCard.appendChild(title);
    heroCard.appendChild(desc);

    // 2. 강점 & 주의점 카드
    const strengthsBox = document.createElement('div');
    strengthsBox.className = 'result-info-box';
    strengthsBox.innerHTML = `
      <div class="result-info-title">💪 핵심 강점 & 파워</div>
      <ul style="padding-left: 18px; font-size: 13px; color: var(--text-main); line-height: 1.5;">
        ${this.typeData.strengths.map(s => `<li>${s}</li>`).join('')}
      </ul>
      ${this.typeData.warnings ? `
        <div class="result-info-title" style="color: #D97706; margin-top: 6px;">⚠️ 주의할 점</div>
        <ul style="padding-left: 18px; font-size: 12px; color: var(--text-sub); line-height: 1.4;">
          ${this.typeData.warnings.map(w => `<li>${w}</li>`).join('')}
        </ul>
      ` : ''}
    `;

    // 3. 팀 내 추천 역할 카드
    const roleBox = document.createElement('div');
    roleBox.className = 'result-info-box';
    roleBox.style.cssText = 'background: var(--sky-tint); border: 1px solid rgba(2, 132, 199, 0.25);';
    roleBox.innerHTML = `
      <div class="result-info-title" style="color: var(--sky-main);">🎯 팀 내 추천 역할</div>
      <div style="font-size: 15px; font-weight: 800; color: var(--text-main);">${this.typeData.role}</div>
    `;

    // 4. 🤝 환상의 파트너 궁합 카드
    const partnerBox = document.createElement('div');
    partnerBox.className = 'result-info-box';
    partnerBox.style.cssText = 'background: var(--leaf-light); border: 1px solid rgba(16, 185, 129, 0.3);';
    partnerBox.innerHTML = `
      <div class="result-info-title" style="color: var(--leaf-main);">🤝 환상의 팀원 파트너 궁합</div>
      <div style="display: flex; align-items: center; gap: 10px; margin-top: 4px;">
        <span style="font-size: 32px;">${partnerTypeData.emoji}</span>
        <div>
          <div style="font-size: 14px; font-weight: 800; color: var(--text-main);">${this.typeData.partner.name}</div>
          <div style="font-size: 12px; color: var(--text-sub); margin-top: 2px;">${this.typeData.partner.desc}</div>
        </div>
      </div>
    `;

    // 5. 하단 액션 버튼 그룹 (카카오톡 공유 & 링크 복사 & 다시하기)
    const actionGroup = document.createElement('div');
    actionGroup.style.cssText = 'display: flex; flex-direction: column; gap: 8px; margin-top: 6px;';

    const kakaoBtn = new Button({
      text: '카카오톡으로 공유하기',
      variant: 'kakao',
      icon: '💬',
      onClick: () => this.shareKakaoTalk()
    }).render();

    const shareBtn = new Button({
      text: '결과 링크 복사하기',
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

    actionGroup.appendChild(kakaoBtn);
    actionGroup.appendChild(shareBtn);
    actionGroup.appendChild(restartBtn);

    container.appendChild(heroCard);
    container.appendChild(strengthsBox);
    container.appendChild(roleBox);
    container.appendChild(partnerBox);
    container.appendChild(actionGroup);

    return container;
  }
}
