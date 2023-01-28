import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function Services() {

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const types = [
    {
      id: 1,
      name: 'Type 1',
      description: 'This is a sample product',
      image: '/temp_gate.jpg',
      alt:'This is alt description',
    },
    {
      id: 2,
      name: 'Type 2',
      description: 'This is another sample product',
      image: '/temp_gate.jpg',
      alt:'This is alt description',
    },
    {
      id: 3,
      name: 'Type 3',
      description: 'This is yet another sample product',
      image: '/temp_gate.jpg',
      alt:'This is alt description',
    }
  ];
  const colors = [
    {
      id: 1,
      name: 'Color 1',
      description: 'This is a sample product',
      image: '/temp_gate.jpg',
      alt:'This is alt description',
    },
    {
      id: 2,
      name: 'Color 2',
      description: 'This is another sample product',
      image: '/temp_gate.jpg',
      alt:'This is alt description',
    },
    {
      id: 3,
      name: 'Color 3',
      description: 'This is yet another sample product',
      image: '/temp_gate.jpg',
      alt:'This is alt description',
    }
  ];
  const styles = [
    {
      id: 1,
      name: 'Style 1',
      description: 'This is a sample product',
      image: '/temp_gate.jpg',
      alt:'This is alt description',
    },
    {
      id: 2,
      name: 'Style 2',
      description: 'This is another sample product',
      image: '/temp_gate.jpg',
      alt:'This is alt description',
    },
    {
      id: 3,
      name: 'Style 3',
      description: 'This is yet another sample product',
      image: '/temp_gate.jpg',
      alt:'This is alt description',
    }
  ];
  
  return (
  <main>
    <div>
      <div className="servicesWrapper">
        <h1>Services</h1>
      </div>
      <div className='products'>
        <div className='productsOffer'>
            <img src="/offer.svg" alt="" />
          <div>
            <h2>What we can offer?</h2>
            <p>Choose your dream gate from variety of types, styles and colours!</p>
          </div>
        </div>
        <div>
          <h2>Types:</h2>
          <div className=''>
            <List>
              {types.map((types) => (
                <ListItem key={types.id}>
                <img src={types.image} alt={types.alt} />
                <ListItemText primary={types.name} secondary={types.description} />
                </ListItem>
              ))}
            </List>
           </div>
        </div>
        <div>
          <h2>Colours:</h2>
          <div className='reversed'>
            <List>
              {colors.map((color) => (
                <ListItem key={color.id}>
                  <img src={color.image} alt={color.alt} />
                  <ListItemText primary={color.name} secondary={color.description} />
                </ListItem>
              ))}
            </List>
           </div>
        </div>
        <div>
          <h2>Styles:</h2>
          <div className=''>
            <List>
              {styles.map((style) => (
                <ListItem key={style.id}>
                  <img src={style.image} alt={style.alt} />
                  <ListItemText primary={style.name} secondary={style.description} />
                </ListItem>
              ))}
            </List>
           </div>
        </div>
      </div>
      <div className="servicesAccordion">
        <div className='accordion'>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Strong Materials</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>Usefull Accesories</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, ratione!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography>Instant Fixes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, animi.
            </Typography>
          </AccordionDetails>
        </Accordion>      
        </div>
        <div className='customDesigns'>
          <h2>We accept custom designs!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto inventore quae corporis suscipit fugiat laborum?</p>
          <img src="/example_blueprint.jpeg" alt="" />
        </div>
        
      </div>
    </div>    
    <div className='FAQ'>
     <h2>FAQ</h2>
     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Question #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Question #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Question #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  </main>
    
  );
}