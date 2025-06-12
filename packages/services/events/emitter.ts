import { EventEmitter } from 'events';
import { PlatformEvent, EventName } from './types';

const emitter = new EventEmitter();

export function emitEvent<E extends PlatformEvent>(event: E): void {
  emitter.emit(event.event, event);
}

export function onEvent<T extends EventName>(
  eventName: T,
  handler: (event: Extract<PlatformEvent, { event: T }>) => void,
): void {
  emitter.on(eventName, handler);
}

export function onceEvent<T extends EventName>(
  eventName: T,
  handler: (event: Extract<PlatformEvent, { event: T }>) => void,
): void {
  emitter.once(eventName, handler);
}

export function clearEventHandlers(eventName?: EventName): void {
  if (eventName) emitter.removeAllListeners(eventName);
  else emitter.removeAllListeners();
}
