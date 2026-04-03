import { supabase } from './supabase'

export const STRIPE_PRICES = {
  BASIC: 'price_1TI5h0FXNjbRSk51SEOSFAMU',
  FEATURED: 'price_1TI5h1FXNjbRSk51prMfzRjx',
  URGENT: 'price_1TI5h2FXNjbRSk513C9QqNji',
}

export const createCheckoutSession = async (priceId) => {
  const { data, error } = await supabase.functions.invoke('create-checkout-session', {
    body: { priceId },
  })
  if (error) throw new Error('Failed to create checkout session: ' + error.message)
  return data
}
