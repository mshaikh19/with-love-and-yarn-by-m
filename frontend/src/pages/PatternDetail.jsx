import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const allPatterns = [
  {
    id: 1,
    slug: "solstice-cable-sweater",
    title: "The Solstice Cable Sweater",
    subtitle: "A textured masterpiece inspired by slow mornings and the rhythmic click of needles.",
    description: "This pattern features a deep waffle stitch combined with delicate honeycomb detailing on the cuffs.",
    image: "/products/blanket.png",
    tag: "Advanced",
    secondTag: "Intermediate",
    price: "$15.00",
    isFree: false,
    materials: [
      { label: "Yarn", value: "400g (Approx. 200m) of Worsted Weight Merino in Honeycomb" },
      { label: "Hook", value: "5.5mm (US I-9) Ergonomic Chrome Hook" },
      { label: "Notions", value: "2 Removable Markers (3.5mm), Stitch Markers, Tapestry Needle" },
      { label: "Gauge", value: "18 sts × 13 rows = 4in in Waffle Stitch" },
    ],
    stitchKey: [
      { abbr: "CH", desc: "Chain" },
      { abbr: "DC", desc: "Double Crochet" },
      { abbr: "FPDC", desc: "Front Post Double Crochet" },
      { abbr: "SL ST", desc: "Slip Stitch" },
    ],
    sections: [
      {
        title: "Foundation & Ribbing",
        body: "Chain 61 loosely. The foundation chain should be flexible to allow for stretch in the fabric.\n\nRow 1: Sc in 2nd ch from hook and in each ch across. Turn (60 sts).\n\nRow 2: Ch 1, sc in BLO (Back Loop Only) across. This creates the elasticised bottom ribbing. Do not fasten off.",
      },
      {
        title: "The Waffle Body",
        body: "Now we begin the textured waffle pattern which will form the main body of the cardigan.\n\nRow 6: Ch 3, *fpdc in next st, dc in next 2 sts; repeat from * until 1 st remains. dc in last st. Turn.\n\nRow 7: Ch 2, fptr in next st, *dc in next 2 sts; repeat from * until 1 st remains. dc in last st. Turn.\n\nRepeat rows 5 and 6 until piece measures 16\" from foundation edge.",
      },
      {
        title: "Shaping the Armholes",
        body: "Split the work into three sections: Right Front (20 sts), Back (40 sts), and Left Front (20 sts).\n\nWorking on the Back first. Attach yarn to the first st/ch of the back section. Continue in Waffle Stitch for another 8\". Fasten off all sections' last buttonhole rows, incorporating a slight decrease every other row at the neckline edge to create a V-shape.",
      },
      {
        title: "Sleeves & Assembly",
        body: "Sleeves are worked in the round. Join yarn at the bottom of the armhole. Work Waffle Stitch in rounds, decreasing 2 sts every 5th round for 34 rows (18 sts).\n\nFinish with 10 rows of honeycomb stitch (alternating fpsc and bpsc every 2 sts) for a decorative cuff.\n\nSeam the shoulders using the Mattress Stitch for an invisible join. Add buttonholes to the front placket by skipping 2 sts and chaining 2 at equal intervals.",
      },
    ],
    bannerImage: "/products/cardigan.png",
  },
  {
    id: 2,
    slug: "minimalist-ribbed-beanie",
    title: "Minimalist Ribbed Beanie",
    subtitle: "The perfect entry-level project for the modern maker.",
    description: "Quick to knit and effortlessly chic, this pattern is designed for the beginner who wants something beautiful.",
    image: "/products/beanie.png",
    tag: "Beginner",
    price: "$0.00",
    isFree: true,
    materials: [
      { label: "Yarn", value: "120g of Chunky Merino in Slate Haze" },
      { label: "Needles", value: "6mm (US 10) 40cm Circular Needles" },
      { label: "Notions", value: "Stitch Marker, Tapestry Needle" },
      { label: "Gauge", value: "14 sts × 20 rows = 4in in 2x2 Rib" },
    ],
    stitchKey: [
      { abbr: "K", desc: "Knit" },
      { abbr: "P", desc: "Purl" },
      { abbr: "K2TOG", desc: "Knit 2 Together" },
      { abbr: "PM", desc: "Place Marker" },
    ],
    sections: [
      {
        title: "Cast On & Ribbing",
        body: "Using long-tail cast on, CO 80 sts. Join to work in the round, placing a stitch marker at the beginning.\n\nRound 1–20: *K2, P2; repeat from * to end. This creates the deep 2x2 rib that forms the entire hat.",
      },
      {
        title: "Crown Decreases",
        body: "Round 1: *K2, P2tog; repeat from * to end. (60 sts)\nRound 2: *K2, P1; repeat from * to end.\nRound 3: *K2tog, P1; repeat from * to end. (40 sts)\nRound 4: *K1, P1; repeat from * to end.\nRound 5: *K2tog; repeat from * to end. (20 sts)\n\nCut yarn leaving a 20cm tail. Thread through remaining sts and pull tight to close.",
      },
    ],
    bannerImage: "/products/beanie.png",
  },
];

