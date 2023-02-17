import React, { useState } from 'react';
import Item from './Item';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './item.css';

const Carousel = (props) => {
  const [index, setIndex] = useState(0); 
  const items = props.items;
  const length = items.length;

  const isLeftSelected = props.isLeftSelected;

  const positionOfButtons = props.positionOfButtons;
  const itemsToShow = props.itemsToShow;
  const titleLine1 = props.titleLine1;
  const titleLine2 = props.titleLine2;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex((prevIndex) => newIndex < 0 ? prevIndex : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex((prevIndex) => newIndex+itemsToShow <= length ? newIndex : prevIndex);
  };

  return (
    <div className="carousel" style={{display:'flex', flexDirection:'row', marginLeft: '10vw', marginTop: '5vh'}}>
      {
        positionOfButtons === 'left' &&
        <div style={{display:'flex', flexDirection:'column', textAlign: 'left', width:'12vw', marginRight: '3vw'}} >
          {
            isLeftSelected &&
            <div style={{width:'25%'}}>
              <Divider/>
            </div>
          }
          <h2 style={{color:'white'}}>{titleLine1}</h2>
          <h2 style={{color:'white'}}>{titleLine2}</h2>
          <div style={{display:'flex', flexDirection:'row'}}>
            <ArrowCircleLeftOutlinedIcon sx={{color:index > 0 ? '#343c49':'#232836', fontSize:60}} onClick={handlePrevious}/>
            <ArrowCircleRightOutlinedIcon sx={{color:index+itemsToShow < length ? '#343c49':'#232836', fontSize:60}} onClick={handleNext}/>
          </div>
          {
            isLeftSelected && <Divider />
          }
          <div style={{display:'flex', flexDirection:'row'}}>
            <p style={{color:'#343c49', marginTop: 5}}>
              VIEW ALL
            </p>
            <ChevronRightIcon sx={{color:'#343c49'}} style={{marginTop:5}}/>
          </div>
        </div>
      } 
      <div style={{display:'flex', flexDirection:'row'}}>
        {items.map((item, currIndex) => {
          return(<>
              { currIndex >= index && currIndex < index + itemsToShow &&
                <Item key={index} name={item.name} genre={item.genre} year={item.year}/>
              }
            </>
          )})}
      </div>
      {
        positionOfButtons === 'right' &&
        <div style={{display:'flex', flexDirection:'column', textAlign: 'left'}}>
          {
            !isLeftSelected &&
            <div style={{width:'25%'}}>
              <Divider/>
            </div>
          }
          <h2 style={{color:'white'}}>{titleLine1}</h2>
          <h2 style={{color:'white'}}>{titleLine2}</h2>
          <div style={{display:'flex', flexDirection:'row'}}>
            <ArrowCircleLeftOutlinedIcon sx={{color:index > 0 ? '#343c49':'#232836', fontSize:60}} onClick={handlePrevious}/>
            <ArrowCircleRightOutlinedIcon sx={{color:index+itemsToShow < length ? '#343c49':'#232836', fontSize:60}} onClick={handleNext}/>
          </div>
          {
            !isLeftSelected && <Divider />
          }
          <div style={{display:'flex', flexDirection:'row'}}>
            <p style={{color:'#343c49', marginTop: 5}}>
              VIEW ALL
            </p>
            <ChevronRightIcon sx={{color:'#343c49'}} style={{marginTop:5}}/>
          </div>
        </div>
      } 
    </div>
  );
};

export default Carousel;