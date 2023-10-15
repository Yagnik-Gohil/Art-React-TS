import { Fragment, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import MultiRangeSlider from './MultiRangeSlider';
import Form from 'react-bootstrap/Form';
import Colours from '../utils/colour';
import Medium from '../utils/medium';
import DisplaySpots from '../utils/displaySpots';
import { Button } from 'react-bootstrap';

function SideBar() {
  const [sortBy, setSortBy] = useState('popular-items');

  const handleRange = ({ min, max }: { min: number; max: number }) => {
    console.log(min, max);
  };

  const handleSort = (e: any) => {
    setSortBy(e.target.value);
  };
  return (
    <Fragment>
      <h4 className="fw-bold mt-2">Filters</h4>
      <Accordion defaultActiveKey={['0', '1']} className="custom-scroll">
        <Accordion.Item eventKey="0">
          <Accordion.Header>SORT BY</Accordion.Header>
          <Accordion.Body className="form-filter custom-scroll">
            <Form>
              <div className="mb-3">
                <Form.Check
                  type="radio"
                  value="popular-items"
                  label="Popular items"
                  name="sort-by"
                  onChange={handleSort}
                  checked={sortBy === 'popular-items'}
                />
              </div>
              <div className="mb-3">
                <Form.Check
                  type="radio"
                  value="price-low-to-high"
                  label="Price low to high"
                  name="sort-by"
                  onChange={handleSort}
                  checked={sortBy === 'price-low-to-high'}
                />
              </div>
              <div className="mb-3">
                <Form.Check
                  type="radio"
                  value="price-high-to-low"
                  label="Price high to low"
                  name="sort-by"
                  onChange={handleSort}
                  checked={sortBy === 'price-high-to-low'}
                />
              </div>
              <div className="mb-3">
                <Form.Check
                  type="radio"
                  value="date-old-to-new"
                  label="Date old to new"
                  name="sort-by"
                  onChange={handleSort}
                  checked={sortBy === 'date-old-to-new'}
                />
              </div>
              <div className="mb-3">
                <Form.Check
                  type="radio"
                  value="date-new-to-old"
                  label="Date new to old"
                  name="sort-by"
                  onChange={handleSort}
                  checked={sortBy === 'date-new-to-old'}
                />
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>PRICE</Accordion.Header>
          <Accordion.Body>
            <MultiRangeSlider min={1} max={50000} onChange={handleRange} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>COLOUR</Accordion.Header>
          <Accordion.Body className="color-filter custom-scroll">
            <Form>
              {Colours.map((data: any, index: number) => {
                const textColorStyle = {
                  color: data.color, // Use the data.color value here
                };
                return (
                  <div
                    className="d-flex justify-content-between mb-3"
                    key={index}
                  >
                    <Form.Check type="checkbox" label={data.color} />
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="color-icon-bg">◯</span>
                      <span style={textColorStyle} className="color-icon-fg">
                        ⬤
                      </span>
                    </div>
                  </div>
                );
              })}
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>MEDIUM</Accordion.Header>
          <Accordion.Body className="form-filter custom-scroll">
            <Form>
              {Medium.map((data: any, index: number) => {
                return (
                  <div className="mb-3" key={index}>
                    <Form.Check type="checkbox" label={data.medium} />
                  </div>
                );
              })}
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>DISPLAY SPOTS</Accordion.Header>
          <Accordion.Body className="form-filter custom-scroll">
            <Form>
              {DisplaySpots.map((data: any, index: number) => {
                return (
                  <div className="mb-3" key={index}>
                    <Form.Check type="checkbox" label={data.place} />
                  </div>
                );
              })}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="row mt-4">
        <div className='col'>
        <Button className='filter-button' variant="primary">Apply</Button>
        </div>
        <div className='col'>
        <Button className='filter-button' variant="secondary">Reset</Button>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;
