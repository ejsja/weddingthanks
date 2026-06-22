// Recommended Presets structured by sender type
const presets = {
  couple: {
    1: {
      buttonText: "💍 정중하고 클래식한 인사",
      title: "감사의 말씀을 올립니다",
      message: `바쁘신 중에도 저희의 결혼식에 참석하여\n자리를 빛내주시고 따뜻한 축하와 격려를\n보내주셔서 깊이 감사드립니다.\n\n보내주신 귀중한 정성과 따뜻한 사랑 덕분에\n저희는 부부로서의 소중한 첫걸음을\n행복하게 딛게 되었습니다.\n\n보내주신 넓은 사랑과 소중한 가르침을\n평생 마음 깊이 간직하며, 서로 아끼고\n신뢰하는 바른 부부로 살아가겠습니다.\n\n가정에 항상 건강과 평안, 그리고\n행복이 가득하기를 진심으로 기원합니다.`,
    },
    2: {
      buttonText: "🌿 다정하고 서정적인 인사",
      title: "소중한 자리에 함께해주셔서 고맙습니다",
      message: `소중한 날, 귀한 걸음으로 저희의 시작을\n따뜻하게 안아주시고 격려해주셔서\n마음 깊이 감사드립니다.\n\n가장 눈부시게 행복해야 할 첫 출발을\n따뜻한 박수로 장식해 주신 여러분들의\n고마운 마음을 평생 잊지 않겠습니다.\n\n서로 배려하고 서로 닮아가며,\n마주 보는 길마다 기쁨이 샘솟는\n예쁜 가정을 일구겠습니다.\n\n늘 건강과 따뜻한 온기가 가득하시기를\n진심으로 기원합니다.`,
    },
    3: {
      buttonText: "🥂 깊은 격식과 사려깊은 인사",
      title: "새로운 첫 발걸음을 축복해 주셔서 감사드립니다",
      message: `저희 두 사람이 믿음과 사랑으로 결실을 맺는\n성스러운 자리에 먼 길 마다하지 않으시고\n귀한 걸음 해주셔서 머리 숙여 감사드립니다.\n\n축복해 주신 소중한 마음들을 가슴 깊이 새겨,\n변치 않는 신뢰와 아낌없는 존중으로\n지혜롭고 행복하게 잘 살아가겠습니다.\n\n앞날에 항상 건강과 가내 평안이\n가득하기를 진심으로 기원합니다.`,
    },
  },
  parents: {
    1: {
      buttonText: "✉️ 격식 있고 공손한 인사",
      title: "감사의 말씀을 올립니다",
      message: `공사다망하신 중에도 저희 아이들의 결혼식에\n참석해 주시고 따뜻한 축하를 보내주셔서\n진심으로 감사드립니다.\n\n보내주신 과분한 사랑과 격려 덕분에\n혼례를 무사히 마칠 수 있었으며,\n아이들은 새로운 가정의 첫걸음을\n행복하게 시작하게 되었습니다.\n\n마땅히 찾아뵙고 감사의 인사를 드려야 하나\n지면으로나마 감사의 말씀을 올림을\n넓은 아량으로 헤아려 주시기 바랍니다.\n\n앞날에 늘 건강과 행복이 가득하기를\n진심으로 기원합니다.`,
    },
    2: {
      buttonText: "🌿 정성스럽고 다정한 인사",
      title: "따뜻한 축복에 감사드립니다",
      message: `바쁘신 와중에도 저희 자녀의 혼례에 오셔서\n자리를 빛내주시고 따뜻하게 격려해 주셔서\n깊은 감사의 말씀을 올립니다.\n\n보내주신 축하와 사랑의 말씀은\n새 출발을 하는 아이들에게 평생 잊지 못할\n큰 힘과 든든한 버팀목이 될 것입니다.\n\n부족함이 많은 두 사람을 늘 사랑으로\n지켜봐 주시고 바른길로 갈 수 있도록\n많은 가르침을 부탁드립니다.\n\n가정에 늘 따뜻한 행복과 평안이\n가득하시기를 진심으로 기원합니다.`,
    },
    3: {
      buttonText: "📜 기품 있고 깊은 배려의 인사",
      title: "새로운 시작을 격려해주셔서 감사합니다",
      message: `귀한 걸음으로 저희 자녀의 새로운 혼인을\n축복해 주시고 귀중한 정성을 보내주셔서\n진심으로 감사드립니다.\n\n덕분에 혼례를 정갈하게 마칠 수 있었으며\n새롭게 출발하는 두 사람의 앞날에\n밝은 축복의 빛을 비춰주셨습니다.\n\n감사한 마음을 가슴 깊이 간직하며,\n소중한 가르침을 바탕으로 아이들이\n서로 아끼고 존중하며 살도록 돕겠습니다.\n\n직접 찾아뵙고 못하고 서면으로 감사장을\n대신함을 너그럽게 양해해 주시기 바라며,\n귀댁에 늘 평안이 깃들기를 축원합니다.`,
    },
  },
};

