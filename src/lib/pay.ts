'use server'

import { v4 as uuidv4 } from 'uuid';


export async function makePayment(formData: FormData) {
  const phone = formData.get('phoneNo')
  const amount = formData.get('amount')
  const uniqueCode = uuidv4().replace(/[^a-zA-Z0-9]/g, '');
  const tokendata = await fetch('https://api.clickpesa.com/third-parties/generate-token', {
    method: 'POST',
    headers: { 'client-id': 'IDGCQDXcVwLBM1FNXfenBvzGtK3SH2Ug', 'api-key': 'SKuLiSkCKkVroUA2tXhZgzkb8g7QXgdACp5Y5sh0ca' }
  }
  )

  const tokenResponse = await tokendata.json()
  const tokens = await tokenResponse.token

  const response = await fetch('https://api.clickpesa.com/third-parties/payments/initiate-ussd-push-request', {
    method: 'POST',
    headers: { Authorization: `${tokens}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: amount,
      currency: "TZS",
      orderReference: uniqueCode, // You may want to generate this dynamically
      phoneNumber: phone,
      checksum: "abc" // You may want to generate this properly
    })
  })
  return (
    console.log(response)
  )

  // Update data
  // Revalidate cache
}

