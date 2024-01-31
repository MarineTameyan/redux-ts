import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput } from '../../store/reducers';
import { RootState } from '../../store';
import PageView from '../pageView';
import "./style.css"

function Actions() {
  const inputState = useSelector((state: RootState) => state.input);
  const dispatch = useDispatch();
  const [showPageView, setShowPageView] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    const parsedValue = type === 'range' ? Number(value) : value;
    dispatch(updateInput({ [name]: parsedValue }));
  };

  const handleClick = () => {
    setShowPageView(true);
  };

  return (
    <div>
      <div className='input-box'>
        <input type="text" name="title" value={inputState.title} onChange={handleChange} />
        <input type="text" name="description" value={inputState.description} onChange={handleChange} />
        <input type="color" name="titleColor" value={inputState.titleColor} onChange={handleChange} />
        <input type="color" name="descriptionColor" value={inputState.descriptionColor} onChange={handleChange} />
        <input type="color" name="mainBgColor" value={inputState.mainBgColor} onChange={handleChange} />
        <input type="range" name="titleBorderRadius" value={inputState.titleBorderRadius} onChange={handleChange} />
        <input type="range" name="fontSize" value={inputState.fontSize} onChange={handleChange} />
        <button onClick={handleClick}>Click</button>
      </div>
      {showPageView && <PageView />}
    </div>
  );
}

export default Actions
