"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Hero from "@/components/hero/hero1";
import TransissionIn from "@/components/hero/transissions/transissionIn";
import TransissionOut from "@/components/hero/transissions/transissionOut";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import ListView from "@/components/calendar/listView";
import BigCard from "@/components/landing/bigCard";
import { cardData } from "@/static/landingInfo";
import VideoPlayer from "@/components/landing/video-player";
import Baerekraft from "@/components/landing/baerekraft";
import useFetch from "@/hooks/use-fetch";
import { Arrangement } from "@/schemas/arrangement";

const HomePage = () => {
  const dataS = JSON.parse(cardData);

  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { data, loading, error } = useFetch<{ arrangementer: Arrangement[] }>(
    "/api/arrangementer",
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col m-14 items-left justify-center pt-4">
        <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-x-6">
          <Hero
            title="Energi og Miljø"
            undertitle="Velkommen til energi og miljøstudentenes linjeforening!"
          />
          <div className="relative w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem]">
            <Image
              src="/image/sponsorer/logo.png"
              fill
              alt="Emil Logo"
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-5 pt-6 text-center lg:justify-start lg:text-left ">
          <div className="flex lg:items-left space-x-2 items-center">
            <div className="font-bold text-sm lg:text-xl tracking-tighter ">
              Ny Student?
            </div>
          </div>
          {/* <Button onClick={handleClick}>Les mer</Button> */}
          <Link href="/for_studenten">
            <Button className="text-sm lg:text-lg">
              Les mer
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
      <TransissionIn />
      <div className="h-full w-full background-dark p-8 flex justify-center ">
        <div className="flex flex-col w-[95%] lg:w-[65%] space-y-10">
          <div className="flex justify-center items-center">
            <div className="w-[42.1rem] lg:w-[58.4rem] text-2xl font-semibold text-white pl-1">
              Hva skjer på Emil?
            </div>
          </div>

        </div>
        {/* <p className="text-white">Stuff goes here</p> */}
        <div className="gap-4 flex justify-center">
          {/* <div className="">
            <ListView events={data?.arrangementer || []} />
          </div> */}
          <div className="flex justify-center items-center w-[40rem] h-[338px]">
            {loading ? (
              <div className="animate-ping h-8 w-8 bg-blue-400 rounded-full"></div>
            ) : (
              <ListView events={data?.arrangementer || []} />
            )}
          </div>

          <div className="flex justify-center">
            <BigCard {...data} />
          </div>
        </div>
        <div className="flex justify-center">
          <BigCard {...dataS} />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full flex text-xl font-semibold text-white justify-center">
            Søk Emil da vel!

          </div>
          <VideoPlayer />
        </div>
      </div>
      {/* <TransissionOut />
      <Baerekraft />
      <TransissionIn /> */}
      <Image
        src="/svg/bg.svg"
        alt={"baerekraft"}
        className="w-full"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
      />
    </div>
  );
};

export default HomePage;
