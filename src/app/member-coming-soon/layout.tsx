'use client';
import { useEffect } from 'react';

export default function MemberComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Hide Nav, Footer, and Loading animation on this page
    const nav = document.querySelector('[class*="fixed top-0"]');
    const footer = document.querySelector('footer');
    const loader = document.querySelector('[class*="DelayedLoader"]') || document.querySelector('div[style*="display"]')?.parentElement;
    
    if (nav) nav.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    // Hide loading animation by finding the Loading component
    const loadingElements = document.querySelectorAll('div');
    loadingElements.forEach(el => {
      if (el.innerHTML.includes('Loading') || el.className.includes('loading')) {
        el.style.display = 'none';
      }
    });
    
    return () => {
      if (nav) nav.style.display = 'block';
      if (footer) footer.style.display = 'block';
      loadingElements.forEach(el => {
        el.style.display = 'block';
      });
    };
  }, []);

  return <>{children}</>;
}
