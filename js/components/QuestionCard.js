/**
 * QuestionCard Component
 * 질문 내용 및 4가지 상황별 선택지 카드 컴포넌트
 */

import { Badge } from './Badge.js';

export class QuestionCard {
  /**
   * @param {Object} props
   * @param {Object} props.questionData - 질문 데이터 객체
   * @param {Function} props.onSelect - 선택지 선택 시 콜백
   */
  constructor({ questionData, onSelect }) {
    this.data = questionData;
    this.onSelect = onSelect;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'question-container animate-fade-in';

    // 1. 질문 영역
    const titleBox = document.createElement('div');
    titleBox.className = 'question-title-box';

    const badge = new Badge({ text: this.data.badge, variant: 'sky' }).render();
    const qText = document.createElement('h2');
    qText.className = 'question-text';
    qText.style.marginTop = '10px';
    qText.textContent = this.data.question;

    titleBox.appendChild(badge);
    titleBox.appendChild(qText);

    // 2. 선택지 목록
    const optionsList = document.createElement('div');
    optionsList.className = 'options-list';

    this.data.options.forEach((opt, idx) => {
      const card = document.createElement('div');
      card.className = 'option-card';
      card.innerHTML = `
        <div class="option-radio-circle">${String.fromCharCode(65 + idx)}</div>
        <div style="flex: 1;">${opt.text}</div>
      `;

      card.addEventListener('click', () => {
        // UI 선택 효과
        optionsList.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        setTimeout(() => {
          this.onSelect(opt.type);
        }, 250);
      });

      optionsList.appendChild(card);
    });

    container.appendChild(titleBox);
    container.appendChild(optionsList);

    return container;
  }
}
