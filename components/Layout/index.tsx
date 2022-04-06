import Header from "../Header";
import Footer from "../Footer";
import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps{
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps) {
    const {children, pageTitle} = props
    return (
    <>
    <Head>
        <title>Aldhi Pradana | {pageTitle}</title>
        <meta name="description" content="Website pribadi milik Aldhi Pradana"/>
    </Head>
    <div>
        <Header />
        <div>{children}</div>
        <Footer />
    </div>
    </>
  )
}
