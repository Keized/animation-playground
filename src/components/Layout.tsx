import { PropsWithChildren } from "react";
import Navigation from "./Navigation";

export default function Layout({ children }: PropsWithChildren) {
    return <div>
        <Navigation />
        <main>
            { children }
        </main>
    </div>
}