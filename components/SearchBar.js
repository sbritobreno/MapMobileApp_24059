import React from "react";
import SearchBar from 'react-native-material-design-searchbar';
import { View } from "react-native";

function SearchBarComp({ changeState }) {
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={{ marginLeft: '10%', width: '80%' }}>
            <SearchBar
                onSearchChange={onChangeSearch}
                height={50}
                placeholder={'Search...'}
                autoCorrect={false}
                padding={5}
                returnKeyType={'search'}
                inputStyle={{ borderRadius: 50, backgroundColor: 'white' }} />
        </View>
    )
}

export default SearchBarComp;