"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Roboto } from "next/font/google";

const font = Roboto({
  subsets: ["latin"],
  weight: "400"
})


export default function Home() {
  const [textInput, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  const handleAddTask = (e: any) => {
    setTasks([...tasks, textInput]);
  }
  return (
    <main className={font.className+" bg-red-50"}>
        <section className="w-full h-screen grid grid-cols-1 place-items-center p-16">        
        <div className="bg-red-200 h-full w-full hover:shadow-2xl transition duration-500 grid place-items-center rounded-2xl">
          <div className="flex flex-wrap p-4 gap-2 border">
            <input type="text" onChange={handleInputChange} placeholder="enter task" className="grow hover:scale-10 5"></input>
            <button type="submit" onClick={handleAddTask} className="bg-red-300 w-fit pe-4 ps-4 shrink">Add</button>
          </div>
          <div className="h-full">
            <ul>
              {tasks.map((task, index) => {
                return <li key={index}>{task}</li>
              })}
            </ul>
          </div>

        </div>
      </section>                                                                                                                                                          

    </main>
  );
}
