function WaitlistForm({ buttonText = "Notify Me" }) {
  return (
    <form
      action="https://app.kit.com/forms/9322192/subscriptions"
      method="post"
      className="mx-auto mt-10 max-w-xl rounded-[34px] border border-[rgba(31,28,23,0.08)] bg-[rgba(255,255,255,0.82)] p-3 shadow-[0_18px_60px_rgba(58,44,28,0.05)] backdrop-blur"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email_address"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="h-14 flex-1 rounded-[22px] border border-[rgba(31,28,23,0.10)] bg-[rgba(255,255,255,0.88)] px-5 text-[15px] text-[#1F1C17] outline-none placeholder:text-[rgba(31,28,23,0.34)] focus:border-[#1F4A3A]"
        />
        <button
          type="submit"
          className="h-14 rounded-[22px] bg-[#1F4A3A] px-8 text-sm font-medium tracking-[0.08em] text-white transition duration-300 ease-out hover:bg-[#183b2f] hover:shadow-[0_12px_28px_rgba(31,74,58,0.16)] hover:-translate-y-[1px]"
        >
          {buttonText}
        </button>
      </div>
      <p className="mt-3 text-xs tracking-[0.01em] text-[rgba(31,28,23,0.34)]">
        Early access, launch updates, and first release news.
      </p>
    </form>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F3EEE5] text-[#1F1C17]">
      <header className="sticky top-0 z-40 border-b border-[rgba(31,28,23,0.06)] bg-[rgba(243,238,229,0.82)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-[11px] uppercase tracking-[0.42em] text-[#1F4A3A]">
            All Goods Aisle
          </div>
          <div className="text-[11px] uppercase tracking-[0.32em] text-[rgba(31,28,23,0.38)]">
            Launching Soon
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 pb-14 pt-20 text-center sm:pt-24 md:pt-36">
          <div className="text-[11px] uppercase tracking-[0.42em] text-black/38">
            Ceremonial Japanese Matcha
          </div>

            <h1
              className="aga-fade-up aga-delay-1 mt-8 text-5xl sm:text-7xl md:text-[96px] leading-[0.94] tracking-[-0.03em] text-[#1F1C17]"
            >
        
            A Ritual, Refined.
          </h1>

          <p className="aga-fade-up aga-delay-2 mx-auto mt-7 max-w-2xl text-[16px] leading-8 text-[rgba(31,28,23,0.58)] sm:text-[18px]">
            Bringing the fine art of Japanese tea to your daily ritual through
            ceremonial-grade matcha sourced from heritage farms in Uji and
            Shizuoka.
          </p>

          <div className="mt-7 text-[11px] uppercase tracking-[0.34em] text-[#1F4A3A]">
            Limited First Release • Join the Waitlist
          </div>

          <div className="aga-fade-up aga-delay-3">
            <WaitlistForm buttonText="Notify Me" />
          </div>

          {/* SOCIAL PROOF */}
          <section className="mx-auto max-w-5xl px-6 pt-16 pb-28 text-center">
            <div className="aga-fade-up aga-delay-4 mx-auto mb-10 h-px w-20 bg-[rgba(31,28,23,0.10)]" />

            <div className="aga-fade-up aga-delay-5 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-[rgba(31,28,23,0.40)]">
                  ORIGIN
                </p>
                <p className="mt-3 text-[15px] text-[#1F1C17]">
                  Uji &amp; Shizuoka, Japan
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.3em] text-[rgba(31,28,23,0.40)]">
                  GRADE
                </p>
                <p className="mt-3 text-[15px] text-[#1F1C17]">
                  Ceremonial Only
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.3em] text-[rgba(31,28,23,0.40)]">
                  SOURCING
                </p>
                <p className="mt-3 text-[15px] text-[#1F1C17]">
                  Direct from Heritage Farms
                </p>
              </div>
            </div>
          </section>

          <div className="aga-fade-up aga-delay-4 mt-24 overflow-hidden rounded-[36px] border border-[rgba(31,28,23,0.08)] shadow-[0_28px_90px_rgba(58,44,28,0.08)]">
          <img
            src="/images/matcha-hero.jpg"
            alt="Ceremonial matcha prepared in a bowl"
            className="h-[260px] sm:h-[460px] md:h-[580px] w-full object-cover"
          />
        </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
          <div className="text-[10px] uppercase tracking-[0.38em] text-[rgba(31,28,23,0.38)]">
            Our Mission
          </div>

          <p className="mt-8 text-[20px] font-light leading-[1.85] text-[#171717] sm:text-[28px]">
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
                className="h-[280px] sm:h-[420px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[30px]">
              <img
                src="/images/matcha-ritual.jpg"
                alt="Matcha preparation ritual"
                className="h-[280px] sm:h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-28 text-center">
            <div className="text-[10px] uppercase tracking-[0.38em] text-[rgba(31,28,23,0.38)]">
            Why It Matters
          </div>

          <div className="mt-16 space-y-14">
            <div>
              <h3
                className="text-[38px] tracking-[-0.03em] text-[#1F1C17] sm:text-[46px]"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 500 }}
              >
                Direct-from-Farm Sourcing
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-8 text-[rgba(31,28,23,0.60)]">
                Pure matcha sourced from the Uji and Shizuoka regions of Japan,
                selected for provenance, freshness, and integrity.
              </p>
            </div>

            <div>
              <h3
                className="text-[38px] tracking-[-0.03em] text-[#1F1C17] sm:text-[46px]"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 500 }}
              >
                Ceremonial Grade
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-8 text-[rgba(31,28,23,0.60)]">
                High-L-theanine profiles support a calm, focused energy without
                the sharp crash associated with lower-quality stimulation.
              </p>
            </div>

            <div>
              <h3
                className="text-[38px] tracking-[-0.03em] text-[#1F1C17] sm:text-[46px]"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 500 }}
              >
                Coming Soon
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-8 text-[rgba(31,28,23,0.60)]">
                Our wellness aisle will expand thoughtfully into complementary
                offerings, including nootropic energy pouches and black seed
                oil.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
          <h2
            className="text-4xl tracking-[-0.03em] text-[#1F1C17] sm:text-5xl"
            style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 500 }}
          >
            Be First to Experience the Launch
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-8 text-[rgba(31,28,23,0.62)]">
            Early access for first-release inventory, launch updates, and future
            product announcements.
          </p>

          <WaitlistForm buttonText="Join Waitlist" />
        </section>
      </main>

      <footer className="mx-auto mt-6 max-w-6xl border-t border-[rgba(31,28,23,0.08)] px-6 py-16 text-center text-sm text-[rgba(31,28,23,0.56)]">
        <p className="text-[12px] uppercase tracking-[0.28em] text-[rgba(31,28,23,0.62)]">
          All Goods Aisle LLC
        </p>
        <p className="mt-3 text-[15px] text-[rgba(31,28,23,0.58)]">
          Registered Office: 418 Broadway, Ste N, Albany, NY 12207. 
        </p>
        <p className="mt-2 text-[15px] text-[rgba(31,28,23,0.58)]">Contact: info@allgoodsaisle.com</p>
        <p className="mt-6 text-[14px] text-[rgba(31,28,23,0.46)]">© 2026 All Goods Aisle LLC. All Rights Reserved. </p>
      </footer>
    </div>
  );
}