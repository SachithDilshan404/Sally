"use client";
import { Heading } from "@/components/heading";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";
import Image from "next/image";


const AboutPage = () => {
  return (
    <>
      <div className="blob w-[800px] h-[800px] rounded-[999px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>
      <div className="blob w-[1000px] h-[1000px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-gray-100 to-blue-100"></div>
      <div className="blob w-[600px] h-[600px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-slate-200 via-teal-100 to-blue-100"></div>
      <div className="blob w-[300px] h-[300px] rounded-[999px] absolute bottom-[-10px] left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-green-200 via-cyan-100 to-fuchsia-300"></div>
      <div
      className=""
      >
        <Heading
          title="Our Team."
          description="The Power of the Unity!"
          icon={Users}
          iconColor="text-fuchsia-500"
          bgColor="bg-fuchsia-500/10"
        />
      </div>
      <div className="relative text-justify shrink-0 flex ">
        <Card className="p-4 transform -translate-x-1/2 left-1/2 w-[1000px] h-[410px] relative border-r-0 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg drop-shadow-lg overflow-hidden">
          <div className="relative pt-4 shrink-0 flex">
          <div className="p-4 transform -translate-x-1/2 left-2/4 w-[800px] h-[100px] relative border-r-0 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg drop-shadow-lg overflow-hidden">
            <Image
            width={20}
            height={20}
            src="/logi.png"
            alt="logog"
            className="absolute pt-6  "
            />
            <p
            className="absolute pl-9 pt-5 text-xl font-bold"
            >
              Sachith Dilshan (BSC in Software Engineering) - Senior Software Engineer
            </p>
            
          </div>
         </div>
         <div className="relative pt-4 shrink-0 flex ">
          <div className="p-4 transform -translate-x-1/2 left-2/4 w-[800px] h-[100px] relative border-r-0 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg drop-shadow-lg overflow-hidden">
            <Image
            width={20}
            height={20}
            src="/logi.png"
            alt="logog"
            className="absolute pt-6"
            />
            <p
            className="absolute pl-9 pt-5 text-xl font-bold"
            >
              Niluka Thushari (BSC in Business Management) - Manger
            </p>
            
          </div>
         </div>
         <div className="relative pt-4 shrink-0 flex ">
          <div className="p-4 transform -translate-x-1/2 left-2/4 w-[800px] h-[100px] relative border-r-0 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg drop-shadow-lg overflow-hidden">
            <Image
            width={20}
            height={20}
            src="/logi.png"
            alt="logog"
            className="absolute pt-6"
            />
            <p
            className="absolute pl-9 pt-5 text-xl font-bold"
            >
              Shanuka Lalidu (BSC in Software Engineering) - Web Designer
            </p>
            
          </div>
         </div>
        </Card>
      </div>

           
    </>
   
   
  );
};


export default AboutPage;
