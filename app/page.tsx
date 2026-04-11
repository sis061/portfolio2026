import { Mail, Phone, Link2, Link2Off } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import AntDesignIcon from "@/assets/antdesign.svg";
import FramerMotionIcon from "@/assets/Motion_Logo_0.svg";
import NextjsIcon from "@/assets/nextdotjs.svg";
import PwaIcon from "@/assets/pwa.svg";
import ReactIcon from "@/assets/react.svg";
import ReduxIcon from "@/assets/redux.svg";
import ShadcnuiIcon from "@/assets/shadcnui.svg";
import SocketIoIcon from "@/assets/socketdotio.svg";
import SupabaseIcon from "@/assets/supabase.svg";
import TailwindcssIcon from "@/assets/tailwindcss.svg";
import TypescriptIcon from "@/assets/typescript.svg";
import ZustandIcon from "@/assets/zustand.svg";
import { ZoomableImage } from "@/components/layout/ZoomableImage";

const EXPERIENCE = [
  {
    title: "Channel-iN",
    desc: "블록체인 기반 인플루언서 광고 플랫폼",
    descLong:
      "주요 기능 리뉴얼과 함께 관리자 페이지 및 채팅 기능을 개선하고 유지보수를 진행했습니다.",
    link: null,
    skills: [
      "React",
      "TypeScript",
      "React Redux",
      "TailwindCSS",
      "Next UI",
      "Horizon UI",
      "Socket.IO",
    ],
    tasks: [
      {
        title: "'미션' 리뉴얼 프로젝트",
        contents: [
          <>
            비즈니스 요구사항 변화에 따라, 광고주와 인플루언서를 연결하는 핵심
            기능인 ‘미션’의 전반적인 리뉴얼 과정에 참여했습니다.
          </>,
          <>
            광고 플랫폼, 유형 및 체험 방식에 따라 요구되는 입력 항목이
            복잡해지면서, 다양한 케이스를 유연하게 처리할 수 있는 구조가
            필요했습니다.
          </>,
          <>
            이를 해결하기 위해 기획 부서와 지속적으로 요구사항을 확인하며,
            조건에 따라 입력 항목이 분기되는 <b>동적 폼 구조를 설계</b>하고 각
            요소를 <b>컴포넌트 단위로 분리하여 재사용</b> 가능하도록
            구현했습니다.
          </>,
          <>
            개발 과정에서는 기획 요구사항이 지속적으로 변경되는 상황이 있었고,
            이를 빠르게 반영하기 위해 화면을 기반으로 기획 부서와 의도를
            조율했습니다. 백엔드 개발자와는 스키마 및 API 구조를 함께 논의하며
            기능이 안정적으로 동작할 수 있도록 개선했습니다.
          </>,
          <>
            또한 스프린트 단위로 작업을 진행하며 팀 내에서 각자의 작업 범위와
            일정을 공유하고 검토하는 방식으로 협업을 진행했습니다.
          </>,
        ],
      },
      {
        title: "관리자 페이지 고도화",
        contents: [
          <>
            ’미션’ 리뉴얼에 따른 <b>관리자 페이지의 UI 구조를 리팩토링</b>하고
            반복되는 구성 요소를 컴포넌트 단위로 분리하여 재사용 가능한 구조로
            정리했습니다.
          </>,
          <>
            또한 Horizon UI를 기반으로 <b>방문자 통계 페이지</b>를 새롭게
            구성하며, 관리자 입장에서 필요한 정보를 한눈에 확인할 수 있도록 UI를
            개선했습니다.
          </>,
          <>운영부서의 요구사항을 반영한 유지보수도 함께 진행했습니다.</>,
        ],
      },
      {
        title: "채팅 기능 고도화",
        contents: [
          <>
            기존 채팅 기능은 단순 메시지 전달 기능만 제공하고 있어, 사용자 간
            커뮤니케이션 경험이 제한적인 상태였습니다.
          </>,
          <>
            이를 개선하기 위해 <b>메시지 수정 및 삭제 기능을 설계하고 구현</b>
            했으며, <b>파일 첨부와 Drag & Drop</b> 기능을 추가하여 사용자
            편의성을 높였습니다.
          </>,
          <>
            또한 일부 백엔드 로직 수정에도 참여하며 실시간 데이터 흐름을
            이해하고, 기능이 안정적으로 동작하도록 개선했습니다.
          </>,
        ],
      },
    ],
  },
  {
    title: "BIRDSPING",
    desc: "밈코인 프로젝트 랜딩페이지",
    descLong:
      "코인 정보 제공과 외부 거래소 및 커뮤니티로의 유입을 목적으로 하는 랜딩페이지를 주기적으로 리뉴얼하며 UI/UX 개선을 진행했습니다.",
    link: null,
    skills: [
      "React",
      "TypeScript",
      "Zustand",
      "TailwindCSS",
      "Framer Motion",
      "Ant Design",
    ],
    tasks: [
      {
        title: "인터랙션 중심 UI 구현",
        contents: [
          <>
            밈코인 특성상 사용자에게 정보를 전달하는 것뿐만 아니라 흥미를
            유도하는 것이 중요했기 때문에, 정적인 UI보다 인터랙션 중심의 사용자
            경험을 제공할 필요가 있었습니다.
          </>,
          <>
            이를 위해 <b>Framer Motion</b>을 활용하여 다양한 애니메이션과
            인터랙션을 구현하고, <b>사용자 행동에 반응하는 UI</b>를 구성하여
            페이지 체험 요소를 강화했습니다.
          </>,
          <>
            지속적인 리뉴얼 과정에서 짧은 주기로 UI를 반복 개선하며 사용자
            반응을 빠르게 반영하는 방식으로 작업을 진행했습니다.
          </>,
        ],
      },
      {
        title: "데이터 기반 UI 구조 설계",
        contents: [
          <>
            콘텐츠 변경이 잦은 특성상, UI를 매번 직접 수정하는 방식은 유지보수에
            비효율적인 문제가 있었습니다.
          </>,
          <>
            이를 개선하기 위해 <b>데이터 변경만으로 UI가 자동으로 반영</b>될 수
            있도록 구조를 설계하고, <b>Ant Design</b>을 활용하여 빠르게 UI를
            구성하면서도 디자인 요구사항에 맞게 커스터마이징했습니다.
          </>,
        ],
      },
    ],
  },
];

