import { Children } from "react";

export default function appLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow bg-[#f7f7f7]">
                { children }
            </main>
        </div>
    )
}