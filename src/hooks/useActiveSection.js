// src/hooks/useActiveSection.js

import { useState, useEffect } from 'react';

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActive(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0.25, 0.5, 0.75, 1],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
