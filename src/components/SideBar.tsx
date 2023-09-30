import { Fragment } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import MultiRangeSlider from './MultiRangeSlider';

function SideBar() {


  
  const handleRange = (min: number, max: number) => {
    console.log(min,max);
  };
  return (
    <Fragment>
      <h4 className="fw-bold mt-2">Filters</h4>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>PRICE</Accordion.Header>
          <Accordion.Body>
            <MultiRangeSlider
              min={1}
              max={50000}
              onChange={({ min, max }: { min: number; max: number }) =>
                handleRange(min, max)
              }
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>COLOUR</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Fragment>
  );
}

export default SideBar;
