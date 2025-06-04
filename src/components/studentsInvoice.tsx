import React from 'react'
import { Row, Column, Feedback, Text, IconButton, } from '@/once-ui/components'

const StudyProgressData =[
    {id:20, name:'Total invoices', value: '120', percentage:'4', icon:'invoice', variant:'success'},
    {id:3, name:'Total TZS Invoice', value: '56', percentage:'3', icon:'money', variant:'success'},
    {id:4, name:'Total USD Invoice', value: '3', percentage:'16', icon:'check', variant:'success'},
    {id:9, name:'Total Payments', value: '154', percentage:'1.5', icon:'money', variant:'success'},
]

export default function StudyProgress() {
  return (
    <>
      <div className='px-5 mt-5 grid grid-cols-2 gap-4'>
        {StudyProgressData.map((StudyProgressData)=>(
            <div key={StudyProgressData.id}>
                <Feedback
                  icon={false}
                  variant={ StudyProgressData.variant as 'success' | 'info' | 'danger' | 'warning' | undefined}
                >
                  <Column>
                    <Row className='justify-between'>
                        <Text>{StudyProgressData.name}</Text>
                        <IconButton icon={StudyProgressData.icon} variant='secondary' />
                    </Row>
                    <Row className='text-3xl font-bold'>
                        <Text>{StudyProgressData.value}</Text>
                    </Row>
                    <Row>
                        <Text>{StudyProgressData.percentage}% increase</Text>
                    </Row>
                  </Column>
                </Feedback>
            </div>
        ))}
      </div>

      
    </>
  )
}
