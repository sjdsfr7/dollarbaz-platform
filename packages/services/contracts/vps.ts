export interface VPSProvider {
  requestServer(params: { region: string; spec: string }): Promise<{
    ip: string;
    username: string;
    password: string;
    metadata?: Record<string, any>;
  }>;
}
