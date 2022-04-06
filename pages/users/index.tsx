import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

interface UserProps {
  dataUser: Array<any>;
}

export default function Users(props: UserProps) {
  const { dataUser } = props;
  const router = useRouter();
  console.log(dataUser);

  return (
    <>
      <Layout pageTitle="Users">
        <section className="container mx-auto">
          <h1 className="text-5xl">Users</h1>
          <span>
            <Link href="/">
              <a> Back to home 🔙 </a>
            </Link>
          </span>
          <br />
          <br />
          <ul className="container grid grid-cols-4 gap-3">
            {dataUser.map((user) => (
              <>
                <div
                  className="grid grid-rows-2 cursor-pointer max-w-lg p-4 transition-all border-2 shadow-lg rounded-xl hover:bg-slate-600 hover:text-white"
                  key={user.id}
                  onClick={() => router.push(`/users/${user.id}`)}
                >
                  <p className=" ">{user.name}</p>
                  <p className="">{user.email}</p>
                </div>
              </>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUser = await res.json();
  return {
    props: {
      dataUser,
    },
  };
}
