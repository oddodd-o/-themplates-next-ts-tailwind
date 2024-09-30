// app/layout.tsx
"use client";
/** @jsxImportSource @emotion/react */
import '@/styles/globals.scss';
import Header from "@components/layout/Header";
import Footer from "@/components/layout/Footer";
import {LayoutProps} from "@/types/layout";

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body>
                <div
                    id="wrap"
                >
                    <Header/>
                    <main id="container">
                        <div className="inner">{children}</div>
                    </main>
                    <Footer/>
                </div>
            </body>
        </html>
    );
}
