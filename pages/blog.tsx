import Link from "next/link";
import Layout from "../components/Layout";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Post[];
}

export default function blog(props: BlogProps) {
  const { dataBlog } = props;

  return (
    <>
      <Layout pageTitle="Blog">
        <section className="container mx-auto">
          <h1 className="text-5xl">Blog</h1>

          <div className="my-5">
            {dataBlog.map((blog) => {
              return (
                <div key={blog.id} className="my-3 py-4 max-w-5xl border-b-2 ">
                  <h3 className="text-2xl capitalize">{blog.title}</h3>
                  <p>{blog.body}</p>
                </div>
              );
            })}
          </div>

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

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog,
    },
  };
}
