"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConnect = void 0;
const redux_1 = require("redux");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
function useConnect(selector, actions) {
    const dispatch = react_redux_1.useDispatch();
    const data = react_redux_1.useSelector(selector, react_redux_1.shallowEqual);
    if (!actions) {
        return [data, dispatch];
    }
    return [
        data,
        react_1.useMemo(() => {
            return redux_1.bindActionCreators(actions, dispatch);
        }, [actions, dispatch]),
    ];
}
exports.useConnect = useConnect;
