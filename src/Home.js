import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import StarIcon from '@mui/icons-material/StarBorder';
import SendIcon from '@mui/icons-material/Send';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import brain from './img/brain.png'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://sitebrain-technologies.web.app/">
        EclipseAI - SiteBrain-Technologies
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '- Available when demand is low',
      '- Standard response speed',
      '- Regular model updates',
    ],
    buttonText: 'Start Chat',
    href: '/app',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '- Available even when demand is high',
      '- Faster response speed',
      '- Priority access to new features',
    ],
    buttonText: 'Get started',
    href: '',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '- Priority even when demand is high',
      '- Priority access to new features',
      '- Natural language option',
    ],
    buttonText: 'Get Started',
    href: '',
    buttonVariant: 'outlined',
  },
];

function PricingContent() {
  return (
      <div className="web-body">
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' }, html: {height: "100%", width: "100%"} }} />
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        className="web-AppBar"
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
            <img src={brain} height="30px" width="30px" style={{marginRight: 10}} />
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            EclipseAI
          </Typography>
          
          <Button href="/app" className='web-startChat' variant="contained" endIcon={<SendIcon />} sx={{ my: 1, mx: 1.5 }}>
            Start Chat
          </Button>
          
        </Toolbar>
      </AppBar>
      <Container className="web-homeComponent" disableGutters maxWidth="md"sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="#fff"
          gutterBottom
          className="web-homeTitle"
        >
          <img src={brain} height="70px" width="70px" style={{marginRight: 20, top: 15, position: 'relative'}} />
          EclipseAI
          <br />
          <Button href="/app" className='web-startChat' variant="contained" endIcon={<SendIcon />} sx={{ my: 1, mx: 1.5 }}>
            Start Chat
          </Button>
          <Button href="/#pricing" variant="contained" startIcon={<AttachMoneyIcon />} sx={{ my: 1, mx: 1.5 }}>
            Pricing ➟
          </Button>
          <br />
          <p style={{fontSize:15, color: "#D3D3D3"}}>EclipseAI is a cutting-edge product developed by SiteBrain-Technologies, a leading software company specializing in AI-powered solutions. EclipseAI is designed to help businesses leverage the power of artificial intelligence and machine learning to enhance their decision-making processes and optimize their operations.</p>
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
         
        </Typography>
      </Container>
      {/* Hero unit */}
      <Container id="pricing" className="web-pricing">
        <Container className="web-pricingWrapper">
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="#000"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
         
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
              style={{height: "100% !important"}}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth href={tier.href} variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </Container>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
      </div>
  );
}

export default function Home() {
  return <PricingContent />;
}