export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#F3EEE5] px-6 text-[#1F1C17]">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center">
        <div className="w-full rounded-[36px] border border-[rgba(31,28,23,0.08)] bg-[rgba(255,255,255,0.62)] px-8 py-14 text-center shadow-[0_20px_70px_rgba(58,44,28,0.06)] backdrop-blur sm:px-12">
          <div className="mx-auto mb-8 h-px w-16 bg-[rgba(31,28,23,0.10)]" />

          <p className="text-[11px] uppercase tracking-[0.34em] text-[#1F4A3A]">
            Subscription Confirmed
          </p>

          <h1
            className="mt-6 text-5xl leading-[0.98] tracking-[-0.03em] sm:text-6xl"
            style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 500 }}
          >
            You’re on the list.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-8 text-[rgba(31,28,23,0.62)]">
            Thank you for joining the All Goods Aisle waitlist. You’ll be among
            the first to hear about our ceremonial-grade matcha launch, first
            release updates, and future offerings.
          </p>

          <a
            href="/"
            className="inline-block mt-10 rounded-[22px] bg-[#1F4A3A] px-8 py-4 text-sm font-medium tracking-[0.08em] text-white transition duration-300 hover:bg-[#183b2f]"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}