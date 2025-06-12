import { CreateCardRequestInput } from '../schemas/cards';

export async function createCardRequest(data: CreateCardRequestInput) {
  // 👇 Replace with real logic or DB call later
  console.log('Issuing card for:', data);

  return {
    status: 'pending',
    cardId: 'mock-card-id-123',
    issuedAt: new Date().toISOString(),
  };
}
