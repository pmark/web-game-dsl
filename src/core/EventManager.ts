/**
 * EventManager Class
 * @class
 * @description Manages event listening and dispatching within the game. Allows components and systems to
 * register and receive events, facilitating communication across different parts of the game architecture.
 */
class EventManager {
  private listeners: { [key: string]: Array<(payload?: unknown) => void> };

  constructor() {
    this.listeners = {};
  }

  /**
   * Registers a listener for a specific event type.
   * @param {string} eventType - The type of event to listen for.
   * @param {(payload?: unknown) => void} callback - The callback function to be executed when the event is dispatched.
   */
  registerListener(
    eventType: string,
    callback: (payload?: unknown) => void
  ): void {
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = [];
    }
    this.listeners[eventType].push(callback);
    console.log(`Listener registered for ${eventType}`);
  }

  /**
   * Dispatches an event to all registered listeners for the event type.
   * @param {string} eventType - The type of event to dispatch.
   * @param {Object} [payload] - Optional payload to pass to the listener callbacks.
   */
  dispatchEvent(eventType: string, payload?: unknown): void {
    if (this.listeners[eventType]) {
      for (const listener of this.listeners[eventType]) {
        listener(payload);
      }
      console.log(`Event ${eventType} dispatched`);
    }
  }
}
