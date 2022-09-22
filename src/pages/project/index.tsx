import { NextPage } from 'next';
import Image from 'next/image';
import Head from '@components/head';

const ProjectPage: NextPage = () => {
  return (
    <div className="">
      <Head title="Ilham Pratama - Home" hrefIcon="/favicon.ico" />
      <div className="bg-black-m absolute top-0 left-0 block w-[100vh] h-[100vw] overflow-y-auto no-scrollbar overflow-x-hidden -rotate-90 origin-top-right translate-x-[-100vh]">
        <div className="absolute py-[67.5%] left-1/4">
          <div className="bg-white w-[27rem] h-[36rem] rotate-90">
            dsadsadasdasdasdasd
          </div>
          <div className="bg-red-200 w-[27rem] h-[36rem] rotate-90">
            dsadsadasdasdasdasd
          </div>
          <div className="bg-yellow-200 w-[27rem] h-[36rem] rotate-90">
            dsadsadasdasdasdasd
          </div>
          <div className="bg-white w-[27rem] h-[36rem] rotate-90">
            dsadsadasdasdasdasd
          </div>
          <div className="bg-red-200 w-[27rem] h-[36rem] rotate-90">
            dsadsadasdasdasdasd
          </div>
          <div className="bg-blue-200 w-[27rem] h-[36rem] rotate-90">
            dsadsadasdasdasdasd
          </div>
          <div className="bg-yellow-200 w-[27rem] h-[36rem] rotate-90">
            dsadsadasdasdasdasd
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
