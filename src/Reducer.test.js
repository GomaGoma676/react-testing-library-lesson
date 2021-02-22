import reducer, {
  increment,
  incrementByAmount,
} from "../src/features/customCounter/customCounterSlice";

describe("Reducer of ReduxToolKit", () => {
  describe("increment action", () => {
    let initialState = {
      mode: 0,
      value: 1,
    };
    it("Should increment by 1 with mode 0", () => {
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(2);
    });
    it("Should increment by 100 with mode 1", () => {
      initialState = {
        mode: 1,
        value: 1,
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(101);
    });
    it("Should increment by 10000 with mode 2", () => {
      initialState = {
        mode: 2,
        value: 1,
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(10001);
    });
  });
  describe("incrementByAmout action", () => {
    let initialState = {
      mode: 0,
      value: 1,
    };
    it("Should increment by payload value with mode 0", () => {
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(4);
    });
    it("Should increment by 100 * payload value with mode 1", () => {
      initialState = {
        mode: 1,
        value: 1,
      };
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(301);
    });
    it("Should increment by 10000 * payload value with mode 2", () => {
      initialState = {
        mode: 2,
        value: 1,
      };
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(30001);
    });
  });
});
