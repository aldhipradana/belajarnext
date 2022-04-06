import Link from "next/link";
import Layout from "../components/Layout";

export default function about() {
  return (
    <>
      <Layout pageTitle="About">
        <section className="container mx-auto">
          <h1 className="text-5xl">About</h1>
          <span>
            <Link href="/">
              <a> Back to home 🔙 </a>
            </Link>
          </span>
        </section>
      </Layout>
    </>
  );
}
