/**
 * TestScreen Component (2. 테스트 진행 화면 전용 모듈형 컴포넌트)
 * prd.md의 "Step 2. 질문 화면 Q1~Q12" 및 design.md의 "Witty & Sleek Glass" 디자인 가이드 적용
 */

import { ProgressBar } from './ProgressBar.js';
import { QuestionCard } from './QuestionCard.js';

export class TestScreen {
  /**
   * @param {Object} props
   * @param {Array} props.questions - 전체 12가지 상황 질문 배열
   * @param {number} props.currentIndex - 현재 질문 인덱스 (0 ~ 11)
   * @param {Function} props.onSelectOption - 선택지 선택 시 콜백 (type)
   * @param {Function} props.onBack - 이전 버튼 클릭 시 콜백
   */
  constructor({ questions, currentIndex = 0, onSelectOption, onBack }) {
    this.questions = questions;
    this.currentIndex = currentIndex;
    this.onSelectOption = onSelectOption;
    this.onBack = onBack;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'test-screen-container animate-fade-in';
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      height: 100%;
      gap: 16px;
    `;

    // 1. 상단 프로그레스바 (ProgressBar Component)
    const progressComp = new ProgressBar({
      current: this.currentIndex + 1,
      total: this.questions.length
    }).render();

    // 2. 중앙 질문 & 선택지 카드 (QuestionCard Component)
    const currentQData = this.questions[this.currentIndex];
    const questionCardComp = new QuestionCard({
      questionData: currentQData,
      onSelect: (type) => this.onSelectOption(type)
    }).render();

    container.appendChild(progressComp);
    container.appendChild(questionCardComp);

    return container;
  }
}
