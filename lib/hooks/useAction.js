"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActions = void 0;
const redux_1 = require("redux");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
function useActions(actions) {
    const dispatch = react_redux_1.useDispatch();
    return react_1.useMemo(() => {
        return redux_1.bindActionCreators(actions, dispatch);
    }, [actions, dispatch]);
}
exports.useActions = useActions;
