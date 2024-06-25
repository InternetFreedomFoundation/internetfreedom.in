import * as React from "react";
import { Layout, Search } from "../components/common";


export default function NotFoundPage() {
    return (
        <Layout>
            <div className="bg-white">
                <main className="responsive-container px-4 sm:px-6 lg:px-8">
                    <div className="py-16 sm:py-24">
                        <div className="">
                            <h1 className="mt-2 text-4xl font-bold text-center text-gray-900 tracking-tight sm:text-5xl">
                                Search the Site
                            </h1>
                            <div className="p-4">
                                <div >
                                    <p className="prose mx-auto text-center">
                                        We do not and cannot track what you type, Search to your hearts content!
                                    </p>
                                </div>
                                <Search />
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </Layout>
    )
}

export function Head() {
    return (
        <div>
            <link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
            <script src="/pagefind/pagefind-ui.js"></script>
        </div>
    )
}