// Theme Properties (Revised to completely support 10 premium themes)
const themes = {
  gold: {
    wrapperClass: "bg-[#FDFBF7] text-[#4A3B2C]",
    innerBorder: "border-2 border-[#E5D5B8] m-2",
    badgeClass: "font-serif_en italic text-xs tracking-[0.25em] text-[#C19A5B] uppercase",
    titleClass: "font-bold text-2xl text-[#5A4535]",
    messageClass: "text-[14px] leading-8 text-[#4A3E36]",
    signoffClass: "text-[16px] font-bold text-[#3C2D20]",
    // RAW SVGs with defined colors instead of currentColor
    topIconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30" fill="none"><path d="M10 15 H90 M50 5 L55 15 L50 25 L45 15 Z" stroke="#C19A5B" stroke-width="1.2" stroke-linecap="round"/><circle cx="25" cy="15" r="1.5" fill="#C19A5B"/><circle cx="75" cy="15" r="1.5" fill="#C19A5B"/></svg>`,
    dividerBottomSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="130" height="12" viewBox="0 0 130 12" fill="none"><line x1="0" y1="6" x2="50" y2="6" stroke="#E8DCC4" stroke-width="1"/><circle cx="65" cy="6" r="3" fill="#D4AF37"/><line x1="80" y1="6" x2="130" y2="6" stroke="#E8DCC4" stroke-width="1"/></svg>`,
    overlayTop: `<div class="h-4 bg-[#F3ECE0] opacity-30"></div>`,
    overlayBottom: `<div class="h-4 bg-[#F3ECE0] opacity-30"></div>`,
  },
  green: {
    wrapperClass: "bg-[#F7FAF6] text-[#2C3E2B]",
    innerBorder: "border border-[#D3DFD0] m-3",
    badgeClass: "font-serif_en italic text-xs tracking-[0.2em] text-[#556B2F] uppercase",
    titleClass: "font-bold text-2xl text-[#223321]",
    messageClass: "text-[13px] leading-8 text-[#30402E]",
    signoffClass: "text-[15px] font-bold text-[#1B291A]",
    // Perfectly Symmetrical Leaf Crest (Top)
    topIconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 100 40" fill="none"><path d="M 50 35 C 50 35, 50 25, 50 10" stroke="#556B2F" stroke-width="1.2" stroke-linecap="round"/><path d="M 50 10 C 48 7, 48 3, 50 0 C 52 3, 52 7, 50 10 Z" fill="#556B2F"/><path d="M 50 18 C 44 18, 41 14, 41 10 C 46 10, 49 14, 50 18 Z" fill="#556B2F" opacity="0.9"/><path d="M 50 18 C 56 18, 59 14, 59 10 C 54 10, 51 14, 50 18 Z" fill="#556B2F" opacity="0.9"/><path d="M 50 27 C 42 27, 38 23, 38 18 C 44 18, 48 22, 50 27 Z" fill="#556B2F" opacity="0.8"/><path d="M 50 27 C 58 27, 62 23, 62 18 C 56 18, 52 22, 50 27 Z" fill="#556B2F" opacity="0.8"/></svg>`,
    // Symmetrical Twin Leaf Divider (Bottom)
    dividerBottomSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="130" height="20" viewBox="0 0 130 20" fill="none"><line x1="10" y1="10" x2="48" y2="10" stroke="#D3DFD0" stroke-width="1"/><path d="M 65 10 C 61 7, 57 7, 54 10 C 57 13, 61 13, 65 10 Z" fill="#8FBC8F"/><path d="M 65 10 C 69 7, 73 7, 76 10 C 73 13, 69 13, 65 10 Z" fill="#8FBC8F"/><circle cx="65" cy="10" r="1.5" fill="#556B2F"/><line x1="82" y1="10" x2="120" y2="10" stroke="#D3DFD0" stroke-width="1"/></svg>`,
    overlayTop: `<div class="h-3 bg-[#E3E8E2] opacity-40"></div>`,
    overlayBottom: `<div class="h-3 bg-[#E3E8E2] opacity-40"></div>`,
  },
  pink: {
    wrapperClass: "bg-[#FFF9FA] text-[#4A3235]",
    innerBorder: "border border-[#F7E1E4] rounded-lg m-2",
    badgeClass: "font-serif_en italic text-xs tracking-[0.3em] text-[#D87093] uppercase",
    titleClass: "font-bold text-2xl text-[#5B3339]",
    messageClass: "text-[14px] leading-8 text-[#543E41]",
    signoffClass: "text-[16px] font-bold text-[#401C22]",
    // Refactored Top Icon: Symmetrical split dashed line with center spacing for a clean floating heart
    topIconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30" fill="none"><path d="M15 15 Q35 8 42 12" stroke="#D87093" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="2 2"/><path d="M58 12 Q65 8 85 15" stroke="#D87093" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="2 2"/><path d="M50 7 C48 3.5, 42 3.5, 42 9.5 Q42 14.5 50 21.5 Q58 14.5 58 9.5 C58 3.5, 52 3.5, 50 7 Z" fill="#D87093" opacity="0.85"/></svg>`,
    dividerBottomSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="130" height="16" viewBox="0 0 130 16" fill="none"><line x1="0" y1="8" x2="50" y2="8" stroke="#F7E1E4" stroke-width="1"/><path d="M65,12.67 L64.27,12.01 C61.7,9.68 60,8.13 60,6.25 C60,4.71 61.21,3.5 62.75,3.5 C63.62,3.5 64.45,3.91 65,4.54 C65.55,3.91 66.38,3.5 67.25,3.5 C68.79,3.5 70,4.71 70,6.25 C70,8.13 68.3,9.68 65.73,12.02 L65,12.67 Z" fill="#DB7093"/><line x1="80" y1="8" x2="130" y2="8" stroke="#F7E1E4" stroke-width="1"/></svg>`,
    overlayTop: `<div class="h-3.5 bg-[#FCECEF] opacity-50"></div>`,
    overlayBottom: `<div class="h-3.5 bg-[#FCECEF] opacity-50"></div>`,
  },
  minimal: {
    wrapperClass: "bg-[#FFFFFF] text-[#1E293B]",
    innerBorder: "border border-slate-200 m-4",
    badgeClass: "font-serif_en text-[11px] tracking-[0.35em] text-[#64748B] uppercase font-light",
    titleClass: "font-semibold text-2xl text-[#0F172A]",
    messageClass: "text-[13px] leading-8 text-[#334155]",
    signoffClass: "text-[15px] font-bold text-[#0F172A]",
    topIconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30" fill="none"><line x1="40" y1="15" x2="60" y2="15" stroke="#1E293B" stroke-width="1"/><line x1="50" y1="5" x2="50" y2="25" stroke="#1E293B" stroke-width="1"/></svg>`,
    dividerBottomSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="130" height="12" viewBox="0 0 130 12" fill="none"><line x1="0" y1="6" x2="130" y2="6" stroke="#E2E8F0" stroke-width="1"/></svg>`,
    overlayTop: `<div class="h-2 bg-slate-100"></div>`,
    overlayBottom: `<div class="h-2 bg-slate-100"></div>`,
  },
  navy: {
    wrapperClass: "bg-[#FAFBFD] text-[#1E293B]",
    innerBorder: "border-2 border-[#1E3A8A] m-2",
    badgeClass: "font-serif_en italic text-xs tracking-[0.25em] text-[#1E3A8A] uppercase font-bold",
    titleClass: "font-bold text-2xl text-[#1E3B8B]",
    messageClass: "text-[14px] leading-8 text-[#334155]",
    signoffClass: "text-[16px] font-bold text-[#1E3A8A]",
    topIconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30" fill="none"><path d="M50 5 L58 12 V20 C58 24 50 27 50 27 C50 27 42 24 42 20 V12 L50 5 Z" stroke="#1E3A8A" stroke-width="1.2" fill="none"/><line x1="50" y1="9" x2="50" y2="23" stroke="#1E3A8A" stroke-width="1"/></svg>`,
    dividerBottomSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="130" height="12" viewBox="0 0 130 12" fill="none"><line x1="0" y1="6" x2="45" y2="6" stroke="#CBD5E1" stroke-width="1"/><rect x="61" y="2" width="8" height="8" rx="1" transform="rotate(45 61 2)" stroke="#1E3A8A" stroke-width="1.2"/><line x1="85" y1="6" x2="130" y2="6" stroke="#CBD5E1" stroke-width="1"/></svg>`,
    overlayTop: `<div class="h-4 bg-[#1E3A8A] opacity-10"></div>`,
    overlayBottom: `<div class="h-4 bg-[#1E3A8A] opacity-10"></div>`,
  },
  vintage: {
    wrapperClass: "bg-[#FBF8F3] text-[#5C4033]",
    innerBorder: "border border-dashed border-[#D2B48C] m-3",
    badgeClass: "font-serif_en text-xs tracking-[0.3em] text-[#8B5A2B] uppercase",
    titleClass: "font-bold text-2xl text-[#3E2723]",
    messageClass: "text-[13px] leading-8 text-[#5C4D46]",
    signoffClass: "text-[15px] font-bold text-[#3E2723]",
    topIconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30" fill="none"><path d="M30 15 C35 5, 45 25, 50 15 C55 25, 65 5, 70 15" stroke="#8B5A2B" stroke-width="1" stroke-linecap="round"/><circle cx="50" cy="15" r="2" fill="#8B5A2B"/></svg>`,
    dividerBottomSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="130" height="12" viewBox="0 0 130 12" fill="none"><line x1="0" y1="6" x2="45" y2="6" stroke="#D2B48C" stroke-width="1" stroke-dasharray="3 3"/><circle cx="65" cy="6" r="3" fill="#8B5A2B"/><line x1="85" y1="6" x2="130" y2="6" stroke="#D2B48C" stroke-width="1" stroke-dasharray="3 3"/></svg>`,
    overlayTop: `<div class="h-3.5 bg-[#EFEBE9]"></div>`,
    overlayBottom: `<div class="h-3.5 bg-[#EFEBE9]"></div>`,
  },
  purple: {
    wrapperClass: "bg-[#FCF9FE] text-[#4A354F]",
    innerBorder: "border border-[#E9D8F2] rounded-xl m-2.5",
    badgeClass: "font-serif_en italic text-xs tracking-[0.25em] text-[#8A2BE2] uppercase",
    titleClass: "font-bold text-2xl text-[#4A154B]",
    messageClass: "text-[13px] leading-8 text-[#4E3D52]",
    signoffClass: "text-[15px] font-bold text-[#4A154B]",
    topIconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30" fill="none"><path d="M50 25 V5" stroke="#8A2BE2" stroke-width="1"/><circle cx="50" cy="7" r="2.5" fill="#BA55D3"/><circle cx="47" cy="11" r="2" fill="#BA55D3"/><circle cx="53" cy="11" r="2" fill="#BA55D3"/><circle cx="46" cy="16" r="1.5" fill="#BA55D3"/><circle cx="54" cy="16" r="1.5" fill="#BA55D3"/></svg>`,
    dividerBottomSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="130" height="12" viewBox="0 0 130 12" fill="none"><line x1="0" y1="6" x2="50" y2="6" stroke="#E9D8F2" stroke-width="1"/><circle cx="61" cy="6" r="1.5" fill="#8A2BE2"/><circle cx="65" cy="6" r="2.5" fill="#8A2BE2"/><circle cx="69" cy="6" r="1.5" fill="#8A2BE2"/><line x1="80" y1="6" x2="130" y2="6" stroke="#E9D8F2" stroke-width="1"/></svg>`,
    overlayTop: `<div class="h-3 bg-[#F3E8FF]"></div>`,
    overlayBottom: `<div class="h-3 bg-[#F3E8FF]"></div>`,
  },
  midnight: {
    wrapperClass: "bg-[#FAF9FC] text-[#2C2D42]",
    innerBorder: "border-2 border-[#1E1B4B] rounded-lg m-2",
    badgeClass: "font-serif_en italic text-xs tracking-[0.3em] text-[#312E81] uppercase",
    titleClass: "font-bold text-2xl text-[#1E1B4B]",
    messageClass: "text-[13px] leading-8 text-[#312E81]",
    signoffClass: "text-[15px] font-bold text-[#1E1B4B]",
    topIconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30" fill="none"><path d="M50 6 C53 6, 55 9, 55 12 C55 15, 52 18, 48 18 C46 16, 47 12, 50 6 Z" fill="#312E81"/><circle cx="60" cy="10" r="1" fill="#312E81"/><circle cx="40" cy="15" r="1" fill="#312E81"/><circle cx="55" cy="20" r="0.7" fill="#312E81"/></svg>`,
    dividerBottomSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="130" height="12" viewBox="0 0 130 12" fill="none"><line x1="0" y1="6" x2="45" y2="6" stroke="#E2E8F0" stroke-width="1"/><polygon points="65,1 68,6 73,6 69,9 71,14 65,11 59,14 61,9 57,6 62,6" fill="#312E81"/><line x1="85" y1="6" x2="130" y2="6" stroke="#E2E8F0" stroke-width="1"/></svg>`,
    overlayTop: `<div class="h-3.5 bg-[#EEF2F6]"></div>`,
    overlayBottom: `<div class="h-3.5 bg-[#EEF2F6]"></div>`,
  },
  aquamarine: {
    wrapperClass: "bg-[#F4F9FA] text-[#1E3A40]",
    innerBorder: "border border-[#CADFE2] rounded-md m-3",
    badgeClass: "font-serif_en text-xs tracking-[0.25em] text-[#008080] uppercase font-semibold",
    titleClass: "font-bold text-2xl text-[#083344]",
    messageClass: "text-[13px] leading-8 text-[#1E3A40]",
    signoffClass: "text-[15px] font-bold text-[#083344]",
    topIconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30" fill="none"><path d="M30 15 Q40 10, 50 15 T70 15" stroke="#008080" stroke-width="1.2" stroke-linecap="round"/><path d="M35 19 Q43 16, 50 19 T65 19" stroke="#008080" stroke-width="0.8" stroke-linecap="round" opacity="0.6"/></svg>`,
    dividerBottomSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="130" height="12" viewBox="0 0 130 12" fill="none"><line x1="0" y1="6" x2="45" y2="6" stroke="#CADFE2" stroke-width="1"/><circle cx="61" cy="6" r="2" fill="#008080"/><circle cx="69" cy="6" r="2" fill="#008080" opacity="0.5"/><line x1="85" y1="6" x2="130" y2="6" stroke="#CADFE2" stroke-width="1"/></svg>`,
    overlayTop: `<div class="h-3 bg-[#E0F2FE] opacity-50"></div>`,
    overlayBottom: `<div class="h-3 bg-[#E0F2FE] opacity-50"></div>`,
  },
  autumn: {
    wrapperClass: "bg-[#FCFAF7] text-[#4A2E1B]",
    innerBorder: "border border-amber-200 m-3",
    badgeClass: "font-serif_en italic text-xs tracking-[0.3em] text-[#C2410C] uppercase",
    titleClass: "font-bold text-2xl text-[#451A03]",
    messageClass: "text-[13px] leading-8 text-[#5C3F24]",
    signoffClass: "text-[15px] font-bold text-[#451A03]",
    topIconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30" fill="none"><path d="M50 5 L53 13 L62 14 L55 19 L58 27 L50 22 L42 27 L45 19 L38 14 L47 13 Z" stroke="#C2410C" stroke-width="1" fill="none"/><line x1="50" y1="22" x2="50" y2="28" stroke="#C2410C" stroke-width="1"/></svg>`,
    dividerBottomSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="130" height="12" viewBox="0 0 130 12" fill="none"><line x1="0" y1="6" x2="45" y2="6" stroke="#F1E3D3" stroke-width="1"/><path d="M 60 6 C 63 3, 67 3, 70 6 C 67 9, 63 9, 60 6 Z" fill="#C2410C" opacity="0.8"/><line x1="85" y1="6" x2="130" y2="6" stroke="#F1E3D3" stroke-width="1"/></svg>`,
    overlayTop: `<div class="h-3 bg-[#FFEDD5]"></div>`,
    overlayBottom: `<div class="h-3 bg-[#FFEDD5]"></div>`,
  },
};

let currentTheme = "gold";
let currentFont = "batang";
let currentSenderType = "couple";
let isManualSignoff = false;

// Theme Setter
function setTheme(themeKey) {
  currentTheme = themeKey;

  // Toggle active style from controls
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.remove("border-rose-500");
    btn.classList.add("border-transparent");
  });
  document.getElementById(`btn-theme-${themeKey}`).classList.remove("border-transparent");
  document.getElementById(`btn-theme-${themeKey}`).classList.add("border-rose-500");

  updateCard();
}

// Font Setter
function setFont(fontKey) {
  currentFont = fontKey;

  // Toggle active style from controls
  document.querySelectorAll(".font-btn").forEach((btn) => {
    btn.classList.remove("border-rose-500");
    btn.classList.add("border-transparent");
  });
  document.getElementById(`btn-font-${fontKey}`).classList.remove("border-transparent");
  document.getElementById(`btn-font-${fontKey}`).classList.add("border-rose-500");

  updateCard();
}

// Sender Configuration Type Switch
function toggleSenderTab(type) {
  // Track old and new categories to auto-switch templates
  const oldCategory = currentSenderType === "couple" ? "couple" : "parents";
  currentSenderType = type;
  const newCategory = currentSenderType === "couple" ? "couple" : "parents";

  const btnCouple = document.getElementById("tab-sender-couple");
  const btnGroomParents = document.getElementById("tab-sender-groom-parents");
  const btnBrideParents = document.getElementById("tab-sender-bride-parents");

  const divCouple = document.getElementById("sender-couple-fields");
  const divGroomParents = document.getElementById("sender-groom-parents-fields");
  const divBrideParents = document.getElementById("sender-bride-parents-fields");

  // Reset classes
  const inactiveClass = "py-2 rounded-lg text-slate-500 hover:text-slate-900 transition";
  const activeClass = "py-2 rounded-lg bg-white text-slate-900 shadow-sm transition";

  btnCouple.className = inactiveClass;
  btnGroomParents.className = inactiveClass;
  btnBrideParents.className = inactiveClass;

  divCouple.classList.add("hidden");
  divGroomParents.classList.add("hidden");
  divBrideParents.classList.add("hidden");

  if (type === "couple") {
    btnCouple.className = activeClass;
    divCouple.classList.remove("hidden");
  } else if (type === "groom_parents") {
    btnGroomParents.className = activeClass;
    divGroomParents.classList.remove("hidden");
  } else if (type === "bride_parents") {
    btnBrideParents.className = activeClass;
    divBrideParents.classList.remove("hidden");
  }

  // Update presets and signoff
  updatePresetButtons();
  generateSignoff();

  // SMART UX: Auto-select and load the 1st preset if the category has shifted
  if (oldCategory !== newCategory) {
    loadPreset(1);
  }
}

// Dynamically render presets depending on who is sending
function updatePresetButtons() {
  const container = document.getElementById("preset-buttons-container");
  const typeKey = currentSenderType === "couple" ? "couple" : "parents";
  const currentPresets = presets[typeKey];

  let html = "";
  for (let i = 1; i <= 3; i++) {
    html += `<button onclick="loadPreset(${i})" class="px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-[11.5px] font-medium rounded-md transition text-left flex-1 min-w-[120px] justify-center items-center">${currentPresets[i].buttonText}</button>`;
  }
  container.innerHTML = html;
}

// Groom child input toggle
function toggleGroomChildInput() {
  const showChild = document.getElementById("check-g-show-child").checked;
  const group = document.getElementById("groom-child-input-group");
  if (showChild) {
    group.classList.remove("hidden");
  } else {
    group.classList.add("hidden");
  }
  generateSignoff();
}

// Bride child input toggle
function toggleBrideChildInput() {
  const showChild = document.getElementById("check-b-show-child").checked;
  const group = document.getElementById("bride-child-input-group");
  if (showChild) {
    group.classList.remove("hidden");
  } else {
    group.classList.add("hidden");
  }
  generateSignoff();
}

// Generate Signoff text based on inputs
function generateSignoff() {
  if (isManualSignoff) return; // Wait if the user edited manually

  const suffix = document.getElementById("select-suffix").value; // 올림, 드림, 배상
  let generatedText = "";

  if (currentSenderType === "couple") {
    const groom = document.getElementById("input-groom").value.trim() || "민우";
    const bride = document.getElementById("input-bride").value.trim() || "서연";
    generatedText = `신랑 ${groom} · 신부 ${bride} ${suffix}`;
  } else if (currentSenderType === "groom_parents") {
    const father = document.getElementById("input-g-father").value.trim();
    const fatherDead = document.getElementById("check-g-father-dead").checked;
    const mother = document.getElementById("input-g-mother").value.trim();
    const motherDead = document.getElementById("check-g-mother-dead").checked;
    const showHonju = document.getElementById("check-g-show-honju").checked;
    const showChild = document.getElementById("check-g-show-child").checked;
    const childType = document.getElementById("input-groom-rel-type").value.trim() || "아들";
    const childName = document.getElementById("input-groom-rel-name").value.trim() || "민우";

    const fatherPrefix = fatherDead ? "故 " : "";
    const motherPrefix = motherDead ? "故 " : "";

    let namesArr = [];
    if (father) namesArr.push(fatherPrefix + father);
    if (mother) namesArr.push(motherPrefix + mother);
    let namesStr = namesArr.join(" · ");

    let prefixStr = showHonju ? "혼주 " : "";
    let childStr = showChild ? ` (${childType} ${childName})` : "";

    generatedText = `${prefixStr}${namesStr}${childStr} ${suffix}`;
  } else if (currentSenderType === "bride_parents") {
    const father = document.getElementById("input-b-father").value.trim();
    const fatherDead = document.getElementById("check-b-father-dead").checked;
    const mother = document.getElementById("input-b-mother").value.trim();
    const motherDead = document.getElementById("check-b-mother-dead").checked;
    const showHonju = document.getElementById("check-b-show-honju").checked;
    const showChild = document.getElementById("check-b-show-child").checked;
    const childType = document.getElementById("input-bride-rel-type").value.trim() || "딸";
    const childName = document.getElementById("input-bride-rel-name").value.trim() || "서연";

    const fatherPrefix = fatherDead ? "故 " : "";
    const motherPrefix = motherDead ? "故 " : "";

    let namesArr = [];
    if (father) namesArr.push(fatherPrefix + father);
    if (mother) namesArr.push(motherPrefix + mother);
    let namesStr = namesArr.join(" · ");

    let prefixStr = showHonju ? "혼주 " : "";
    let childStr = showChild ? ` (${childType} ${childName})` : "";

    generatedText = `${prefixStr}${namesStr}${childStr} ${suffix}`;
  }

  document.getElementById("input-signoff-text").value = generatedText;
  updateCard();
}

// Triggered when user edits the text area directly
function manualSignoffEdit() {
  isManualSignoff = true;
  updateCard();
}

// Reset manually edited signoff and apply auto-generator back
function resetToAutoGenerated() {
  isManualSignoff = false;
  generateSignoff();
  showToast("자동 생성이 재적용되었습니다!");
}

// Load Message Preset based on active type
function loadPreset(num) {
  const typeKey = currentSenderType === "couple" ? "couple" : "parents";
  const preset = presets[typeKey][num];
  if (preset) {
    document.getElementById("input-title").value = preset.title;
    document.getElementById("input-message").value = preset.message;
    updateCard();
    showToast("인사말 문구가 적용되었습니다!");
  }
}

// Helper function: Convert SVG code block to extremely safe Base64 image data-uri
function convertSvgToDataUri(svgString) {
  try {
    const base64 = btoa(unescape(encodeURIComponent(svgString)));
    return `data:image/svg+xml;base64,${base64}`;
  } catch (e) {
    console.error("SVG Encoding error:", e);
    return "";
  }
}

// Advanced Signoff Formatter: Emphasizes names by scaling down metadata (Prefixes, suffixes, and parens) to exactly 13px
function formatSignoffHtml(text) {
  if (!text) return "";

  // XSS / Layout breakage prevention
  let html = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Convert newline to br
  html = html.replace(/\n/g, "<br>");

  // 1. Shrink and fade suffix words ("올림", "드림", "배상") to 13px
  html = html.replace(/(올림|드림|배상)/g, '<span class="text-[13px] font-normal opacity-65 ml-1">$1</span>');

  // 2. Shrink and fade prefix words ("신랑", "신부", "혼주") to 13px
  html = html.replace(/(신랑|신부|혼주)/g, '<span class="text-[13px] font-normal opacity-65 mr-1">$1</span>');

  // 3. Shrink and fade parenthetical relations like "(아들 민우)", "(딸 서연)" to 12px
  html = html.replace(/(\([^)]+\))/g, '<span class="text-[12px] font-normal opacity-60 mx-1">$1</span>');

  return html;
}

// Core Live Sync update to Card preview
function updateCard() {
  const title = document.getElementById("input-title").value.trim() || "감사의 말씀을 올립니다";
  const message = document.getElementById("input-message").value || "";
  const signoff = document.getElementById("input-signoff-text").value || "";

  const t = themes[currentTheme];
  const captureArea = document.getElementById("capture-area");

  // Apply card text font styling class dynamically
  let fontClass = "font-batang";
  let leadingClass = "leading-8"; // default for 바탕
  if (currentFont === "myeongjo") {
    fontClass = "font-myeongjo";
    leadingClass = "leading-8";
  }
  if (currentFont === "sans") {
    fontClass = "font-sans";
    leadingClass = "leading-7"; // sleeker, modern line-height for sans
  }

  // Apply theme overall classes (Height changed to min-h-[630px] h-auto with improved paddings)
  captureArea.className = `w-[450px] min-h-[630px] h-auto shadow-2xl relative flex flex-col justify-between py-12 px-10 text-center transition-all duration-300 ${t.wrapperClass} ${fontClass}`;

  // Inner double border rendering
  const innerBorderDiv = document.getElementById("card-inner-border");
  innerBorderDiv.className = `absolute inset-4 pointer-events-none transition-all duration-300 ${t.innerBorder}`;

  // Top badge
  document.getElementById("card-badge").className = t.badgeClass;

  // CONVERT SVGs strictly into secure standard Image Tags to avoid html2canvas omission bug
  const topIconUri = convertSvgToDataUri(t.topIconSvg);
  document.getElementById("theme-icon-container").innerHTML =
    `<img src="${topIconUri}" alt="Motif" class="mx-auto block" style="width: 64px; height: auto;" />`;

  // Update Text Nodes
  document.getElementById("card-title").innerText = title;

  // Apply Dynamic Line Height based on the selected font family
  const cardMessage = document.getElementById("card-message");
  cardMessage.className = `text-[14px] ${leadingClass} text-slate-800 whitespace-pre-line text-center max-w-[340px] break-words mx-auto`;
  cardMessage.innerText = message;

  // Apply Advanced Formatter to elevate the Name visual emphasis dynamically
  const cardSignoff = document.getElementById("card-signoff");
  cardSignoff.className = `${t.signoffClass} tracking-wide`;
  cardSignoff.innerHTML = formatSignoffHtml(signoff);

  // Bottom elements & dividers (Converted to image too)
  const bottomDividerUri = convertSvgToDataUri(t.dividerBottomSvg);
  document.getElementById("card-divider-bottom").innerHTML =
    `<img src="${bottomDividerUri}" alt="Divider" class="mx-auto block" style="width: 130px; height: auto;" />`;

  // Frame Overlay Headers/Footers
  document.getElementById("theme-overlay-top").innerHTML = t.overlayTop;
  document.getElementById("theme-overlay-bottom").innerHTML = t.overlayBottom;
}

// Export card to PNG utilizing html2canvas
function downloadCardImage() {
  const cardElement = document.getElementById("capture-area");
  const btn = document.getElementById("btn-download");
  const originalText = btn.innerHTML;

  // Loading status display
  btn.innerHTML = '<i class="fa-solid fa-spinner animate-spin"></i> 이미지 생성 중...';
  btn.disabled = true;

  setTimeout(() => {
    html2canvas(cardElement, {
      scale: 3, // Premium ultra-crisp resolution scale
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
    })
      .then((canvas) => {
        const link = document.createElement("a");

        let filename = "감사장";
        if (currentSenderType === "couple") {
          const groom = document.getElementById("input-groom").value.trim() || "신랑";
          const bride = document.getElementById("input-bride").value.trim() || "신부";
          filename = `감사장_${groom}_${bride}`;
        } else if (currentSenderType === "groom_parents") {
          const father = document.getElementById("input-g-father").value.trim();
          const mother = document.getElementById("input-g-mother").value.trim();
          filename = `감사장_혼주_${father || ""}_${mother || ""}`.replace(/_$/, "");
        } else if (currentSenderType === "bride_parents") {
          const father = document.getElementById("input-b-father").value.trim();
          const mother = document.getElementById("input-b-mother").value.trim();
          filename = `감사장_혼주_${father || ""}_${mother || ""}`.replace(/_$/, "");
        }

        link.download = `${filename}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();

        btn.innerHTML = originalText;
        btn.disabled = false;
        showToast("감사장이 이미지(PNG) 파일로 다운로드되었습니다!");
      })
      .catch((err) => {
        console.error("Image export failed:", err);
        btn.innerHTML = originalText;
        btn.disabled = false;
        showToast("이미지 렌더링에 오류가 발생했습니다.");
      });
  }, 100);
}

// Toast controller
function showToast(message) {
  const toast = document.getElementById("toast");
  document.getElementById("toast-message").innerText = message;
  toast.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
  }, 2500);
}

// On Load initialization
window.onload = function () {
  setTheme("gold");
  setFont("batang");
  toggleSenderTab("couple");
};

// 모달 열고 닫기 제어 함수 (구글 심사 필수 조건 매핑용)
function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.toggle("hidden");
  }
}
