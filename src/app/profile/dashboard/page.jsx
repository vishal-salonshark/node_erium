"use client";
import React, { useState, useEffect } from "react";

const page = async () => {
  // const [system, setSystem] = useState(undefined);
  const [cpu, setCpu] = useState(0)
  const [memory, setMemory] = useState(0)
  const [disk, setDisk] = useState(0)
  
  const getSystemInfo = async () => {
    const res = await fetch(`http://localhost:3000/api/os`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const sys = await res.json();
    return sys;
  };

    getSystemInfo().then((data)=>{
    setCpu(Number(data.cpuUsage))
    setMemory(Number(data.memoryUsage))
    setDisk(Number(data.diskUsage))
    });


  useEffect(()=>{
    console.log(cpu)
    console.log(memory)
    console.log(disk)
  },[disk, memory, cpu])

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