const PROJECT = [
  {
    title: "아맞다약! / 아맞다밥!",
    desc: "개인화 건강 관리 서비스",
    duration: "2025.10 - 2026.03",
    descLong:
      "약 복용 여부를 자주 잊는 문제를 해결하기 위해 실제 사용자를 대상으로 개발한 웹 서비스입니다.",
    link: "https://ohmypill.vercel.app",
    github: "https://github.com/sis061/pilltime",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Zustand",
      "TailwindCSS",
      "Shadcn/ui",
      "Supabase",
      "PWA",
      "WebPush",
      "Vercel",
    ],
    tasks: [
      {
        title: "문제 정의 및 서비스 설계",
        contents: [
          <>
            가까운 사용자가 약을 꾸준히 복용해야 하는 상황에서 복용 여부를 자주
            잊는 문제가 있었고, 이를 간단하게 기록하고 확인할 수 있는 방법이
            필요했습니다.
          </>,
          <>
            복용 여부를 간단하게 기록하고 한눈에 확인할 수 있는 구조가
            필요하다고 판단해, 복용 기록과 캘린더 기반 조회를 중심으로 서비스를
            설계했습니다.
          </>,
        ],
      },
      {
        title: "데이터 구조 및 핵심 기능 구현",
        contents: [
          <>
            약 정보와 복용 일정을 직접 <b>입력, 수정, 삭제</b>할 수 있는 기능을
            구현하고, <b>이미지 업로드 시 압축 및 포맷 변환</b>을 적용해 성능을
            고려한 데이터 처리를 구성했습니다. 또한 반복 스케줄에 따라 복용
            여부를 기록할 수 있는 구조를 설계했습니다.
          </>,
          <>
            <b>캘린더 UI</b>를 통해 날짜별 기록을 시각적으로 확인할 수 있도록
            하고, <b>월 단위 데이터 조회 구조</b>를 적용해 필요한 데이터만
            불러오도록 구성했습니다.
          </>,
        ],
      },
      {
        title: "상태 관리 및 실시간 처리",
        contents: [
          <>
            Next.js의 App Router를 활용하여 <b>인터셉트 라우팅</b> 기반의 Drawer
            UI를 구현하고, 서버 컴포넌트를 활용해 초기 데이터 로딩 시 사용자
            경험을 개선했습니다. <b>Supabase Realtime</b>을 적용하여 데이터 변경
            시 즉시 상태가 반영되도록 구성하고, <b>낙관적 업데이트</b>를 통해
            사용자 인터랙션의 응답성을 높였습니다.
          </>,
        ],
      },
      {
        title: "모바일 환경 대응 및 사용자 경험",
        contents: [
          <>
            또한 모바일 환경에서의 사용성을 고려해 <b>PWA</b> 형태로 구현하고
            <b>Web Push</b> 및 <b>Notification API</b>를 적용하여 앱과 유사한
            사용 경험을 제공하고자 했습니다.
          </>,
        ],
      },
      {
        title: "서비스 확장: 아맞다밥!",
        contents: [
          <>
            이후 사용자로부터 더 단순한 형태의 서비스에 대한 요구가 있어,{" "}
            <b>기능을 경량화</b>한{" "}
            <Link
              href={"https://ohmypet.vercel.app"}
              target="_blank"
              rel="noopener noreferrer"
              className="!underline !text-[#02C951]"
            >
              ‘아맞다밥!’
            </Link>
            을 별도로 개발했습니다.
          </>,
          <>
            약 정보 관리와 로그인 구조를 제거하고, 특정 시간대에 식사를 했는지
            여부만 기록할 수 있도록 단순화했습니다.데이터 또한 체크 시점의
            시간만 기록하는 방식으로 단순화하고, 캘린더 UI에서는 하루 4끼
            기준으로 몇 끼를 먹었는지 직관적으로 확인할 수 있도록 구조를
            변경했습니다.
          </>,
        ],
      },
      {
        title: "회고",
        contents: [
          <>
            이 과정을 통해 기능을 추가하는 것뿐만 아니라, 사용자 요구에 맞게
            서비스를 단순화하는 설계 또한 중요하다는 점을 경험했습니다. 실제
            사용 과정에서는 사용 지속성을 높이기 위해 UX와 접근성, 사용 흐름을
            함께 고려해야 한다는 점을 체감했습니다.
          </>,
        ],
      },
    ],
  },
  {
    title: "GRSBH.com",
    desc: "아티스트 포트폴리오 웹",
    duration: "2025.05 - 현재",
    descLong:
      "아티스트의 디스코그래피 및 다양한 콘텐츠를 한눈에 보여주기 위해 제작한 웹 서비스입니다.",
    link: "https://grsbh.com",
    github: "https://github.com/sis061/gasolinerainbow",
    skills: [
      "React",
      "TypeScript",
      "Zustand",
      "TailwindCSS",
      "Shadcn/ui",
      "Supabase",
    ],
    tasks: [
      {
        title: "사용자 흐름 설계 및 상태 관리",
        contents: [
          <>
            SPA 구조를 기반으로, 사용자가 메인 화면에서 선택한 콘텐츠를 상세
            페이지에서도 자연스럽게 이어서 확인할 수 있도록 사용자 흐름을
            설계했습니다. <b>React Router</b>를 활용해 페이지 전환 구조를
            구성하고, 페이지 이동 이후에도 사용자의 선택 상태가 유지되도록
            구현했습니다.
          </>,
          <>
            특히 디스코그래피 영역에서는 풀페이지와 캐러셀 기반 UI를 함께
            구성하여, 콘텐츠 탐색 방식에 따라 다른 사용자 경험을 제공하고자
            했습니다. <b>Router state와 Zustand, 커스텀 훅</b>을 활용해 선택
            상태를 유지하고, 특정 슬라이드로 자연스럽게 이동하는 흐름을
            구현했습니다.
          </>,
        ],
      },
      {
        title: "인터랙션 설계 및 문제 해결",
        contents: [
          <>
            인터랙션 설계에서는 단순한 화면 너비 기반 반응형만으로는 사용자
            경험을 충분히 제어하기 어렵다고 판단해,{" "}
            <b>입력 환경(마우스/터치)을 기준</b>으로 사용자 환경을 구분했습니다.
            이에 따라 마우스 환경에서는 커서를 따라다니는 툴팁을, 터치
            환경에서는 고정 위치에 표시되는 툴팁을 제공하도록 인터랙션을
            분기했습니다.
          </>,
          <>
            또한 캐러셀 내부 구조의 overflow 및 z-index 제약으로 인해 UI를
            외부로 노출하기 어려운 문제가 있었고, 이를 해결하기 위해{" "}
            <b>createPortal</b>을 활용해 DOM 트리 외부로 렌더링하는 방식으로
            구조를 개선했습니다.
          </>,
        ],
      },
      {
        title: "성능 최적화",
        contents: [
          <>
            성능 측면에서는 <b>Lazy Loading</b>과 <b>코드 스플리팅</b>을 적용해
            초기 로딩 부담을 줄이고, 이미지 최적화와 <b>fallback UI</b>를 통해
            사용자 경험을 개선했습니다. 또한 라이브러리 부분 import를 통해 번들
            사이즈를 관리했습니다.
          </>,
        ],
      },
      {
        title: "기능 확장",
        contents: [
          <>
            초기에는 정적 데이터 기반으로 시작했지만, 이후{" "}
            <b>DB 연동과 간단한 CRUD 및 관리자 기능</b>을 추가하며 데이터 구조를
            확장했습니다.
          </>,
        ],
      },
      {
        title: "회고",
        contents: [
          <>
            이 과정을 통해 사용자 흐름을 유지하는 상태 관리와 라우팅 구조 설계의
            중요성을 경험했으며, 다양한 디바이스 환경에서 일관된 사용자 경험을
            제공하기 위한 인터랙션 설계와 성능 최적화의 필요성을 이해했습니다.
          </>,
        ],
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="wrapper">
      <section
        className={`inner min-h-[calc(100dvh-2.1rem)] text-3xl !mx-auto !w-full h-full !p-2 flex flex-col items-center justify-start mb-8`}
      >
        <div className={`p-4 flex flex-col gap-28 w-full`}>
          {/* HERO SECTION */}
          <div className="flex flex-col gap-12 w-full pt-8">
            <div className="[&_>h1]:text-4xl [&_>h1]:lg:!text-5xl font-bold flex-col flex gap-2">
              <h1>안녕하세요.</h1>
              <h1>흐름을 만드는 프론트엔드 개발자,</h1>
              <h1>정성우입니다.</h1>
            </div>
            <div className="[&_>h2]:text-xl lg:[&_>h2]:text-2xl flex flex-col">
              <h2>
                고객의 요구사항을 한 줄기로 엮어 끊기지 않는 화면으로
                만들어냅니다.
              </h2>
              <h2>
                다양한 경험에서의 소통을 바탕으로, 서로 다른 생각과 조건을
                조율해 하나의 결과로 이어냅니다.
              </h2>
            </div>
          </div>

          {/* 개발 경력 */}
          <div className="flex flex-col gap-8 w-full">
            <h3 className="text-3xl lg:text-4xl font-bold border-b-2 border-black/25 pb-4">
              개발 경력
            </h3>

            <div className=" flex flex-col lg:flex-row gap-16 [&_p]:text-lg lg:[&_p]:text-xl [&_p]:!font-light  w-full !-mt-2">
              <div className="w-full lg:w-1/3 !min-w-64 flex-grow flex flex-col gap-4">
                <h4 className="text-2xl lg:text-3xl font-semibold">
                  (주) CIC커뮤니티
                </h4>
                <div className="flex flex-col w-full gap-1">
                  <span className="!text-base !text-black/50">
                    블록체인 기반 광고 플랫폼 및 웹 서비스를 개발·운영하는 IT
                    기업
                  </span>
                  <span className="text-sm !text-black/50">
                    2024.03 - 2024.10
                  </span>
                  <div className="pt-15 flex flex-wrap gap-4">
                    <ZoomableImage
                      zoomable
                      className="rounded-md overflow-hidden border border-black/25 shadow-sm transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95 hover:scale-95"
                      src={"/images/chin_001.webp"}
                      alt="chin_001"
                      width={280}
                      height={300}
                    />
                    <ZoomableImage
                      zoomable
                      className="rounded-md overflow-hidden border border-black/25 shadow-sm transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95 hover:scale-95"
                      src={"/images/chin_002.webp"}
                      alt="chin_002"
                      width={280}
                      height={300}
                    />
                    <ZoomableImage
                      zoomable
                      className="rounded-md overflow-hidden border border-black/25 shadow-sm transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95 hover:scale-95"
                      src={"/images/chin_003.webp"}
                      alt="chin_003"
                      width={280}
                      height={300}
                    />
                    <ZoomableImage
                      zoomable
                      className="rounded-md overflow-hidden border border-black/25 shadow-sm transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95 hover:scale-95"
                      src={"/images/chin_004.webp"}
                      alt="chin_004"
                      width={280}
                      height={300}
                    />
                    <ZoomableImage
                      zoomable
                      className="rounded-md overflow-hidden border border-black/25 shadow-sm transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95 hover:scale-95"
                      src={"/images/chin_005.webp"}
                      alt="chin_005"
                      width={280}
                      height={300}
                    />
                    <ZoomableImage
                      zoomable
                      className="mt-24 rounded-md overflow-hidden border border-black/25 shadow-sm transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95 hover:scale-95"
                      src={"/images/ping_001.gif"}
                      alt="ping_001"
                      loading="eager"
                      width={280}
                      height={300}
                    />
                    <ZoomableImage
                      zoomable
                      className="rounded-md overflow-hidden border border-black/25 shadow-sm transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95 hover:scale-95"
                      src={"/images/ping_002.gif"}
                      alt="ping_002"
                      loading="eager"
                      width={280}
                      height={300}
                    />
                    <ZoomableImage
                      zoomable
                      className="rounded-md overflow-hidden border border-black/25 shadow-sm transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95 hover:scale-95"
                      src={"/images/ping_003.webp"}
                      alt="ping_003"
                      width={280}
                      height={300}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/3 flex flex-col gap-20">
                {EXPERIENCE.map((e) => (
                  <div key={e.title} className="space-y-8">
                    <div className="w-full flex flex-col gap-2">
                      <div className="flex items-center gap-4">
                        <h5 className="text-2xl lg:text-3xl font-semibold">
                          {e.title}
                        </h5>
                        <div className="flex items-center gap-4">
                          {!!e.link ? (
                            <Link
                              href={e.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95"
                            >
                              <div className="flex items-center gap-1">
                                <Link2 size={20} />
                                <span className="text-sm !text-black/75 pt-0.5">
                                  바로가기
                                </span>
                              </div>
                            </Link>
                          ) : (
                            <div className="flex items-center gap-1 text-red-500 cursor-not-allowed opacity-70">
                              <Link2Off size={20} />
                              <span className="text-sm pt-0.5">
                                서비스 종료
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <span className="!text-base !text-black/50">
                        {e.desc}
                      </span>
                    </div>
                    <p>{e.descLong}</p>

                    <ul className="flex flex-wrap gap-1">
                      {e.skills.map((skill) => (
                        <li key={skill}>
                          <span className="text-base px-2.5 py-1.5 rounded-lg bg-black/5 !text-black/75 shadow-md">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {e.tasks.map((task) => (
                      <div key={task.title} className="flex flex-col gap-4">
                        <span className="font-bold text-lg lg:text-xl">
                          &gt; {task.title}
                        </span>
                        {task.contents.map((c, i) => (
                          <p key={i}>{c}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* 개인 프로젝트 */}
          <div className=" flex flex-col gap-8 w-full">
            <h3 className="text-3xl lg:text-4xl font-bold border-b-2 border-black/25 pb-4">
              개인 프로젝트
            </h3>
            <div className="w-full flex flex-col gap-20 !-mt-2">
              {PROJECT.map((p) => (
                <div
                  key={p.title}
                  className="flex flex-col lg:flex-row gap-16 [&_p]:text-lg lg:[&_p]:text-xl [&_p]:!font-light w-full"
                >
                  <div className="w-full lg:w-1/3 !min-w-64 flex-grow flex flex-col gap-4 ">
                    <h4 className="text-2xl lg:text-3xl font-semibold">
                      {p.title}
                    </h4>
                    <div className="flex flex-col w-full gap-1">
                      <span className="!text-base !text-black/50">
                        {p.desc}
                      </span>
                      <span className="text-sm !text-black/50">
                        {p.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      {!!p.link ? (
                        <Link
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95"
                        >
                          <div className="flex items-center gap-1">
                            <Link2 size={20} />
                            <span className="text-sm !text-black/75 pt-0.5">
                              바로가기
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <div className="flex items-center gap-1 text-red-500 cursor-not-allowed opacity-70">
                          <Link2Off size={20} />
                          <span className="text-sm pt-0.5">서비스 종료</span>
                        </div>
                      )}
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={p.github}
                        className="text-sm flex items-center gap-1 transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95"
                      >
                        <Image
                          src="/images/github_480.svg"
                          alt="github logo"
                          width={20}
                          height={20}
                        />
                        Github
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3 flex flex-col gap-20">
                    <div className="space-y-8 max-lg:-mt-8">
                      <p>{p.descLong}</p>

                      <ul className="flex flex-wrap gap-1">
                        {p.skills.map((skill) => (
                          <li key={skill}>
                            <span className="text-base px-2.5 py-1.5 rounded-lg bg-black/5 !text-black/75 shadow-md">
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {p.tasks.map((task) => (
                        <div key={task.title} className="flex flex-col gap-4">
                          <span className="font-bold text-lg lg:text-xl">
                            &gt; {task.title}
                          </span>
                          {task.contents.map((c, i) => (
                            <p key={i}>{c}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 기술 스택 */}
          <div className=" flex flex-col gap-8 w-full">
            <h3 className="text-3xl lg:text-4xl font-bold border-b-2 border-black/25 pb-4">
              기술 스택
            </h3>
            <div className="w-full flex flex-col gap-20 !-mt-2">
              <ul className=" w-full flex flex-col gap-2 [&_span]:text-base lg:[&_span]:text-lg [&_span]:flex [&_span]:items-center [&_span]:gap-1">
                <li className="p-4 flex flex-col lg:flex-row gap-4 lg:gap-10 w-full justify-between ">
                  <h5 className="w-full lg:w-1/3 !min-w-64 flex-grow text-xl lg:text-2xl">
                    핵심 기술
                  </h5>
                  <div className=" w-full lg:w-2/3 flex flex-wrap space-x-4 gap-4 ">
                    <span>
                      <ReactIcon className="w-5 h-5 fill-[#61DAFB]" />
                      React
                    </span>
                    <span>
                      <NextjsIcon className="w-5 h-5 fill-[#000000]" />
                      Next.js
                    </span>
                    <span>
                      <TypescriptIcon className="w-5 h-5 fill-[#3178C6]" />
                      TypeScript
                    </span>
                  </div>
                </li>
                <li className="p-4 flex flex-col lg:flex-row gap-4 lg:gap-10 w-full justify-between ">
                  <h5 className="w-full lg:w-1/3 !min-w-64 flex-grow text-xl lg:text-2xl">
                    주요 활용 기술
                  </h5>
                  <div className=" w-full lg:w-2/3 flex flex-wrap space-x-4 gap-4 ">
                    <span>
                      <ZustandIcon className="w-5 h-5 " />
                      Zustand
                    </span>
                    <span>
                      <TailwindcssIcon className="w-5 h-5 fill-[#06B6D4]" />
                      Tailwind CSS
                    </span>
                    <span>
                      <ShadcnuiIcon className="w-5 h-5 fill-[#000000]" />
                      Shadcn/ui
                    </span>
                    <span>
                      <SupabaseIcon className="w-5 h-5 fill-[#3FCF8E]" />
                      Supabase
                    </span>
                  </div>
                </li>
                <li className="p-4 flex flex-col lg:flex-row gap-4 lg:gap-10 w-full justify-between ">
                  <h5 className="w-full lg:w-1/3 !min-w-64 flex-grow text-xl lg:text-2xl">
                    경험 기술
                  </h5>
                  <div className=" w-full lg:w-2/3 flex flex-wrap space-x-4 gap-4 ">
                    <span>
                      <ReduxIcon className="w-5 h-5 fill-[#764ABC]" />
                      React Redux
                    </span>
                    <span>
                      <AntDesignIcon className="w-5 h-5 fill-[#0170FE]" />
                      Ant Design
                    </span>
                    <span>
                      <FramerMotionIcon className="w-5 h-5 " />
                      Framer Motion
                    </span>
                    <span>
                      <SocketIoIcon className="w-5 h-5 fill-[#010101]" />
                      Socket.IO
                    </span>
                    <span>
                      <PwaIcon className="w-5 h-5 fill-[#5A0FC8]" />
                      PWA
                    </span>
                    <span>Web Push</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 w-full items-start ">
            <h3 className="text-3xl lg:text-4xl font-bold w-full lg:w-1/3 !min-w-64 flex-grow max-lg:border-b-2 border-black/25 pb-4">
              Contact
            </h3>
            <ul className="w-full lg:w-2/3 flex flex-col space-y-4">
              <li>
                <Link
                  href="tel:010-9245-0215"
                  className="text-xl flex items-center gap-2 transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95"
                >
                  <Phone size={20} />
                  010-9245-0215
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:sis061@naver.com"
                  className="text-xl flex items-center gap-2 transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95"
                >
                  <Mail size={20} />
                  sis061@naver.com
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sis061"
                  className="text-xl flex items-center gap-2 transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95"
                >
                  <Image
                    src="/images/github_480.svg"
                    alt="github logo"
                    width={20}
                    height={20}
                  />
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
