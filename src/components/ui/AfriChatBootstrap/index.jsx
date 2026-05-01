import { useEffect } from "react";
import { createMyAfriChat } from "my-africhat";
import { afriChatConfig } from "../../../../africhat.config.js";

export function AfriChatBootstrap() {
  useEffect(() => {
    // Initialize and mount the My-Africhat widget
    const widget = createMyAfriChat(afriChatConfig).mount();

    // Cleanup function to unmount the widget when the component is unmounted
    return () => {
      if (widget && typeof widget.destroy === 'function') {
        widget.destroy();
      }
    };
  }, []);

  return null;
}