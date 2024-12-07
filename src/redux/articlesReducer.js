const initState={
    points: 0,  
    articlesId: [],
    articlesIdLevel: [],
  };
  
export const articlesReducer = (state=initState,action)  => {
    switch (action.type) {
  
      case 'study_the_article_level1': {
        let newState={...state,
            points: state.points+1,
        };
        state.articlesId.push(action.id)
        state.articlesIdLevel.push(action.idLevel)
        // console.log(initState)
        return newState;
      }

      case 'study_the_article_level2': {
        let newState={...state,
            points: state.points+3,
        };
        state.articlesId.push(action.id)
        state.articlesIdLevel.push(action.idLevel)
        return newState;
      }

      case 'study_the_article_level3': {
        let newState={...state,
            points: state.points+5,
        };
        state.articlesId.push(action.id)
        state.articlesIdLevel.push(action.idLevel)
        return newState;
      }
  
      default:
        return state;
    }
  }