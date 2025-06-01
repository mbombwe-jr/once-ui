"use client";
import React from 'react'
import {Card, Row, Column, Line, Text, Media} from "@/once-ui/components";


const regNumber = "2024-04-06950"


function StudentsId(){
  const StudentImage = "https://aris3.udsm.ac.tz/uploaded_files/student/photos/"+regNumber+".jpg";
  return (
    <>
      <Card fillWidth maxWidth={30} radius="l-4" direction="column" border="neutral-alpha-medium">
        <Row  className="m-2">
            <Media
             src="/images/udsmLogo.png"
             unoptimized={true}
             width={4}
             height={4}
             alt="udsm Logo"
             className='mx-4'
            />
            <Row fillWidth center>
            <Text className="font-bold m-2  text-center">
                <span className="text-2xl mx-3 xl:mx-0  xl:text-3xl">University of Dar es salaam</span><br />
                <span className="text-md">Student Identity Card</span>
            </Text>
            </Row>
        </Row>
        <Line />
        <Row className=" mr-2" >
            <Column fillWidth>
            <Column  border="neutral-alpha-medium" className="w-full rounded-md mr-1 pl-3">
             <p className="text-center text-2xl font-bold">CoICT</p>
             <div className="text-md leading-tight">
                <Text>
                    <span className="text-sm font-bold leading-tight">NAME</span><br />
                    <span className="text-blue-500 text-sm font-bold leading-tight">MMARY, Christian Elifuraha</span><br/>
                </Text>
                <p className="pt-2">
                    <span className="text-sm font-bold">REG. NO</span><br />
                    <span className="text-blue-500 text-sm font-bold">2024-04-06950</span><br />
                </p>
                <p className="pt-2">
                    <span className="text-sm font-bold">PROGRAMME</span><br />
                    <span className="text-blue-500 text-sm font-bold">B.Sc in Computer Science</span><br />
                </p>
                <p className="pt-2">
                    <span className="text-sm font-bold">EXP. DATE: <span className="text-red-500">30/11/2025</span></span><br />
                </p>
             </div>
            </Column>

            <div>
            <Media
              className="rounded-md mr-5"
              src="/images/barcode.png"
              unoptimized={true}
              height={2}
              aspectRatio="12/1"
              alt="barcode"
            />
            </div>
            </Column>
            
            
            <Column className='justify-between'>
            <div >
             <Media
              className="rounded-md mr-2"
              src={StudentImage}
              unoptimized={true}
              aspectRatio="9/12"
              width={8.5}
              alt="nuchy's photo" 
             />
            </div>
            <div  className="font-bold text-md flex justify-center">
                WHOLE YEAR
            </div>
            </Column>
        </Row>
      </Card>
    </>
  )
}

export default StudentsId