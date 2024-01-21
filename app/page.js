import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div id="title-card">
        <h1 id="title"> The Guessing of Isaac </h1>
      </div>
      <div id="content">
        <h1 id="guess-tag">Guess the Item:</h1>
        <p id="p-tag1">Type any item to continue</p>
      </div>
    </main>
  );
}
