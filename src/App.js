
import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="bg-gradient-to-br from-slate-100 to-blue-100 min-h-screen text-gray-800">
      <header className="text-center py-10 px-4">
        <img src="/logo.png" alt="AK Real Estate Systems" className="mx-auto w-24 mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold">AK REAL ESTATE SYSTEMS</h1>
        <p className="text-indigo-600 mt-2 font-medium text-lg">AUTOMATE. ATTRACT. CLOSE.</p>
        <a href="https://wa.me/51963036034" target="_blank" rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition">
          Contact on WhatsApp
        </a>
      </header>

      <main className="px-6 max-w-4xl mx-auto space-y-16 pb-20">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">Starter Package</h2>
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <div>
              <h3 className="font-bold">Option A – 20 posts/month</h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Reels: 2 per week → 8 total</li>
                <li>Carousels: 2 per week → 8 total</li>
                <li>Single Posts: 1 per week → 4 total</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Option B – 16 posts/month</h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Reels: 1–2 per week → 4–6 total</li>
                <li>Carousels: 1–2 per week → 4–5 total</li>
                <li>Single Posts: 1 per week → 5–6 total</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">Advanced Package</h2>
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <div>
              <h3 className="font-bold">Option A – 16 posts/month</h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Reels: 2 per week → 6 total</li>
                <li>Carousels: 1–2 per week → 6 total</li>
                <li>Single Posts: 1 per week → 4 total</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Option B – 12 posts/month</h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Reels: 1 per week → 4 total</li>
                <li>Carousels: 1 per week → 4–5 total</li>
                <li>Single Posts: 3–4 total</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">Standalone Services</h2>
          <div className="bg-white rounded-lg shadow p-6 text-sm space-y-4">
            <p><strong>Meta Ads Campaign:</strong> 1–3 ad sets, 2 visuals per set, targeting & optimization. Focused on lead generation.</p>
            <p><strong>Go High Level CRM Setup:</strong> 1 custom pipeline, welcome automation, dashboard & follow-up.</p>
            <p><strong>2 Custom Lead Forms:</strong> Created directly on Facebook & IG. Linked to ad/profile with custom questions.</p>
            <p><strong>Warm-Up Strategy Add-On:</strong> Engagement campaign + copywriting. Warms audience before paid ads.</p>
            <p><strong>Extras:</strong> Extra Ads Campaign ($350), Additional GHL Pipeline ($150)</p>
          </div>
        </section>

        <section className="text-center text-sm text-gray-600">
          <p>Email: ana.kathya.llg@gmail.com</p>
          <p>WhatsApp: +51 963036034</p>
        </section>
      </main>
    </div>
  );
}
