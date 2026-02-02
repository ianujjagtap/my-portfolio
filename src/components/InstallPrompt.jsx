import { useState, useEffect } from "react";
import { FlashIcon } from "./svgs/flash";

export const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    // We've used the prompt, clear it
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] md:left-auto md:right-8 md:w-96">
      <div className="flex items-center justify-between rounded-lg bg-slate-900/90 p-4 shadow-xl backdrop-blur-md border border-slate-700">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
             <FlashIcon width="24px" height="24px" className="text-teal-400" />
          </div>
          <div className="text-sm">
            <h3 className="font-semibold text-white">Install App</h3>
            <p className="text-slate-400">Add to home screen</p>
          </div>
        </div>
        <div className="flex gap-2">
            <button
                onClick={() => setIsVisible(false)}
                className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
                Later
            </button>
            <button
                onClick={handleInstallClick}
                className="rounded-md bg-teal-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-teal-400 transition-colors"
            >
                Install
            </button>
        </div>
      </div>
    </div>
  );
};
