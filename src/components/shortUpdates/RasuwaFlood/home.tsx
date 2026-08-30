"use client";

import { useEffect, useId, useState } from "react";
import styles from "./App.module.css";

const DONATE_LINK = "https://pmdrf.nchl.com.np/";
const ALERT_SEEN_KEY = "rasuwa-flood-alert-seen";

export function RasuwaFloodAlert() {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const isSectionNavigation = window.location.hash.length > 0;

    try {
      const hasSeenAlert = sessionStorage.getItem(ALERT_SEEN_KEY) === "true";
      sessionStorage.setItem(ALERT_SEEN_KEY, "true");

      if (!hasSeenAlert && !isSectionNavigation) setIsOpen(true);
    } catch {
      if (!isSectionNavigation) setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="presentation">
      <section
        className={styles.popup}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          aria-label="Close flood relief message"
          autoFocus
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className={styles.content}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Rasuwa flood relief</p>
            <h2 id={titleId} className={styles.title}>
              Donate for <span>Nepal</span> <span aria-hidden="true">❤️</span>
            </h2>

            <div className={styles.line} />

            <h3 className={styles.subtitle}>Stand with Nepal. Rebuild hope.</h3>

            <p id={descriptionId} className={styles.description}>
              Recent floods have caused immense loss and destruction across Nepal.
              Families need urgent help with shelter, food, and medical care.
            </p>

            <div className={styles.supportBox}>
              <span aria-hidden="true">❤️</span>
              <p>Your support can help provide relief to the people who need it most.</p>
            </div>

            <a
              href={DONATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.donateButton}
            >
              Donate now
              <span aria-hidden="true">↗</span>
            </a>

            <p className={styles.note}>
              You will be redirected to the Prime Minister Disaster Relief Fund to
              donate securely. <strong>Please navigate to the QR section to contribute.</strong>
            </p>

            <p className={styles.secure}>
              <span aria-hidden="true">🛡️</span> Official Nepal Government Fund
            </p>
          </div>

          <div className={styles.imagePanel} aria-hidden="true">
            <div className={styles.imageOverlay} />
            <div className={styles.imageCaption}>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RasuwaFloodAlert;
