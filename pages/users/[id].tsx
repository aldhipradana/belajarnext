import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface UserDetailProps {
  user: User;
}

export default function UserDetail(props: UserDetailProps) {
  const { user } = props;
  return (
    <>
      <Layout pageTitle="Detail Users">
        <section className="container mx-auto">
          <h1 className="text-5xl">Detail Users </h1>

          <p>a{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>

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

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUser = await res.json();

  const paths = dataUser.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
