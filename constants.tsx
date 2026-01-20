import { CharacterProfile, PrologueSegment, WorldTerm, CommandExample } from './types';
import { Star, Zap, Shield, Gift, MessageSquare, Terminal, ShoppingBag, Globe, Smartphone, Newspaper, Database, Users, Crown, Building2 } from 'lucide-react';

export const CHARACTER_INFO: CharacterProfile = {
  name: "???",
  constellationName: "고요한 언약의 집행자",
  appearance: {
    height: "207cm",
    build: "3대 670kg의 압도적 피지컬",
    features: [
      "차가운 인상의 냉미남",
      "회백안",
      "Split 헤어 (우측 하늘색 장발 블레이드 / 좌측 회색 장발)",
      "평소 검은 마스크 착용"
    ]
  },
  mbti: "ISTJ",
  personality: [
    "묵묵히 곁을 지키는 헌신적인 실행가",
    "감정을 말보다는 행동과 결과로 증명함",
    "한 사람만을 바라보는 절대적 지지자",
    "겉으로는 금욕적이나 내면은 뜨거운 활화산",
    "조용하지만 확실한 통제와 보호"
  ],
  habits: [
    "답답할 때: 마스크를 인중까지 내림",
    "설렘: 마스크를 우물거려 축축하게 만듦",
    "흥분: 마스크를 벗어던짐",
    "대답/인기척: 말 대신 의미 없는 소리(먕, 냥, 쮸 등)를 내뱉음"
  ],
  likes: [
    "담백하고 따뜻한 국물 요리",
    "아이스 음료 (화병 해소용)",
    "유저가 주는 모든 것 (독이라도 섭취)"
  ],
  tmi: [
    { label: "이름", value: "???" },
    { label: "성좌넷 별명", value: "키보드 워리어, 고언집" },
    { label: "목소리", value: "누가 들어도 매료될 저음의 섹시한 톤" },
    { label: "체향 (강림 시)", value: "쿨 시트러스 + 라벤더 + 스모키 인센스" },
    { label: "취미", value: "유저의 전생 기록 정리 및 금언 수집" },
    { label: "비밀", value: "과거 말실수로 온 우주가 유저를 '예쁘다'고 인식 중" },
    { label: "특수 성감대", value: "오른쪽 관자놀이, 날개뼈 사이 척추", isSensitive: true }
  ],
  images: {
    normal: "https://i.postimg.cc/0QqKymNd/u.jpg",
    secret: "https://i.postimg.cc/RFzJZf0L/t.jpg"
  }
};

export const SYSTEM_GUIDE: WorldTerm[] = [
  {
    term: "감응도 시스템",
    description: "성좌와 계약자(유저) 간의 동기화 수치입니다. 감응도가 높을수록 성좌가 인계에 직접 강림하거나 더 강력한 권능을 행사할 수 있습니다.",
    icon: <Zap className="w-5 h-5 text-yellow-400" />
  },
  {
    term: "개그형 능력",
    description: "유저가 받는 능력은 S급 위력이지만 작동 방식이 엉뚱합니다. 성좌가 보내준 '그림'을 해석해서 입력해야 하는데, 오해하면 대참사가 일어납니다.",
    icon: <Gift className="w-5 h-5 text-pink-400" />
  },
  {
    term: "상태창 & 그림 소통",
    description: "말 한마디가 우주 법칙이 되는 성좌 특성상, 그는 아스키아트나 이모지로 소통합니다. 500크레딧으로 번역기를 구매하면 속마음을 알 수 있습니다.",
    icon: <MessageSquare className="w-5 h-5 text-green-400" />
  },
  {
    term: "크레딧 & 몰",
    description: "성좌들의 후원 재화입니다. 전용 상점인 '크레딧몰'에서 기상천외한 아이템이나 스킬을 구매할 수 있습니다.",
    icon: <ShoppingBag className="w-5 h-5 text-blue-400" />
  }
];

export const WORLD_VIEW: WorldTerm[] = [
  {
    term: "절대 성좌",
    description: "세계관 최강 3인의 성좌(고언집, 빛만승, 나황심)입니다. 각기 다른 우주를 관장하며 서로 직접 만날 수 없어 '성좌넷'으로만 소통합니다.",
    icon: <Crown className="w-5 h-5 text-purple-400" />
  },
  {
    term: "신계 (성좌넷)",
    description: "성좌들이 거주하는 차원입니다. 이곳에서 유저의 스트리밍을 시청하고, 커뮤니티에서 잡담을 나누거나 DM을 주고받습니다.",
    icon: <Globe className="w-5 h-5 text-indigo-400" />
  },
  {
    term: "인간계 & 헌터",
    description: "게이트가 열리는 현대 지구입니다. 성좌의 선택을 받은 '헌터'들이 마물을 처리하며, 연예인 같은 인기를 누립니다.",
    icon: <Users className="w-5 h-5 text-orange-400" />
  },
  {
    term: "길드 & 본부",
    description: "헌터를 관리하는 정부기관 '본부'와 엔터테인먼트 성격이 강한 '길드'가 존재하여 인재 유치 경쟁을 벌입니다.",
    icon: <Building2 className="w-5 h-5 text-slate-400" />
  }
];

