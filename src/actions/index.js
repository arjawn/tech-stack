export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};

// object with a type property is an action, the action is wrapped by a function = an action creator

// if you want to export many things don't use the default keyword, just export const