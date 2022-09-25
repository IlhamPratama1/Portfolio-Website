import type { NextPage } from 'next';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import Navbar from '@components/navbar';
import Head from '@components/head';

const HomePage: NextPage = () => {
  return (
    <div className="scroll-smooth bg-black-m">
      <Head title="Ilham Pratama - Home" hrefIcon="/favicon.ico" />
      <div className="content">
        <Navbar />
        <div className="pt-10 2xl:pt-28 px-8 2xl:px-[11rem] space-y-6">
          <section className="hero">
            <div className="h-full 2xl:h-screen 2xl:ml-12 pt-60 2xl:pt-28 space-y-3 2xl:space-y-8">
              <div className="w-full flex">
                <div className="w-16 2xl:w-40">
                  <h1 className="text-white font-aktiv font-black text-5xl 2xl:text-large leading-none uppercase rotate-90 origin-bottom-left">
                    ilham
                  </h1>
                </div>
                <div className="mt-14 2xl:mt-16 space-y-4 2xl:space-y-8">
                  <h1 className="font-roboto-mono text-sm 2xl:text-xl text-gray-m">
                    <span className="font-bold">01</span> / Introduction
                  </h1>
                  <div className="font-aktiv font-[200] text-4xl 2xl:text-large text-gray-m leading-none space-y-3">
                    <h1>Software Engineer</h1>
                    <h1>Creating application</h1>
                    <h1>Intuitive interfaces</h1>
                  </div>
                </div>
              </div>
              <h1 className="text-white font-aktiv font-black text-5xl 2xl:text-large-m uppercase">
                pratama
              </h1>
            </div>
          </section>

          <section className="quote">
            <div className="flex h-screen">
              <div className="m-auto space-y-4 2xl:space-y-8">
                <p className="-ml-10 font-roboto-mono text-xs 2xl:text-lg text-white">
                  <span className="font-bold">02</span> / About
                </p>
                <h1 className="font-aktiv text-white text-xl 2xl:text-medium-m leading-tight w-[20rem] 2xl:w-[58.25rem] font-[20]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it.
                </h1>
              </div>
            </div>
          </section>

          <section className="project">
            <div className="h-full 2xl:h-screen flex items-end">
              <div className="w-full">
                <div className="m-auto w-[16rem] h-[24rem] 2xl:w-[27rem] 2xl:h-[36rem] relative">
                  <Image
                    src="/images/abstract1.png"
                    layout="fill"
                    alt="Abstract Image"
                  />
                </div>
                <div className="-mt-20 2xl:-mt-[20rem]">
                  <div className="2xl:ml-12">
                    <div className="rotate-90 origin-bottom-left w-[29rem] h-full">
                      <h1 className="text-white font-aktiv font-black text-5xl 2xl:text-large-m leading-none uppercase">
                        Just My
                      </h1>
                    </div>
                    <div className="ml-16 2xl:ml-32 mt-24 2xl:mt-56 space-y-3 2xl:space-y-5">
                      <h1 className="font-roboto-mono text-sm 2xl:text-xl text-gray-m">
                        <span className="font-bold">03</span> / Projects
                      </h1>
                      <h1 className="italic text-white font-aktiv font-black text-5xl 2xl:text-large-m leading-none uppercase">
                        Stuff
                      </h1>
                      <div className="font-aktiv text-4xl 2xl:text-regular text-gray-m leading-none space-y-3 font-[200]">
                        <h1>Interactive Linked List</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-[30rem]">
          <div>
            <Marquee
              speed={150}
              gradient={false}
              className="h-[4rem] 2xl:h-[11rem]"
            >
              <h1 className="text-gray-m font-aktiv font-black italic text-5xl 2xl:text-[8.5rem] leading-none uppercase">
                WEB MOBILE API GAME UI DESIGNER
              </h1>
            </Marquee>
            <Marquee
              speed={150}
              direction="right"
              gradient={false}
              className="h-[4rem] 2xl:h-[11rem]"
            >
              <h1 className="text-gray-m font-aktiv font-[20] italic text-5xl 2xl:text-[8.5rem] leading-none uppercase">
                WEB MOBILE API GAME UI DESIGNER
              </h1>
            </Marquee>
            <Marquee
              speed={150}
              gradient={false}
              className="h-[4rem] 2xl:h-[11rem]"
            >
              <h1 className="text-gray-m font-aktiv font-black italic text-5xl 2xl:text-[8.5rem] leading-none uppercase">
                WEB MOBILE API GAME UI DESIGNER
              </h1>
            </Marquee>
            <Marquee
              speed={150}
              direction="right"
              gradient={false}
              className="h-[4rem] 2xl:h-[11rem]"
            >
              <h1 className="text-gray-m font-aktiv font-[20] italic text-5xl 2xl:text-[8.5rem] leading-none uppercase">
                WEB MOBILE API GAME UI DESIGNER
              </h1>
            </Marquee>
            <Marquee
              speed={150}
              gradient={false}
              className="h-[4rem] 2xl:h-[11rem]"
            >
              <h1 className="text-gray-m font-aktiv font-black italic text-5xl 2xl:text-[8.5rem] leading-none uppercase">
                WEB MOBILE API GAME UI DESIGNER
              </h1>
            </Marquee>
            <Marquee
              speed={150}
              direction="right"
              gradient={false}
              className="h-[4rem] 2xl:h-[11rem]"
            >
              <h1 className="text-gray-m font-aktiv font-[20] italic text-5xl 2xl:text-[8.5rem] leading-none uppercase">
                WEB MOBILE API GAME UI DESIGNER
              </h1>
            </Marquee>
          </div>
        </div>

        <div className="w-full mt-[20rem] h-screen j flex justify-center items-center bg-white">
          <div className="space-y-4 2xl:space-y-8">
            <h1 className="font-roboto-mono text-sm 2xl:text-xl text-black-m">
              <span className="font-bold">04</span> / About
            </h1>
            <h1 className="text-black-m font-aktiv font-black italic text-5xl 2xl:text-[8.5rem] leading-none uppercase">
              GET IN TOUCH
            </h1>
            <div className="flex justify-center">
              <h4 className="text-black-m font-aktiv text-lg 2xl:text-3xl underline">
                Email
              </h4>
            </div>
            <div className="flex space-x-6 2xl:space-x-10 justify-center">
              <h4 className="text-black-m font-light text-lg 2xl:text-3xl">
                Gitlab
              </h4>
              <h4 className="text-black-m font-light text-lg 2xl:text-3xl">
                Linkedin
              </h4>
              <h4 className="text-black-m font-light text-lg 2xl:text-3xl">
                Dribbble
              </h4>
              <h4 className="text-black-m font-light text-lg 2xl:text-3xl">
                Twitter
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
