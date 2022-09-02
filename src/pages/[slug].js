import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import dateFormat from "dateformat";
import { server } from "../constants/constants";
import { FaCheckCircle } from "react-icons/fa";

function Campaign({ data }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setIsSubmitting] = useState(false);

  const {
    query: { slug },
  } = useRouter();

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // // Get data from the form.
    // const data = {
    //   email: event.target.email.value,
    // };

    // // Send the data to the server in JSON format.
    // const JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      body: JSON.stringify({ email: email, campaign: data.id }),
      headers: { "Content-Type": "application/json" },
    };
    setIsSubmitting(true);

    fetch(`${server}/subscribers`, options)
      .then((res) => res.json())
      .then((response) => {
        setIsSubmitted(true);
        console.log(response);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <Head>
        <title> {data.title}</title>{" "}
        <meta name="description" content={data.describe} />
      </Head>
      <section>
        <div id="sign-in">
          {!isSubmitted ? (
            <>
              <div classNameName={styles.imgContainer}>
                <Image
                  className={styles.img_details}
                  src={
                    "https://res.cloudinary.com/test-cm-company/" + data.logo
                  }
                  width={120}
                  height={120}
                  alt=""
                ></Image>
              </div>
              <div className={styles.wapper}>
                <div className={styles.main_details}>
                  <div classNameName={styles.rightItem}>
                    <Link href={"/" + data.slug}>
                      <a>{data.title}</a>
                    </Link>

                    <p>{data.describe}</p>
                    <small>
                      {dateFormat(
                        new Date(data.created_at),
                        "dddd, mmmm dS, yyyy, h:MM:ss TT"
                      )}
                    </small>
                  </div>
                </div>
              </div>
              <h1>Stay up to date in the email world.</h1>
              <p>
                Subscribe for weekly emails with curated articles, guides, and
                videos to enhance your marketing tactics.
              </p>
              <form id="form" onSubmit={handleSubmit}>
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  id="email"
                  required
                />
                <input
                  disabled={submitting}
                  type="submit"
                  id="submit"
                  value={submitting ? "Please wait ...." : "Subscribe"}
                />
              </form>
            </>
          ) : (
            <div className={styles.thankyou}>
              {" "}
              <div className={styles.icon} size={25} color="green">
                <FaCheckCircle />
              </div>
              <div className={styles.message}></div>Thank you for your
              subscription
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  let data = [];

  // Call an external API endpoint to get campaigns
  const res = await fetch(`${server}/campaigns`);
  data = await res.json();

  const allSlugs = data.map((item) => item.slug);

  const paths = allSlugs.map((slug) => ({ params: { slug: slug } }));
  // Get the paths we want to pre-render based on campaigns

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let data = [];

  // Call an external API endpoint to get posts
  const res = await fetch(`${server}/campaigns/${params.slug}`);
  data = await res.json();

  return {
    props: {
      data,
    },
  };
}
export default Campaign;
