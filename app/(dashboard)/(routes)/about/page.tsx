"use client";
import { Heading } from "@/components/heading";
import { Card } from "@/components/ui/card";
import { BadgeInfo } from "lucide-react";
import Pag from "./Pag";
import FAQ from "./FAQ";

const AboutPage = () => {
  return (
    <>
      <div className="blob w-[800px] h-[800px] rounded-[999px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>
      <div className="blob w-[1000px] h-[1000px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-gray-100 to-blue-100"></div>
      <div className="blob w-[600px] h-[600px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-slate-200 via-teal-100 to-blue-100"></div>
      <div className="blob w-[300px] h-[300px] rounded-[999px] absolute bottom-[-10px] left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-green-200 via-cyan-100 to-fuchsia-300"></div>
      <div>
        <Heading
          title="About Us."
          description="We are designing the World!"
          icon={BadgeInfo}
          iconColor="text-amber-500"
          bgColor="bg-amber-500/10"
        />
      </div>
      <div className="relative text-justify shrink-0 flex ">
        <Card className="p-4 transform -translate-x-1/2 left-1/2 w-[1000px] h-[630px] relative border-r-0 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg drop-shadow-lg overflow-hidden">
          <p>
            Welcome to our Sally-Ai! We are at the forefront of cutting-edge
            artificial intelligence solutions that are revolutionizing the way
            we interact with technology. Our team of experts is driven by a
            passion for innovation and is committed to pushing the boundaries of
            what AI can achieve.
            <br /> <br /> At our core, we believe that AI has the power to
            transform industries, enhance human lives, and shape a better
            future. With state-of-the-art algorithms and advanced machine
            learning techniques, we develop intelligent systems that can
            understand, learn, and adapt to complex challenges.
            <br /> <br />
            Our mission is to make AI accessible and beneficial to everyone.
            Whether you are a business seeking to optimize operations, a
            researcher exploring new possibilities, or an individual looking for
            personalized AI-driven experiences, we have the solutions for you.
            <br /> <br />
            Transparency, ethics, and privacy are vital to our approach. We
            prioritize security and ensure that our AI technologies adhere to
            the highest standards of data protection and user trust. Our
            commitment to responsible AI development sets us apart as a reliable
            and responsible AI partner. <br /> <br />
            As the AI landscape evolves rapidly, we stay ahead by continually
            exploring emerging technologies, refining our models, and staying
            up-to-date with the latest advancements. Our dedication to
            innovation drives us to create AI solutions that are not only
            powerful but also scalable and adaptable to meet your unique needs.
            <br />
            <br />
            Join us on this exciting journey into the future of AI. Explore our
            range of products and services that harness the potential of
            artificial intelligence to unlock new opportunities and take your
            endeavors to new heights. Lets shape a smarter and more intelligent
            world together! <br /> <br />
            ~Sachith Dilshan~
          </p>
        </Card>
      </div>
      <div className="relative pt-6">
        <Pag />
      </div>
      <div className="relative pt-6">
        <FAQ />
      </div>
    </>
  );
};

export default AboutPage;
