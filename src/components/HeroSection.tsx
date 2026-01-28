// import { ArrowRight, Dna, FlaskConical, Microscope } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import { useRef } from "react";

// const carouselItems = [
//   {
//     icon: Dna,
//     img:"https://placehold.co/900x600/cccccc/969696.png?font=lato",
//     title: "Genomics & Transcriptomics",
//     description: "Comprehensive DNA and RNA sequencing with advanced bioinformatics analysis",
//   },
//   {
//     icon: FlaskConical,
//     img:"https://placehold.co/900x600/cccccc/969696.png?font=lato",
//     title: "Proteomics & Metabolomics",
//     description: "Mass spectrometry-based protein and metabolite profiling solutions",
//   },
//   {
//     icon: Microscope,
//     img:"https://placehold.co/900x600/cccccc/969696.png?font=lato",
//     title: "Single-Cell Analysis",
//     description: "High-resolution cellular profiling for complex biological systems",
//   },
// ];

// export function HeroSection() {
//   const autoplayPlugin = useRef(
//     Autoplay({ delay: 3000, stopOnInteraction: false })
//   );

//   return (
//     <section
//       id="home"
//       className="min-h-screen gradient-hero overflow-hidden"
//     >
//       {/* Animated background elements */}
//       {/* <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-secondary/100 blur-3xl animate-float" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
        
//         DNA Helix Pattern
//         <svg className="absolute inset-0 w-full h-full opacity-90" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
//           <defs>
//             <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="hsl(180, 60%, 50%)" />
//               <stop offset="100%" stopColor="hsl(200, 80%, 40%)" />
//             </linearGradient>
//           </defs>
//           <g fill="none" stroke="url(#dnaGradient)" strokeWidth="1.5">
//             {[...Array(8)].map((_, i) => (
//               <path
//                 key={i}
//                 d={`M${-100 + i * 200},450 Q${50 + i * 200},350 ${100 + i * 200},450 T${300 + i * 200},450`}
//                 className="animate-pulse-slow"
//                 style={{ animationDelay: `${i * 0.5}s` }}
//               />
//             ))}
//           </g>
//         </svg>
//       </div> */}

//       <div className="relative z-10 min-h-screen py-8">
//         {/* Carousel - Full Width Row */}
//         {/* <div className="w-full px-4 mb-8 animate-fade-up" style={{ animationDelay: '0.05s' }}>
//           <Carousel
//             opts={{
//               align: "center",
//               loop: true,
//             }}
//             plugins={[
//               autoplayPlugin.current
//             ]}
//             className="w-full"
//           >
//             <CarouselContent>
//               {carouselItems.map((item, index) => (
//                 <CarouselItem key={index} className="basis-full">
//                   <div className="rounded-2xl mt-16 p-6 text-center  items-center justify-center">
//                     <item.icon className="w-12 h-12 mx-auto mb-3 text-secondary" />
//                     <img src={item.img} alt={item.title} className="rounded-2xl w-100% h-100% mb-3" />
//                     <h3 className="text-lg font-semibold text-primary-foreground mb-2">{item.title}</h3>
//                     <p className="text-sm text-primary-foreground/70">{item.description}</p>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>
//         </div> */}

//         {/* Main Content - Centered Row */}
//         <div className="container mt-28 mx-auto px-4 flex items-center justify-center">
//           <div className="max-w-4xl mx-auto text-center">
//             {/* Main Heading */}
//             <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
//               Transforming
//               <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground">
//                 Biological Research
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
//               Premier bioanalytical and bioinformatics service provider bridging complex biological systems 
//               with meaningful scientific insights through multiomics experiments and data analysis.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up mb-10" style={{ animationDelay: '0.3s' }}>
//               <Button
//                 size="lg"
//                 className="bg-card text-primary hover:bg-card/90 shadow-glow px-8 py-6 text-lg"
//               >
//                 Explore Services
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-primary-foreground/30
//                 text-primary hover:text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
//               >
//                 Contact Us
//               </Button>
//             </div>

//             {/* Feature Icons */}
//             <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
//               {[
//                 { icon: Dna, label: "Multi-Omics" },
//                 { icon: Microscope, label: "Bioanalysis" },
//                 { icon: FlaskConical, label: "Research" },
//               ].map(({ icon: Icon, label }) => (
//                 <div key={label} className="flex flex-col items-center gap-3">
//                   <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center">
//                     <Icon className="w-8 h-8 text-secondary" />
//                   </div>
//                   <span className="text-sm font-medium text-primary-foreground/80">{label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator - Bottom Row */}
//         {/* <div className="flex justify-center pb-8 animate-bounce">
//           <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
//             <div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// }

import { GraduationCap, BookOpen, FlaskConical } from "lucide-react";
import heroScientist from "@/assets/hero-scientist.jpg";
import { Button } from "./ui/button";

const features = [
  {
    icon: GraduationCap,
    title: "Hands-on Multi-Omics Workshops",
    description: "Practical, application-driven multi-omics workshops led by scientists with deep domain expertise and active research experience at the forefront of biologics R&D",
  },
  {
    icon: BookOpen,
    title: "Customized Training Programs",
    description: "Training designed to fit your specific level of expertise, technical background, and end goal—from foundational principles to advanced, applied workflows",
  },
  {
    icon: FlaskConical,
    title: "Experimental Design & Consultation",
    description: "Strategic consultation on experimental ensuring robust, biologics development—ensuring robust, interpretable, and decision-ready data",
  },
];

export function HeroSection() {
  return (
    <section id="home" className="relative pt-20 overflow-hidden bg-background">
      {/* Hero Content */}
      <div className="relative">
        {/* Gradient overlay background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent z-10" />
        
        {/* Background image */}
        <div className=" absolute inset-0">
          <img 
            src={heroScientist} 
            alt="Scientist analyzing data" 
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 min-h-[500px] items-center py-16">
            {/* Left Content */}
            <div className="text-primary-foreground">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Accelerating Biologics & Omics-Driven Research
              </h1>
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
                In Partnership with 3DCC x Biologics Goa
              </h3>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
                {/* Industry-ready training and experimental strategy to generate robust, interpretable, and decision ready biological data */}
                Insight Beyond Vision - Empowering students, scientists & industry professionals globally
              </p>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
                {/* Industry-ready training and experimental strategy to generate robust, interpretable, and decision ready biological data */}
                Hands-on training and cutting-edge biologics research through data-driven approaches and applied consultation
              </p>
              <a href="#trainings" className="flex items-center gap-3">
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="rounded-md px-8 bg-secondary hover:bg-transparent text-secondary-foreground  border-2 border-secondary hover:border-secondary">
                  Register For Upcoming Workshops
                </Button>
              </div>
              {/* <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  View Full Event Calendar
                </Button>
              </div> */}
              </a>
            </div>
            
            {/* Right side is the image (shown through background) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-2xl text-foreground">
            Advance your <span className="font-semibold text-primary">biologics pipeline</span> with{" "}
            <span className="font-semibold">hands-on training</span> and applied consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
