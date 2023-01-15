import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

export const INCREASE = "counter/increase";
export const DECREASE = "counter/decrease";

//초기값 개념이 없기에, 파라미터에 초기값 설정
export function countReducer(state = 0, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

/* 
  액션 생성 => 액션을 실행하면 객체가 반환되고, type과 payload를 담은 객체 생성
  => createReducer의 case에 전달되고 payload에 필요한 값을 담아서 상태 업데이트 함

*/
export const increasement = createAction(INCREASE + "ment");
export const decreasement = createAction(DECREASE + "ment");

//리듀서 생성, 첫번째 초기값, action명령
export const countReducer02 = createReducer({ value: 0 }, (builder) => {
  builder
    .addCase(increasement, (state, action) => {
      state.value += action.payload;
    })
    .addCase(decreasement, (state, action) => {
      state.value -= action.payload;
    });
});

export const countReducer01 = createReducer({ value: 0 }, (builder) => {
  builder
    .addCase(increasement, (state, action) => {
      state.value++;
    })
    .addCase(decreasement, (state, action) => {
      state.value--;
    });
});

//action과 reduce를 한번에 함
const countSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incre(state, action) {
      return state + action.payload.amount;
    },
    decre(state, action) {
      return state - action.payload.amount;
    },
  },
});

//console.log(countSlice.actions);
export const { incre, decre } = countSlice.actions;
export default countSlice.reducer;
