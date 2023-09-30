import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
  useRef,
  Fragment,
} from 'react';
import classnames from 'classnames';
import Form from 'react-bootstrap/Form';

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: Function;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  onChange,
}) => {
  const [minVal, setMinVal] = useState(1000);
  const [maxVal, setMaxVal] = useState(10000);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const handleMin = (event: any) => {
    // const value = Math.max(Math.min(+event.target.value, maxVal - 1), min);
    if(event.target.value < maxVal) {
      setMinVal(event.target.value);
    }
    // event.target.value = value.toString();
  };
  const handleMax = (event: any) => {
    // const value = Math.min(Math.max(+event.target.value, minVal + 1), max);
    if(event.target.value <= max) {
      setMaxVal(event.target.value);
    }
    // event.target.value = value.toString();
  };

  const handleFocusLeft = (event: any) => {
    if (event.target.name === 'min') {
      if (+minVal > +maxVal) {
        setMinVal(Math.max(+maxVal - 100, min));
      }
      if (+minVal < +min) {
        setMinVal(min);
      }
    } else {
      if (+minVal > +maxVal) {
        console.log('first')
        setMaxVal(Math.min(+minVal + 100, max));
      }
      if (+maxVal > +max) {
        setMaxVal(max);
      }
    }
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <Form.Control
          size="sm"
          type="number"
          placeholder="Min"
          className="mx-1"
          value={minVal}
          name="min"
          onChange={handleMin}
          onBlur={handleFocusLeft}
        />
        <Form.Control
          size="sm"
          type="number"
          placeholder="Max"
          className="mx-1"
          value={maxVal}
          name="max"
          onChange={handleMax}
          onBlur={handleFocusLeft}
        />
      </div>
      <div className="container-slider">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
          className={classnames('thumb thumb--zindex-3', {
            'thumb--zindex-5': minVal > max - 100,
          })}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="thumb thumb--zindex-4"
        />

        <div className="slider">
          <div className="slider__track"></div>
          <div ref={range} className="slider__range"></div>
          <div className="slider__left-value">{minVal}</div>
          <div className="slider__right-value">{maxVal}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default MultiRangeSlider;