export default function PatternDetail() {
  const { slug } = useParams();
  const pattern = allPatterns.find(p => p.slug === slug) || allPatterns[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 mt-10">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left: text */}
            <div className="lg:w-1/2">
              {/* breadcrumb */}
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A7080] mb-8">
                <Link to="/patterns" className="hover:text-tertiary transition-colors">Patterns</Link>
                <span>/</span>
                <span className="text-tertiary/60">{pattern.tag}</span>
              </div>

              {/* tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#E8F4F1] text-[#0A6C74] text-[9px] font-black tracking-[0.2em] uppercase px-4 py-2 rounded-full">
                  {pattern.tag}
                </span>
                {pattern.secondTag && (
                  <span className="bg-tertiary/5 text-tertiary text-[9px] font-black tracking-[0.2em] uppercase px-4 py-2 rounded-full">
                    {pattern.secondTag}
                  </span>
                )}
              </div>

              <h1 className="font-serif text-4xl md:text-6xl text-tertiary leading-[1.05] mb-6 tracking-tight">
                {pattern.title}
              </h1>

              <p className="text-[#4A3840] text-sm md:text-base font-light leading-relaxed mb-10 max-w-lg">
                {pattern.subtitle} {pattern.description}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-tertiary text-white px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.15em] hover:bg-tertiary/90 transition-all shadow-md hover:shadow-lg">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {pattern.isFree ? 'Download Free' : `Get PDF — ${pattern.price}`}
                </button>
                <button className="flex items-center gap-2 bg-white border border-tertiary/15 text-tertiary px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.15em] hover:border-tertiary/40 transition-all shadow-sm">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Save to Library
                </button>
              </div>
            </div>

            {/* Right: image */}
            <div className="lg:w-1/2 w-full">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-[#F0ECE8] shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
                <img src={pattern.image} alt={pattern.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Materials & Stitch Key ─────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Materials List */}
            <div className="lg:w-2/3 bg-white rounded-2xl border border-tertiary/8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-5 h-5 rounded-full bg-tertiary/10 flex items-center justify-center">
                  <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-tertiary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-tertiary/70">Materials List</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {pattern.materials.map((m, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0A6C74] mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#8A7080] block mb-0.5">{m.label}</span>
                      <span className="text-sm text-[#4A3840] font-light leading-snug">{m.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stitch Key */}
            <div className="lg:w-1/3 bg-[#FAF8F6] rounded-2xl border border-tertiary/8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-tertiary/70 block mb-7">Stitch Key</span>
              <div className="space-y-4">
                {pattern.stitchKey.map((s, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-tertiary/8 pb-4 last:border-0 last:pb-0">
                    <span className="text-[11px] font-black text-tertiary tracking-wider">{s.abbr}</span>
                    <span className="text-xs text-[#5C4A52] font-light">{s.desc}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="mt-8 block text-[10px] font-black uppercase tracking-[0.2em] text-[#0A6C74] hover:underline">
                Abbreviations guide →
              </a>
            </div>
          </div>
        </section>

        {/* ── The Method ────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="font-serif text-4xl italic text-tertiary text-center mb-14">The Method</h2>

          <div className="space-y-10 max-w-3xl mx-auto">
            {pattern.sections.map((sec, i) => (
              <div key={i} className="flex gap-8 items-start">
                {/* Step number */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-tertiary/15 flex items-center justify-center text-tertiary/30 text-xs font-black">
                  {i + 1}
                </div>
                <div className="flex-1 pt-1.5">
                  <h3 className="font-serif text-xl text-tertiary mb-4">{sec.title}</h3>
                  <div className="space-y-3">
                    {sec.body.split('\n\n').map((para, j) => (
                      <p key={j} className="text-[#4A3840] text-sm font-light leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Banner image ──────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="rounded-3xl overflow-hidden h-[400px] shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
            <img src={pattern.bannerImage} alt={pattern.title} className="w-full h-full object-cover" />
          </div>
        </section>

        {/* ── Back to patterns ─────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-16 flex justify-center">
          <Link to="/patterns" className="px-10 py-4 bg-white border border-tertiary/20 text-tertiary text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-tertiary hover:text-white transition-colors duration-300 shadow-sm hover:shadow-lg">
            ← Back to Patterns
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}
