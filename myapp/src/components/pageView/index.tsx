import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import { RootState } from '../../store';

function PageView() {
  const inputState = useSelector((state: RootState) => state.input);

  return (
    <div style={{ background: inputState.mainBgColor, borderRadius: inputState.titleBorderRadius }} className='box'>
      <div className='title-box'>
        <h1 style={{ color: inputState.titleColor, fontSize: inputState.fontSize }}>
          {inputState.title}
        </h1>
        <p style={{ color: inputState.descriptionColor, fontSize: inputState.fontSize }}>
          {inputState.description}
        </p>
      </div>
    </div>
  );
}

export default PageView;

