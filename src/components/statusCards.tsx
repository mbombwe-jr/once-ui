import React from 'react'
import { Row, Card, Column, Feedback, Grid, Text, Flex, IconButton, TiltFx } from '@/once-ui/components'
import CountUp from 'react-countup';

const LearningStatisticsData =[
    {id:20, name:'Payments', value: '120', percentage:'4', icon:'check', variant:'danger'},
    {id:3, name:'Invoices', value: '56', percentage:'3', icon:'search', variant:'danger'},
    {id:4, name:'Payouts', value: '3', percentage:'16', icon:'check', variant:'danger'},
    {id:9, name:'Withdraws', value: '154', percentage:'1.5', icon:'check', variant:'danger'},
]

export default function LearningStatistics() {
  return (
    <>
      <Grid className='grid grid-cols-2 gap-4'>
        {LearningStatisticsData.map((LearningStatisticsData)=>(
            <div key={LearningStatisticsData.id}>
                <TiltFx>
                <Feedback
                  icon={false}
                  variant='info'
                >
                  <Column>
                    <Row className='justify-between'>
                        <Text>{LearningStatisticsData.name}</Text>
                        <IconButton icon={LearningStatisticsData.icon} variant='secondary' />
                    </Row>
                    <Row className='text-3xl font-bold'>
                        <Text><CountUp start={0} end={Number(LearningStatisticsData.value)} duration={3} /></Text>
                    </Row>
                    <Row>
                        <Text>{LearningStatisticsData.percentage}% increase</Text>
                    </Row>
                  </Column>
                </Feedback>
                </TiltFx>
            </div>
        ))}
      </Grid>

      
    </>
  )
}
