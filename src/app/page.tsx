import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InstagramForm from "@/components/InstagramForm";

export default function HomePage() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-between py-8 md:max-w-3xl">
      <Header
        title="Instagram Video Downloader"
        subtitle="Download Instagram Videos for Free"
        className="mb-24 flex h-fit w-full flex-col items-center justify-center text-center"
      />
      <main className="mx-auto w-full flex-1 rounded p-4">
        <InstagramForm />
      </main>
    </div>
  );
}
