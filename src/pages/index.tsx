import Head from 'next/head';

export default function Home() {
  console.log('lint error');
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="소소하지만 유용한, 소용" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Hello</main>
    </>
  );
}
