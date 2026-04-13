export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F2EA] px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-light tracking-[-0.02em] text-[#111111]">
          You're on the list.
        </h1>

        <p className="mt-6 text-[17px] leading-8 text-black/60">
          Thank you for joining the All Goods Aisle waitlist.
          Please check your email to confirm your subscription.
        </p>

        <p className="mt-6 text-sm text-black/40">
          We’ll notify you as soon as our first ceremonial-grade matcha
          becomes available.
        </p>

        <a
          href="/"
          className="inline-block mt-10 rounded-[18px] bg-[#1E3A2F] px-7 py-4 text-sm font-medium tracking-[0.08em] text-white"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}