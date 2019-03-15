import React from 'react';


//함수형 컴포넌트 걍 div만 넘겨줄수 있도록
const CalendarDay = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

//변수 명 var -> let(재할당 가능) , const (재할당 불가능)

// const CalendarDay = function(ddd) {
  // ddd.var 원래는
// }

// CalendarDay( {var: 1} )

export default CalendarDay;
