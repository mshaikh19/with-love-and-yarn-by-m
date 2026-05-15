import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import InstagramPost from '../components/common/InstagramPost';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SEO from '../components/common/SEO';

const allPatterns = [
  {
    id: 1,
    slug: "solstice-cable-sweater",
    title: "The Solstice Cable Sweater",
    subtitle: "A textured masterpiece inspired by slow mornings and the rhythmic click of needles.",
    description: "This pattern features a deep waffle stitch combined with delicate honeycomb detailing on the cuffs.",
    image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
    author: "Marya Shaikh",
    sizes: "XS, S, M, L, XL, 2XL",
    difficultyScore: 4,
    tag: "Advanced",
    secondTag: "Intermediate",
    price: "$15.00",
    isFree: false,
    terminology: "US Terms",
    finishedSize: "Bust: 42\", Length: 24\" (Size M)",
    patternNotes: [
      "The ch-3 at the beginning of rows counts as a double crochet unless otherwise stated.",
      "This garment is worked in panels from the bottom up and seamed.",
      "For a more relaxed fit, go up one hook size."
    ],
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
    bannerImage: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
  },
  {
    id: 2,
    slug: "minimalist-ribbed-beanie",
    title: "Minimalist Ribbed Beanie",
    subtitle: "The perfect entry-level project for the modern maker.",
    description: "Quick to knit and effortlessly chic, this pattern is designed for the beginner who wants something beautiful.",
    image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
    author: "Marya Shaikh",
    sizes: "Adult (One Size)",
    difficultyScore: 1,
    tag: "Beginner",
    price: "$0.00",
    isFree: true,
    terminology: "US Terms",
    finishedSize: "Circumference: 18\" unstretched (fits 21-23\")",
    patternNotes: [
      "This hat is worked in the round from the brim up.",
      "Use a stretchy cast-on such as the German Twisted Cast-On for the best fit.",
      "Crown decreases are worked rapidly for a slouchy top."
    ],
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
    bannerImage: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
  },
];

