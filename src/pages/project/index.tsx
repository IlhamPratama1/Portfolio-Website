import { NextPage } from 'next';
import Image from 'next/image';
import Head from '@components/head';
import Navbar from '@components/navbar';

const ProjectPage: NextPage = () => {
  return (
    <div>
      <Head title="Ilham Pratama - Project" hrefIcon="/favicon.ico" />
      <Navbar />
      <div className="absolute top-0 left-0 z-[-10] bg-black-m h-screen w-full"></div>
      <div className="absolute top-0 left-0 z-[-1]block w-[100vh] h-[100vw] overflow-y-auto overflow-x-hidden no-scrollbar -rotate-90 origin-top-right translate-x-[-100vh] scroll-smooth">
        <div className="absolute py-[65%] left-[30%]">
          <div className="w-[27rem] h-[36rem] relative rotate-90">
            <Image
              src="/images/abstract1.png"
              layout="fill"
              alt="Abstract Image"
            />
          </div>
          <div className="w-[27rem] h-[36rem] relative rotate-90">
            <Image
              src="/images/abstract2.jpg"
              layout="fill"
              alt="Abstract Image"
            />
          </div>
          <div className="w-[27rem] h-[36rem] relative rotate-90">
            <Image
              src="/images/abstract3.jpg"
              layout="fill"
              alt="Abstract Image"
            />
          </div>
          <div className="w-[27rem] h-[36rem] relative rotate-90">
            <Image
              src="/images/abstract4.jpg"
              layout="fill"
              alt="Abstract Image"
            />
          </div>
          <div className="w-[27rem] h-[36rem] relative rotate-90">
            <Image
              src="/images/abstract5.jpg"
              layout="fill"
              alt="Abstract Image"
            />
          </div>
          <div className="w-[27rem] h-[36rem] relative rotate-90">
            <Image
              src="/images/abstract6.jpg"
              layout="fill"
              alt="Abstract Image"
            />
          </div>
          <div className="w-[27rem] h-[36rem] relative rotate-90">
            <Image
              src="/images/abstract7.jpg"
              layout="fill"
              alt="Abstract Image"
            />
          </div>
        </div>
      </div>
      <div className="h-screen absolute flex items-end justify-between w-full py-20 px-44">
        <div>
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
        <div className="flex items-center space-x-3">
          <h1 className="font-roboto-mono text-sm 2xl:text-xl text-white">
            ILL
          </h1>
          <h1 className="font-roboto-mono text-sm 2xl:text-xl text-white">/</h1>
          <h1 className="font-aktiv font-[700] text-sm 2xl:text-xl text-white">
            2020
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
