import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Edit() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  console.log(id);

  const mode = searchParams.get('mode');
  console.log(mode);

  return (
    <div>
      Edit
      <button onClick={() => setSearchParams({ who: 'sak' })}>Query String 바꾸기</button>
      <button onClick={() => navigate('/home')}>Home으로 가기</button>
    </div>
  );
}

export default Edit;
