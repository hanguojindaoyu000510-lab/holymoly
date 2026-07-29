/**
 * Component Showcase Demo Script (js/demo.js)
 */

import { StartScreen } from './components/StartScreen.js';
import { Header } from './components/Header.js';
import { Badge } from './components/Badge.js';
import { Button } from './components/Button.js';
import { ProgressBar } from './components/ProgressBar.js';
import { QuestionCard } from './components/QuestionCard.js';
import { ResultCard } from './components/ResultCard.js';
import { Modal } from './components/Modal.js';
import { questions } from './data/questions.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. StartScreen Demo
  const startScreenRoot = document.getElementById('start-screen-demo');
  const startScreen = new StartScreen({
    onStart: () => modal.open()
  }).render();
  startScreenRoot.appendChild(startScreen);

  // 2. Header Demos
  const header1 = new Header({ title: '창업 성향 테스트 (기본)', showBack: false }).render();
  const header2 = new Header({ title: '질문 진행 중 (이전 버튼)', showBack: true, onBack: () => alert('이전 클릭!') }).render();
  document.getElementById('header-demo-1').appendChild(header1);
  document.getElementById('header-demo-2').appendChild(header2);

  // 3. Badge Demos
  const badgeRoot = document.getElementById('badge-demo');
  const badge1 = new Badge({ text: '2026 대학생 창업캠프', icon: '🌱', variant: 'leaf' }).render();
  const badge2 = new Badge({ text: 'Q6. 문제 해결', icon: '💡', variant: 'sky' }).render();
  const badge3 = new Badge({ text: '3분 완성 테스트', icon: '✨', variant: 'leaf' }).render();
  const badge4 = new Badge({ text: '환상의 짝꿍 매칭', icon: '🤝', variant: 'sky' }).render();
  badgeRoot.appendChild(badge1);
  badgeRoot.appendChild(badge2);
  badgeRoot.appendChild(badge3);
  badgeRoot.appendChild(badge4);

  // 4. Button Demos
  const btnRoot = document.getElementById('button-demo');
  const btnPrimary = new Button({ text: 'Primary Sky Button', variant: 'primary', icon: '✨', onClick: () => alert('Primary Click!') }).render();
  const btnLeaf = new Button({ text: 'Accent Leaf Button', variant: 'leaf', icon: '🌿', onClick: () => alert('Leaf Click!') }).render();
  const btnOutline = new Button({ text: 'Outline Secondary Button', variant: 'outline', icon: '🔄', onClick: () => alert('Outline Click!') }).render();
  btnRoot.appendChild(btnPrimary);
  btnRoot.appendChild(btnLeaf);
  btnRoot.appendChild(btnOutline);

  // 5. ProgressBar Demos
  const progressRoot = document.getElementById('progress-demo');
  const pb1 = new ProgressBar({ current: 3, total: 12 }).render();
  const pb2 = new ProgressBar({ current: 6, total: 12 }).render();
  const pb3 = new ProgressBar({ current: 12, total: 12 }).render();
  progressRoot.appendChild(pb1);
  progressRoot.appendChild(pb2);
  progressRoot.appendChild(pb3);

  // 6. QuestionCard Demo
  const questionRoot = document.getElementById('question-demo');
  const sampleQ = questions[0];
  const qCard = new QuestionCard({
    questionData: sampleQ,
    onSelect: (type) => alert(`[데모] 선택된 성향 가산점: ${type}`)
  }).render();
  questionRoot.appendChild(qCard);

  // 7. ResultCard Demo
  const resultRoot = document.getElementById('result-demo');
  const rCard = new ResultCard({
    resultType: 'idea',
    userName: '김창업',
    onRestart: () => alert('[데모] 다시하기 클릭!'),
    onShare: () => alert('[데모] 공유하기 클릭!')
  }).render();
  resultRoot.appendChild(rCard);

  // 8. Modal Demo
  const modalRoot = document.getElementById('modal-root');
  const modal = new Modal({
    onSubmit: (data) => alert(`[데모 입력 완료] 이름: ${data.name}, 소속: ${data.univ}`)
  });
  modalRoot.appendChild(modal.render());

  const modalTriggerRoot = document.getElementById('modal-trigger-btn');
  const triggerBtn = new Button({
    text: '입력 모달 오픈 테스트',
    variant: 'leaf',
    icon: '🌱',
    onClick: () => modal.open()
  }).render();
  modalTriggerRoot.appendChild(triggerBtn);
});
