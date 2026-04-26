"use client";

import { useEffect } from "react";

type GA4EventTrackerProps = {
  /** GA4 event name (e.g. "kenji_eda_viewed", "compare_result_viewed"). */
  eventName: string;
  /** Optional event_category. Defaults to "engagement". */
  eventCategory?: string;
  /** Optional event_label for narrative context. */
  eventLabel?: string;
  /** Delay in milliseconds before firing. 0 = fire on mount, 30000 = fire after 30 seconds. */
  delayMs?: number;
};

/**
 * Server-component-friendly tracker that fires a single GA4 `gtag('event', ...)`
 * after the configured delay (default: on mount). Cleans up the timer if the
 * user navigates away before the delay elapses.
 */
export default function GA4EventTracker({
  eventName,
  eventCategory = "engagement",
  eventLabel,
  delayMs = 0,
}: GA4EventTrackerProps) {
  useEffect(() => {
    const send = () => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", eventName, {
          event_category: eventCategory,
          ...(eventLabel ? { event_label: eventLabel } : {}),
        });
      }
    };

    if (delayMs <= 0) {
      send();
      return undefined;
    }

    const timer = setTimeout(send, delayMs);
    return () => clearTimeout(timer);
  }, [eventName, eventCategory, eventLabel, delayMs]);

  return null;
}
