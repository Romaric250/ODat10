import React from "react";

function About() {
  return (
    <div className= " lg:flex mt-20 p-5 gap-16 " >
    
      <div className="flex-1 flex-col flex gap-16 text-lg text-gray-700  w-full  leading-38px lg:w-1/2">
        <div className="flex gap-6 flex-col ">
        <h1 className="flex text-[32px] text-gray-900 gap-2 font-normal">
          About <span className="font-bold"> OD & OD@10</span>
        </h1>
        <p className="">
          Open Dreams is a distinguished organization dedicated to providing
          equal access to educational opportunities for underserved communities.
          They achieve this by establishing educational centers, offering
          scholarships, and providing mentorship programs. This year, Open
          Dreams is poised to mark its 10th year of transforming lives and
          shaping futures. The highly anticipated Open Dreams 10th Anniversary
          Celebration is set to take place from July 25th to July 27th, 2024.
          The festivities will kick off with an exhilarating hike on July 20th,
          and end with a thanksgiving service on July 28th, 2024, marking a
          decade of transformative impact and triumph. The upcoming anniversary
          promises to be an unforgettable celebration of excellence, impact, and
          collaboration, bringing together scholars, program facilitators,
          mentors, volunteers, donors, educational stakeholders, and supporters
          in a grand showcase of success and inspiration
        </p>
        </div>
       <div className=" flex flex-col gap-[13px]">
       <h2 className="text-xl text-[32px] font-normal">Event Overview</h2>
        <p className=" ">
          The Open Dreams 10th Anniversary will span three days of immersive
          experiences, thought-provoking discussions, engaging workshops, and
          celebratory moments. The event will commence with a scenic hike up
          Mount Nkol’so, setting the tone for the adventure and excitement that
          will unfold over the following days at prestigious venues,
          specifically at the IRIC Campus and Djeuga Palace Hotel.
        </p>
       </div>
      </div>
      <div className=" flex flex-col gap-[23px] flex-1 ">
      {Array.from({length: 4}).map( (_,index) => (
        <div className="bg-gray-200 h-[207px]" key={index}></div>
      )) }
      </div>
    </div>
  );
}

export default About;