import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { MessageSlider } from "../components";
import { Message } from "../components/Card/Card";
import React from "react";

function useGetVoices(): SpeechSynthesisVoice[] {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = () => {
      if (window != undefined) {
        setVoices(window.speechSynthesis.getVoices());
      }
    };
  }, []);

  return voices;
}

export let VoicesContext: any;

export default function Home() {
  VoicesContext = React.createContext(useGetVoices())
  return (
    <>
      <Head>
        <title>Screech</title>
        <meta name="title" content="Screech" />
        <meta
          name="description"
          content="Find or save your favorite text-to-speech messages!"
        />
        <meta name="keywords" content="twitch, discord, text-to-speech," />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <header className={styles.header}>
        <h2 className={styles["sub-header"]}>WELCOME TO</h2>
        <h1 className={styles.title}>SCREECH</h1>
        <button className={styles.button}>NEW TTS MESSAGE</button>
      </header>

      <main className={styles.main}>
        {titles.map((title) => (
          <VoicesContext.Provider value={useGetVoices()}>
            <MessageSlider messages={data} title={title} key={title} />
          </VoicesContext.Provider>
        ))}
      </main>
    </>
  );
}

const titles = ["Trending", "Recent", "Popular"];
const data: Message[] = [
  {
    uid: 0,
    user: "Chris",
    message: "dododobobobobgjubgjubgjubdododobobobobgjubgjubgjub",
    voice: "Brian",
    numberOfLikes: 100,
    numberOfTimesCopied: 100,
  },
  {
    uid: 1,
    user: "Chris",
    message:
      "Don't you just hate it when your cat wakes you up like this? Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow.",
    voice: "Amy",
    numberOfLikes: 100,
    numberOfTimesCopied: 100,
  },
  {
    uid: 2,
    user: "Chris",
    message:
      ":a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a:A NEGATIVE SQUARED CAPTIAL LETTER",
    voice: "Brian",
    numberOfLikes: 50,
    numberOfTimesCopied: 100,
  },
  {
    uid: 3,
    user: "Chris",
    message:
      "The lawnmower goes shersheeeeeeerrerererereeeerrr vavavoom sherererererere and Rice burners go wowowowowowowowowowowowowowowowowowowowowowow",
    voice: "Emma",
    numberOfLikes: 50,
    numberOfTimesCopied: 100,
  },
  {
    uid: 4,
    user: "Chris",
    message:
      "The lawnmower goes shersheeeeeeerrerererereeeerrr vavavoom sherererererere and Rice burners go wowowowowowowowowowowowowowowowowowowowowowow",
    voice: "Emma",
    numberOfLikes: 50,
    numberOfTimesCopied: 100,
  },
  {
    uid: 5,
    user: "Chris",
    message:
      "The lawnmower goes shersheeeeeeerrerererereeeerrr vavavoom sherererererere and Rice burners go wowowowowowowowowowowowowowowowowowowowowowow",
    voice: "Emma",
    numberOfLikes: 50,
    numberOfTimesCopied: 100,
  },
];