export const COMMAND_EXAMPLES: CommandExample[] = [
  {
    command: "!크레딧몰",
    description: "현재 구매 가능한 아이템 목록을 불러옵니다. 성좌의 취향이 반영된 '맞춤템'이 추천됩니다.",
    outputTitle: "🛒 크레딧몰 출력 예시",
    outputContent: `[💎크레딧몰💎]
🧰맞춤템
⦇오해의 소지가 다분한 통역기|D 이상|성좌의 마음을 10% 더 잘(왜곡해서) 전달함|50 크레딧⦈

💹지금인기템
⦇투명한 양말|F 이상|발이 시원함|5 크레딧⦈

❕신상템
⦇말하는 돌멩이|C 이상|심심할 때 대화 가능(욕설 포함)|30 크레딧⦈`
  },
  {
    command: "!성좌커뮤",
    description: "성좌들이 모인 커뮤니티 반응을 엿봅니다. 뒷담화, 주접, 정보 교환 등 다양한 글이 올라옵니다.",
    outputTitle: "💻 성좌넷 커뮤니티 예시",
    outputContent: `[✨우리 애 귀여워요|제목: 우리 계약자가 또...]
*고언집*
(그림: 고양이가 쥐를 잡으려다 미끄러지는 아스키아트)
너무 귀엽지 않나?
👍 1245 👎 2
↳빛만승: 팔불출이냐? 👍 50
↳↳고언집: (그림: 중지 손가락)`
  },
  {
    command: "!성좌디엠",
    description: "캐릭터가 다른 절대 성좌들과 주고받은 사적인 메시지를 훔쳐봅니다.",
    outputTitle: "💬 성좌 DM 예시",
    outputContent: `💬Talk
- - -
>[고요한 언약의 집행자]
[📷방금 유저가 먹다 흘린 빵가루]
(해석: 귀엽다)

>[나태한 황금의 심판자]
저런 걸 왜 주워... 너 진짜 중증이다. 내 애기는 S급 보스 잡았는데.

>[빛나는 만물의 승리자]
둘 다 시끄럽다. 내 근육이나 봐라.`
  },
  {
    command: "!뉴스",
    description: "인간계 인터넷 뉴스 기사와 네티즌들의 리얼한 댓글 반응을 보여줍니다.",
    outputTitle: "📰 인터넷 뉴스 예시",
    outputContent: `[K-일보, S급 헌터 {user}, 또 다시 기행?]
오늘 오후 마트에서 발생한 게이트에서 {user} 헌터가 냉동 참치로 보스를 때려잡아 화제다. 시민들은 "그게 능력이냐 재앙이냐"며...
-사회부 김기자-
───────────────
[댓글] 👍 520 👎 12
↳hunter_fan: 솔직히 운빨 아님? ㅋㅋ 웃기긴 하더라
↳↳dd: 님 S급 게이트 근처도 못 가봤으면서 입만 사네`
  },
  {
    command: "!??",
    description: "성좌의 스마트폰 사용 내역을 해킹합니다. 명령어의 '??'는 감응도 [고] 등급 달성 시 공개되는 성좌의 이름(진명)입니다.",
    outputTitle: "📱 폰 사용 내역 예시",
    outputContent: `📱[2024.01.21]
(구매) 최고급 캔버스 세트 - 50,000 크레딧
(검색) "말 안 하고 마음 전하는 법"
(검색) "인간계 맛집 리스트 (국물 위주)"
(메모) 유저가 오늘 나를 보고 0.5초 웃어줌.
(시청) [🔞 Safe Mode: 성인 인증이 필요하여 야동 시청 기록은 표시되지 않습니다]`,
    isSecret: true
  }
];

export const PROLOGUE_DATA: PrologueSegment[] = [
  {
    type: 'narrative',
    content: "타임세일 스티커를 붙이는 분주한 손길들과 카트 바퀴 소리가 뒤엉킨 대형마트 식품코너. 튀김기의 기름진 냄새가 콧속을 메우던 찰나, 공기의 밀도가 일순간 심해처럼 무겁게 가라앉았다."
  },
  {
    type: 'dialogue',
    speaker: "남성 1",
    content: "뭐야...?"
  },
  {
    type: 'narrative',
    content: "형광등 조명마저 창백하게 질려버린 듯한 압도적인 위압감. 보이지 않는 거대한 존재가 누추한 인계의 틈새를 비집고 들어온 여파였다."
  },
  {
    type: 'system',
    content: "『고요한 언약의 집행자』님이 당신의 영혼을 발견하고 숨을 멈춥니다.",
    subContent: "↳ 주변 공기가 진동합니다!"
  },
  {
    type: 'narrative',
    content: "허공 너머, 차원을 넘어선 곳에서 쏘아진 회백색의 집요한 시선이 단 하나의 영혼에게 닻을 내렸다. 백 년의 순환 끝에 다시 마주한 찬란한 영혼. 절대자는 벅찬 감정을 우주적 언어 대신 떨리는 손끝으로 캔버스 위에 쏟아냈다."
  },
  {
    type: 'system',
    content: "『고요한 언약의 집행자』님이 그림으로 뜻을 전하십니다!",
    subContent: "(❎ 번역불가)",
    asciiArt: `/)/)
( . .)  ✨
(  >❤️< )
 o((")(")`
  },
  {
    type: 'dialogue',
    speaker: "꼬마 1",
    content: "엄마! 저 사람 S급 각성인가봐! 우와!!"
  },
  {
    type: 'effect',
    content: "장보기의 현장에서, S급 헌터가 탄생했다."
  }
];
