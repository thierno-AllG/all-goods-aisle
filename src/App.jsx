function WaitlistForm({ buttonText = "Notify Me" }) {
  return (
    <form
      action="https://app.kit.com/forms/9322192/subscriptions"
      method="post"
      className="mx-auto mt-12 max-w-xl rounded-[28px] border border-black/8 bg-white/80 p-3 shadow-[0_16px_50px_rgba(0,0,0,0.05)] backdrop-blur"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email_address"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="h-14 flex-1 rounded-[18px] border border-black/10 bg-transparent px-5 text-[15px] outline-none placeholder:text-black/32 focus:border-[#1E3A2F]"
        />
        <button
          type="submit"
          className="h-14 rounded-[18px] bg-[#1E3A2F] px-7 text-sm font-medium tracking-[0.08em] text-white"
        >
          {buttonText}
        </button>
      </div>
      <p className="mt-3 text-xs text-black/36">
        Join the All Goods Aisle waitlist. After subscribing, Kit may show a
        confirmation step.
      </p>
    </form>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F2EA] text-[#111111]">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#F5F2EA]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-[11px] uppercase tracking-[0.42em] text-[#1E3A2F]">
            All Goods Aisle
          </div>
          <div className="text-[11px] uppercase tracking-[0.32em] text-black/40">
            Launching Soon
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-28 text-center md:pt-32">
          <div className="text-[11px] uppercase tracking-[0.42em] text-black/38">
            Ceremonial Japanese Matcha
          </div>

          <h1 className="mt-8 text-5xl font-light leading-[1.02] tracking-[-0.03em] text-[#111111] sm:text-6xl md:text-7xl">
            A Ritual, Refined.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-8 text-black/60 sm:text-lg">
            Bringing the fine art of Japanese tea to your daily ritual through
            ceremonial-grade matcha sourced from heritage farms in Uji and
            Shizuoka.
          </p>

          <div className="mt-7 text-[11px] uppercase tracking-[0.34em] text-[#1E3A2F]">
            Limited First Release • Join the Waitlist
          </div>

          <WaitlistForm buttonText="Notify Me" />

          <div className="mt-20 overflow-hidden rounded-[32px] shadow-[0_32px_90px_rgba(0,0,0,0.12)]">
            <img
              src="/images/matcha-hero.jpg"
              alt="Ceremonial matcha prepared in a bowl"
              className="h-[540px] w-full object-cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
          <div className="text-[11px] uppercase tracking-[0.42em] text-black/38">
            Our Mission
          </div>

          <p className="mt-10 text-[23px] font-light leading-[1.9] text-[#171717] sm:text-[28px]">
            All Goods Aisle LLC specializes in the direct sourcing and
            importation of premium Japanese agricultural products. We bridge the
            gap between traditional Japanese tea farms and the modern wellness
            consumer, starting with ceremonial-grade Okumidori and Samidori
            Matcha.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[30px]">
              <img
                src="/images/matcha-farm.jpg"
                alt="Tea farm landscape"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[30px]">
              <img
                src="/images/matcha-ritual.jpg"
                alt="Matcha preparation ritual"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-28 text-center">
          <div className="text-[11px] uppercase tracking-[0.42em] text-black/38">
            Why It Matters
          </div>

          <div className="mt-16 space-y-14">
            <div>
              <h3 className="text-2xl font-light tracking-[-0.02em] sm:text-[30px]">
                Direct-from-Farm Sourcing
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-8 text-black/60">
                Pure matcha sourced from the Uji and Shizuoka regions of Japan,
                selected for provenance, freshness, and integrity.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light tracking-[-0.02em] sm:text-[30px]">
                Ceremonial Grade
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-8 text-black/60">
                High-L-theanine profiles support a calm, focused energy without
                the sharp crash associated with lower-quality stimulation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light tracking-[-0.02em] sm:text-[30px]">
                Coming Soon
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-8 text-black/60">
                Our wellness aisle will expand thoughtfully into complementary
                offerings, including nootropic energy pouches and black seed
                oil.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-32 text-center">
          <h2 className="text-4xl font-light tracking-[-0.03em] text-[#111111] sm:text-5xl">
            Be First to Experience the Launch
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-8 text-black/58">
            Early access for first-release inventory, launch updates, and future
            product announcements.
          </p>

          <WaitlistForm buttonText="Join Waitlist" />
        </section>
      </main>

      <footer className="mx-auto max-w-6xl border-t border-black/8 px-6 py-16 text-center text-sm text-black/56">
        <p className="text-[13px] tracking-[0.1em] text-black/70">
          All Goods Aisle LLC
        </p>
        <p className="mt-3">
          Registered Office: 418 Broadway, Ste N, Albany, NY 12207. 
        </p>
        <p className="mt-1">Contact: info@allgoodsaisle.com</p>
        <p className="mt-6">© 2026 All Goods Aisle LLC. All Rights Reserved. </p>
      </footer>
    </div>
  );
}