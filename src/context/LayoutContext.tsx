import React, {FunctionComponent, useCallback, useContext, useEffect, useMemo, useReducer} from 'react';
import {AnyAction, Reducer} from 'redux';
import {action} from 'typesafe-actions';

export enum LayoutContextReducerTypes {
    UPDATE_DATA = 'UPDATE_DATA',
    RESET_DATA = 'RESET_DATA'
}

export interface LayoutStateProps {
    height: { 
        appHeader: number| string
        page: number|string
        pageHeader: number|string
        pageContent: number|string
    };
}


const initialState = {
    height: {
        appHeader: 48,
        page: `calc(100vh - 48px)`,
        pageHeader: 40,
        pageContent: `calc(100vh - 88px)`
    }
}
const reducer: Reducer<LayoutStateProps> = (
    state: LayoutStateProps = initialState,
    anyAction: AnyAction
) => {
    switch (anyAction.type) {
        case LayoutContextReducerTypes.UPDATE_DATA:
            return {...state, ...anyAction.payload};
        case LayoutContextReducerTypes.RESET_DATA:
            return {};
        default:
            return state;
    }
};

type OwnProps = unknown

type Props = OwnProps;

interface LayoutContextProps {
    layoutProperties: LayoutStateProps;
    setLayoutProperties: (layoutProperties: LayoutStateProps) => void;
}

const LayoutContext = React.createContext<LayoutContextProps>({
    layoutProperties: initialState,
    setLayoutProperties: () => {}
});

export const LayoutProvider: FunctionComponent<Props> = (props) => {
    const [layoutState, layoutDispatch] = useReducer(
        reducer,
        initialState
    );

    const updateState = useCallback(
        (newFeatureHashMap: Partial<LayoutStateProps>) => {
            layoutDispatch(action(LayoutContextReducerTypes.UPDATE_DATA, newFeatureHashMap));
        },
        [layoutDispatch]
    );

    const contextValue = useMemo((): LayoutContextProps => {
        return {
            layoutProperties: layoutState,
            setLayoutProperties: updateState
        };
    }, [layoutState, updateState]);


    useEffect(() => {

        const appHeader = layoutState.height.appHeader;
        const pageHeader = layoutState.height.pageHeader;



        const newPageContentHeight = `calc(100vh - ${parseInt(appHeader as string) + parseInt(pageHeader as string)}px)`

        updateState({
            ...layoutState,
            height: {
                ...layoutState.height,
                pageContent: newPageContentHeight
            }
        })


    }, [layoutState.height.pageHeader, layoutState.height.appHeader])

    return <LayoutContext.Provider value={contextValue}>{props.children}</LayoutContext.Provider>;
};


const useLayoutContext = () => {
    return useContext(LayoutContext);
};

export function useLayoutWrapper() {
    const context = useLayoutContext();
    if (context === undefined) {
        throw new Error('useLayoutWrapper must be used within a FeaturesProvider');
    }

    const {layoutProperties, setLayoutProperties} = context;
    
    const updatePageHeaderHeight = (newHeight: string| number) => {
        setLayoutProperties({
            ...layoutProperties,
            height: {
                ...layoutProperties.height,
                pageHeader: newHeight
            }
        })
    };
    


    return {
        ...layoutProperties,
        updatePageHeaderHeight
    };
}