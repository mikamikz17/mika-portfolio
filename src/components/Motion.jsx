// Thin wrappers around the React Bits components so every page gets the same
// tuning and a calm fallback when the visitor prefers reduced motion.
import { useEffect, useRef, useState } from "react";
import AnimatedContent from "./reactbits/AnimatedContent.jsx";
import BounceCards from "./reactbits/BounceCards.jsx";
import CircularText from "./reactbits/CircularText.jsx";
import RotatingText from "./reactbits/RotatingText.jsx";
import SplitText from "./reactbits/SplitText.jsx";
import TiltedCard from "./reactbits/TiltedCard.jsx";
import { useCanHover, useReducedMotion } from "../hooks/useReducedMotion.js";

/* Scroll-in reveal (React Bits: Animated Content) */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div", ...rest }) {
  const isReduced = useReducedMotion();

  if (isReduced) {
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const animated = (
    <AnimatedContent
      className={Tag === "div" ? className : ""}
      distance={36}
      duration={0.9}
      ease="power3.out"
      threshold={0.12}
      delay={delay}
      {...(Tag === "div" ? rest : {})}
    >
      {children}
    </AnimatedContent>
  );

  // AnimatedContent always renders a <div>; keep list semantics by wrapping it.
  if (Tag === "div") return animated;
  return (
    <Tag className={className} {...rest}>
      {animated}
    </Tag>
  );
}

/* Letter-by-letter title (React Bits: Split Text) */
export function SplitTitle({ text, tag = "h1", className = "", id }) {
  const isReduced = useReducedMotion();
  const Tag = tag;

  if (isReduced) {
    return (
      <Tag id={id} className={`split-parent ${className}`}>
        {text}
      </Tag>
    );
  }

  return (
    <span id={id} className="split-anchor">
      <SplitText
        text={text}
        tag={tag}
        className={className}
        delay={70}
        duration={0.9}
        ease="back.out(2.2)"
        splitType="chars"
        from={{ opacity: 0, y: 48, rotate: -10 }}
        to={{ opacity: 1, y: 0, rotate: 0 }}
        threshold={0.05}
        rootMargin="0px"
        textAlign="left"
      />
    </span>
  );
}

/* Cycling words (React Bits: Rotating Text) */
export function Rotator({ words }) {
  const isReduced = useReducedMotion();

  if (isReduced) return <span className="rotator rotator--static">{words[0]}</span>;

  return (
    <RotatingText
      texts={words}
      mainClassName="rotator"
      splitLevelClassName="rotator-word"
      staggerFrom="first"
      staggerDuration={0.018}
      rotationInterval={2600}
      initial={{ y: "110%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-110%", opacity: 0 }}
      transition={{ type: "spring", damping: 26, stiffness: 320 }}
    />
  );
}

/* Fanned project previews (React Bits: Bounce Cards), sized to their container */
export function HeroCards({ images }) {
  const wrapRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="hero-cards">
      {width > 0 && (
        <BounceCards
          images={images}
          containerWidth={width}
          containerHeight={Math.round(width * 0.78)}
          cardSize={Math.round(width * 0.5)}
          spread={Math.round(width * 0.25)}
          rotation={9}
          arc={Math.round(width * 0.04)}
          animationDelay={0.35}
          animationStagger={0.09}
          bounciness={0.55}
          pushDistance={Math.round(width * 0.16)}
          hoverScale={1.05}
          borderWidth={6}
          borderColor="#ffffff"
          radius={22}
        />
      )}
    </div>
  );
}

/* Spinning badge (React Bits: Circular Text) */
export function Badge({ text, label, href, className = "" }) {
  const isReduced = useReducedMotion();

  return (
    <a className={`circle-badge ${className}`} href={href} aria-label={label}>
      <CircularText text={text} spinDuration={isReduced ? 100000 : 22} onHover="speedUp" className="badge-ring" />
      <span className="badge-core" aria-hidden="true">
        hi!
      </span>
    </a>
  );
}

/* Screenshot with 3D tilt (React Bits: Tilted Card) */
export function Shot({ src, alt, w, h, pos, ratio, caption = "view project", className = "" }) {
  const isReduced = useReducedMotion();
  const canHover = useCanHover();
  const style = { aspectRatio: ratio ?? `${w} / ${h}`, "--pos": pos };

  if (isReduced || !canHover) {
    return (
      <div className={`shot ${className}`} style={style}>
        <img className="shot-static" src={src} alt={alt} width={w} height={h} loading="lazy" />
      </div>
    );
  }

  return (
    <div className={`shot ${className}`} style={style}>
      <TiltedCard
        imageSrc={src}
        altText={alt}
        captionText={caption}
        containerHeight="100%"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={7}
        scaleOnHover={1.03}
        showMobileWarning={false}
        showTooltip
      />
    </div>
  );
}
