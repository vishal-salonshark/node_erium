"use client";
import React, { useState, useEffect } from "react";

const page = async () => {
  // const [system, setSystem] = useState(undefined);
  const [cpu, setCpu] = useState()
  const [memory, setMemory] = useState()
  const [disk, setDisk] = useState()
  
  const getSystemInfo = async () => {
    const res = await fetch(`http://localhost:3000/api/os`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const sys = await res.json();
    setCpu(Number(sys.cpuUsage))
    setMemory(Number(sys.memoryUsage))
    setDisk(Number(sys.diskUsage))
  };

    getSystemInfo();


  return (
    <div className="w-full p-12 ">
      <h1 className="text-3xl font-medium">Dashboard</h1>
      <div className="flex flex-col">   
       cpuUsage: {(cpu)} {' '}
       memoryUsage: {(memory)}{' '}
       diskUsage: {disk} {' '}
      </div>
    </div>
  );
};

export default page;
