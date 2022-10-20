export const SAVE_INPUT_VALUE='SAVE_INPUT_VALUE'
export const ERROR_INPUT_VALUE='ERROR_INPUT_VALUE'


interface VALUES {
  name: string;
  age: string;
}
interface ERRORS {
  name: string;
  age: string;
}

interface PAGE {
  previousPage: number;
  currentPage: number;
  nextPage: number;
}
export const saveInputValue = (values:VALUES) => ({
    type : SAVE_INPUT_VALUE,
    values
})

export const errorInputValues = (errors:ERRORS) => ({
    type : ERROR_INPUT_VALUE,
    errors
})

export const NEXT_PAGE = 'NEXT_PAGE'
const goToNextPage = (page:PAGE) => ({
    type : NEXT_PAGE,
    page: {
      previousPage:page.currentPage,
      currentPage: page.nextPage,
      nextPage: page.nextPage + 1
    }
})
    export function nextPage(type:string) {
      const action = (dispatch:any, getState:any) => {
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