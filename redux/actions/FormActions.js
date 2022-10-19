export const SAVE_INPUT_VALUE='SAVE_INPUT_VALUE'
export const ERROR_INPUT_VALUE='ERROR_INPUT_VALUE'


export const saveInputValue = (values) => ({
    type : SAVE_INPUT_VALUE,
    values
})

export const errorInputValues = (errors) => ({
    type : ERROR_INPUT_VALUE,
    errors
})

export const NEXT_PAGE = 'NEXT_PAGE'
const goToNextPage = (page) => ({
    type : NEXT_PAGE,
    page: {
      previousPage:page.currentPage,
      currentPage: page.nextPage,
      nextPage: page.nextPage + 1
    }
})
    export function nextPage(type) {
      const action = (dispatch, getState) => {
        const currentPage = getState().form.page
        if (type === 'next') {
          dispatch(goToNextPage(currentPage))
        }
      }
    action.meta = {
      debounce: {
        key: 'DEBOUNCE_NEXT_PAGE',
        time: 300
      }
    }
    return action
  }