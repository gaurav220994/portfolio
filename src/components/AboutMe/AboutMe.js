import React from 'react';
import { Box, Image, Text, Anchor, Heading, Paragraph } from 'grommet';

const AboutMe = () => {
  return (
    <Box direction='row' pad='small' wrap={true} margin={{ top: 'large' }}>
      <Box align='center' flex={{ grow: 1 }} style={{minWidth:'40%'}}>
        <Image src='me.png' width={'40%'} />
      </Box>
      <Box flex={{ grow: 1 }} pad='large'>
        <Heading size={'xlarge'} margin='none'>
          Hi Forks,
        </Heading>
        <Paragraph style={{ maxWidth: '650px' }}>
          I'm{' '}
          <Text color='#ff0065' weight={'bold'} size='xlarge'>
            Gaurav Agarwal
          </Text>{' '}
          - Technical Lead, having more than 5 years of experience in IT
          industry, currently engaged with{' '}
          <Anchor href='https://successive.tech' target='_blank'>
            Successive Technology
          </Anchor>{' '}
          aka{' '}
          <Anchor href='https://nodexperts.com' target='_blank'>
            NodeXperts
          </Anchor>
          .<br />
          I'm a fullstack MERN developer along with leadership and mentoring
          quality, working on a broader set of technology including front-end &
          back-end.
          <br />
          I enjoy accepting challenges, b'coz challenges are what makes life
          interesting. Overcoming them is what makes life meaningful.
          <br />
          I also love the logic and structure of coding and always strive to
          write elegant, efficient code and fortune to work on cutting edge
          technology.
          <br />
          Music, travelling, trekking, clubbing and clicking photos is what I'm
          enthusiastic.
        </Paragraph>
        <Box
          background={{ light: 'light-1', dark: 'dark-1' }}
          height='100px'
          justify='center'
          align='center'
          alignContent='around'
          round='medium'
        >
          <Paragraph style={{ padding:'10px', maxWidth: '800px' }}>
            <Anchor href='/Gaurav-Agarwal-Resume.pdf' target='_blank'>
              Download my resume
            </Anchor>{' '}
            for more details. I'm unavailable at the moment, but let me know if
            you need any help!
          {' '}</Paragraph>
        </Box>
      </Box>
    </Box>
  );
};

export { AboutMe };
