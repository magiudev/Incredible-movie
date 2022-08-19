import React, { useState } from 'react';
import InputDate from '../atoms/inputDate';
import InputNumber from '../atoms/inputNumber';
import InputRadio from '../atoms/inputRadio';
import InputSelect from '../atoms/inputSelect';
import InputText from '../atoms/inputText';
import Label from '../atoms/label';
import Text from '../atoms/text';
import TextSm from '../atoms/textSm';
import InputGroup from '../molecules/inputGroup';

const Filter = () => {

  const [rating, setRating] = useState<"exact" | "interval">("exact");
  const [year, setYear] = useState<"exact" | "interval">("exact");

  return (
    <div className='flex flex-col justify-center items-center gap-2 border m-1 rounded-md p-2 md:flex-row md:items-start md:gap-0'>
      {/* Search by title */}
      <InputGroup 
        id='movie-title'
        labelContent={<Text>Title</Text>}
        body={<InputText placeHolder="Movie Title"/>}
      />

      {/* Filter by category */}
      <InputGroup 
        id="movie-category"
        labelContent={<Text>Category</Text>}
        body={<InputSelect />}
      />

      {/* Filter by rating */}
      <InputGroup 
        id="rating"
        labelContent={<Text>Rating</Text>}
        body={
          <>
            <InputGroup
              id="rating-exact" 
              labelContent={
                <>
                  <InputRadio 
                    name='rating' 
                    value="exact" 
                    id='rating-exact' 
                    setChange={setRating}
                    checked={rating === "exact"}
                  />
                  <Label id='rating-exact'><TextSm>Exact</TextSm></Label>
                </>
              }
              body={ rating === "exact" &&
                <InputNumber placeHolder='' />
              }
            />

            <InputGroup 
              id='rating-interval'
              labelContent={
                <>
                  <InputRadio 
                    name='rating' 
                    value="interval" 
                    id='rating-interval'
                    setChange={setRating}
                    checked={rating === "interval"}
                  />
                  <Label id='rating-interval'><TextSm>Interval</TextSm></Label>
                </>
              }
              body={ rating === "interval" &&
                <>
                  <InputNumber placeHolder='From' />
                  <InputNumber placeHolder='To' />
                </>
              }
            />
          </>
        }
      />


      {/* Filter by year */}
      <InputGroup 
        id="year"
        labelContent={<Text>Year</Text>}
        body={
          <>
            <InputGroup
              id="year-exact" 
              labelContent={
                <>
                  <InputRadio 
                    name='year' 
                    value="exact" 
                    id='year-exact' 
                    setChange={setYear}
                    checked={year === "exact"}
                  />
                  <Label id='year-exact'><TextSm>Exact</TextSm></Label>
                </>
              }
              body={year === "exact" && <InputDate />}
            />

            <InputGroup 
              id='year-interval'
              labelContent={
                <>
                  <InputRadio 
                    name='year' 
                    value="interval" 
                    id='year-interval' 
                    setChange={setYear}
                    checked={year === "interval"}
                  />
                  <Label id='year-interval'><TextSm>Interval</TextSm></Label>
                </>
              }
              body={ year === "interval" &&
                <>
                  <InputGroup 
                    id='from-date'
                    labelContent={<TextSm>From</TextSm>}
                    body={<InputDate  />}
                    col={false}
                  />
                  <InputGroup 
                    id='to-date'
                    labelContent={<TextSm>To</TextSm>}
                    body={<InputDate  />}
                    col={false}
                  />
                </>
              }
            />
          </>
        }
      />
    </div>
  );
};

export default Filter;