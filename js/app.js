/**
 * Application Core Engine (js/app.js)
 * State Management & Component Orchestrator
 */

import { questions } from './data/questions.js';
import { Header } from './components/Header.js';
import { ProgressBar } from './components/ProgressBar.js';
import { StartScreen } from './components/StartScreen.js';
import { QuestionCard } from './components/QuestionCard.js';
import { ResultCard } from './components/ResultCard.js';
import { Modal } from './components/Modal.js';

class App {
  constructor() {
    this.state = 'home'; // 'home' | 'test' | 'loading' | 'result'
    this.currentIndex = 0;
    this.scores = { idea: 0, maker: 0, strategy: 0, comm: 0, analyst: 0, doer: 0 };
    this.userData = { name: '익명의 창업가', univ: '창업캠프' };
    this.history = []; // 이전 답변 복귀용 스택

    this.initDOM();
    this.initComponents();
    this.render();
  }

  initDOM() {
    this.headerRoot = document.getElementById('header-root');
    this.progressRoot = document.getElementById('progress-root');
    this.contentRoot = document.getElementById('content-root');
    this.modalRoot = document.getElementById('modal-root');
  }

  initComponents() {
    // 1. 정보 입력 모달
    this.modal = new Modal({
      onSubmit: (user) => {
        this.userData = user;
        this.startTest();
      }
    });
    this.modalRoot.appendChild(this.modal.render());
  }

  render() {
    // 헤더 및 프로그레스바 상태 동기화
    this.renderHeader();
    this.renderProgress();

    // 메인 콘텐츠 뷰 렌더링
    this.contentRoot.innerHTML = '';

    switch (this.state) {
      case 'home':
        this.renderHomeView();
        break;
      case 'test':
        this.renderTestView();
        break;
      case 'loading':
        this.renderLoadingView();
        break;
      case 'result':
        this.renderResultView();
        break;
    }
  }

  renderHeader() {
    this.headerRoot.innerHTML = '';
    const showBack = this.state === 'test' && this.currentIndex > 0;
    const header = new Header({
      title: '창업 성향 테스트',
      showBack,
      onBack: () => this.handleBack()
    }).render();
    this.headerRoot.appendChild(header);
  }

  renderProgress() {
    this.progressRoot.innerHTML = '';
    if (this.state === 'test') {
      const progressBar = new ProgressBar({
        current: this.currentIndex + 1,
        total: questions.length
      }).render();
      this.progressRoot.appendChild(progressBar);
    }
  }

  renderHomeView() {
    // StartScreen 모듈 컴포넌트를 사용하여 시작 화면 렌더링
    const startScreen = new StartScreen({
      onStart: () => this.modal.open()
    }).render();

    this.contentRoot.appendChild(startScreen);
  }

  startTest() {
    this.state = 'test';
    this.currentIndex = 0;
    this.scores = { idea: 0, maker: 0, strategy: 0, comm: 0, analyst: 0, doer: 0 };
    this.history = [];
    this.render();
  }

  handleSelect(type) {
    this.scores[type] = (this.scores[type] || 0) + 1;
    this.history.push(type);

    if (this.currentIndex < questions.length - 1) {
      this.currentIndex++;
      this.render();
    } else {
      this.state = 'loading';
      this.render();
      setTimeout(() => {
        this.state = 'result';
        this.render();
      }, 2000);
    }
  }

  handleBack() {
    if (this.currentIndex > 0) {
      const prevType = this.history.pop();
      if (prevType && this.scores[prevType] > 0) {
        this.scores[prevType]--;
      }
      this.currentIndex--;
      this.render();
    }
  }

  renderTestView() {
    const qData = questions[this.currentIndex];
    const qCard = new QuestionCard({
      questionData: qData,
      onSelect: (type) => this.handleSelect(type)
    }).render();

    this.contentRoot.appendChild(qCard);
  }

  renderLoadingView() {
    const container = document.createElement('div');
    container.className = 'animate-fade-in text-center';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.height = '100%';
    container.style.gap = '20px';

    container.innerHTML = `
      <div class="result-avatar-circle animate-cute-bounce" style="width: 100px; height: 100px; font-size: 50px;">
        🔮
      </div>
      <h2 style="font-size: 22px; font-weight: 800; color: var(--text-main);">
        ${this.userData.name} 님의 성향을<br>
        <span style="color: var(--leaf-main);">분석하고 있습니다...</span>
      </h2>
      <p style="font-size: 14px; color: var(--text-sub);">
        최고의 환상의 파트너 조합을 계산하는 중입니다!
      </p>
    `;

    this.contentRoot.appendChild(container);
  }

  getWinnerType() {
    let winner = 'idea';
    let maxScore = -1;
    for (const [type, score] of Object.entries(this.scores)) {
      if (score > maxScore) {
        maxScore = score;
        winner = type;
      }
    }
    return winner;
  }

  renderResultView() {
    const winnerType = this.getWinnerType();
    const resultCard = new ResultCard({
      resultType: winnerType,
      userName: this.userData.name,
      onRestart: () => {
        this.state = 'home';
        this.render();
      },
      onShare: () => {
        if (navigator.share) {
          navigator.share({
            title: `${this.userData.name} 님의 창업 성향 결과`,
            text: `나의 창업 성향 결과를 확인해보세요!`,
            url: window.location.href
          }).catch(() => {});
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert('결과 링크가 클립보드에 복사되었습니다! 🎉');
        }
      }
    }).render();

    this.contentRoot.appendChild(resultCard);
  }
}

// 앱 실행
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
