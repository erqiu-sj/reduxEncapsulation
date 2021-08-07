<!--
 * @Author: 邱狮杰
 * @Date: 2021-08-06 23:59:14
 * @LastEditTime: 2021-08-07 00:03:29
 * @FilePath: /reduxEncapsulation/docs.md
 * @Description: docs
-->

## defaultAction

```typescript
defaultAction<string, { type: string; do: string }>("Add", (action) => {
  return (params) => {
    console.log(params); // what?
    return { type: action, do: params };
  };
})("what?"); // { type: 'Add' , do: 'what?' }
```

## CreateReducer

```typescript
const reducer = new CreateReducer(1)
  .addAction("add", (state) => state + 1)
  .finish();
const store = craeteStore(combineReducers(reducer));
store.dispatch("add");
store.getState(); // { reducer : 2 }
```
