import { NextPage } from 'next';
import Image from 'next/image';
import Head from '@components/head';
import Navbar from '@components/navbar';

const ApiDetail: NextPage = () => {
  return (
    <div className="bg-black-m">
      <Head title="Ilham Pratama - Home" hrefIcon="/favicon.ico" />
      <Navbar />
      <div className="h-screen w-full flex items-end px-8 2xl:px-[17.5rem] 2xl:py-[3rem]">
        <div className="flex">
          <div className="w-[3.5rem]">
            <h1 className="text-white font-aktiv text-5xl 2xl:text-large -rotate-90 translate-y-[30rem] origin-bottom-left leading-none uppercase">
              portfolio
            </h1>
          </div>
          <div className="space-y-24">
            <div className="h-[394px] w-[1392px] relative">
              <Image src="/images/api.png" layout="fill" alt="Abstract Image" />
            </div>
            <div className="flex justify-between">
              <h1 className="text-white font-aktiv text-5xl 2xl:text-large leading-none uppercase">
                flight app api
              </h1>
              <div className="text-white font-aktiv font-[200] uppercase text-5xl space-y-2">
                <h1>TYPESCRIPT</h1>
                <h1>EXPRESSJS</h1>
                <h1>SEQUELIZE</h1>
                <h1>POSTGRESQL</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:py-[6rem] 2xl:px-[21.25rem]">
        <div className="space-y-20">
          <div className="space-y-10">
            <h1 className="font-roboto text-white text-4xl">
              project repository.
            </h1>
            <div>
              <a
                className="uppercase underline font-[300] text-white font-aktiv text-2xl"
                href="http://https://gitlab.com/pratamailham206/flight-app-api-nodejs"
              >
                https://gitlab.com/pratamailham206/flight-app-api-nodejs
              </a>
            </div>
          </div>
          <div className="space-y-12">
            <h1 className="font-roboto text-white text-4xl">about.</h1>
            <div className="font-aktiv text-white font-[300] text-[1.27rem] space-y-10 leading-tight space-y-16">
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
    </div>
  );
};

export default ApiDetail;
