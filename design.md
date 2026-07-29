# 🎨 대학생 창업 성향 테스트 UI/UX 디자인 가이드 (design.md)

> **컨셉 스토어**: "Fresh Sky & Leaf Breeze" (푸르른 하늘과 싱그러운 초록잎사귀)  
> **핵심 가치**: 단순함(Simplicity), 시원시원함(Spaciousness), 약간의 둥근 곡선(Soft Rounded), 귀여운 미크로 인터랙션(Cute Micro-Interactions)

---

## 1. 디자인 컨셉 & 무드 (Design Concept)

| 요소 | 컨셉 방향 | 세부 가이드 |
| :--- | :--- | :--- |
| **분위기 (Mood)** | 청량함 & 풋풋함 | 대학생 참가자들의 새로운 시작을 응원하는 시원한 하늘과 싱그러운 나뭇잎 느낌 |
| **레이아웃 (Layout)** | 시원시원한 모바일 퍼스트 | 여백(Padding/Margin)을 넉넉히 주어 답답하지 않고 한눈에 들어오는 가독성 확보 |
| **모서리 (Radius)** | 부드럽게 둥근 곡선 | 차가운 직각 사각형을 피하고, 14px~20px의 기분 좋은 둥근 모서리 적용 |
| **귀여움 (Cuteness)** |위트 있는 캐릭터 & 뱃지 | 귀여운 이모지 뱃지, 통통 튀는 바운스 애니메이션, 둥근 포인트 폰트 적용 |

---

## 2. 컬러 시스템 (Color Palette & Tokens)

### 2.1 메인 팔레트 (Core Palette)

```css
:root {
  /* 🌤️ Primary Sky (푸르른 하늘) */
  --sky-main: #0084FF;          /* 주 상징 하늘색 (시원하고 명쾌함) */
  --sky-light: #E0F2FE;         /* 은은한 하늘빛 배경/포커스 */
  --sky-gradient: linear-gradient(135deg, #38BDF8 0%, #0084FF 100%);

  /* 🌿 Accent Leaf (싱긋한 초록잎) */
  --leaf-main: #10B981;         /* 활력 있는 초록잎 색상 (성취/강점 강조) */
  --leaf-mint: #34D399;         /* 민트빛 라이트 그린 */
  --leaf-light: #ECFDF5;        /* 소프트 그린 파스텔 배경 */
  --leaf-gradient: linear-gradient(135deg, #34D399 0%, #059669 100%);

  /* ☁️ Neutral & Background (배경 및 텍스트) */
  --bg-app: #F8FAFC;            /* 깨끗하고 눈이 편안한 밝은 회색/하늘 배경 */
  --bg-card: #FFFFFF;           /* 카드 컨테이너 순백색 */
  --text-main: #0F172A;         /* 또렷한 슬레이트 블랙 (본문) */
  --text-sub: #64748B;          /* 세련된 쿨그레이 (보조 텍스트) */
  --border-light: #E2E8F0;      /* 연한 라인 경계선 */

  /* 🎨 믹스 그라데이션 (하늘 + 초록 상징) */
  --brand-gradient: linear-gradient(135deg, #38BDF8 0%, #34D399 100%);
}
```

---

## 3. 타이포그래피 (Typography System)

- **본문/시스템 폰트**: `Pretendard`, `Noto Sans KR`, sans-serif (높은 가독성)
- **포인트/귀여운 헤드라인 폰트**: `GmarketSansBold` 또는 둥근 형태의 웹 폰트

```css
/* 폰트 크기 및 높이 스케일 */
.text-hero    { font-size: 28px; font-weight: 800; line-height: 1.35; letter-spacing: -0.5px; }
.text-title   { font-size: 22px; font-weight: 700; line-height: 1.4;  letter-spacing: -0.3px; }
.text-subtitle{ font-size: 17px; font-weight: 600; line-height: 1.5;  color: var(--text-sub); }
.text-body    { font-size: 15px; font-weight: 400; line-height: 1.6;  color: var(--text-main); }
.text-caption { font-size: 13px; font-weight: 500; color: var(--text-sub); }
```

---

## 4. 모서리(Radius) & 그림자(Shadow) 가이드

- **버튼 모서리**: `border-radius: 14px` ~ `16px` (너무 동그랗지 않고 딱 기분 좋게 둥근 모서리)
- **카드 컨테이너 모서리**: `border-radius: 22px`
- **뱃지/태그 모서리**: `border-radius: 999px` (완전한 알약 형태)
- **그림자 (Shadow)**: 딱딱한 검은 그림자 대신 하늘빛/초록빛이 감도는 소프트 유기적 그림자

