"use client";
import Link from "next/link";
import './form.css'; 
import Image from 'next/image';

export default function form() {

  const ScheduleButton = () => {
    return (
      <Link href="/form/schedule">
      <div className="button">
        <div> 
        <div className="top-button green">
          <p className="center">SCHEDULE</p>
          </div>
        <div className="bottom-button">
        </div>
      </div>
      </div>
      </Link>
    );
  };

  const DwellButton = () => {
    return (
      <Link href="/form/dwell ">
      <div className="button">
        <div> 
        <div className="top-button orange">
          <p className="center">DWELL TIME</p>
          </div>
        <div className="bottom-button">
           {/* <Image src="./arrow.svg" alt="Arrow" width={200} height={200} /> */}
        </div>
      </div>
      </div>
      </Link>
    );
  };
  
  

  return (
    <>
      <h1 className="title">WHAT WOULD YOU LIKE TO SEE CHANGED</h1>
    
      <ScheduleButton />
      <DwellButton />


    </>
  );
}
