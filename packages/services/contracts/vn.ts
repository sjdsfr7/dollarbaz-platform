export interface VNProvider {
  requestNumber(
    service: string,
  ): Promise<{ number: string; sessionId: string }>;
  getSMS(sessionId: string): Promise<{ code: string }>;
  releaseNumber(sessionId: string): Promise<void>;
}
