import { Fragment } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import MultiRangeSlider from './MultiRangeSlider';
import Form from 'react-bootstrap/Form';
import Colours from '../utils/colour';
import Medium from '../utils/medium';

function SideBar() {
  const handleRange = (min: number, max: number) => {
    console.log(min, max);
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
          <Accordion.Body className='color-filter custom-scroll'>
            <Form>
              {Colours.map((data: any, index:number) => {
                const textColorStyle = {
                  color: data.color // Use the data.color value here
                };
                return (
                  <div className="d-flex justify-content-between mb-3" key={index}>
                    <Form.Check type="checkbox" label={data.color} />
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="color-icon-bg">◯</span>
                      <span
                        style={textColorStyle}
                        className="color-icon-fg"
                      >
                        ⬤
                      </span>
                    </div>
                  </div>
                );
              })}
            </Form>
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="2">
          <Accordion.Header>MEDIUM</Accordion.Header>
          <Accordion.Body className='medium-filter custom-scroll'>
            <Form>
              {Medium.map((data: any, index:number) => {
                return (
                  <div className="mb-3" key={index}>
                    <Form.Check type="checkbox" label={data.medium} />
                  </div>
                );
              })}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Fragment>
  );
}

export default SideBar;
