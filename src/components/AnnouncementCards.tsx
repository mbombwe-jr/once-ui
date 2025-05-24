"use client";
import React, { useState } from 'react'
import {Button, Line, Avatar, Dialog, Card, Column, Heading, Input, Icon, Media, Row, Tag, Text, TiltFx} from "@/once-ui/components";

interface AnnouncementType {
    id: string;
    type: string;
    title: string;
    description: string;
    fullDescription: string;
    date: string;
    image: string;
}

const AllAnnouncement = [
    {
        "id":"5",
        "type":"academic",
        "title":"New learning resources available",
        "description":"Access the latest study materials and video lectures in the library.",
        "fullDescription":"Don't miss our upcoming workshop on effective study techniques! Learn from experts about proven methods to improve your study habits and academic performance.",
        "date":"2/21/2024",
        "image":"https://aris3.udsm.ac.tz/uploaded_files/student/photos/2024-04-11458.jpg"
    },
    {
        "id":"8",
        "type":"sports",
        "title":"New music resources available",
        "description":"Access the latest study materials and video lectures in the library.",
        "fullDescription":"Don't miss our upcoming workshop on effective study techniques! Learn from experts about proven methods to improve your study habits and academic performance.",
        "date":"4/20/2024",
        "image":"https://aris3.udsm.ac.tz/uploaded_files/student/photos/2024-04-01478.jpg"
    },
    {
        "id":"6",
        "type":"social",
        "title":"New music resources available",
        "description":"Access the latest study materials and video lectures in the library.",
        "fullDescription":"Don't miss our upcoming workshop on effective study techniques! Learn from experts about proven methods to improve your study habits and academic performance.",
        "date":"8/20/2024",
        "image":"https://aris3.udsm.ac.tz/uploaded_files/student/photos/2024-04-11643.jpg"
    },
    {
        "id":"9",
        "type":"adventure",
        "title":"New music resources available",
        "description":"Access the latest study materials and video lectures in the library.",
        "fullDescription":"Don't miss our upcoming workshop on effective study techniques! Learn from experts about proven methods to improve your study habits and academic performance.",
        "date":"3/20/2024",
        "image":"https://aris3.udsm.ac.tz/uploaded_files/student/photos/2024-04-10407.jpg"
    },
    {
        "id":"10",
        "type":"school",
        "title":"New music resources available",
        "description":"Access the latest study materials and video lectures in the library.",
        "fullDescription":"Don't miss our upcoming workshop on effective study techniques! Learn from experts about proven methods to improve your study habits and academic performance.",
        "date":"9/20/2024",
        "image":"https://aris3.udsm.ac.tz/uploaded_files/student/photos/2024-04-07553.jpg"
    }
    
]

export default function AnnouncementCards(){

    const [contents, setcontents] = useState(3);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState<AnnouncementType | null>(null);
    const updateContents = () => {
        setcontents(contents+1)
    }

    const Announcement = [...AllAnnouncement]
     .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
     .slice(0, contents);

    const [isOpen, setIsOpen] = useState(false);

    const handleCardClick = (announcement: AnnouncementType) => {
        setSelectedAnnouncement(announcement);
        setIsOpen(true);
    };

  return (
    <>
      <Column   className='gap-5 position-relative items-center py-5 mb-2' radius="l-4" border="neutral-alpha-medium">
         {Announcement.map((Announcement) => (
            <Row className='px-3' key={Announcement.id}>
                <TiltFx onClick={() => handleCardClick(Announcement)}>
                    <Card radius="l-4" direction="column" border="neutral-alpha-medium">
                        <Row className='p-5'>
                            <Media
                             src={Announcement.image}
                             unoptimized
                             width={9}
                             height={7}
                             radius="l-4"
                             border="neutral-alpha-medium"
                            />
                            <Column  maxWidth={30} className='m-2 pl-5'>
                                <Row  className=' justify-between'>
                                    <Heading variant="heading-strong-s" as="h2">{Announcement.title}</Heading>
                                    <Tag variant="success" maxHeight={2} label={Announcement.type} />
                                </Row>
                                <Row className='pt-2 opacity-60'>
                                    <Text variant="label-default-s">{Announcement.description}</Text>
                                </Row>
                                <Column fillHeight className='flex-column justify-end opacity-70'>
                                    <Text>{Announcement.date}</Text>
                                </Column>
                            </Column>
                        </Row>
                    </Card>
                </TiltFx>
            </Row>
         ))}   

      {selectedAnnouncement && (
        <Dialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={selectedAnnouncement.title}
        >
          <Line />
          <Column fillWidth gap="16" marginTop="12">
            <Media
             src={selectedAnnouncement.image}
             alt={selectedAnnouncement.title}
             border="neutral-alpha-medium"
             height={20}
             fillWidth
             unoptimized
             radius="l-4"
            />
            <Row fillWidth fillHeight className='justify-between'>
                <Tag variant="success"  label={selectedAnnouncement.type} />
                <Text className='opacity-70'>{selectedAnnouncement.date}</Text>
            </Row>
            <Row>
                {selectedAnnouncement.fullDescription}
            </Row>
          </Column>
        </Dialog>
      )}

         <Row fillWidth center>
            <form action={updateContents}>
                <Button type='submit'>Continue</Button>
            </form>
         </Row>
      </Column>
    </>
  )
}
