import Image from "next/image";
import Link from "next/link";

import { Link2, Link2Off } from "lucide-react";
import Contact from "@/components/Contact";

import { EXPERIENCE, PROJECT } from "@/data/projectData";
import { ICONS } from "@/assets/icons";
import ImageExpander from "@/components/layout/ImageExpander";

export default function Home() {
  return (
    <main className="wrapper">
      <section
        className={`inner min-h-[calc(100dvh-2.1rem)] text-3xl !mx-auto !w-full h-full !p-2 flex flex-col items-center justify-start mb-12`}
      >
        <div className={`p-4 flex flex-col gap-28 w-full`}>
          {/************************** HERO SECTION **************************/}
          <div className="flex flex-col gap-12 w-full pt-8">
            <div className="[&_>h1]:text-4xl [&_>h1]:lg:!text-5xl font-bold flex-col flex gap-2">
              <h1>안녕하세요.</h1>
              <h1>흐름을 만드는 프론트엔드 개발자,</h1>
              <h1>정성우입니다.</h1>
            </div>
            <div className="[&_>h2]:text-xl lg:[&_>h2]:text-2xl flex flex-col gap-2">
              <h2>
                고객의 요구사항을 한 줄기로 엮어 끊기지 않는 화면으로
                만들어냅니다.
              </h2>
              <h2 className="pr-4">
                다양한 경험에서 쌓은 소통을 바탕으로, 서로 다른 생각과 조건을
                조율해 하나의 결과로 이어냅니다.
              </h2>
            </div>
          </div>

          {/************************** 개발 경력 **************************/}
          <div className="flex flex-col gap-8 w-full ">
            <h3 className="text-3xl lg:text-4xl font-bold border-b-2 border-black/25 pb-4 !text-blue-500">
              개발 경력
            </h3>

            <div className="flex flex-col gap-28 [&_p]:text-lg lg:[&_p]:text-xl [&_p]:!font-light w-full !-mt-2">
              <div className="w-full lg:w-1/3 !min-w-64 flex-grow flex flex-col gap-4 ">
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
                </div>
              </div>
              {/************************** 채널 in **************************/}
              <div className="w-full flex flex-col-reverse lg:flex-row gap-16 ">
                <ImageExpander imgSrc={EXPERIENCE[0].imgSrc} loading="eager" />
                <div
                  id="chin"
                  className="space-y-8 w-full lg:!w-2/3 -mt-16 lg:-mt-59.5"
                >
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <h5 className="text-2xl lg:text-3xl font-semibold">
                        Channel-iN
                      </h5>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-red-500 cursor-not-allowed opacity-70">
                          <Link2Off size={20} />
                          <span className="text-sm pt-0.5">서비스 종료</span>
                        </div>
                      </div>
                    </div>
                    <span className="!text-base !text-black/50">
                      블록체인 기반 인플루언서 광고 플랫폼
                    </span>
                  </div>
                  <p>
                    주요 기능 리뉴얼과 함께 관리자 페이지 및 채팅 기능을
                    개선하고 유지보수를 맡았습니다.
                  </p>

                  <ul className="flex flex-wrap gap-1">
                    {EXPERIENCE[0].skills.map((skill) => (
                      <li key={skill}>
                        <span className="text-base px-2.5 py-1.5 rounded-lg bg-black/5 !text-black/75 shadow-md">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {EXPERIENCE[0].tasks.map((task) => (
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
              {/************************** 버드핑 **************************/}
              <div
                id="birdsping"
                className="w-full flex flex-col-reverse lg:flex-row gap-16 "
              >
                <ImageExpander imgSrc={EXPERIENCE[1].imgSrc} loading="eager" />
                <div className="space-y-8 w-full lg:!w-2/3 ">
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <h5 className="text-2xl lg:text-3xl font-semibold">
                        BIRDSPING
                      </h5>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-red-500 cursor-not-allowed opacity-70">
                          <Link2Off size={20} />
                          <span className="text-sm pt-0.5">서비스 종료</span>
                        </div>
                      </div>
                    </div>
                    <span className="!text-base !text-black/50">
                      밈코인 프로젝트 랜딩페이지
                    </span>
                  </div>
                  <p>
                    코인 정보 제공과 외부 거래소 및 커뮤니티로의 유입을 목적으로
                    하는 랜딩페이지를 주기적으로 리뉴얼하며 UI/UX를
                    개선했습니다.
                  </p>

                  <ul className="flex flex-wrap gap-1">
                    {EXPERIENCE[1].skills.map((skill) => (
                      <li key={skill}>
                        <span className="text-base px-2.5 py-1.5 rounded-lg bg-black/5 !text-black/75 shadow-md">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {EXPERIENCE[1].tasks.map((task) => (
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
          </div>
          {/************************** 개인 프로젝트 **************************/}
          <div className="flex flex-col gap-8 w-full">
            <h3 className="text-3xl lg:text-4xl font-bold border-b-2 border-black/25 pb-4 !text-blue-500">
              개인 프로젝트
            </h3>
            <div className="w-full flex flex-col gap-28 !-mt-2">
              {PROJECT.map((p, i) => (
                <div
                  id={`project-${i + 1}`}
                  key={p.title}
                  className="flex flex-col gap-20 [&_p]:text-lg lg:[&_p]:text-xl [&_p]:!font-light w-full"
                >
                  <div className="w-full lg:w-1/3 !min-w-64 flex-grow flex flex-col gap-4 ">
                    <Link
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl lg:text-3xl font-semibold hover:!underline underline-offset-4"
                    >
                      {p.title}
                    </Link>
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
                  <div className="w-full flex flex-col-reverse lg:flex-row gap-16">
                    <ImageExpander imgSrc={p.imgSrc} />
                    <div className="w-full lg:w-2/3 flex flex-col gap-20 lg:-mt-55">
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
                </div>
              ))}
            </div>
          </div>
          {/************************** 기술 스택 **************************/}
          <div className=" flex flex-col gap-8 w-full ">
            <h3 className="text-3xl lg:text-4xl font-bold border-b-2 border-black/25 pb-4 !text-blue-500">
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
                      <ICONS.ReactIcon className="w-5 h-5 fill-[#61DAFB]" />
                      React
                    </span>
                    <span>
                      <ICONS.NextjsIcon className="w-5 h-5 fill-[#000000]" />
                      Next.js
                    </span>
                    <span>
                      <ICONS.TypescriptIcon className="w-5 h-5 fill-[#3178C6]" />
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
                      <ICONS.ZustandIcon className="w-5 h-5 " />
                      Zustand
                    </span>
                    <span>
                      <ICONS.TailwindcssIcon className="w-5 h-5 fill-[#06B6D4]" />
                      Tailwind CSS
                    </span>
                    <span>
                      <ICONS.ShadcnuiIcon className="w-5 h-5 fill-[#000000]" />
                      Shadcn/ui
                    </span>
                    <span>
                      <ICONS.SupabaseIcon className="w-5 h-5 fill-[#3FCF8E]" />
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
                      <ICONS.ReduxIcon className="w-5 h-5 fill-[#764ABC]" />
                      React Redux
                    </span>
                    <span>
                      <ICONS.AntDesignIcon className="w-5 h-5 fill-[#0170FE]" />
                      Ant Design
                    </span>
                    <span>
                      <ICONS.FramerMotionIcon className="w-5 h-5 " />
                      Framer Motion
                    </span>
                    <span>
                      <ICONS.SocketIoIcon className="w-5 h-5 fill-[#010101]" />
                      Socket.IO
                    </span>
                    <span>
                      <ICONS.PwaIcon className="w-5 h-5 fill-[#5A0FC8]" />
                      PWA
                    </span>
                    <span>Web Push</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/************************** Contact **************************/}
          <Contact />
        </div>
      </section>
    </main>
  );
}
