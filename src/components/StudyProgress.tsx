import React from 'react'
import { Row, Column, Feedback, Text, IconButton, } from '@/once-ui/components'
import CountUp from 'react-countup';

const StudyProgressData =[
    {id:20, name:'Payment Pages', value: '120', percentage:'4', icon:'check', variant:'success'},
    {id:3, name:'Bulk Payouts', value: '56', percentage:'3', icon:'search', variant:'success'},
    {id:4, name:'Payment Requests', value: '3', percentage:'16', icon:'help', variant:'success'},
    {id:9, name:'Deposits', value: '154', percentage:'1.5', icon:'check', variant:'success'},
]

export default function StudyProgress() {
  return (
    <>
      <div className='grid grid-cols-2 gap-4'>
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
                        <Text><CountUp start={0} end={Number(StudyProgressData.value)} duration={3} /></Text>
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
