import type { NextPage } from 'next';
import Navbar from '@/components/navbar';
import Image from 'next/image';

const HomePage: NextPage = () => {
  return (
    <div className="content">
      <Navbar />
      <div className="scroll-smooth bg-black-m pt-10 2xl:pt-28 px-8 2xl:px-[11rem] space-y-6">
        <section className="hero">
          <div className="h-full 2xl:h-screen 2xl:ml-12 mt-32 2xl:mt-42 space-y-3 2xl:space-y-8">
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
                <div className="font-aktiv text-4xl 2xl:text-large text-gray-m leading-none space-y-3">
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
                <span className="font-bold">02</span> / Projects
              </p>
              <h1 className="font-aktiv text-white text-xl 2xl:text-medium-m leading-tight w-[20rem] 2xl:w-[58.25rem] font-[20]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it.
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
              <div className="-mt-20 2xl:-mt-[22rem]">
                <div className="2xl:ml-12">
                  <div className="rotate-90 origin-bottom-left w-[29rem] h-full">
                    <h1 className="text-white font-aktiv font-black text-5xl 2xl:text-large-m leading-none uppercase">
                      Just My
                    </h1>
                  </div>
                  <div className="ml-16 2xl:ml-32 mt-20 2xl:mt-56 space-y-4 2xl:space-y-6">
                    <h1 className="font-roboto-mono text-sm 2xl:text-xl text-gray-m">
                      <span className="font-bold">01</span> / Introduction
                    </h1>
                    <h1 className="text-white font-aktiv font-black text-5xl 2xl:text-large-m leading-none uppercase">
                      Stuff
                    </h1>
                    <div className="font-aktiv text-4xl 2xl:text-medium text-gray-m leading-none space-y-3">
                      <h1>Interactive Linked List</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen"></section>
      </div>
    </div>
  );
};

export default HomePage;