export default function PatternDetail() {
  const { slug } = useParams();
  const pattern = allPatterns.find(p => p.slug === slug) || allPatterns[0];
  const [activeImage, setActiveImage] = useState(0);
  const galleryRef = useRef(null);

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      const scrollAmount = 624; // approximate item width + gap
      
      if (direction === 1) {
        // Next
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
          galleryRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        // Previous
        if (scrollLeft <= 10) {
          galleryRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          galleryRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  const galleryImages = [
    pattern.image,
    pattern.image,
    pattern.image,
    pattern.image,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-neutralBg flex flex-col font-sans">
      <SEO 
        title={pattern.title} 
        description={pattern.subtitle + " " + pattern.description}
        image={pattern.image}
      />
      <Navbar />

      <main className="flex-1 mt-32">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left: text */}
            <div className="lg:w-1/2">
              {/* breadcrumb */}
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-textLight mb-8 no-print">
                <Link to="/patterns" className="hover:text-tertiary transition-colors">Patterns</Link>
                <span>/</span>
                <span className="text-tertiary/60">{pattern.tag}</span>
              </div>

              {/* tags */}
              <div className="flex flex-wrap gap-2 mb-6 no-print">
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

              {/* Pattern Meta info */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 py-4 border-y border-tertiary/10">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-textLight mb-1">Designer</span>
                  <span className="text-sm text-textMain font-medium">{pattern.author || "Marya Shaikh"}</span>
                </div>
                <div className="w-[1px] h-8 bg-tertiary/10 hidden md:block"></div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-textLight mb-1">Sizes</span>
                  <span className="text-sm text-textMain">{pattern.sizes || "One Size"}</span>
                </div>
                <div className="w-[1px] h-8 bg-tertiary/10 hidden md:block"></div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-textLight mb-1">Difficulty</span>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <div key={star} className={`w-2 h-2 rounded-full ${star <= (pattern.difficultyScore || 3) ? 'bg-[#0A6C74]' : 'bg-tertiary/20'}`}></div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-textMain text-sm md:text-base font-light leading-relaxed mb-10 max-w-lg">
                {pattern.subtitle} {pattern.description}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 no-print">
                <button 
                  onClick={() => toast.success(`✨ ${pattern.title} added to your bag!`)}
                  className="flex items-center gap-2 bg-tertiary text-white px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.15em] hover:bg-tertiary/90 transition-all shadow-md hover:shadow-lg"
                >
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

            {/* Right: image gallery */}
            <div className="lg:w-5/12 w-full flex flex-col gap-4 lg:sticky lg:top-24 lg:ml-auto lg:pl-8 no-print">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] w-full max-w-[420px] mx-auto bg-[#F0ECE8] shadow-[0_24px_60px_rgba(0,0,0,0.08)] relative">
                <img src={galleryImages[activeImage]} alt={pattern.title} className="w-full h-full object-cover transition-opacity duration-500" />
              </div>


            </div>
          </div>
        </section>

        {/* ── Pattern Essentials & Notes ─────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left Col: Materials & Notes */}
            <div className="lg:w-2/3 flex flex-col gap-8">

              <div className="bg-white rounded-2xl border border-tertiary/8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-6 rounded-full bg-tertiary/10 flex items-center justify-center">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-tertiary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-tertiary/70">Materials & Sizing</span>
                </div>

                {/* Extra Meta Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 pb-8 border-b border-tertiary/5">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-textLight block mb-1">Terminology</span>
                    <span className="text-sm text-textMain font-medium">{pattern.terminology || "US Terms"}</span>
                  </div>
                   <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-textLight block mb-1">Finished Size</span>
                    <span className="text-sm text-textMain font-medium">{pattern.finishedSize || pattern.sizes}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pattern.materials.map((m, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0A6C74] mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.15em] text-textLight block mb-1">{m.label}</span>
                        <span className="text-sm text-textMain font-light leading-snug block pr-4">{m.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pattern Notes */}
              {(pattern.patternNotes && pattern.patternNotes.length > 0) && (
                <div className="bg-[#FAF8F6] rounded-2xl border border-tertiary/8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 md:p-10">
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0A6C74] block mb-6">Pattern Notes</span>
                  <ul className="space-y-4">
                    {pattern.patternNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <svg className="w-4 h-4 text-tertiary/30 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-textMain font-light leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Right Col: Stitch Key */}
            <div className="lg:w-1/3">
              <div className="bg-[#FAF8F6] rounded-2xl border border-tertiary/8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 md:p-10 sticky top-24">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-tertiary/70 block mb-8">Stitch Key</span>
                <div className="space-y-5">
                  {pattern.stitchKey.map((s, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-tertiary/5 pb-4 last:border-0 last:pb-0">
                      <span className="text-[12px] font-black text-tertiary tracking-wider">{s.abbr}</span>
                      <span className="text-xs text-[#5C4A52] font-light text-right">{s.desc}</span>
                    </div>
                  ))}
                </div>
                <a href="#" className="mt-10 block text-[10px] font-black uppercase tracking-[0.2em] text-[#0A6C74] hover:underline">
                  View full abbreviation guide →
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ── The Method ────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-14">
            <h2 className="font-serif text-4xl italic text-tertiary">The Pattern</h2>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-textLight hover:text-tertiary transition-colors" onClick={() => window.print()}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Pattern
            </button>
          </div>

          <div className="space-y-12">
            {pattern.sections.map((sec, i) => (
              <div key={i} className="bg-white rounded-2xl border border-tertiary/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
                <div className="bg-[#FAF8F6] px-8 py-5 border-b border-tertiary/5 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border border-tertiary/10 flex items-center justify-center text-tertiary text-xs font-black shadow-sm">
                    {i + 1}
                  </div>
                  <h3 className="font-serif text-xl text-tertiary">{sec.title}</h3>
                </div>
                <div className="p-8 space-y-4">
                  {sec.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-textMain text-sm font-light leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pattern Gallery ──────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-12 overflow-hidden no-print">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl italic text-tertiary">Gallery</h2>
            <div className="flex gap-2">
              <button
                onClick={() => scrollGallery(-1)}
                className="w-10 h-10 rounded-full border border-tertiary/20 flex items-center justify-center text-tertiary hover:bg-tertiary hover:text-white transition-all shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => scrollGallery(1)}
                className="w-10 h-10 rounded-full border border-tertiary/20 flex items-center justify-center text-tertiary hover:bg-tertiary hover:text-white transition-all shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div
            ref={galleryRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <div key={idx} className="snap-center flex-shrink-0 w-[85vw] md:w-[500px] lg:w-[600px] h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative group">
                <img
                  src={pattern.bannerImage}
                  alt={`${pattern.title} Gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white font-serif italic text-2xl tracking-wide">Detail {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Designer Note ──────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-12 no-print">
          <div className="max-w-3xl mx-auto bg-[#FAF8F6] p-10 rounded-3xl border border-tertiary/10 text-center">
            <h3 className="font-serif text-2xl italic text-tertiary mb-4">A Note from the Designer</h3>
            <p className="text-textMain text-sm font-light leading-relaxed mb-6">
              "Designing this piece was a journey of patience and discovering the right rhythm. The stitches are intended to be meditative, growing row by row into an heirloom you can cherish for years. I recommend choosing a yarn that brings you joy, as you'll be spending many quiet hours with it."
            </p>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A6C74]">
              — {pattern.author || "Marya Shaikh"}
            </span>
          </div>
        </section>

        {/* Instagram Section */}
        <div className="max-w-7xl mx-auto px-6 py-20 border-t border-tertiary/10 no-print">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-tertiary block mb-3">Community Feed</span>
            <h2 className="font-serif text-4xl italic text-tertiary">Our Stitched Together Gallery</h2>
            <p className="text-textLight text-sm italic font-light mt-2">See how our community is making the {pattern.title}.</p>
          </div>
          
          <InstagramPost 
            image="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg"
            caption={`Just finished my first ${pattern.title}! The instructions were so clear and the result is absolutely dreamy. 🧶 #withloveandyarn #crochetpatterns`}
            likes="521"
          />
        </div>

        {/* ── Back to patterns ─────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-16 flex justify-center no-print">
          <Link to="/patterns" className="px-10 py-4 bg-white border border-tertiary/20 text-tertiary text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-tertiary hover:text-white transition-colors duration-300 shadow-sm hover:shadow-lg">
            ← Back to Patterns
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}
