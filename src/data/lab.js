export const labExperiments = [
  {
    id: 'lab-1',
    category: 'Information Design',
    title: 'Binary Counting Book',
    description: 'An experimental print project designed to make fundamental computer science accessible to kids through visual storytelling and layout design.',
    image: 'lab/preview_binary_counting.png',
    link: '/assets/lab/BinaryCountingBook.pdf',
    tags: ['Print Design', 'Technical Communication', 'Typography']
  },
  {
    id: 'lab-2',
    category: 'Multimedia / Audio Engineering',
    title: 'Uncanny Coffee Hour',
    description: 'A paranormal folklore podcast co-hosted with Dr Kitsune and an AI-generated Puca named Saoirse. Exploring cryptids, yōkai, and Irish folklore through audio production, scriptwriting, and AI voice synthesis.',
    image: 'lab/preview_uch.png',
    link: 'https://uncannycoffeehour.buzzsprout.com', 
    tags: ['Audio Production', 'AI Integration', 'Content Strategy']
  },
  {
    id: 'lab-3',
    category: 'Illustration / Lore',
    title: 'Coastal Barque Schematic',
    description: 'Vintage-style technical illustration exploring nautical themes and traditional schematic aesthetics.',
    // I recommend renaming 'image_e4a5bb.jpg' to something semantic for SEO
    // Place this in: public/assets/images/lab/coastal-barque.jpg
    image: 'lab/coastal-barque.jpg', 
    link: null, // No button will render, which is perfect for pure art
    tags: ['Illustration', 'Vector Art', 'Visual Design']
  },
  {
    id: 'lab-4',
    category: 'Micro-Interaction / UX',
    title: 'End-User Sentiment Prototype',
    description: 'A high-fidelity mobile prototype exploring aggressive user-retention strategies and canine-based emotional conversion funnels. Click to test the primary CTA.',
    image: 'lab/preview_likebob.webp',
    // Update this email address! The subject line will pre-fill automatically.
    link: 'mailto:robert@example.com?subject=Sending%20Love!', 
    tags: ['UX Psychology', 'Mobile Design', 'Canine Testing']
  }
];