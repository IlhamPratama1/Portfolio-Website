import { NextPage } from 'next';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import Head from '@components/head';
import Navbar from '@components/navbar';

const WebsiteDetail: NextPage = () => {
  return (
    <div className="bg-black-m">
      <Head title="Ilham Pratama - Home" hrefIcon="/favicon.ico" />
      <Navbar />
      <div className="h-screen w-full flex items-end px-8 2xl:px-[12rem]">
        <div className="space-y-12 py-10">
          <div className="flex">
            <div className="w-[12rem] h-[35.5rem] -mt-[4.25rem]">
              <h1 className="text-white font-aktiv font-black text-5xl 2xl:text-large-m rotate-90 origin-bottom-left leading-none uppercase">
                Website
              </h1>
            </div>
            <div className="w-[1253px] h-[489px] relative">
              <Image
                src="/images/ill-hero.png"
                layout="fill"
                alt="Abstract Image"
              />
            </div>
            <div className="w-[7rem] h-[35.5rem] -mt-[7.5rem]">
              <h1 className="text-white font-aktiv opacity-40 text-5xl 2xl:text-large rotate-90 origin-bottom-left leading-none uppercase">
                PROJECT
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-between items-end">
            <h1 className="text-white font-aktiv text-5xl 2xl:text-large leading-none">
              Interactive Linked List
            </h1>
            <div className="flex items-center space-x-3">
              <h1 className="font-roboto-mono text-sm 2xl:text-xl text-white">
                ILL
              </h1>
              <h1 className="font-roboto-mono text-sm 2xl:text-xl text-white">
                /
              </h1>
              <h1 className="font-aktiv font-[700] text-sm 2xl:text-xl text-white">
                2020
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <h1 className="font-aktiv font-[700] text-sm 2xl:text-xl text-white">
              01
            </h1>
            <h1 className="font-roboto-mono text-sm 2xl:text-xl text-white">
              /
            </h1>
            <h1 className="font-roboto-mono font-[300] text-sm 2xl:text-xl text-white">
              website
            </h1>
          </div>
        </div>
      </div>
      <div className="h-screen flex items-center">
        <div className="w-full flex justify-between px-[21rem]">
          <div className="space-y-8">
            <h1 className="font-roboto text-white text-4xl">stack.</h1>
            <div className="text-white font-aktiv uppercase text-7xl space-y-2">
              <h1>REACTJS</h1>
              <h1>EXPRESSJS</h1>
              <h1>POSTGRESQL</h1>
              <h1>NODEJS</h1>
            </div>
          </div>
          <div className="space-y-8">
            <div className="font-roboto text-white text-4xl">about.</div>
            <div className="font-aktiv text-white font-[300] text-[1.27rem] space-y-10 leading-tight space-y-16">
              <p className="w-[460px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting,
              </p>
              <p className="w-[460px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <Marquee
          speed={250}
          gradient={false}
          className="h-[8rem] 2xl:h-[10rem]"
        >
          <div className="flex space-x-20 items-center">
            <div className="w-[138px] h-[138px] relative">
              <Image src="/icons/star.svg" layout="fill" alt="Abstract Image" />
            </div>
            <h1 className="text-white font-aktiv text-5xl 2xl:text-large-m leading-none uppercase">
              OVERVIEW PROJECT
            </h1>
            <div className="w-[106px] h-[58px] relative">
              <Image
                src="/icons/block.svg"
                layout="fill"
                alt="Abstract Image"
              />
            </div>
            <h1 className="text-white font-aktiv text-5xl 2xl:text-large-m leading-none uppercase">
              OVERVIEW PROJECT
            </h1>
            <div className="w-[24px] h-[58px] relative"></div>
          </div>
        </Marquee>
        <div className="w-full h-[876px] relative">
          <Image
            src="/images/ill-group.png"
            layout="fill"
            alt="Abstract Image"
          />
        </div>
        <Marquee
          speed={250}
          gradient={false}
          direction="right"
          className="h-[8rem] 2xl:h-[10rem]"
        >
          <div className="flex space-x-20 items-center">
            <div className="w-[66.94px] h-[66.94px] relative">
              <Image
                src="/icons/circle.svg"
                layout="fill"
                alt="Abstract Image"
              />
            </div>
            <h1 className="text-white font-aktiv text-5xl 2xl:text-large-m leading-none uppercase">
              OVERVIEW PROJECT
            </h1>
            <div className="w-[55px] h-[68px] relative">
              <Image
                src="/icons/block2.svg"
                layout="fill"
                alt="Abstract Image"
              />
            </div>
            <h1 className="text-white font-aktiv text-5xl 2xl:text-large-m leading-none uppercase">
              OVERVIEW PROJECT
            </h1>
            <div className="w-[24px] h-[58px] relative"></div>
          </div>
        </Marquee>
      </div>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-[1494px] h-[782px] relative">
          <Image
            src="/images/ill-editor.png"
            layout="fill"
            alt="Abstract Image"
          />
        </div>
      </div>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-[1494px] h-[782px] relative">
          <Image
            src="/images/ill-code.png"
            layout="fill"
            alt="Abstract Image"
          />
        </div>
      </div>
      <div className="h-screen w-full h-[50vh] bg-white flex items-center justify-center">
        <div className="space-y-4 2xl:space-y-8">
          <h1 className="font-roboto-mono text-sm 2xl:text-xl text-black-m">
            <span className="font-bold">02</span> / Next
          </h1>
          <h1 className="text-black-m font-aktiv font-black italic text-5xl 2xl:text-[8.5rem] leading-none uppercase">
            THE ARROW NEWS
          </h1>
          <div className="w-full flex justify-end">
            <div className="w-[104px] h-[104px] relative">
              <Image
                src="/icons/Arrow.svg"
                layout="fill"
                alt="Abstract Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDetail;
