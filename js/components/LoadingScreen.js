/**
 * LoadingScreen Component (3. 분석 & 로딩 화면 전용 모듈형 컴포넌트)
 * prd.md의 "Step 3. 분석 및 결과 로딩 화면" 및 design.md의 "Witty & Sleek Glass" 디자인 가이드 적용
 */

export class LoadingScreen {
  /**
   * @param {Object} props
   * @param {string} [props.userName='익명의 창업가'] - 사용자 이름
   */
  constructor({ userName = '익명의 창업가' }) {
    this.userName = userName;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'loading-screen-container animate-fade-in';
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-height: 500px;
      gap: 24px;
      padding: 40px 20px;
      text-align: center;
    `;

    // 1. 아바타 모션 구체
    const orbBox = document.createElement('div');
    orbBox.className = 'result-avatar-circle animate-cute-bounce animate-glow-pulse';
    orbBox.style.cssText = `
      width: 110px;
      height: 110px;
      font-size: 56px;
      background: rgba(255, 255, 255, 0.96);
      border: 4px solid var(--sky-main);
      box-shadow: 0 10px 30px rgba(2, 132, 199, 0.25);
    `;
    orbBox.innerHTML = '🔮';

    // 2. 카피 및 상태 안내
    const textBox = document.createElement('div');
    textBox.style.cssText = 'display: flex; flex-direction: column; gap: 10px;';

    const title = document.createElement('h2');
    title.style.cssText = `
      font-size: 23px;
      font-weight: 800;
      color: var(--text-main);
      line-height: 1.4;
    `;
    title.innerHTML = `
      ${this.userName} 님의 성향을<br>
      <span style="background: var(--brand-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        딥다이브 분석하고 있습니다...
      </span>
    `;

    const subText = document.createElement('p');
    subText.className = 'loading-status-text';
    subText.style.cssText = `
      font-size: 14px;
      color: var(--text-sub);
      font-weight: 600;
      transition: opacity 0.3s ease;
    `;
    subText.textContent = '📊 12개 질문 응답 데이터 계산 중...';

    // 3. 로딩 상태 메시지 자동 로테이션 효과
    const messages = [
      '📊 12개 질문 응답 데이터 계산 중...',
      '🔮 6가지 창업가 성향 가산점 측정 중...',
      '🤝 최고의 환상의 파트너 궁합 매칭 중...'
    ];
    let msgIdx = 0;
    this.intervalId = setInterval(() => {
      msgIdx = (msgIdx + 1) % messages.length;
      if (subText) subText.textContent = messages[msgIdx];
    }, 700);

    textBox.appendChild(title);
    textBox.appendChild(subText);

    // 4. 세련된 그라데이션 스피너
    const spinner = document.createElement('div');
    spinner.style.cssText = `
      width: 44px;
      height: 44px;
      border: 4px solid var(--sky-light);
      border-top-color: var(--leaf-main);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    `;

    // 스피너 키프레임 주입 (필요 시)
    if (!document.getElementById('spinner-style')) {
      const style = document.createElement('style');
      style.id = 'spinner-style';
      style.textContent = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
      document.head.appendChild(style);
    }

    container.appendChild(orbBox);
    container.appendChild(textBox);
    container.appendChild(spinner);

    return container;
  }

  destroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
