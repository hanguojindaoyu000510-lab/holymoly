/**
 * Standalone Self-Contained Application Bundle (js/bundle.js)
 * Works in all environments including file:// protocol and all web servers.
 */

(function() {
  // 1. Data: Questions
  const questions = [
    {
      id: 1,
      badge: "🌱 Q1. 프로젝트 시작",
      question: "창업 캠프 첫날, 아이디어를 정하는 팀 회의에서 당신의 모습은?",
      options: [
        { text: "아무도 생각 못 한 엉뚱하고 독창적인 아이디어를 대량 방출한다.", type: "idea" },
        { text: "실제로 구동 가능한 시제품(MVP) 구현 가능성부터 검토한다.", type: "maker" },
        { text: "시장에서 돈이 될 수 있는 비즈니스 모델(BM)과 수익 구조를 따진다.", type: "strategy" },
        { text: "팀원들의 이야기를 경청하며 편안한 회의 분위기를 만든다.", type: "comm" }
      ]
    },
    {
      id: 2,
      badge: "💡 Q2. 난관 착착",
      question: "아이디어 구상 중 심각한 난관에 부딪혔을 때 당신의 해결책은?",
      options: [
        { text: "무작정 밖으로 나가 실제 타겟 고객 20명에게 인터뷰를 시도한다.", type: "doer" },
        { text: "관련 통계 자료와 유사 서비스 성공/실패 데이터를 딥다이브 분석한다.", type: "analyst" },
        { text: "전혀 다른 분야의 모범 사례를 접목해 새로운 콘셉트로 피벗한다.", type: "idea" },
        { text: "관련 분야 전문가나 멘토님을 찾아가 피드백을 구한다.", type: "comm" }
      ]
    },
    {
      id: 3,
      badge: "🛠️ Q3. 역할 분담",
      question: "팀 내 해커톤 무박 작업이 시작되었습니다. 당신이 맡고 싶은 핵심 임무는?",
      options: [
        { text: "직접 피그마 디자인을 하거나 서비스 랜딩페이지 코딩에 몰두한다.", type: "maker" },
        { text: "사업계획서의 논리적 흐름과 시장 규모, 타겟 분석을 작성한다.", type: "analyst" },
        { text: "팀의 핵심 가치와 비전을 담은 감동적인 발표(IR 피칭)를 준비한다.", type: "comm" },
        { text: "경쟁사 대비 우리 서비스만의 차별화된 경쟁 전략을 세운다.", type: "strategy" }
      ]
    },
    {
      id: 4,
      badge: "⚡ Q4. 현장 테스트",
      question: "캠프 2일 차, 서비스 유저 반응을 빠르게 확인해야 할 때 당신은?",
      options: [
        { text: "당장 인스타그램 광고나 오픈채팅방에 홍보지를 뿌리고 반응을 본다.", type: "doer" },
        { text: "설문조사 문항을 정교하게 구성해 데이터 오류 없이 수집한다.", type: "analyst" },
        { text: "더 매력적으로 보일 수 있는 랜딩페이지 visual 프로토타입을 빠르게 만든다.", type: "maker" },
        { text: "팀원들과 역할을 나누어 캠프 장내 참가자들에게 직접 찾아간다.", type: "comm" }
      ]
    },
    {
      id: 5,
      badge: "🎯 Q5. 의견 대립",
      question: "팀원 간에 서비스 방향성을 두고 치열한 의견 대립이 발생했을 때 당신은?",
      options: [
        { text: "수익성과 시장 성장성에 가장 유리한 안으로 합리적 결정을 유도한다.", type: "strategy" },
        { text: "양쪽 의견의 감정을 다스리고 중재하여 타협안을 도출한다.", type: "comm" },
        { text: "객관적인 지표와 설문 수치 데이터를 바탕으로 검증한다.", type: "analyst" },
        { text: "고민할 시간에 A안과 B안을 모두 작게 만들어 빠르게 고객 반응을 비교해 본다.", type: "doer" }
      ]
    },
    {
      id: 6,
      badge: "📊 Q6. 멘토링 피드백",
      question: "창업 멘토로부터 '아이디어는 좋지만 구현이 힘들어 보인다'는 지적을 받았다면?",
      options: [
        { text: "핵심 기능만 남긴 초간단 버전을 밤새서라도 만들어 증명해 보인다.", type: "maker" },
        { text: "기술적 한계를 극복할 수 있는 새로운 창의적 우회 아이디어를 낸다.", type: "idea" },
        { text: "멘토님이 지적한 핵심 불안 요소 데이터를 재분석해 보완한다.", type: "analyst" },
        { text: "외주나 다른 팀과의 협업을 통해 기술적 한계를 극복한다.", type: "comm" }
      ]
    },
    {
      id: 7,
      badge: "🚀 Q7. 최종 발표 직전",
      question: "데모데이 발표 1시간 전! 당신이 가장 신경 쓰는 부분은?",
      options: [
        { text: "심사위원의 마음을 사로잡을 스토리텔링과 피칭 톤앤매너", type: "comm" },
        { text: "시연할 앱/웹 시제품이 발표 도중 에러 없이 완벽히 작동하는지 확인", type: "maker" },
        { text: "심사위원의 날카로운 Q&A 질의응답 시 맹점을 방어할 수 있는 수치 근거 준비", type: "analyst" },
        { text: "우리 서비스가 가져올 거대한 시장의 미래 비전과 확장성 전달", type: "idea" }
      ]
    },
    {
      id: 8,
      badge: "💡 Q8. 리더십 스타일",
      question: "당신이 생각하는 이상적인 창업팀 팀장의 모습은?",
      options: [
        { text: "끊임없이 새로운 비전과 가슴 뛰는 아이디어를 제시하는 리더", type: "idea" },
        { text: "명확한 전략과 가성비 높은 사업 방향을 빠르게 판단하는 리더", type: "strategy" },
        { text: "솔선수범하여 가장 먼저 행동하고 발로 뛰는 리더", type: "doer" },
        { text: "팀원의 고충을 귀담아듣고 조화롭게 이끄는 리더", type: "comm" }
      ]
    },
    {
      id: 9,
      badge: "🛠️ Q9. 성과 정의",
      question: "이번 창업 캠프에서 가장 큰 성과라고 생각하는 것은?",
      options: [
        { text: "눈으로 확인 가능한 완성도 높은 시제품을 손에 쥔 것", type: "maker" },
        { text: "실제 고객 10명 이상의 진정성 있는 긍정 피드백과 데이터를 얻은 것", type: "doer" },
        { text: "평생 함께할 최고의 팀원들과 깊은 신뢰를 쌓은 것", type: "comm" },
        { text: "실제 투자를 유치할 수 있을 만한 탄탄한 BM을 완성한 것", type: "strategy" }
      ]
    },
    {
      id: 10,
      badge: "🎯 Q10. 위기 상황",
      question: "경쟁팀이 우리와 거의 똑같은 아이템으로 발표를 준비하는 것을 알게 되었다면?",
      options: [
        { text: "우리가 가진 다른 차별화된 기능과 아이디어를 긴급 추가한다.", type: "idea" },
        { text: "상대 팀보다 서비스 디자인과 완성도를 한 단계 높여 압도한다.", type: "maker" },
        { text: "상대팀이 놓친 시장의 세부 니즈를 공격하는 가격/마케팅 전략을 세운다.", type: "strategy" },
        { text: "당장 현장으로 나가 우리 팀이 실사용자를 더 많이 확보해 버린다.", type: "doer" }
      ]
    },
    {
      id: 11,
      badge: "📊 Q11. 자원 관리",
      question: "팀에 100만 원의 창업 지원금이 주어졌다면 어디에 먼저 쓸 것인가?",
      options: [
        { text: "타겟 고객 유입을 위한 마케팅 광고 및 이벤트 비용", type: "doer" },
        { text: "더 정밀한 시장 조사 리포트 구입 및 팩트 데이터 확보", type: "analyst" },
        { text: "시제품의 퀄리티를 높일 서버 비용 및 인프라 구축", type: "maker" },
        { text: "전문가 멘토링 세션 및 팀원 사기 진작용 식사 및 회식", type: "comm" }
      ]
    },
    {
      id: 12,
      badge: "⚡ Q12. 창업의 의미",
      question: "당신에게 '창업'이란 한 마디로 무엇인가요?",
      options: [
        { text: "세상에 없던 새로운 가치를 상상하고 현실로 만드는 꿈", type: "idea" },
        { text: "내 손으로 직접 부딪혀 목표를 성취해 내는 도전과 실행", type: "doer" },
        { text: "치밀한 전략을 통해 시장에서 승리하는 비즈니스 게임", type: "strategy" },
        { text: "좋은 사람들과 합심하여 세상의 문제를 함께 해결해 나가는 과정", type: "comm" }
      ]
    }
  ];

  // 2. Data: Results
  const results = {
    idea: {
      id: "idea",
      title: "머릿속 팝콘 기계 🍿 아이디어 폭주 기관차",
      subTitle: "The Visionary Idea Machine",
      emoji: "💡",
      tag: "아이디어 폭주족",
      summary: "남들이 '그게 되겠어?' 할 때 '이렇게 하면 대박이다!'를 외치는 24시간 상상력 마술사입니다.",
      strengths: [
        "창의적이고 고정관념을 박살 내는 엉뚱하고 참신한 뇌피셜",
        "남들이 놓친 새로운 기회와 트렌드를 포착하는 귀신같은 촉",
        "팀원들 가슴에 불을 지피는 가슴 뛰는 비전 제시력"
      ],
      warnings: [
        "아이디어가 너무 많아 하루에 사업 아이템이 3번 바뀔 수 있음",
        "디테일한 엑셀 작업이나 서류 작성 시 영혼이 가출함"
      ],
      role: "서비스 기획자 / CPO / 아이디어 총괄",
      partner: {
        type: "analyst",
        name: "📊 팩트 폭격기 분석형 파트너",
        desc: "폭주하는 아이디어를 팩트와 수치 데이터로 딱 검증해 실전 꿀템으로 바꿔줍니다!"
      }
    },
    maker: {
      id: "maker",
      title: "버그 잡는 손끝 마술사 🛠️ 프로토타입 연금술사",
      subTitle: "The Technical Alchemist",
      emoji: "🛠️",
      tag: "갓핸드 연금술사",
      summary: "백마디 말보다 서비스 한 줄! 상상 속 아이디어를 눈에 보이는 서비스로 뚝딱 구현해 내는 실전파입니다.",
      strengths: [
        "아이디어를 빛의 속도로 뚝딱 만들어 내는 미친 손재주",
        "버그와 퀄리티 타협을 허용하지 않는 장인 정신",
        "기술적 장벽을 논리적으로 물리치는 사이다 해결력"
      ],
      warnings: [
        "개발/디자인에 꽂히면 밤을 새우다 건강이 손상될 수 있음",
        "고객 피드백보다 기술적 완벽함에 먼저 집착할 수 있음"
      ],
      role: "핵심 개발자 / 디자이너 / CTO",
      partner: {
        type: "idea",
        name: "💡 아이디어 폭주 기관차 파트너",
        desc: "뛰어난 손기술에 거대한 세상의 비전과 상상력을 더해줄 환상의 단짝입니다!"
      }
    },
    strategy: {
      id: "strategy",
      title: "승리하는 판을 설계하는 🎯 비즈니스 손자병법",
      subTitle: "The Master Strategist",
      emoji: "🎯",
      tag: "갓생 전략가",
      summary: "이 사업이 실제로 돈이 될까? 0.1초 만에 BM과 통장 잔고의 미래를 계산해 내는 갓생 실속 리더입니다.",
      strengths: [
        "사업이 진짜 돈이 되는지 판별하는 날카로운 비즈니스 감각",
        "경쟁사를 단번에 제압하는 치밀한 승리 전략 수립",
        "팀의 시간과 예산을 가성비 200%로 집행하는 철저함"
      ],
      warnings: [
        "모든 것을 논리로 따지다 감성 마케팅을 놓칠 수 있음",
        "불확실성이 높을 때 은근 보수적으로 변할 수 있음"
      ],
      role: "대표(CEO) / 전략 총괄 / CFO",
      partner: {
        type: "doer",
        name: "⚡ 불꽃 추진력 실행형 파트너",
        desc: "세워둔 치밀한 판 위에서 망설임 없이 전속력으로 뛰어줄 불꽃 탱크입니다!"
      }
    },
    comm: {
      id: "comm",
      title: "팀의 인간 비타민 🤝 분위기 심폐소생 피칭왕",
      subTitle: "The Super Communicator",
      emoji: "🤝",
      tag: "인간 비타민",
      summary: "어색한 분위기도 1초 만에 녹이고, 심사위원의 마음도 단번에 사로잡는 마성의 영업왕 커뮤니케이터!",
      strengths: [
        "어떠한 위기에서도 분위기를 반전시키는 미친 친화력",
        "투자자와 고객을 단숨에 설득하는 명품 발표(IR) 실력",
        "외부 멘토와 외주 파트너십을 척척 따오는 인싸력"
      ],
      warnings: [
        "팀원들 맘 상할까 봐 쓴소리를 참고 속으로 삼킬 수 있음",
        "분위기에 쓸려 진짜 중요한 데이터 검증을 스킵할 수 있음"
      ],
      role: "마케팅 리드 / CMO / 대외 협력 리더",
      partner: {
        type: "strategy",
        name: "🎯 비즈니스 손자병법 파트너",
        desc: "넘치는 소통력 뒤에서 흔들리지 않는 명확한 기준과 뼈대를 잡아줄 단짝입니다!"
      }
    },
    analyst: {
      id: "analyst",
      title: "0.1% 맹점도 잡는다 📊 데이터 셜록 홈즈",
      subTitle: "The Data Sherlock",
      emoji: "📊",
      tag: "팩트 폭격기",
      summary: "막연한 뇌피셜은 거부한다! 철저한 수치와 데이터 통계로 실패할 위험을 0%로 만드는 든든한 방어막입니다.",
      strengths: [
        "데이터 분석 및 팩트 기반 가설 검증의 달인",
        "사업계획서의 허점과 맹점을 조기에 발견하는 매의 눈",
        "감정에 휘둘리지 않는 냉철하고 합리적인 판단"
      ],
      warnings: [
        "데이터가 없으면 한 발짝도 나아가기 주저할 수 있음",
        "직설적인 팩트 폭격으로 팀원들의 쿠쿠다스 멘탈을 건드릴 수 있음"
      ],
      role: "데이터 분석가 / 리서처 / 품질 검증 리드",
      partner: {
        type: "idea",
        name: "💡 아이디어 팝콘 기계 파트너",
        desc: "분석형의 차가운 팩트에 독창적인 영감을 불어넣어 대박 아이템으로 만들어 줍니다!"
      }
    },
    doer: {
      id: "doer",
      title: "고민은 배송을 늦출 뿐! ⚡ 불꽃 추진력 실행파",
      subTitle: "The Action Maverick",
      emoji: "⚡",
      tag: "빛의 속도 행동파",
      summary: "생각은 3초, 행동은 빛의 속도! 회의실에 앉아있을 시간에 밖으로 나가 고객 50명 피드백을 따오는 행동파입니다.",
      strengths: [
        "망설임과 머뭇거림 없는 압도적 실행 속도",
        "실패해도 '오히려 좋아!'를 외치며 털어내는 불굴의 멘탈",
        "고객 현장에서 직접 몸으로 부딪쳐 결과를 가져오는 입체감"
      ],
      warnings: [
        "너무 빨라서 팀원들이 뒤따라오다 과호흡이 올 수 있음",
        "앞만 보고 달리다 서류나 디테일 마무리를 누락할 수 있음"
      ],
      role: "COO / 현장 마케터 / 영업 총괄",
      partner: {
        type: "maker",
        name: "🛠️ 갓핸드 제작형 파트너",
        desc: "현장에서 빛의 속도로 따온 요구사항을 당장 눈앞의 제품으로 뽑아내 줄 영혼의 짝꿍입니다!"
      }
    }
  };

  // 3. Components Definitions
  class Badge {
    constructor({ text, icon = '', variant = 'leaf' }) {
      this.text = text;
      this.icon = icon;
      this.variant = variant;
    }
    render() {
      const badgeEl = document.createElement('span');
      badgeEl.className = `badge-cute ${this.variant === 'sky' ? 'badge-sky' : ''}`;
      badgeEl.innerHTML = `${this.icon ? `<span>${this.icon}</span>` : ''}<span>${this.text}</span>`;
      return badgeEl;
    }
  }

  class Button {
    constructor({ text, variant = 'primary', icon = '', onClick = () => {} }) {
      this.text = text;
      this.variant = variant;
      this.icon = icon;
      this.onClick = onClick;
    }
    render() {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `btn-base btn-${this.variant}`;
      btn.innerHTML = `${this.icon ? `<span>${this.icon}</span>` : ''}<span>${this.text}</span>`;
      btn.addEventListener('click', (e) => this.onClick(e));
      return btn;
    }
  }

  class ProgressBar {
    constructor({ current, total }) {
      this.current = current;
      this.total = total;
    }
    render() {
      const percentage = Math.round((this.current / this.total) * 100);
      const container = document.createElement('div');
      container.className = 'progress-wrapper';
      container.innerHTML = `
        <div class="progress-header">
          <span>진행 상황</span>
          <span class="progress-text">${this.current} / ${this.total}</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${percentage}%"></div>
        </div>
      `;
      return container;
    }
  }

  class Header {
    constructor({ title = '창업 성향 테스트', showBack = false, onBack = () => {} }) {
      this.title = title;
      this.showBack = showBack;
      this.onBack = onBack;
    }
    render() {
      const header = document.createElement('header');
      header.className = 'app-header';
      header.innerHTML = `
        <div class="header-brand">
          <div class="header-brand-icon">🌱</div>
          <span>${this.title}</span>
        </div>
        ${this.showBack ? `<button type="button" class="header-back-btn"><span>← 이전</span></button>` : ''}
      `;
      if (this.showBack) {
        const backBtn = header.querySelector('.header-back-btn');
        if (backBtn) backBtn.addEventListener('click', () => this.onBack());
      }
      return header;
    }
  }

  class StartScreen {
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

      const topBox = document.createElement('div');
      topBox.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 10px;';
      const badge = new Badge({ text: '✨ 2026 대학생 창업캠프 전용', icon: '🌱', variant: 'leaf' }).render();
      const avatarBox = document.createElement('div');
      avatarBox.className = 'result-avatar-circle animate-cute-bounce';
      avatarBox.style.cssText = `
        width: 96px; height: 96px; font-size: 50px; margin-top: 4px;
        background: rgba(255, 255, 255, 0.95); border: 3px solid var(--leaf-mint);
      `;
      avatarBox.innerHTML = '🚀';
      topBox.appendChild(badge);
      topBox.appendChild(avatarBox);

      const centerBox = document.createElement('div');
      centerBox.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 10px 0;';
      const title = document.createElement('h1');
      title.style.cssText = 'font-size: 23px; font-weight: 800; line-height: 1.35; color: var(--text-main);';
      title.innerHTML = '나는 창업 팀에서<br><span style="background: var(--sky-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">어떤 역할을 맡아야 할까?</span>';
      const desc = document.createElement('p');
      desc.style.cssText = 'font-size: 14px; color: var(--text-sub); line-height: 1.55; font-weight: 500;';
      desc.innerHTML = '약 <b>3분 만에</b> 알아보는 나의 창업가 성향!<br>나와 가장 잘 맞는 <b>🤝 환상의 짝꿍 파트너</b>를 찾아보세요.';
      const statsTag = document.createElement('div');
      statsTag.style.cssText = `
        display: inline-flex; align-items: center; gap: 12px; padding: 8px 16px;
        background: var(--sky-tint); border: 1px solid rgba(2, 132, 199, 0.2);
        border-radius: var(--radius-pill); font-size: 12px; font-weight: 700; color: var(--sky-main);
      `;
      statsTag.innerHTML = `<span>⏱️ 약 3분 소요</span><span style="opacity: 0.4;">|</span><span>📋 12개 상황 질문</span>`;
      centerBox.appendChild(title);
      centerBox.appendChild(desc);
      centerBox.appendChild(statsTag);

      const bottomBox = document.createElement('div');
      bottomBox.style.width = '100%';
      const startBtn = new Button({ text: '나의 창업 성향 진단하기', variant: 'primary', icon: '✨', onClick: () => this.onStart() }).render();
      bottomBox.appendChild(startBtn);

      container.appendChild(topBox);
      container.appendChild(centerBox);
      container.appendChild(bottomBox);
      return container;
    }
  }

  class QuestionCard {
    constructor({ questionData, onSelect }) {
      this.data = questionData;
      this.onSelect = onSelect;
    }
    render() {
      const container = document.createElement('div');
      container.className = 'question-container animate-slide-in';
      const titleBox = document.createElement('div');
      titleBox.className = 'question-title-box';
      const badge = new Badge({ text: this.data.badge, variant: 'sky' }).render();
      const qText = document.createElement('h2');
      qText.className = 'question-text';
      qText.textContent = this.data.question;
      titleBox.appendChild(badge);
      titleBox.appendChild(qText);

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
          optionsList.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          setTimeout(() => this.onSelect(opt.type), 250);
        });
        optionsList.appendChild(card);
      });

      container.appendChild(titleBox);
      container.appendChild(optionsList);
      return container;
    }
  }

  class TestScreen {
    constructor({ questions, currentIndex = 0, onSelectOption, onBack }) {
      this.questions = questions;
      this.currentIndex = currentIndex;
      this.onSelectOption = onSelectOption;
      this.onBack = onBack;
    }
    render() {
      const container = document.createElement('div');
      container.className = 'test-screen-container animate-fade-in';
      container.style.cssText = 'display: flex; flex-direction: column; height: 100%; gap: 14px;';
      const progressComp = new ProgressBar({ current: this.currentIndex + 1, total: this.questions.length }).render();
      const currentQData = this.questions[this.currentIndex];
      const questionCardComp = new QuestionCard({ questionData: currentQData, onSelect: (type) => this.onSelectOption(type) }).render();
      container.appendChild(progressComp);
      container.appendChild(questionCardComp);
      return container;
    }
  }

  class LoadingScreen {
    constructor({ userName = '익명의 창업가' }) {
      this.userName = userName;
    }
    render() {
      const container = document.createElement('div');
      container.className = 'loading-screen-container animate-fade-in';
      container.style.cssText = 'display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; min-height: 480px; gap: 20px; padding: 20px; text-align: center;';
      const orbBox = document.createElement('div');
      orbBox.className = 'result-avatar-circle animate-cute-bounce';
      orbBox.style.cssText = 'width: 100px; height: 100px; font-size: 50px; background: rgba(255, 255, 255, 0.96); border: 4px solid var(--sky-main);';
      orbBox.innerHTML = '🔮';

      const textBox = document.createElement('div');
      textBox.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
      const title = document.createElement('h2');
      title.style.cssText = 'font-size: 21px; font-weight: 800; color: var(--text-main); line-height: 1.4;';
      title.innerHTML = `${this.userName} 님의 성향을<br><span style="background: var(--brand-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">딥다이브 분석하고 있습니다...</span>`;

      const subText = document.createElement('p');
      subText.style.cssText = 'font-size: 13px; color: var(--text-sub); font-weight: 600;';
      subText.textContent = '📊 12개 질문 응답 데이터 계산 중...';

      const messages = ['📊 12개 질문 응답 데이터 계산 중...', '🔮 6가지 창업가 성향 가산점 측정 중...', '🤝 최고의 환상의 파트너 궁합 매칭 중...'];
      let msgIdx = 0;
      this.intervalId = setInterval(() => {
        msgIdx = (msgIdx + 1) % messages.length;
        if (subText) subText.textContent = messages[msgIdx];
      }, 700);

      textBox.appendChild(title);
      textBox.appendChild(subText);

      const spinner = document.createElement('div');
      spinner.style.cssText = 'width: 40px; height: 40px; border: 4px solid var(--sky-light); border-top-color: var(--leaf-main); border-radius: 50%; animation: spin 0.8s linear infinite;';
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
      if (this.intervalId) clearInterval(this.intervalId);
    }
  }

  class ResultScreen {
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
          alert('카카오 SDK 연결에 실패했습니다.');
        }
      };

      if (window.Kakao) {
        doShare();
      } else {
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
        script.onload = () => doShare();
        script.onerror = () => alert('카카오 SDK 로드 실패');
        document.head.appendChild(script);
      }
    }

    render() {
      const container = document.createElement('div');
      container.className = 'result-screen-container animate-fade-in';
      container.style.cssText = 'display: flex; flex-direction: column; gap: 16px; padding-bottom: 16px;';
      const partnerTypeData = results[this.typeData.partner.type] || results.analyst;

      const heroCard = document.createElement('div');
      heroCard.className = 'result-hero-card';
      const userBadge = new Badge({ text: `✨ ${this.userName} 님의 창업 성향`, variant: 'leaf' }).render();
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

      const roleBox = document.createElement('div');
      roleBox.className = 'result-info-box';
      roleBox.style.cssText = 'background: var(--sky-tint); border: 1px solid rgba(2, 132, 199, 0.25);';
      roleBox.innerHTML = `
        <div class="result-info-title" style="color: var(--sky-main);">🎯 팀 내 추천 역할</div>
        <div style="font-size: 15px; font-weight: 800; color: var(--text-main);">${this.typeData.role}</div>
      `;

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

      const actionGroup = document.createElement('div');
      actionGroup.style.cssText = 'display: flex; flex-direction: column; gap: 8px; margin-top: 6px;';
      const kakaoBtn = new Button({ text: '카카오톡으로 공유하기', variant: 'kakao', icon: '💬', onClick: () => this.shareKakaoTalk() }).render();
      const shareBtn = new Button({ text: '결과 링크 복사하기', variant: 'primary', icon: '🔗', onClick: () => this.onShare() }).render();
      const restartBtn = new Button({ text: '테스트 다시하기', variant: 'outline', icon: '🔄', onClick: () => this.onRestart() }).render();
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

  class Modal {
    constructor({ onSubmit }) {
      this.onSubmit = onSubmit;
    }
    render() {
      this.overlay = document.createElement('div');
      this.overlay.className = 'modal-overlay';
      this.overlay.innerHTML = `
        <div class="modal-box animate-fade-in">
          <h3 style="font-size: 18px; font-weight: 800; color: var(--text-main); text-align: center;">
            🌱 캠프 참가자 정보 입력
          </h3>
          <p style="font-size: 12px; color: var(--text-sub); text-align: center; margin-top: -4px;">
            결과 카드 제출 및 팀 빌딩용 기본 정보입니다. (선택)
          </p>
          <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 4px;">
            <input type="text" id="input-name" class="modal-input" placeholder="이름 (예: 홍길동)" />
            <input type="text" id="input-univ" class="modal-input" placeholder="소속 대학/기관 (예: 창업대학교)" />
          </div>
          <div id="modal-actions" style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;"></div>
        </div>
      `;
      const modalActions = this.overlay.querySelector('#modal-actions');
      const startBtn = new Button({
        text: '테스트 시작하기', variant: 'primary',
        onClick: () => {
          const name = this.overlay.querySelector('#input-name').value.trim();
          const univ = this.overlay.querySelector('#input-univ').value.trim();
          this.close();
          this.onSubmit({ name: name || '익명의 창업가', univ: univ || '창업캠프' });
        }
      }).render();
      const guestBtn = new Button({
        text: '입력 없이 익명으로 시작', variant: 'outline',
        onClick: () => {
          this.close();
          this.onSubmit({ name: '익명의 창업가', univ: '캠프 참가자' });
        }
      }).render();
      modalActions.appendChild(startBtn);
      modalActions.appendChild(guestBtn);
      return this.overlay;
    }
    open() { this.overlay.classList.add('active'); }
    close() { this.overlay.classList.remove('active'); }
  }

  // 4. Main App Controller
  class App {
    constructor() {
      this.state = 'home';
      this.currentIndex = 0;
      this.scores = { idea: 0, maker: 0, strategy: 0, comm: 0, analyst: 0, doer: 0 };
      this.userData = { name: '익명의 창업가', univ: '창업캠프' };
      this.history = [];
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
      this.modal = new Modal({
        onSubmit: (user) => {
          this.userData = user;
          this.startTest();
        }
      });
      this.modalRoot.appendChild(this.modal.render());
    }
    render() {
      this.renderHeader();
      this.contentRoot.innerHTML = '';
      this.progressRoot.innerHTML = '';
      if (this.currentLoadingComp) {
        this.currentLoadingComp.destroy();
        this.currentLoadingComp = null;
      }
      switch (this.state) {
        case 'home': this.renderHomeView(); break;
        case 'test': this.renderTestView(); break;
        case 'loading': this.renderLoadingView(); break;
        case 'result': this.renderResultView(); break;
      }
    }
    renderHeader() {
      this.headerRoot.innerHTML = '';
      const showBack = this.state === 'test' && this.currentIndex > 0;
      const header = new Header({
        title: '창업 성향 테스트', showBack, onBack: () => this.handleBack()
      }).render();
      this.headerRoot.appendChild(header);
    }
    renderHomeView() {
      const startScreen = new StartScreen({ onStart: () => this.modal.open() }).render();
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
      const testScreen = new TestScreen({
        questions, currentIndex: this.currentIndex,
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
      this.currentLoadingComp = new LoadingScreen({ userName: this.userData.name });
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
      const resultScreen = new ResultScreen({
        resultType: winnerType,
        userName: this.userData.name,
        onRestart: () => { this.state = 'home'; this.render(); },
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
      this.contentRoot.appendChild(resultScreen);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
  });
})();
