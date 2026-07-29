/**
 * Application Core Engine (js/app.js)
 * State Management & Component Orchestrator
 */

import { questions } from './data/questions.js';
import { Header } from './components/Header.js';
import { StartScreen } from './components/StartScreen.js';
import { TestScreen } from './components/TestScreen.js';
import { LoadingScreen } from './components/LoadingScreen.js';
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
    // 1. 정보 입력 수집 모달
    this.modal = new Modal({
      onSubmit: (user) => {
        this.userData = user;
        this.startTest();
      }
    });
    this.modalRoot.appendChild(this.modal.render());
  }

  render() {
    // 헤더 상태 동기화
    this.renderHeader();

    // 메인 콘텐츠 뷰 렌더링
    this.contentRoot.innerHTML = '';
    this.progressRoot.innerHTML = '';

    if (this.currentLoadingComp) {
      this.currentLoadingComp.destroy();
      this.currentLoadingComp = null;
    }

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

  renderTestView() {
    // TestScreen 모듈 컴포넌트를 사용하여 2. 테스트 진행 화면 렌더링
    const testScreen = new TestScreen({
      questions,
      currentIndex: this.currentIndex,
      onSelectOption: (type) => this.handleSelect(type),
      onBack: () => this.handleBack()
    }).render();

    this.contentRoot.appendChild(testScreen);
  }

  handleSelect(type) {
    this.scores[type] = (this.scores[type] || 0) + 1;
    this.history.push(type);

    if (this.currentIndex < questions.length - 1) {
      this.currentIndex++;
      this.render();
    } else {
      // 모든 질문 응답 완료 시 -> 3. 로딩 화면으로 전환
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

  renderLoadingView() {
    // LoadingScreen 모듈 컴포넌트를 사용하여 3. 분석 및 로딩 화면 렌더링
    this.currentLoadingComp = new LoadingScreen({
      userName: this.userData.name
    });

    this.contentRoot.appendChild(this.currentLoadingComp.render());
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
