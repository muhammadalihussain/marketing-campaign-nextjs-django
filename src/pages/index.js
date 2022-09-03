import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { server } from "../constants/constants";
import { useEffect } from "react";
import dateFormat from "dateformat";
import Link from "next/link";
import { useRouter } from "next/router";

import MyImage from "../constants/MyImage";

export default function Home({ data, errors }) {
  useEffect(() => {}, []);
  const router = useRouter();

  const handleClick = ({ slug }) => {
    router.push("/" + slug);
  };

  return (
    <div>
      <Head>
        <title>Campaign Manager |Home</title>
        <meta name="description" content="A site for campaign" />
      </Head>

      <div className={styles.main}>
        <div className={styles.innerContent}>
          <h1> Available campaign</h1>

          {errors && <p>{errors}</p>}
          {data.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div
              className={styles.item}
              onClick={() => handleClick(item)}
              key={item.slug}
            >
              <div className={styles.imgContainer}>
                <MyImage
                  className={styles.img}
                  src={
                    "https://res.cloudinary.com/test-cm-company/" + item.logo
                  }
                  key={item.slug}
                  width={120}
                  height={120}
                  alt=""
                ></MyImage>
              </div>
              <div className={styles.rightItem}>
                <Link href={"/" + item.slug}>
                  <a>{item.title}</a>
                </Link>

                <p>{item.describe}</p>
                <small>
                  {dateFormat(
                    new Date(item.created_at),
                    "dddd, mmmm dS, yyyy, h:MM:ss TT"
                  )}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let data = [];
  let error = null;

  try {
    // Call an external API endpoint to get posts
    const res = await fetch(`${server}/campaigns`);

    data = await res.json();
  } catch (err) {
    error = err.message;
    console.log(err.message);
  }
  // By returning { props: { data } }, the data component
  // will receive `posts` as a prop at build time

  // if (!data.length) {
  //   return {
  //     notfound: true,
  //   };
  // }

  return {
    props: {
      data,
      error,
    },
  };
}
