import { FilterCategory } from "@/features";
import { Header, Sidebar } from "@/widgets";

export default function Home() {
  return (
    <section className="font-sans">
      <Sidebar />

      <Header />

      <main className="mt-[64px] ml-[52px] px-[24px] pt-[18px] pb-[24px]">
        <FilterCategory />
      </main>
    </section>
  );
}
