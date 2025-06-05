import React from 'react'
import { Row, Column, Feedback, Text, IconButton, Media, } from '@/once-ui/components'

const PaymentChoicesData = [
  { id: 20, name: 'Mixx by yas', url: 'https://clickpesa.com/wp-content/uploads/2025/03/mixx-by-yass-tigo-pesa-400x300.png' },
  { id: 3, name: 'Airtel Money', url: 'https://clickpesa.com/wp-content/uploads/2024/08/airtel-money-logo.png' },
  { id: 4, name: 'Mpessa', url: 'https://clickpesa.com/wp-content/uploads/2024/08/m-pesa-logo-300x200.png' },
  { id: 9, name: 'Halotel money', url: 'https://clickpesa.com/wp-content/uploads/2024/08/halopesa-logo.png' },
  //  { id: 5, name: 'card', url: 'https://clickpesa.com/wp-content/uploads/2024/08/halopesa-logo.png' },
]

export default function PaymentChoices() {
  return (
    <>
      <div className=' mt-5 grid grid-cols-2 gap-4'>
        {PaymentChoicesData.map((PaymentChoicesData) => (
          <div key={PaymentChoicesData.id}>
            <Feedback
              icon={false}
              variant="success"
            >
              <Column>
                <Media
                  src={PaymentChoicesData.url}
                  unoptimized
                  height={7}
                  radius="l-4"
                />
              </Column>
            </Feedback>
          </div>
        ))}
      </div>


    </>
  )
}
