import type { Metadata } from "next";
import InnerPageLayout from "@/components/InnerPageLayout";

export const metadata: Metadata = {
  title: "Disclaimer — 3 Patti Ludo",
  description:
    "Official 3 Patti Ludo disclaimer on financial risk, responsible gaming, age restrictions, and online gaming in Pakistan. Read before playing.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "General Disclaimer",
    body: `This website (teenpattiludo.com.pk) and the 3 Patti Ludo mobile application are operated as an informational and entertainment platform. The information, guides, tips, and strategies published on this website are for general informational purposes only. While we strive to keep all content accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained herein.`,
  },
  {
    title: "Financial Risk Warning",
    body: `Online gaming and betting involve real financial risk. You may lose some or all of the money you deposit. Past winnings are not a guarantee of future results. Do not play with money you cannot afford to lose. Never borrow money to fund gaming activities. 3 Patti Ludo is not responsible for any financial losses incurred by players while using the platform or any third-party gaming platforms linked from this website.`,
  },
  {
    title: "Age Restriction — 18+ Only",
    body: `3 Patti Ludo is strictly intended for users who are 18 years of age or older. By downloading, installing, or using the application, you confirm that you are at least 18 years old and of legal gaming age in your jurisdiction. We reserve the right to request proof of age and suspend accounts that violate this policy. Parents and guardians are responsible for ensuring minors do not access gaming applications.`,
  },
  {
    title: "Responsible Gaming",
    body: `We are committed to responsible gaming. If you feel that gaming is negatively affecting your finances, relationships, or mental health, please stop playing and seek professional help. We offer tools including deposit limits, cool-off periods, and self-exclusion to help players stay in control. Problem gambling helplines are available in Pakistan through the Pakistan Society of Psychiatry and associated mental health organizations.`,
  },
  {
    title: "No Guaranteed Winnings",
    body: `Nothing on this website should be interpreted as a guarantee or promise of winnings. All game outcomes are determined by certified Random Number Generator (RNG) systems and are subject to probability. Tips, strategies, and tricks shared on this platform are educational in nature and do not guarantee any specific outcome in any game. Winning at games of chance and skill-chance combinations depends on multiple unpredictable factors.`,
  },
  {
    title: "Third-Party Links",
    body: `This website may contain links to third-party websites, payment processors, or gaming platforms. These links are provided for convenience only. We do not endorse, control, or take responsibility for the content, privacy policies, or practices of any third-party site. Accessing third-party links is at your own risk.`,
  },
  {
    title: "Legal Compliance",
    body: `Online gaming regulations vary by country and province. It is your sole responsibility to determine whether accessing and using this platform is legal in your jurisdiction. We do not make representations that the content or services available through this website are appropriate or available for use in all locations. Users who access the platform from territories where online gaming is restricted do so at their own risk and are responsible for compliance with local laws.`,
  },
  {
    title: "Changes to This Disclaimer",
    body: `We reserve the right to update or modify this disclaimer at any time without prior notice. Continued use of this website or the application following any changes constitutes your acceptance of the revised disclaimer. We recommend reviewing this page periodically.`,
  },
];

export default function DisclaimerPage() {
  return (
    <InnerPageLayout
      badge="Legal"
      title="Disclaimer"
      subtitle={`Last updated: ${new Date().toLocaleDateString("en-PK", { year: "numeric", month: "long", day: "numeric" })}`}
    >
      <div className="container-page py-14">
        <div className="mx-auto max-w-3xl">
          {/* Warning callout */}
          <div className="mb-8 flex items-start gap-3 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-200">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 9v4m0 4h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0Z" />
            </svg>
            <p>
              <strong className="text-amber-100">Important:</strong> This platform involves real-money gaming.
              Please read this disclaimer carefully before using the service. By using 3 Patti Ludo, you agree to the terms outlined below.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((s, i) => (
              <section key={s.title}>
                <h2 className="flex items-center gap-3 font-display text-lg font-bold text-white">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                  {s.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{s.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-white/10 bg-card/60 p-5 text-sm text-slate-400">
            If you have any questions about this disclaimer, please{" "}
            <a href="/contact" className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
              contact us
            </a>.
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
