import { HttpAgent } from '@dfinity/agent';

interface HttpAgentOptions {
  identity?: any;
  host?: string;
  [key: string]: any; // Allow for additional options
}

export function createHttpAgent(options: HttpAgentOptions): HttpAgent {
  // Check if createSync exists on HttpAgent
  if ('createSync' in HttpAgent && typeof (HttpAgent as any).createSync === 'function') {
    return (HttpAgent as any).createSync(options);
  }

  // Fall back to the standard constructor
  return new HttpAgent(options);
}

export function fetchRootKey(agent: HttpAgent): Promise<void | ArrayBuffer> {
  return agent.fetchRootKey().catch(err => {
    console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
    console.error(err);
  });
}

export async function createAndSetupHttpAgent(options: HttpAgentOptions): Promise<HttpAgent> {
  const agent = createHttpAgent(options);

  // Fetch root key for local development
  if (options.host && (options.host.includes('localhost') || options.host.includes('127.0.0.1'))) {
    await fetchRootKey(agent);
  }

  return agent;
}