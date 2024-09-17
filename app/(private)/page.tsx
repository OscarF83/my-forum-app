export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  return (
    <main className="py-40 flex flex-col gap-2">
      <p className="indent-4 font-extrabold text-xl px-40 py-10">
        Welcome to Our All-Topics Forums!
      </p>
      <p className="indent-4 leading-relaxed font-semibold px-40 py-3 text-justify">
        We&apos;re thrilled to have you join our diverse and dynamic communities!
        These forums are your spaces to discuss anything and everything under
        the sun. Whether you're passionate about technology, arts, sports,
        current events, or just looking to share your thoughts and experiences,
        you&apos;ve come to the right places. Across our forums, we celebrate
        curiosity, open-mindedness, and respectful dialogue. Feel free to start
        a new discussion, join ongoing conversations, or simply browse and enjoy
        the wide range of topics our members bring to the tables. Remember, your
        unique perspective is what makes our communities vibrant and engaging.
        We value kindness, inclusivity, and constructive conversations. Please
        take a moment to familiarize yourself with our community guidelines to
        ensure a positive experience for everyone
      </p>
      <p className="indent-4 leading-relaxed font-semibold px-40 py-6">
        Welcome aboard, and happy posting! We can&apos;t wait to hear from you.
      </p>
      <div className="flex flex-row justify-center">
        <p className="indent-4 leading-relaxed font-semibold px-40 py-4 text-center gap-2">
          Click on{" "}
          <a className="underline font-extrabold" href="/forums">
            Forums
          </a>{" "}
          to start posting
        </p>
      </div>
    </main>
  );
}
