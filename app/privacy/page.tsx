export default function PrivacyPage() {
  return (
    <section className="bg-creta px-5 py-[60px] md:px-12 md:py-20">
      <div className="mx-auto max-w-[720px]">
        <h1 className="font-display text-[40px] text-umbra">Privacy Policy</h1>
        <p className="mt-3 text-[13px] text-pizarra">Last updated: April 21, 2026</p>
        <hr className="mb-10 mt-6 border-[rgba(44,40,37,0.1)]" />

        <div className="space-y-6 text-[15px] leading-[1.7] text-umbra">
          <p>
            peri ("the App") is a perimenopause symptom tracker for iOS developed by double lab.
            This policy explains how the App handles your data.
          </p>

          <section>
            <h2 className="mt-10 text-[18px] font-semibold">1. Data We Collect</h2>
            <p>
              The App collects health and wellness data that you enter directly, including symptom
              type, intensity, notes, and date. This data is stored exclusively on your device
              using Apple&apos;s SwiftData framework. No account is required.
            </p>
          </section>

          <section>
            <h2 className="mt-10 text-[18px] font-semibold">2. How Your Data Is Used</h2>
            <p>
              Your data is used solely to provide the App&apos;s core functionality: logging
              symptoms, displaying calendar history, and generating PDF reports for your personal
              use. Your data is never used for advertising, profiling, or any purpose unrelated to
              the App&apos;s features.
            </p>
          </section>

          <section>
            <h2 className="mt-10 text-[18px] font-semibold">3. Data Sharing</h2>
            <p>
              We do not sell, share, or transmit your health data to any third party. Your data
              never leaves your device unless you explicitly choose to share a PDF report using
              iOS&apos;s native share sheet.
            </p>
          </section>

          <section>
            <h2 className="mt-10 text-[18px] font-semibold">4. Apple Health (HealthKit)</h2>
            <p>
              A future version of the App may request access to Apple Health data (sleep, heart
              rate, steps) for correlation with symptoms. If enabled, this data is read-only and
              processed entirely on your device. It is never uploaded to any server.
            </p>
          </section>

          <section>
            <h2 className="mt-10 text-[18px] font-semibold">5. In-App Purchases</h2>
            <p>
              The App offers optional paid subscriptions processed entirely by Apple. We do not
              collect or store your payment information. Purchase records are managed by Apple and
              RevenueCat solely to verify your subscription status.
            </p>
          </section>

          <section>
            <h2 className="mt-10 text-[18px] font-semibold">6. Analytics</h2>
            <p>
              The App does not use any third-party analytics or tracking SDKs. We do not collect
              usage data, crash reports, or behavioral data.
            </p>
          </section>

          <section>
            <h2 className="mt-10 text-[18px] font-semibold">7. Children&apos;s Privacy</h2>
            <p>
              The App is intended for adults aged 18 and older. We do not knowingly collect data
              from minors.
            </p>
          </section>

          <section>
            <h2 className="mt-10 text-[18px] font-semibold">8. Data Deletion</h2>
            <p>
              All your data is stored locally on your device. To delete all data, simply uninstall
              the App. You can also delete individual entries from within the App.
            </p>
          </section>

          <section>
            <h2 className="mt-10 text-[18px] font-semibold">9. Changes to This Policy</h2>
            <p>
              We may update this policy as the App evolves. The updated date at the top of this
              page will reflect any changes. Continued use of the App after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mt-10 text-[18px] font-semibold">10. Contact</h2>
            <p>Questions about this policy? Contact double lab.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
