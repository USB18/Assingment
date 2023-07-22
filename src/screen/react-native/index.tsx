import React, { useEffect } from "react"
import { SafeAreaView, FlatList } from "react-native"
import { connect, useDispatch } from "react-redux"
import { apiListCallAction } from "../../action"
import { apiActionType } from "../../action/type"
import ListItem from "../../components/reusable-listItem"
import Loader from "../../components/loader"

interface ReactNativeScreenProps {
    appReducer: {
        reactNativeSccess: [];
        isLoading: boolean
    };
    navigation: any;
}

const ReactNativeScreen = (props: ReactNativeScreenProps) => {
    const { appReducer: { reactNativeSccess, isLoading }, navigation } = props

    const dispatch = useDispatch()
    const params = {
        sort: "hot",
        tagged: "react-native",
        site: "stackoverflow"
    }

    useEffect(() => {
        apiCall()
    }, [])

    const apiCall = () => {
        dispatch(apiListCallAction(
            (res: any) => handleResponse(res),
            (err: any) => handleError(err),
            apiActionType.REACT_NATIVE_SUCCESS,
            params
        ))
    }

    const handleResponse = (res: any) => {
        console.log("response---->", res)
    }

    const handleError = (err: any) => {
        console.log("error------>", err)
    }

    const renderListItem = ({ item, index }: any) => {
        return (
            <ListItem
                item={item}
                index={index}
                onPress={handleListItemPress} />
        )
    };

    const handleListItemPress = (item: any) => {
        navigation.navigate("StackOverflowScreen", { url: item.link });
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={reactNativeSccess}
                renderItem={renderListItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

const mapStateToProps = (state: any) => {
    return {
        appReducer: state.appReducer,
    };
};

export default connect(mapStateToProps)(ReactNativeScreen);