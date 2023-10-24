import { Fragment, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import MultiRangeSlider from './MultiRangeSlider';
import Form from 'react-bootstrap/Form';
import Colours from '../utils/colour';
import Medium from '../utils/medium';
import DisplaySpots from '../utils/displaySpots';
import { Button } from 'react-bootstrap';

function ArtistSideBar() {
  const [sortBy, setSortBy] = useState('popular-items');

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
      </Accordion>
      <div className="row mt-4">
        <div className="col">
          <Button className="min-w-100" variant="primary">
            Apply
          </Button>
        </div>
        <div className="col">
          <Button className="min-w-100" variant="secondary">
            Reset
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export default ArtistSideBar;
