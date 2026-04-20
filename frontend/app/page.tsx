// /app/page.tsx
import Hero from "./components/layout/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero
        size="large"
        variant="right-button"
        type="video"
        src="/videos/heroTrim.mp4"
        title={`ให้คำปรึกษาการลด
การปล่อยก๊าซเรือนกระจกสำหรับ SME`}
      />
    </main>
  );
}
