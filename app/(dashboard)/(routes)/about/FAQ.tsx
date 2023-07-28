"use client";
import { Heading } from "@/components/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BadgeHelp } from "lucide-react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ weight: "600", subsets: ["latin"] });

const AboutPage = () => {
  return (
    <>
      <div className="blob w-[800px] h-[800px] rounded-[999px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>
      <div className="blob w-[1000px] h-[1000px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-gray-100 to-blue-100"></div>
      <div className="blob w-[600px] h-[600px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-slate-200 via-teal-100 to-blue-100"></div>
      <div className="blob w-[300px] h-[300px] rounded-[999px] absolute bottom-[-10px] left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-green-200 via-cyan-100 to-fuchsia-300"></div>
      <div>
        <Heading
          title="FAQ"
          description="A prudent question is one half of wisdom!"
          icon={BadgeHelp}
          iconColor="text-rose-500"
          bgColor="bg-rose-500/10"
        />
      </div>
      <div className="relative text-justify shrink-0 flex ">
        <Card className="p-4 transform -translate-x-1/2 left-1/2 w-[1000px] h-[630px] relative border-r-0 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg drop-shadow-lg overflow-hidden">
          <h1
            className={cn(
              "text-4xl font-bold text-center",
              quicksand.className
            )}
          >
            Frequently Asked Questions
          </h1>
          <div className="relative pt-6 shrink-0 flex">
            <div className="p-4 transform -translate-x-1/2 left-1/2 w-[920px] h-[500px] relative border-r-0 bg-white bg-opacity-30 backdrop-blur-lg rounded-xl drop-shadow-lg overflow-hidden">
              <div className="relative text-justify pl-4 pr-4">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full relative"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      What is this tool used for?
                    </AccordionTrigger>
                    <AccordionContent>
                      We made this tool SAAS (Software As a Service) to offering
                      best AI expirience to our customers. You can generate
                      music,video,code,Image and also smartest chat tool with
                      this tool. Our tool is powered by Chat gpt gen-4.0,
                      Midjourney v5.0, Picturestory Ai v7.9 and Ecrett Music
                      v9.7
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      How do I get help & support?
                    </AccordionTrigger>
                    <AccordionContent>
                      You have many options: Try our{" "}
                      <a
                        href="https://sachithdilshan.netlify.app/"
                        target="_black"
                        rel="noreferrer"
                        className="underline decoration-sky-500 hover:decoration-fuchsia-400 font-bold"
                      >
                        {" "}
                        help portal
                      </a>
                      . Reach out through our virtual assistant on the bottom
                      left corner of the Sally-AI window. If you still need
                      help, please{" "}
                      <a
                        href="https://sachithdilshan.netlify.app/"
                        target="_black"
                        rel="noreferrer"
                        className="underline decoration-sky-500 hover:decoration-fuchsia-400 font-bold"
                      >
                        Email us
                      </a>
                      .
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      What if I changed my mind?
                    </AccordionTrigger>
                    <AccordionContent>
                      No problem! You can cancel your monthly plan anytime. To
                      cancel your annual plan email us. If you cancel within
                      15-days, we will refund your entire payment.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      Is your payment system secure?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our payment system uses the latest security technology and
                      is powered by Stripe and Paypal, two of the world’s most
                      reliable payment companies.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      Do you have a non-profit discount?
                    </AccordionTrigger>
                    <AccordionContent>
                      Absolutely. We would love to have your non-profit use our
                      software to communicate your mission with your community.
                      Please contact us by email.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      Do I need to choose a plan now?
                    </AccordionTrigger>
                    <AccordionContent>
                      No. You can start with a free plan before opting to
                      purchase a paid membership. You can always choose how long
                      your membership will last. This flexibility allows you to
                      opt for Sally-AI only when you actually need it.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>
                      What options come with the free account?
                    </AccordionTrigger>
                    <AccordionContent>
                      With the free account you will be able to fetch up to 5
                      Generates. You can use all our features, including All of
                      them,
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <h1
          className="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-black 
           after:inline-block after:relative after:align-middle after:w-1/4 
           before:bg-black before:inline-block before:relative before:align-middle 
           before:w-1/4 before:right-2 after:left-2 text-xl p-4"
        >
          
          
        </h1>
        <p className="text-center pb-6">
          
          © 2023 Nilu devs Cloud Solutions - All rights reserved.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
