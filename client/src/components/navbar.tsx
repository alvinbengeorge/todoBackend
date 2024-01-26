import React from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export default function NavBar() {
    return (
        <nav className="bg-black sticky p-2">
            <div className="rounded-xl bg-rose-950">
                <h1 className={caveat.className + ` rounded-xl text-white text-6xl text-center`}>Todo</h1>
            </div>
        </nav>
    );
}