```css
:root {
  --radius-btn: 14px;
  --radius-card: 22px;
  --radius-pill: 999px;

  /* 시원하고 부드러운 엘레베이션 그림자 */
  --shadow-sm: 0 4px 12px rgba(56, 189, 248, 0.08);
  --shadow-md: 0 8px 24px rgba(15, 23, 42, 0.08);
  --shadow-hover: 0 12px 28px rgba(0, 132, 255, 0.18);
}
```

---

## 5. UI 컴포넌트 스타일 가이드 (Components)

### 5.1 버튼 디자인 (Button System)
요구사항인 **'약간 둥근 모서리'**와 **'통통 튀는 귀여운 터치감'**을 결합한 버튼 스타일입니다.

```css
/* 기본 메인 버튼 (Primary Sky Button) */
.btn-primary {
  width: 100%;
  padding: 16px 24px;
  background: var(--sky-gradient);
  color: #FFFFFF;
  font-size: 17px;
  font-weight: 700;
  border: none;
  border-radius: var(--radius-btn); /* 14px ~ 16px */
  box-shadow: 0 6px 20px rgba(0, 132, 255, 0.25);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1); /* 퐁당 튀는 애니메이션 */
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.01);
  box-shadow: var(--shadow-hover);
}

.btn-primary:active {
  transform: translateY(1px) scale(0.98);
}

/* 보조 초록잎 버튼 (Secondary Leaf Button) */
.btn-leaf {
  background: var(--leaf-gradient);
  color: #FFFFFF;
  border-radius: var(--radius-btn);
  padding: 14px 20px;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.25);
}
```

### 5.2 질문 카드 & 선택지 버튼 (Option Cards)
질문 답변 선택 시 귀여운 체크 효과와 함께 시원하게 넓은 터치 영역을 제공합니다.

```css
.option-card {
  width: 100%;
  padding: 18px 20px;
  background: #FFFFFF;
  border: 2px solid var(--border-light);
  border-radius: 16px;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-main);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease-in-out;
}

/* 선택되었을 때 (Active/Selected state) */
.option-card.selected {
  border-color: var(--sky-main);
  background: var(--sky-light);
  color: var(--sky-main);
  transform: scale(1.02);
}
```

### 5.3 귀여운 뱃지 (Cute Badges)

```css
.badge-cute {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: var(--leaf-light);
  color: var(--leaf-main);
  border-radius: var(--radius-pill);
  font-size: 13px;
  font-weight: 700;
}
```

---

## 6. 귀여운 마이크로 애니메이션 (Micro-Interactions)

### 6.1 프로그레스바 (Progress Bar)
질문 진행 시 하늘색에서 민트초록으로 그라데이션으로 차오르는 효과.

```css
.progress-container {
  width: 100%;
  height: 10px;
  background: #E2E8F0;
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: var(--brand-gradient);
  border-radius: 999px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 6.2 통통 튀는 둥둥 효과 (Cute Floating Animation)
메인 캐릭터 또는 뱃지에 들어가는 귀여운 모션입니다.

```css
@keyframes cuteBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.cute-float {
  animation: cuteBounce 2.5s infinite ease-in-out;
}
```

---

## 7. 실제 화면 레이아웃 와이어프레임 가이드

```
+------------------------------------------+
| 🌿 창업 성향 테스트           [ Q 3 / 12 ] |
| [====================--------] 50%       |  <- 하늘+민트 그라데이션 바
+------------------------------------------+
|                                          |
|  ✨ [상황 질문 03]                        |  <- 귀여운 뱃지
|  팀 아이디어가 막혔을 때                     |
|  당신의 해결 방식은?                      |  <- 시원시원한 타이포
|                                          |
|  +------------------------------------+  |
|  | 💡 A. 아이디어를 더 쥐어짜본다       |  |  <- 약간 둥근 카드 (16px)
|  +------------------------------------+  |
|                                          |
|  +------------------------------------+  |
|  | ⚡ B. 일단 현장에 나가 사람을 만난다  |  |
|  +------------------------------------+  |
|                                          |
|  [ ← 이전 질문으로 ]                      |  <- 은은한 쿨그레이 텍스트
+------------------------------------------+
```
