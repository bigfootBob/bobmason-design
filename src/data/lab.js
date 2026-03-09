import { getCloudinaryUrl } from './constants';
export const labExperiments = [
  // WEB Stuff first
  // -----------------------------
  {
    id: 'web-1',
    category: 'Enterprise UX / Product Design',
    title: 'Norton Support Interfaces',
    description: 'A collection of UX explorations and interface designs for the Gen/Norton Support ecosystem.',
    image: 'lab/preview_web_norton.png',
    link: null,
    modal: true,
    tags: ['Customer Experience (CX)', 'Product Strategy', 'Support Flows', 'Mobile Design', 'Web Development'],
    gallery: [
      '/assets/lab/web/nortonsupp/home.png',
      '/assets/lab/web/nortonsupp/newsp.jpg',
      '/assets/lab/web/nortonsupp/nortonsupport.jpg',
      '/assets/lab/web/nortonsupp/nv-qr.jpg',
      '/assets/lab/web/nortonsupp/port1.png'
    ]
  },
  {
    id: 'web-2',
    category: 'Web Development / UX',
    title: 'Identity Protection Service Prototype',
    description: 'A high-fidelity dark-mode dashboard prototype for a digital security platform. Explores complex data visualization, distilling threat intelligence and privacy metrics into scannable, high-contrast donut charts and status indicators.',
    image: 'lab/preview_websecurity.png',
    link: '/assets/lab/web/appdesign.png', 
    tags: ['Data Visualization', 'Dashboard UI', 'UX Psychology', 'Cybersecurity UX'],
    modal: true
  },
  {
    id: 'web-3',
    category: 'Enterprise UX / Architecture',
    title: 'Support & Remediation Flows',
    description: 'A comprehensive suite of enterprise UX wireframes focusing on customer support and threat remediation. Includes user flows for dark web breach alerts, faceted knowledge base search, and automated diagnostic tools designed to reduce friction and empower user self-service.',
    image: 'lab/preview_prototypes.png',
    link: null, 
    modal: true,
    tags: ['Wireframing', 'Self-Service UX', 'Information Architecture', 'Support Flows'],
    gallery: [
      '/assets/lab/prototypes/dwm.png',
      '/assets/lab/prototypes/autofix.png',
      '/assets/lab/prototypes/kbview.png'
    ]
  },
  {
    id: 'web-4',
    category: 'Micro-Interaction / UX',
    title: 'End-User Sentiment Prototype',
    description: 'A high-fidelity mobile prototype exploring aggressive user-retention strategies and canine-based emotional conversion funnels. Click to test the primary CTA.',
    image: 'lab/preview_likebob.png',
    customAction: 'slideUpPhone',
    slideImage: getCloudinaryUrl('likebob_d4ipgo'),
    tags: ['UX Psychology', 'Mobile Design', 'Gamification'],
    modal: false
  },
  // Art
  // -----------------------------
  {
    id: 'art-1',
    category: 'Illustration / Art',
    title: 'Jacques',
    description: 'Watercolor painting of one of my heros, Jacques Cousteau. I have enjoyed working with watercolors much more over the past few years!',
    image: 'lab/preview_jc.png', 
    link: getCloudinaryUrl('JC_trigvs'),
    tags: ['Illustration', 'Fine Art', 'Watercolor'],
    modal: true
  },
  {
    id: 'art-2',
    category: 'Illustration / Art',
    title: 'Experiment with coffee',
    description: 'Watercolor painting using coffee grounds. I saw the consistency after running an espresso machine and thought of an experiment in re-use.',
    image: 'lab/preview_coffee.png', 
    link: '/assets/lab/art/coffee.jpg',
    tags: ['Art Experiment', 'Mixed Media', 'Organic Mediums'],
    modal: true
  },
  {
    id: 'art-3',
    category: 'Illustration / Art',
    title: 'Daniel at the beach',
    description: 'An acrylic study in minimalism and negative space. Inspired by a family day at the coast, this piece uses stark, high-contrast shadows to ground the subject while stripping away background noise to capture the brilliant, washed-out light of a sunny beach.',
    image: 'lab/preview_daniel.png', 
    link: '/assets/lab/art/daniel.jpg',
    tags: ['Fine Art', 'Watercolor'],
    modal: true
  },
  // Print Design
  // -----------------------------
  {
    id: 'dtp-1',
    category: 'Information Design',
    title: 'Print Advertisement',
    description: 'A high-impact promotional ad designed for the Uncanny Coffee Hour podcast in Weird Fiction Quarterly. Blends crisp print typography with brand-specific visual storytelling to capture the show\'s analog, paranormal aesthetic.',
    image: 'lab/preview_uchflyer.png',
    // link: '/assets/lab/desktoppublishing/print_advert.jpg',
    link: 'https://res.cloudinary.com/BobMasonDesign/image/upload/f_auto,q_auto/portfolio/lab/dtp/print_advert.jpg',
    tags: ['Print Design', 'Technical Communication', 'Typography'],
    modal: true
  },
  {
    id: 'dtp-2',
    category: 'Information Design',
    title: 'Business Card Design',
    description: 'Tactile brand identity for the Uncanny Coffee Hour podcast. A study in minimalist print design, ensuring essential contact architecture remains highly legible while maintaining the show\'s mysterious, cryptid-hunter vibe.',
    image: 'lab/preview_uch_businesscard.png',
    link: '/assets/lab/desktoppublishing/uchbusinesscard.jpg',
    tags: ['Print Design', 'Technical Communication', 'Typography'],
    modal: true
  },
  {
    id: 'dtp-3',
    category: 'Information Design',
    title: 'Binary Counting Book',
    description: 'An experimental print project designed to make fundamental computer science accessible to kids through visual storytelling and layout design.',
    image: 'lab/preview_binary_counting.png',
    link: '/assets/lab/desktoppublishing/BinaryCountingBook.pdf',
    tags: ['EdTech', 'Information Architecture', 'Print Design'],
    modal: false
  },
  {
    id: 'dtp-4',
    category: 'Volunteer / Print Design',
    title: 'Adaptive Shoot Flyer',
    description: 'Volunteer print design and layout for a community adaptive sports event. Focuses on clear, accessible information hierarchy and engaging visual composition to drive participation and awareness.',
    image: 'lab/preview_adaptshoot.png',
    link: '/assets/lab/desktoppublishing/POWLL_adaptive_shoot.jpg',
    tags: ['Desktop Publishing', 'Print Design', 'Volunteer Work'],
    modal: true
  },
  {
    id: 'dtp-5',
    category: 'Print Design',
    title: 'Mouse Pad Design',
    description: 'Corporate brand identity translated into tactile desktop merchandise.',
    image: 'lab/preview_mousepad.png',
    link: '/assets/lab/desktoppublishing/2004-mousepad.jpg',
    tags: ['Brand Identity', 'Print Design'],
    modal: true
  },
  // other
  // -----------------------------
  {
    id: 'other-1',
    category: 'Multimedia / Audio Engineering',
    title: 'Uncanny Coffee Hour',
    description: 'A paranormal folklore podcast co-hosted with Dr Kitsune and an AI-generated Puca named Saoirse. Exploring cryptids, yōkai, and Irish folklore through audio production, scriptwriting, and AI voice synthesis.',
    image: 'lab/preview_uch.png',
    link: 'https://www.uncannycoffeepodcast.com/episodes', 
    tags: ['Audio Production', 'Voice AI', 'Creative Direction', 'Content Strategy'],
    modal: false
  },
  {
    id: 'other-2',
    category: 'Generative AI / Multimedia',
    title: 'AI Prompt Architecture: The Redcap', 
    description: 'An experimental video prototype utilizing ElevenLabs to visualize a Redcap cryptid. Demonstrates the practical application of advanced prompt engineering and negative prompting to achieve specific, brand-aligned generative multimedia.',
    image: 'lab/preview_ai_redcap.png',
    link: '/assets/lab/other/redcap.mp4', 
    tags: ['Prompt Engineering', 'Generative AI', 'Video Production', 'Content Strategy'],
    modal: false
  },
];