"use client";
import React, { useState, useEffect } from "react";

const page = async () => {
  const [system, setSystem] = useState(undefined);
  const getSystemInfo = async () => {
    const res = await fetch(`http://localhost:3000/api/os`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const sys = await res.json();
    // console.log(sys)
    setSystem(sys);
  };

  // console.log(system._cpuUsage);

  // setInterval(() => {
  //   getSystemInfo();
  // }, 15000);

  useEffect(() => {
    getSystemInfo();
  }, []);

  return (
    <div className="w-full p-12 ">
      <h1 className="text-3xl font-medium">Dashboard</h1>
      <div className="">
        {system ? (
          <>
            <span> cpuUsage: {system?._cpuUsage}</span>
            <span> memoryUsage: {system?._memoryUsage}</span>
            <span> diskUsage: {system?._diskUsage}</span>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default page;
